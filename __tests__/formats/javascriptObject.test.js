/*
 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

var formats = require('../../lib/common/formats');
var vm = require('vm');

var file = {
  "destination": "__output/",
  "format": "javascript/object",
  "name": "foo"
};

var dictionary = {
  "properties": {
    "color": {
      "red": {"value": "#FF0000"}
    }
  }
};

var formatter = formats['javascript/object'].bind(file);

describe('formats', () => {
  describe('javascript/object', () => {

    it('should be valid JS syntax', done => {
      try {
        vm.runInNewContext(formatter(dictionary))
        return done();
      } catch (err) {
        return done(new Error(err));
      }
    });

  });
});
