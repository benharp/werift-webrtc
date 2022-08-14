[werift](../README.md) / [Exports](../modules.md) / RTCDataChannel

# Class: RTCDataChannel

## Hierarchy

- `EventTarget`

  ↳ **`RTCDataChannel`**

## Table of contents

### Constructors

- [constructor](RTCDataChannel.md#constructor)

### Properties

- [\_bufferedAmountLowThreshold](RTCDataChannel.md#_bufferedamountlowthreshold)
- [bufferedAmount](RTCDataChannel.md#bufferedamount)
- [bufferedAmountLow](RTCDataChannel.md#bufferedamountlow)
- [error](RTCDataChannel.md#error)
- [id](RTCDataChannel.md#id)
- [isCreatedByRemote](RTCDataChannel.md#iscreatedbyremote)
- [message](RTCDataChannel.md#message)
- [onclose](RTCDataChannel.md#onclose)
- [onclosing](RTCDataChannel.md#onclosing)
- [onerror](RTCDataChannel.md#onerror)
- [onmessage](RTCDataChannel.md#onmessage)
- [onopen](RTCDataChannel.md#onopen)
- [readyState](RTCDataChannel.md#readystate)
- [sendOpen](RTCDataChannel.md#sendopen)
- [stateChanged](RTCDataChannel.md#statechanged)
- [captureRejectionSymbol](RTCDataChannel.md#capturerejectionsymbol)
- [captureRejections](RTCDataChannel.md#capturerejections)
- [defaultMaxListeners](RTCDataChannel.md#defaultmaxlisteners)
- [errorMonitor](RTCDataChannel.md#errormonitor)

### Accessors

- [bufferedAmountLowThreshold](RTCDataChannel.md#bufferedamountlowthreshold)
- [label](RTCDataChannel.md#label)
- [maxPacketLifeTime](RTCDataChannel.md#maxpacketlifetime)
- [maxRetransmits](RTCDataChannel.md#maxretransmits)
- [negotiated](RTCDataChannel.md#negotiated)
- [ordered](RTCDataChannel.md#ordered)
- [protocol](RTCDataChannel.md#protocol)

### Methods

- [addBufferedAmount](RTCDataChannel.md#addbufferedamount)
- [addEventListener](RTCDataChannel.md#addeventlistener)
- [addListener](RTCDataChannel.md#addlistener)
- [close](RTCDataChannel.md#close)
- [emit](RTCDataChannel.md#emit)
- [eventNames](RTCDataChannel.md#eventnames)
- [getMaxListeners](RTCDataChannel.md#getmaxlisteners)
- [listenerCount](RTCDataChannel.md#listenercount)
- [listeners](RTCDataChannel.md#listeners)
- [off](RTCDataChannel.md#off)
- [on](RTCDataChannel.md#on)
- [once](RTCDataChannel.md#once)
- [prependListener](RTCDataChannel.md#prependlistener)
- [prependOnceListener](RTCDataChannel.md#prependoncelistener)
- [rawListeners](RTCDataChannel.md#rawlisteners)
- [removeAllListeners](RTCDataChannel.md#removealllisteners)
- [removeEventListener](RTCDataChannel.md#removeeventlistener)
- [removeListener](RTCDataChannel.md#removelistener)
- [send](RTCDataChannel.md#send)
- [setId](RTCDataChannel.md#setid)
- [setMaxListeners](RTCDataChannel.md#setmaxlisteners)
- [setReadyState](RTCDataChannel.md#setreadystate)
- [getEventListeners](RTCDataChannel.md#geteventlisteners)
- [listenerCount](RTCDataChannel.md#listenercount-1)
- [on](RTCDataChannel.md#on-1)
- [once](RTCDataChannel.md#once-1)
- [setMaxListeners](RTCDataChannel.md#setmaxlisteners-1)

## Constructors

### constructor

• **new RTCDataChannel**(`transport`, `parameters`, `sendOpen?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `transport` | [`RTCSctpTransport`](RTCSctpTransport.md) | `undefined` |
| `parameters` | [`RTCDataChannelParameters`](RTCDataChannelParameters.md) | `undefined` |
| `sendOpen` | `boolean` | `true` |

#### Overrides

EventTarget.constructor

#### Defined in

[packages/webrtc/src/dataChannel.ts:29](https://github.com/shinyoshiaki/werift-webrtc/blob/f609bd5a/packages/webrtc/src/dataChannel.ts#L29)

## Properties

### \_bufferedAmountLowThreshold

• `Private` **\_bufferedAmountLowThreshold**: `number` = `0`

#### Defined in

[packages/webrtc/src/dataChannel.ts:27](https://github.com/shinyoshiaki/werift-webrtc/blob/f609bd5a/packages/webrtc/src/dataChannel.ts#L27)

___

### bufferedAmount

• **bufferedAmount**: `number` = `0`

#### Defined in

[packages/webrtc/src/dataChannel.ts:26](https://github.com/shinyoshiaki/werift-webrtc/blob/f609bd5a/packages/webrtc/src/dataChannel.ts#L26)

___

### bufferedAmountLow

• `Readonly` **bufferedAmountLow**: `default`<`any`[]\>

#### Defined in

[packages/webrtc/src/dataChannel.ts:15](https://github.com/shinyoshiaki/werift-webrtc/blob/f609bd5a/packages/webrtc/src/dataChannel.ts#L15)

___

### error

• `Readonly` **error**: `default`<[`Error`]\>

#### Defined in

[packages/webrtc/src/dataChannel.ts:14](https://github.com/shinyoshiaki/werift-webrtc/blob/f609bd5a/packages/webrtc/src/dataChannel.ts#L14)

___

### id

• **id**: `number`

#### Defined in

[packages/webrtc/src/dataChannel.ts:23](https://github.com/shinyoshiaki/werift-webrtc/blob/f609bd5a/packages/webrtc/src/dataChannel.ts#L23)

___

### isCreatedByRemote

• **isCreatedByRemote**: `boolean` = `false`

#### Defined in

[packages/webrtc/src/dataChannel.ts:22](https://github.com/shinyoshiaki/werift-webrtc/blob/f609bd5a/packages/webrtc/src/dataChannel.ts#L22)

___

### message

• `Readonly` **message**: `default`<[`string` \| `Buffer`]\>

#### Defined in

[packages/webrtc/src/dataChannel.ts:12](https://github.com/shinyoshiaki/werift-webrtc/blob/f609bd5a/packages/webrtc/src/dataChannel.ts#L12)

___

### onclose

• `Optional` **onclose**: `Callback`

#### Defined in

[packages/webrtc/src/dataChannel.ts:17](https://github.com/shinyoshiaki/werift-webrtc/blob/f609bd5a/packages/webrtc/src/dataChannel.ts#L17)

___

### onclosing

• `Optional` **onclosing**: `Callback`

#### Defined in

[packages/webrtc/src/dataChannel.ts:18](https://github.com/shinyoshiaki/werift-webrtc/blob/f609bd5a/packages/webrtc/src/dataChannel.ts#L18)

___

### onerror

• `Optional` **onerror**: `CallbackWithValue`<[`RTCErrorEvent`](../interfaces/RTCErrorEvent.md)\>

#### Defined in

[packages/webrtc/src/dataChannel.ts:21](https://github.com/shinyoshiaki/werift-webrtc/blob/f609bd5a/packages/webrtc/src/dataChannel.ts#L21)

___

### onmessage

• `Optional` **onmessage**: `CallbackWithValue`<[`MessageEvent`](../interfaces/MessageEvent.md)\>

#### Defined in

[packages/webrtc/src/dataChannel.ts:19](https://github.com/shinyoshiaki/werift-webrtc/blob/f609bd5a/packages/webrtc/src/dataChannel.ts#L19)

___

### onopen

• `Optional` **onopen**: `Callback`

#### Defined in

[packages/webrtc/src/dataChannel.ts:16](https://github.com/shinyoshiaki/werift-webrtc/blob/f609bd5a/packages/webrtc/src/dataChannel.ts#L16)

___

### readyState

• **readyState**: [`DCState`](../modules.md#dcstate) = `"connecting"`

#### Defined in

[packages/webrtc/src/dataChannel.ts:24](https://github.com/shinyoshiaki/werift-webrtc/blob/f609bd5a/packages/webrtc/src/dataChannel.ts#L24)

___

### sendOpen

• `Readonly` **sendOpen**: `boolean` = `true`

#### Defined in

[packages/webrtc/src/dataChannel.ts:32](https://github.com/shinyoshiaki/werift-webrtc/blob/f609bd5a/packages/webrtc/src/dataChannel.ts#L32)

___

### stateChanged

• `Readonly` **stateChanged**: `default`<[[`DCState`](../modules.md#dcstate)]\>

#### Defined in

[packages/webrtc/src/dataChannel.ts:11](https://github.com/shinyoshiaki/werift-webrtc/blob/f609bd5a/packages/webrtc/src/dataChannel.ts#L11)

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](RTCDataChannel.md#capturerejectionsymbol)

#### Inherited from

EventTarget.captureRejectionSymbol

#### Defined in

node_modules/@types/node/events.d.ts:291

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

EventTarget.captureRejections

#### Defined in

node_modules/@types/node/events.d.ts:296

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

EventTarget.defaultMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:297

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](RTCDataChannel.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

EventTarget.errorMonitor

#### Defined in

node_modules/@types/node/events.d.ts:290

## Accessors

### bufferedAmountLowThreshold

• `get` **bufferedAmountLowThreshold**(): `number`

#### Returns

`number`

#### Defined in

[packages/webrtc/src/dataChannel.ts:75](https://github.com/shinyoshiaki/werift-webrtc/blob/f609bd5a/packages/webrtc/src/dataChannel.ts#L75)

• `set` **bufferedAmountLowThreshold**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/webrtc/src/dataChannel.ts:79](https://github.com/shinyoshiaki/werift-webrtc/blob/f609bd5a/packages/webrtc/src/dataChannel.ts#L79)

___

### label

• `get` **label**(): `string`

#### Returns

`string`

#### Defined in

[packages/webrtc/src/dataChannel.ts:63](https://github.com/shinyoshiaki/werift-webrtc/blob/f609bd5a/packages/webrtc/src/dataChannel.ts#L63)

___

### maxPacketLifeTime

• `get` **maxPacketLifeTime**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

[packages/webrtc/src/dataChannel.ts:59](https://github.com/shinyoshiaki/werift-webrtc/blob/f609bd5a/packages/webrtc/src/dataChannel.ts#L59)

___

### maxRetransmits

• `get` **maxRetransmits**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

[packages/webrtc/src/dataChannel.ts:55](https://github.com/shinyoshiaki/werift-webrtc/blob/f609bd5a/packages/webrtc/src/dataChannel.ts#L55)

___

### negotiated

• `get` **negotiated**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/webrtc/src/dataChannel.ts:71](https://github.com/shinyoshiaki/werift-webrtc/blob/f609bd5a/packages/webrtc/src/dataChannel.ts#L71)

___

### ordered

• `get` **ordered**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/webrtc/src/dataChannel.ts:51](https://github.com/shinyoshiaki/werift-webrtc/blob/f609bd5a/packages/webrtc/src/dataChannel.ts#L51)

___

### protocol

• `get` **protocol**(): `string`

#### Returns

`string`

#### Defined in

[packages/webrtc/src/dataChannel.ts:67](https://github.com/shinyoshiaki/werift-webrtc/blob/f609bd5a/packages/webrtc/src/dataChannel.ts#L67)

## Methods

### addBufferedAmount

▸ **addBufferedAmount**(`amount`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |

#### Returns

`void`

#### Defined in

[packages/webrtc/src/dataChannel.ts:114](https://github.com/shinyoshiaki/werift-webrtc/blob/f609bd5a/packages/webrtc/src/dataChannel.ts#L114)

___

### addEventListener

▸ **addEventListener**(`type`, `listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

`void`

#### Inherited from

EventTarget.addEventListener

#### Defined in

[packages/webrtc/src/helper.ts:37](https://github.com/shinyoshiaki/werift-webrtc/blob/f609bd5a/packages/webrtc/src/helper.ts#L37)

___

### addListener

▸ **addListener**(`eventName`, `listener`): [`RTCDataChannel`](RTCDataChannel.md)

Alias for `emitter.on(eventName, listener)`.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`RTCDataChannel`](RTCDataChannel.md)

#### Inherited from

EventTarget.addListener

#### Defined in

node_modules/@types/node/events.d.ts:317

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[packages/webrtc/src/dataChannel.ts:129](https://github.com/shinyoshiaki/werift-webrtc/blob/f609bd5a/packages/webrtc/src/dataChannel.ts#L129)

___

### emit

▸ **emit**(`eventName`, ...`args`): `boolean`

Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

EventTarget.emit

#### Defined in

node_modules/@types/node/events.d.ts:573

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

**`Since`**

v6.0.0

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

EventTarget.eventNames

#### Defined in

node_modules/@types/node/events.d.ts:632

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](RTCDataChannel.md#defaultmaxlisteners).

**`Since`**

v1.0.0

#### Returns

`number`

#### Inherited from

EventTarget.getMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:489

___

### listenerCount

▸ **listenerCount**(`eventName`): `number`

Returns the number of listeners listening to the event named `eventName`.

**`Since`**

v3.2.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |

#### Returns

`number`

#### Inherited from

EventTarget.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:579

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

EventTarget.listeners

#### Defined in

node_modules/@types/node/events.d.ts:502

___

### off

▸ **off**(`eventName`, `listener`): [`RTCDataChannel`](RTCDataChannel.md)

Alias for `emitter.removeListener()`.

**`Since`**

v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`RTCDataChannel`](RTCDataChannel.md)

#### Inherited from

EventTarget.off

#### Defined in

node_modules/@types/node/events.d.ts:462

___

### on

▸ **on**(`eventName`, `listener`): [`RTCDataChannel`](RTCDataChannel.md)

Adds the `listener` function to the end of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`Since`**

v0.1.101

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`RTCDataChannel`](RTCDataChannel.md)

#### Inherited from

EventTarget.on

#### Defined in

node_modules/@types/node/events.d.ts:348

___

### once

▸ **once**(`eventName`, `listener`): [`RTCDataChannel`](RTCDataChannel.md)

Adds a **one-time**`listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`Since`**

v0.3.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`RTCDataChannel`](RTCDataChannel.md)

#### Inherited from

EventTarget.once

#### Defined in

node_modules/@types/node/events.d.ts:377

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`RTCDataChannel`](RTCDataChannel.md)

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`RTCDataChannel`](RTCDataChannel.md)

#### Inherited from

EventTarget.prependListener

#### Defined in

node_modules/@types/node/events.d.ts:597

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`RTCDataChannel`](RTCDataChannel.md)

Adds a **one-time**`listener` function for the event named `eventName` to the_beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`RTCDataChannel`](RTCDataChannel.md)

#### Inherited from

EventTarget.prependOnceListener

#### Defined in

node_modules/@types/node/events.d.ts:613

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

**`Since`**

v9.4.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

EventTarget.rawListeners

#### Defined in

node_modules/@types/node/events.d.ts:532

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`RTCDataChannel`](RTCDataChannel.md)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`RTCDataChannel`](RTCDataChannel.md)

#### Inherited from

EventTarget.removeAllListeners

#### Defined in

node_modules/@types/node/events.d.ts:473

___

### removeEventListener

▸ **removeEventListener**(`type`, `listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

`void`

#### Inherited from

EventTarget.removeEventListener

#### Defined in

[packages/webrtc/src/helper.ts:41](https://github.com/shinyoshiaki/werift-webrtc/blob/f609bd5a/packages/webrtc/src/helper.ts#L41)

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`RTCDataChannel`](RTCDataChannel.md)

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and_before_ the last listener finishes execution will
not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`RTCDataChannel`](RTCDataChannel.md)

#### Inherited from

EventTarget.removeListener

#### Defined in

node_modules/@types/node/events.d.ts:457

___

### send

▸ **send**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Buffer` |

#### Returns

`void`

#### Defined in

[packages/webrtc/src/dataChannel.ts:125](https://github.com/shinyoshiaki/werift-webrtc/blob/f609bd5a/packages/webrtc/src/dataChannel.ts#L125)

___

### setId

▸ **setId**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`void`

#### Defined in

[packages/webrtc/src/dataChannel.ts:88](https://github.com/shinyoshiaki/werift-webrtc/blob/f609bd5a/packages/webrtc/src/dataChannel.ts#L88)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`RTCDataChannel`](RTCDataChannel.md)

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.3.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`RTCDataChannel`](RTCDataChannel.md)

#### Inherited from

EventTarget.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:483

___

### setReadyState

▸ **setReadyState**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DCState`](../modules.md#dcstate) |

#### Returns

`void`

#### Defined in

[packages/webrtc/src/dataChannel.ts:92](https://github.com/shinyoshiaki/werift-webrtc/blob/f609bd5a/packages/webrtc/src/dataChannel.ts#L92)

___

### getEventListeners

▸ `Static` **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
const { getEventListeners, EventEmitter } = require('events');

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  getEventListeners(ee, 'foo'); // [listener]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  getEventListeners(et, 'foo'); // [listener]
}
```

**`Since`**

v15.2.0, v14.17.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` \| `DOMEventTarget` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

EventTarget.getEventListeners

#### Defined in

node_modules/@types/node/events.d.ts:262

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
const { EventEmitter, listenerCount } = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

**`Since`**

v0.9.12

**`Deprecated`**

Since v3.2.0 - Use `listenerCount` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

#### Inherited from

EventTarget.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:234

___

### on

▸ `Static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`<`any`\>

```js
const { on, EventEmitter } = require('events');

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo')) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
const { on, EventEmitter } = require('events');
const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

**`Since`**

v13.6.0, v12.16.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | `StaticEventEmitterOptions` | - |

#### Returns

`AsyncIterableIterator`<`any`\>

that iterates `eventName` events emitted by the `emitter`

#### Inherited from

EventTarget.on

#### Defined in

node_modules/@types/node/events.d.ts:217

___

### once

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
const { once, EventEmitter } = require('events');

async function run() {
  const ee = new EventEmitter();

  process.nextTick(() => {
    ee.emit('myevent', 42);
  });

  const [value] = await once(ee, 'myevent');
  console.log(value);

  const err = new Error('kaboom');
  process.nextTick(() => {
    ee.emit('error', err);
  });

  try {
    await once(ee, 'myevent');
  } catch (err) {
    console.log('error happened', err);
  }
}

run();
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.log('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

**`Since`**

v11.13.0, v10.16.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `NodeEventTarget` |
| `eventName` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

EventTarget.once

#### Defined in

node_modules/@types/node/events.d.ts:157

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `DOMEventTarget` |
| `eventName` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

EventTarget.once

#### Defined in

node_modules/@types/node/events.d.ts:158

___

### setMaxListeners

▸ `Static` **setMaxListeners**(`n?`, ...`eventTargets`): `void`

```js
const {
  setMaxListeners,
  EventEmitter
} = require('events');

const target = new EventTarget();
const emitter = new EventEmitter();

setMaxListeners(5, target, emitter);
```

**`Since`**

v15.4.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n?` | `number` | A non-negative number. The maximum number of listeners per `EventTarget` event. |
| `...eventTargets` | (`EventEmitter` \| `DOMEventTarget`)[] | - |

#### Returns

`void`

#### Inherited from

EventTarget.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:280