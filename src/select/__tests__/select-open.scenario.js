/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import React from 'react';

import {StatefulSelect} from '../index.js';

export default function Scenario() {
  return (
    <div>
      <StatefulSelect
        startOpen
        options={[
          {id: 'a', label: 'hey!'},
          {id: 'b', label: 'are you listening?'},
          {id: 'c', label: 'look at me!'},
        ]}
      />
      <div style={{overflow: 'auto', marginTop: '200px', height: '100%'}}>
        <StatefulSelect
          startOpen
          options={[
            {id: 'a', label: 'hey!'},
            {id: 'b', label: 'are you listening?'},
            {id: 'c', label: 'look at me!'},
          ]}
        />
      </div>
    </div>
  );
}
