import { Position } from './constants';
import * as helpers from './helpers';

const rect = {
  bottom: 200,
  left: 100,
  right: 200,
  top: 100,
} as DOMRect;

const isScrolling = false;

const expected = {
  bottom: {
    left: '150px',
    top: '220px',
    transform: 'translateX(-50%)',
  },
  bottomLeft: {
    left: '200px',
    top: '220px',
    transform: 'translateX(-100%)',
  },
  bottomRight: {
    left: '100px',
    top: '220px',
  },
  left: {
    left: '80px',
    top: '100px',
    transform: 'translateX(-100%)',
  },
  right: {
    left: '220px',
    top: '100px',
  },
  top: {
    left: '150px',
    top: '80px',
    transform: 'translate(-50%, -100%)',
  },
  topLeft: {
    left: '200px',
    top: '80px',
    transform: 'translate(-100%, -100%)',
  },
  topRight: {
    left: '100px',
    top: '80px',
    transform: 'translateY(-100%)',
  },
};

describe('Tour getModalPositionStyles', () => {
  describe('Should calculate styles properly for existing positions', () => {
    it('Top position', () => {
      expect(helpers.getModalPositionStyles(Position.Top, rect, isScrolling)).toEqual(expected.top);
    });
    it('Bottom position', () => {
      expect(helpers.getModalPositionStyles(Position.Bottom, rect, isScrolling)).toEqual(expected.bottom);
    });
    it('Left position', () => {
      expect(helpers.getModalPositionStyles(Position.Left, rect, isScrolling)).toEqual(expected.left);
    });
    it('Right position', () => {
      expect(helpers.getModalPositionStyles(Position.Right, rect, isScrolling)).toEqual(expected.right);
    });
    it('TopLeft position', () => {
      expect(helpers.getModalPositionStyles(Position.TopLeft, rect, isScrolling)).toEqual(expected.topLeft);
    });
    it('TopRight position', () => {
      expect(helpers.getModalPositionStyles(Position.TopRight, rect, isScrolling)).toEqual(expected.topRight);
    });
    it('BottomLeft position', () => {
      expect(helpers.getModalPositionStyles(Position.BottomLeft, rect, isScrolling)).toEqual(expected.bottomLeft);
    });
    it('BottomRight position', () => {
      expect(helpers.getModalPositionStyles(Position.BottomRight, rect, isScrolling)).toEqual(expected.bottomRight);
    });
  });
});
