import { ChangeEvent, useCallback } from 'react'

import { UseSelectParams } from '../type'

export const useSelect = <Option>({
  selectedOption,
  options,
  onChange,
}: UseSelectParams<Option>) => {
  const onChangeCallback = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const newSelectedOption = options[event.currentTarget.selectedIndex]
      if (newSelectedOption !== undefined) {
        onChange(newSelectedOption)
      }
    },
    [options, onChange],
  )

  const value = selectedOption ? options.indexOf(selectedOption) : ''

  return {
    value,
    options,
    onChange: onChangeCallback,
  }
}
