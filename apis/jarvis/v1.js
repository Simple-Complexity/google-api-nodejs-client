/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* jshint maxlen: false */

'use strict';

var createAPIRequest = require('../../lib/apirequest');

/**
 * 
 *
 * @classdesc Jarvis API
 * @namespace jarvis
 * @version  v1
 * @variation v1
 * @this Jarvis
 * @param {object=} options Options for Jarvis
 */
function Jarvis(options) {

  var self = this;
  this._options = options || {};

  /**
   * jarvis.test
   *
   * @desc test login
   *
   * @alias jarvis.test
   * @memberOf! jarvis(v1)
   *
   * @param  {object=} params - Parameters for request
   * @param  {callback} callback - The callback that handles the response.
   * @return {object} Request object
   */
  this.test = function(params, callback) {
    var parameters = {
      options: {
        url: 'https://jarvis-127706.appspot.com/_ah/api/jarvis/v1/test',
        method: 'GET'
      },
      params: params,
      requiredParams: [],
      pathParams: [],
      context: self
    };

    return createAPIRequest(parameters, callback);
  };
}

/**
 * Exports Jarvis object
 * @type Jarvis
 */
module.exports = Jarvis;