import * as Localization from 'expo-localization'
import { I18n } from 'i18n-js'
import en from './en.json'
import ja from './ja.json'
import vi from './vi.json'

const i18n = new I18n({ en, ja, vi })

i18n.enableFallback = true
i18n.locale = Localization.locale || 'en'

export default i18n

type DefaultLocale = typeof en
export type TxKeyPath = RecursiveKeyOf<DefaultLocale>

// Convert object to path
type RecursiveKeyOf<TObj extends Record<string, any>> = {
  [TKey in keyof TObj & string]: TObj[TKey] extends Record<string, any>
    ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
    : `${TKey}`
}[keyof TObj & string]
