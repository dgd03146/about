export type UseSelectOptionsParams<Option> = {
  options: readonly Option[]
  getLabel: (option: Option) => string
  keyExtractor: (option: Option) => string
}
export type UseSelectParams<Option> = {
  selectedOption?: Option
  options: readonly Option[]
  onChange: (option: Option) => void
}
