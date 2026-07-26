#include "uart_driver.h"

static ring_buffer_t rx_buffer = {{0}, 0, 0};

void uart_init(uint32_t sys_clk, uint32_t baud_rate) {
    (void)sys_clk;
    (void)baud_rate;
    rx_buffer.head = 0;
    rx_buffer.tail = 0;
}

bool uart_write_byte(uint8_t byte) {
    uint16_t next = (rx_buffer.head + 1) % RING_BUFFER_SIZE;
    if (next == rx_buffer.tail) {
        return false; // Buffer full
    }
    rx_buffer.buffer[rx_buffer.head] = byte;
    rx_buffer.head = next;
    return true;
}

bool uart_read_byte(uint8_t *byte) {
    if (rx_buffer.head == rx_buffer.tail) {
        return false; // Buffer empty
    }
    *byte = rx_buffer.buffer[rx_buffer.tail];
    rx_buffer.tail = (rx_buffer.tail + 1) % RING_BUFFER_SIZE;
    return true;
}

uint16_t uart_available(void) {
    return (rx_buffer.head - rx_buffer.tail + RING_BUFFER_SIZE) % RING_BUFFER_SIZE;
}
