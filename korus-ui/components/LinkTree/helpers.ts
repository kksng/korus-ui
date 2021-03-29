import { LinkTreeTerminalItem, LinkTreeItemType } from './types';

/**
 * Helper defines if LinkTree item has child items
 * @param {LinkTreeItemType} item
 * @returns {boolean}
 */
export const isTerminal = (item: LinkTreeItemType): item is LinkTreeTerminalItem => Object.keys(item).length > 1;
