// Synthesisable 4-Bit ALU Module
module alu_4bit (
    input  wire [3:0] a,
    input  wire [3:0] b,
    input  wire [2:0] opcode,
    output reg  [3:0] result,
    output reg        carry_out,
    output wire       zero_flag
);

    reg [4:0] temp_result;

    always @(*) begin
        carry_out = 1'b0;
        case (opcode)
            3'b000: begin // ADD
                temp_result = a + b;
                result = temp_result[3:0];
                carry_out = temp_result[4];
            end
            3'b001: begin // SUB
                temp_result = a - b;
                result = temp_result[3:0];
                carry_out = temp_result[4];
            end
            3'b010: result = a & b; // AND
            3'b011: result = a | b; // OR
            3'b100: result = a ^ b; // XOR
            3'b101: result = ~a;    // NOT
            3'b110: result = a << 1; // SHL
            3'b111: result = a >> 1; // SHR
            default: result = 4'b0000;
        endcase
    end

    assign zero_flag = (result == 4'b0000) ? 1'b1 : 1'b0;

endmodule
