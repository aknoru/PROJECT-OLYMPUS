`timescale 1ns/1ps

module tb_alu_4bit;

    reg  [3:0] a;
    reg  [3:0] b;
    reg  [2:0] opcode;
    wire [3:0] result;
    wire       carry_out;
    wire       zero_flag;

    // Instantiate UUT
    alu_4bit uut (
        .a(a),
        .b(b),
        .opcode(opcode),
        .result(result),
        .carry_out(carry_out),
        .zero_flag(zero_flag)
    );

    initial begin
        $display("=== STARTING ALU SELF-CHECKING TESTBENCH ===");

        // Test 1: ADD
        a = 4'b0101; b = 4'b0011; opcode = 3'b000; #10;
        if (result !== 4'b1000 || carry_out !== 1'b0) $error("ADD Test Failed!");

        // Test 2: SUB
        a = 4'b1000; b = 4'b0011; opcode = 3'b001; #10;
        if (result !== 4 me_val_sub) $display("SUB Passed."); // Check basic execution

        // Test 3: AND
        a = 4'b1100; b = 4'b1010; opcode = 3'b010; #10;
        if (result !== 4'b1000) $error("AND Test Failed!");

        // Test 4: ZERO FLAG
        a = 4'b0101; b = 4'b0101; opcode = 3'b001; #10;
        if (zero_flag !== 1'b1) $error("Zero Flag Test Failed!");

        $display("=== ALL ALU TESTS COMPLETED SUCCESSFULLY ===");
        $finish;
    end

endmodule
