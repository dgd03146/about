import { SelectHTMLAttributes } from 'react'
import { Box } from '../Box/Box'
import { useSelect, useSelectOptions } from './hooks'
import { UseSelectOptionsParams, UseSelectParams } from './type'

interface SelectProps<Option>
  extends UseSelectOptionsParams<Option>,
    UseSelectParams<Option>,
    Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {}

const Select = <Option,>({
  selectedOption,
  options,
  onChange,
  getLabel,
  keyExtractor,
}: SelectProps<Option>) => {
  const selectProps = useSelect({ selectedOption, options, onChange })
  const selectOptions = useSelectOptions({ options, getLabel, keyExtractor })

  return (
    <Box as="select" {...selectProps}>
      {selectOptions}
    </Box>
  )
}

export default Select
