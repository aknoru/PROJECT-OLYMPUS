#ifndef UART_DRIVER_H
#define UART_DRIVER_H

#include <stdint.h>
#include <stdbool.h>

#define RING_BUFFER_SIZE 64

typedef struct {
    uint8_t buffer[RING_BUFFER_SIZE];
    volatile uint16_t head;
    volatile uint16_t tail;
} ring_buffer_t;

void uart_init(uint32_t sys_clk, uint32_t baud_rate);
bool uart_write_byte(uint8_t byte);
bool uart_read_byte(uint8_t *byte);
uint16_t uart_available(void);

#endif // UART_DRIVER_H
