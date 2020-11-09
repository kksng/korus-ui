import React from 'react';
import * as L from '../../leda';

export const Div = () => (
  <L.Div _demoStory>
    <L.H4 _title>Div</L.H4>
    <br />
    <L.Div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <L.Div style={{ display: 'flex', flexDirection: 'row' }}>
        <L.Div style={{ display: 'flex', flexDirection: 'column' }}>
          <L.Div style={{
            backgroundColor: 'DarkOrange', width: '210px', height: '50px', marginBottom: '2px',
          }}
          />
          <L.Div style={{ display: 'flex', flexDirection: 'row' }}>
            <L.Div style={{
              backgroundColor: 'MediumSpringGreen ', width: '50px', height: '157px', margin: '2px',
            }}
            />
            <L.Div style={{ display: 'flex', flexDirection: 'column' }}>
              <L.Div style={{ display: 'flex', flexDirection: 'row' }}>
                <L.Div style={{
                  backgroundColor: 'Crimson', width: '100px', height: '102px', margin: '2px',
                }}
                />
                <L.Div>
                  <L.Div style={{
                    backgroundColor: 'BlueViolet', width: '50px', height: '50px', margin: '2px',
                  }}
                  />
                  <L.Div style={{
                    backgroundColor: 'Gold', width: '50px', height: '50px', margin: '2px',
                  }}
                  />
                </L.Div>
              </L.Div>
              <L.Div style={{
                backgroundColor: 'BlueViolet', width: '155px', height: '52px', margin: '2px',
              }}
              />
            </L.Div>
          </L.Div>
        </L.Div>
        <L.Div style={{
          backgroundColor: 'DeepSkyBlue', width: '50px', height: '210px', margin: '2px',
        }}
        />
      </L.Div>
    </L.Div>
  </L.Div>
);
