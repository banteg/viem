import { expect, test } from 'vitest'

import * as utils from './index'

test('exports utils', () => {
  expect(utils).toMatchInlineSnapshot(`
    {
      "assertRequest": [Function],
      "boolToBytes": [Function],
      "boolToHex": [Function],
      "buildRequest": [Function],
      "bytesToBigint": [Function],
      "bytesToBool": [Function],
      "bytesToHex": [Function],
      "bytesToNumber": [Function],
      "bytesToString": [Function],
      "containsNodeError": [Function],
      "decodeAbiParameters": [Function],
      "decodeErrorResult": [Function],
      "decodeEventLog": [Function],
      "decodeFunctionData": [Function],
      "decodeFunctionResult": [Function],
      "defineBlock": [Function],
      "defineChain": [Function],
      "defineFormatter": [Function],
      "defineTransaction": [Function],
      "defineTransactionReceipt": [Function],
      "defineTransactionRequest": [Function],
      "encodeAbiParameters": [Function],
      "encodeDeployData": [Function],
      "encodeErrorResult": [Function],
      "encodeEventTopics": [Function],
      "encodeFunctionData": [Function],
      "encodeFunctionResult": [Function],
      "etherUnits": {
        "gwei": 9,
        "wei": 18,
      },
      "extract": [Function],
      "extractFunctionName": [Function],
      "extractFunctionParams": [Function],
      "extractFunctionParts": [Function],
      "extractFunctionType": [Function],
      "format": [Function],
      "formatAbiItem": [Function],
      "formatAbiItemWithArgs": [Function],
      "formatBlock": [Function],
      "formatEther": [Function],
      "formatGwei": [Function],
      "formatTransaction": [Function],
      "formatTransactionRequest": [Function],
      "formatUnit": [Function],
      "fromBytes": [Function],
      "fromHex": [Function],
      "fromRlp": [Function],
      "getAbiItem": [Function],
      "getAddress": [Function],
      "getCallError": [Function],
      "getContractAddress": [Function],
      "getContractError": [Function],
      "getCreate2Address": [Function],
      "getCreateAddress": [Function],
      "getEstimateGasError": [Function],
      "getEventSelector": [Function],
      "getFunctionSelector": [Function],
      "getNodeError": [Function],
      "getSocket": [Function],
      "getTransactionError": [Function],
      "gweiUnits": {
        "ether": -9,
        "wei": 9,
      },
      "hexToBigInt": [Function],
      "hexToBool": [Function],
      "hexToBytes": [Function],
      "hexToNumber": [Function],
      "hexToString": [Function],
      "isAddress": [Function],
      "isAddressEqual": [Function],
      "isBytes": [Function],
      "isHex": [Function],
      "keccak256": [Function],
      "numberToBytes": [Function],
      "numberToHex": [Function],
      "pad": [Function],
      "padBytes": [Function],
      "padHex": [Function],
      "parseEther": [Function],
      "parseGwei": [Function],
      "parseUnit": [Function],
      "rpc": {
        "http": [Function],
        "webSocket": [Function],
        "webSocketAsync": [Function],
      },
      "size": [Function],
      "slice": [Function],
      "sliceBytes": [Function],
      "sliceHex": [Function],
      "stringToBytes": [Function],
      "stringToHex": [Function],
      "stringify": [Function],
      "toBytes": [Function],
      "toHex": [Function],
      "toRlp": [Function],
      "transactionType": {
        "0x0": "legacy",
        "0x1": "eip2930",
        "0x2": "eip1559",
      },
      "trim": [Function],
      "weiUnits": {
        "ether": -18,
        "gwei": -9,
      },
    }
  `)
})
