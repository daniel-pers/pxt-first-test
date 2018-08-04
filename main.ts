namespace custom_copy {
    /**
     * Performs a digital read of the speficied pin P_
     * 
     * For pins not in the range 0-16, 18-20 return -1
     * 
     * @param n The pin number to read, eg 0 will read P0, eg: 0
     */
    //% block
    export function readDigitalPin(n: number): number {
        /* Plenty of ways for this to break. pins 17 & 18, for example!
         * The number 7 comes from 
         * https://github.com/Microsoft/pxt-microbit/blob/fa8dfd1dc328d0a349e25ff56ce384c58855a145/libs/core/enums.d.ts#L194
         */
        if (n < 17) {
            return pins.digitalReadPin(n + 7)
        } else if (n > 18 && n < 21) {
            return pins.digitalReadPin(n + 5)
        } else {
            return -1
        }

    }
}