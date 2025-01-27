[werift](../README.md) / [Exports](../modules.md) / SourceDescriptionChunk

# Class: SourceDescriptionChunk

## Table of contents

### Constructors

- [constructor](SourceDescriptionChunk.md#constructor)

### Properties

- [items](SourceDescriptionChunk.md#items)
- [source](SourceDescriptionChunk.md#source)

### Accessors

- [length](SourceDescriptionChunk.md#length)

### Methods

- [serialize](SourceDescriptionChunk.md#serialize)
- [deSerialize](SourceDescriptionChunk.md#deserialize)

## Constructors

### constructor

• **new SourceDescriptionChunk**(`props?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Partial`<[`SourceDescriptionChunk`](SourceDescriptionChunk.md)\> |

## Properties

### items

• **items**: [`SourceDescriptionItem`](SourceDescriptionItem.md)[] = `[]`

___

### source

• **source**: `number`

## Accessors

### length

• `get` **length**(): `number`

#### Returns

`number`

## Methods

### serialize

▸ **serialize**(): `Buffer`

#### Returns

`Buffer`

___

### deSerialize

▸ `Static` **deSerialize**(`data`): [`SourceDescriptionChunk`](SourceDescriptionChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Buffer` |

#### Returns

[`SourceDescriptionChunk`](SourceDescriptionChunk.md)
