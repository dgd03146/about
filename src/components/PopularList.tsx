import React from 'react'

import PopularItem from './PopularItem'
// eslint-disable-next-line import/no-named-as-default

import { Button } from '@/design/components/Button'
import { Flex } from '@/design/components/Flex/Flex'
import { List } from '@/design/components/List/List'

const popularPost = [
  { id: '1', firstName: 'John', lastName: 'Doe' },
  { id: '2', firstName: 'Jane', lastName: 'Doe' },
  { id: '3', firstName: 'Gildong', lastName: 'Hong' },
]

export type TPopularPost = (typeof popularPost)[0]

const PopularList = () => {
  return (
    <>
      <h2>여기서부터 리스트</h2>
      <List
        as="ul"
        items={popularPost}
        keyExtractor={({ id }: { id: string }) => id}
        render={PopularItem}
        rightControls={<Button text="Popular List 오른쪽 버튼" />}
        wrapperComponent={Flex}
      />
    </>
  )
}

export default PopularList
