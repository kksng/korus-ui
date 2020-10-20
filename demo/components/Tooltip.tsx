import * as React from 'react';
import * as L from '../../leda';

export const Tooltip = () => {
  const [display, setDisplay] = React.useState(true);
  const [open, setOpen] = React.useState<boolean>();

  const displayData = [
    { text: 'show', value: true },
    { text: 'hide', value: false },
  ];

  const openData = [
    { text: 'default', value: undefined },
    { text: 'close', value: false },
    { text: 'open', value: true },
  ];

  return (
    <L.Div style={{ position: 'relative', paddingBottom: '50px' }} _demoStory>
      <L.H4 _title>Tooltip</L.H4>
      <br />
      <L.ButtonGroup
        _warning
        data={openData}
        defaultValue={openData[0]}
        textField="text"
        onChange={(event) => {
          const object = event.component.value;

          setOpen(object?.value);
        }}
      />
      <br />
      <L.ButtonGroup
        _warning
        data={displayData}
        defaultValue={displayData[0]}
        textField="text"
        onChange={(event) => {
          const object = event.component.value;

          setDisplay(object?.value ?? false);
        }}
      />
      <br />
      {display && (
        <L.Div _tooltipDemo>
          <L.Tooltip
            isOpen={open}
            position="top"
            title="Tooltip at top top top top top top top top top top top top top top top topTooltip at top top top top top top top top top top top top top top top topTooltip at top top top top top top top top top top top top top top top topTooltip at top top top top top top top top top top top top top top top topTooltip at top top top top top top top top top top top top top top top topTooltip at top top top top top top top top top top top top top top top topTooltip at top top top top top top top top top top top top top top top topTooltip at top top top top top top top top top top top top top top top topTooltip at top top top top top top top top top top top top top top top topTooltip at top top top top top top top top top top top top top top top topTooltip at top top top top top top top top top top top top top top top topTooltip at top top top top top top top top top top top top top top top topTooltip at top top top top top top top top top top top top top top top topTooltip at top top top top top top top top top top top top top top top topTooltip at top top top top top top top top top top top top top top top topTooltip at top top top top top top top top top top top top top top top topTooltip at top top top top top top top top top top top top top top top topTooltip at top top top top top top top top top top top top top top top topTooltip at top top top top top top top top top top top top top top top topTooltip at top top top top top top top top top top top top top top top topTooltip at top top top top top top top top top top top top top top top topTooltip at top top top top top top top top top top top top top top top topTooltip at top top top top top top top top top top top top top top top topTooltip at top top top top top top top top top top top top top top top topTooltip at top top top top top top top top top top top top top top top top"
          >
            <L.Button _tipTop>Top</L.Button>
          </L.Tooltip>
          <L.Div _tooltipLeftRight>
            <L.Tooltip
              isOpen={open}
              position="left"
              title="Tooltip at left left left left left left left left left left left left"
            >
              <L.Button _tipLeft>Left</L.Button>
            </L.Tooltip>
            <L.Tooltip
              isOpen={open}
              position="right"
              title="Tooltip at right right right right right right right right right right"
            >
              <L.Button _tipRight>Right</L.Button>
            </L.Tooltip>
          </L.Div>
          <L.Tooltip
            isOpen={open}
            position="bottom"
            title="Tooltip at bottom bottom bottom bottom bottom bottom bottom bottom"
          >
            <L.Button _tipBottom>
              Bottom
            </L.Button>
          </L.Tooltip>
          <L.Tooltip
            isOpen={open}
            title="Tooltip without positioning positioning positioning positioning positioning positioning positioning positioning positioning positioning positioning positioning positioning positioning"
          >
            <L.Button style={{ position: "absolute", left: 0, bottom: "50px" }}>
              defines the right side
            </L.Button>
          </L.Tooltip>
          <L.Tooltip
            isOpen={open}
            title="Tooltip without positioning positioning positioning positioning positioning positioning positioning positioning positioning positioning positioning positioning positioning positioning"
          >
            <L.Button
              style={{ position: 'absolute', right: 0, bottom: '50px' }}
            >
              defines the left side
            </L.Button>
          </L.Tooltip>
          <L.Tooltip
            isOpen={open}
            title="Tooltip without positioning positioning positioning positioning positioning positioning positioning positioning positioning positioning positioning positioning positioning positioning"
          >
            <L.Button
              style={{ position: 'absolute', left: '140px', bottom: '10px' }}
            >
              no positioning
            </L.Button>
          </L.Tooltip>
          <L.Tooltip
            isOpen={open}
            title="Tooltip without positioning positioning positioning positioning positioning positioning positioning positioning positioning positioning positioning positioning positioning positioning"
          >
            <L.Button
              style={{ position: 'absolute', right: '140px', bottom: '10px' }}
            >
              no positioning
            </L.Button>
          </L.Tooltip>
        </L.Div>
      )}
    </L.Div>
  );
};
