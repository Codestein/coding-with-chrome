/**
 * @fileoverview runner profile for Makeblock mBots.
 *
 *
 * @license Copyright 2016 Shenzhen Maker Works Co, Ltd. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author wangyu@makeblock.cc (Yu Wang)
 */
goog.provide('cwc.runner.profile.mbot.Command');



/**
 * @param {!cwc.protocol.mbot.Api} api
 * @constructor
 * @struct
 * @final
 */
cwc.runner.profile.mbot.Command = function(api) {
  /** @type {cwc.protocol.mbot.Api} */
  this.api = api;
};


/**
 * set motor speed of mbot
 * @param  {Object} data
 * @export
 */
cwc.runner.profile.mbot.Command.prototype.setMotor = function(data) {
  if (data['direction'] == 1) {
    this.api.setLeftMotor(data['speed']);
  } else {
    this.api.setRightMotor(data['speed']);
  }
};


/**
 * move mbot forward or backward
 * @param {Object} data data package
 */
cwc.runner.profile.mbot.Command.prototype.movePower = function(data) {
  this.api.setLeftMotorPower(-data['speed']);
  this.api.setRightMotorPower(data['speed']);
};


/**
 * turn mbot to a direction
 * @param {Object} data data package
 */
cwc.runner.profile.mbot.Command.prototype.rotatePower = function(data) {
  this.api.setLeftMotorPower(data['speed']);
  this.api.setRightMotorPower(data['speed']);
};


/**
 * wait for a certain second
 * @param {Object=} opt_data
 */
cwc.runner.profile.mbot.Command.prototype.wait = function(opt_data) {};


/**
 * stop the mbot completely
 * @param {Object=} opt_data
 * @export
 */
cwc.runner.profile.mbot.Command.prototype.stop = function(opt_data) {
  this.api.setLeftMotor(0);
  this.api.setRightMotor(0);
};


/**
 * @param {!Object} data
 * @export
 */
cwc.runner.profile.mbot.Command.prototype.setLEDColor = function(data) {
  this.api.setLEDColor(
    data['red'], data['green'], data['blue'], data['position']);
};


/**
 * @param {!Object} data
 * @export
 */
cwc.runner.profile.mbot.Command.prototype.playTone = function(data) {
  this.api.playTone(data['frequency'], data['duration']);
};


/**
 * return ultrasonic value from mbot
 * @return {number} sensor value
 * @export
 */
cwc.runner.profile.mbot.Command.prototype.ultrasonicValue = function() {
  return this.api.ultrasonicValue();
};


/**
 * return lightness sensor value from mbot
 * @return {number} sensor value
 * @export
 */
cwc.runner.profile.mbot.Command.prototype.lightSensorValue = function() {
  return this.api.lightSensorValue();
};
