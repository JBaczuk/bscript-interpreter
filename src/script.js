const Assembler = require('../../bscript-assembler')

class Script {
  constructor (serializedScript) {
    if (!Buffer.isBuffer(serializedScript)) {
      throw Error('serializedScript must be a buffer')
    }    
    this.serialized = serializedScript
  }

  get length () {
    return this.serialized.length
  }

  at (index) {
    return this.serialized[index]
  }

  slice (start, end) {
    return this.serialized.slice(start, end)
  }

  static opcodeIsValid (opcode) {
    if (!Assembler.opcodes.opcodeIsValid(opcode)) {
      return false
    }
    return true
  }

  static wordForOpcode (opcode) {
    return Assembler.opcodes.wordForOpcode(opcode)
  }

  static wordIsDisabled (opcode) {
    return Assembler.opcodes.wordIsDisabled(opcode)
  }

  static opcodeForWord (word) {
    return Assembler.opcodes.opcodeForWord(word)
  }
}

module.exports = Script
