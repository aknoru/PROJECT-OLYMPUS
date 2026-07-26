#include <iostream>
#include <vector>
#include <cstdint>
#include <iomanip>

class RISCVCore {
public:
    uint32_t regs[32] = {0};
    uint32_t pc = 0;
    std::vector<uint32_t> memory;

    RISCVCore(size_t mem_words) : memory(mem_words, 0) {}

    void step() {
        if (pc / 4 >= memory.size()) return;
        uint32_t instr = memory[pc / 4];
        
        uint32_t opcode = instr & 0x7F;
        uint32_t rd     = (instr >> 7) & 0x1F;
        uint32_t funct3 = (instr >> 12) & 0x7;
        uint32_t rs1    = (instr >> 15) & 0x1F;
        uint32_t rs2    = (instr >> 20) & 0x1F;
        uint32_t funct7 = (instr >> 25) & 0x7F;

        regs[0] = 0; // x0 hardwired to 0

        if (opcode == 0x33) { // R-type
            if (funct3 == 0x0 && funct7 == 0x00) { // ADD
                regs[rd] = regs[rs1] + regs[rs2];
            } else if (funct3 == 0x0 && funct7 == 0x20) { // SUB
                regs[rd] = regs[rs1] - regs[rs2];
            }
        } else if (opcode == 0x13) { // I-type (ADDI)
            int32_t imm = static_cast<int32_t>(instr) >> 20;
            regs[rd] = regs[rs1] + imm;
        }

        regs[0] = 0;
        pc += 4;
    }

    void dump_registers() {
        std::cout << "--- REGISTER DUMP ---" << std::endl;
        for (int i = 0; i < 32; ++i) {
            std::cout << "x" << std::dec << i << ": 0x" 
                      << std::hex << std::setw(8) << std::setfill('0') << regs[i] << "  ";
            if ((i + 1) % 4 == 0) std::cout << std::endl;
        }
    }
};

int main() {
    RISCVCore core(1024);
    // Program: addi x1, x0, 5; addi x2, x0, 10; add x3, x1, x2
    core.memory[0] = 0x00500093; // addi x1, x0, 5
    core.memory[1] = 0x00a00113; // addi x2, x0, 10
    core.memory[2] = 0x002081b3; // add x3, x1, x2

    core.step();
    core.step();
    core.step();

    core.dump_registers();
    return 0;
}
