import type { HDKey } from '@scure/bip32'
import type { Address, TypedData } from 'abitype'

import type { ToAuthMessageParameters } from '../experimental/eip3074/utils/toAuthMessage.js'
import type { Hash, Hex, SignableMessage } from '../types/misc.js'
import type {
  TransactionSerializable,
  TransactionSerialized,
} from '../types/transaction.js'
import type { TypedDataDefinition } from '../types/typedData.js'
import type { IsNarrowable, OneOf, RequiredBy } from '../types/utils.js'
import type { GetTransactionType } from '../utils/transaction/getTransactionType.js'
import type { SerializeTransactionFn } from '../utils/transaction/serializeTransaction.js'

export type Account<TAddress extends Address = Address> = OneOf<
  JsonRpcAccount<TAddress> | LocalAccount<string, TAddress>
>

export type AccountSource = Address | CustomSource
export type CustomSource = {
  address: Address
  experimental_signAuthMessage?:
    | ((parameters: ToAuthMessageParameters) => Promise<Hash>)
    | undefined
  signMessage: ({ message }: { message: SignableMessage }) => Promise<Hash>
  signTransaction: <
    serializer extends
      SerializeTransactionFn<TransactionSerializable> = SerializeTransactionFn<TransactionSerializable>,
    transaction extends Parameters<serializer>[0] = Parameters<serializer>[0],
  >(
    transaction: transaction,
    args?:
      | {
          serializer?: serializer | undefined
        }
      | undefined,
  ) => Promise<
    IsNarrowable<
      TransactionSerialized<GetTransactionType<transaction>>,
      Hash
    > extends true
      ? TransactionSerialized<GetTransactionType<transaction>>
      : Hash
  >
  signTypedData: <
    const typedData extends TypedData | Record<string, unknown>,
    primaryType extends keyof typedData | 'EIP712Domain' = keyof typedData,
  >(
    typedDataDefinition: TypedDataDefinition<typedData, primaryType>,
  ) => Promise<Hash>
}

export type JsonRpcAccount<TAddress extends Address = Address> = {
  address: TAddress
  type: 'json-rpc'
}

export type LocalAccount<
  TSource extends string = string,
  TAddress extends Address = Address,
> = CustomSource & {
  address: TAddress
  publicKey: Hex
  source: TSource
  type: 'local'
}

export type HDAccount = LocalAccount<'hd'> & {
  getHdKey(): HDKey
}

export type HDOptions =
  | {
      /** The account index to use in the path (`"m/44'/60'/${accountIndex}'/0/0"`). */
      accountIndex?: number | undefined
      /** The address index to use in the path (`"m/44'/60'/0'/0/${addressIndex}"`). */
      addressIndex?: number | undefined
      /** The change index to use in the path (`"m/44'/60'/0'/${changeIndex}/0"`). */
      changeIndex?: number | undefined
      path?: never | undefined
    }
  | {
      accountIndex?: never | undefined
      addressIndex?: never | undefined
      changeIndex?: never | undefined
      /** The HD path. */
      path: `m/44'/60'/${string}`
    }

export type PrivateKeyAccount = RequiredBy<
  LocalAccount<'privateKey'>,
  'experimental_signAuthMessage'
>
