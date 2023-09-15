'use client'

import React, { useState } from 'react'

function TestHook() {
  const [testBool, setTestBool] = useState(false)
  return (
    <div>
      <button type="button" onClick={() => setTestBool(!testBool)}>
        Change State, TEST HOOK
      </button>
      <p>Boolean State: {testBool ? 'true' : 'false'}</p>
    </div>
  )
}

export default TestHook
