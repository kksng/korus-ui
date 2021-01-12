import { Position } from './constants';
import * as helpers from './helpers';

const rect = {
  bottom: 200,
  left: 100,
  right: 200,
  top: 100,
} as DOMRect;

const isScrolling = false;

const padding = 10;

const expected = {
  bottom: {
    left: '150px',
    top: '230px',
    transform: 'translateX(-50%)',
  },
  bottomLeft: {
    left: '200px',
    top: '230px',
    transform: 'translateX(-100%)',
  },
  bottomRight: {
    left: '100px',
    top: '230px',
  },
  left: {
    left: '70px',
    top: '100px',
    transform: 'translateX(-100%)',
  },
  right: {
    left: '230px',
    top: '100px',
  },
  top: {
    left: '150px',
    top: '70px',
    transform: 'translate(-50%, -100%)',
  },
  topLeft: {
    left: '200px',
    top: '70px',
    transform: 'translate(-100%, -100%)',
  },
  topRight: {
    left: '100px',
    top: '70px',
    transform: 'translateY(-100%)',
  },
};

describe('Tour getModalPositionStyles', () => {
  describe('Should calculate styles properly for existing positions', () => {
    it('Top position', () => {
      expect(helpers.getModalPositionStyles({
        isScrolling, padding, position: Position.Top, rect,
      })).toEqual(expected.top);
    });
    it('Bottom position', () => {
      expect(helpers.getModalPositionStyles({
        isScrolling, padding, position: Position.Bottom, rect,
      })).toEqual(expected.bottom);
    });
    it('Left position', () => {
      expect(helpers.getModalPositionStyles({
        isScrolling, padding, position: Position.Left, rect,
      })).toEqual(expected.left);
    });
    it('Right position', () => {
      expect(helpers.getModalPositionStyles({
        isScrolling, padding, position: Position.Right, rect,
      })).toEqual(expected.right);
    });
    it('TopLeft position', () => {
      expect(helpers.getModalPositionStyles({
        isScrolling, padding, position: Position.TopLeft, rect,
      })).toEqual(expected.topLeft);
    });
    it('TopRight position', () => {
      expect(helpers.getModalPositionStyles({
        isScrolling, padding, position: Position.TopRight, rect,
      })).toEqual(expected.topRight);
    });
    it('BottomLeft position', () => {
      expect(helpers.getModalPositionStyles({
        isScrolling, padding, position: Position.BottomLeft, rect,
      })).toEqual(expected.bottomLeft);
    });
    it('BottomRight position', () => {
      expect(helpers.getModalPositionStyles({
        isScrolling, padding, position: Position.BottomRight, rect,
      })).toEqual(expected.bottomRight);
    });
  });
});
