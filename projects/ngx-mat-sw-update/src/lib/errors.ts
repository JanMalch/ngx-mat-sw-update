import {DialogInput} from './models';

export function assertHasImageProperty(data: DialogInput): void {
  if (!('image' in data)) {
    throw new Error('No \'image\' property found in DialogInput.');
  }
}
