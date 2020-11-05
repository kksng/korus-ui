import React from 'react';
import * as L from '../../../leda';

const SimpleAlerts = ({ setActiveAlertKey }: any) => (
  <>
    <L.ModalAlert
      alertKey="simple"
      onClose={() => setActiveAlertKey(null)}
    >
      <L.H2>Simple alert</L.H2>
      <L.P>Modal Alert</L.P>
    </L.ModalAlert>
  </>
);

export const Minimal = (props: { title: string }): React.ReactElement => {
  const [isOpen, setOpen] = React.useState(false);
  const [activeAlertKey, setActiveAlertKey] = React.useState<string | null>(null);

  return (
    <L.Div>
      <L.H4 _title>Modal</L.H4>
      <L.Modal
        activeAlertKey={activeAlertKey}
        isOpen={isOpen}
        onClose={() => {
          setOpen(false);
        }}
      >
        <L.ModalHeader>
          Modal Header
        </L.ModalHeader>
        <L.ModalBody _myClassName>
          <L.Div _inner _demoModalForm _container>
            <L.Div>
              <L.Button onClick={() => setActiveAlertKey('simple')}>
                Show Alert
              </L.Button>
            </L.Div>
          </L.Div>
        </L.ModalBody>
        <L.ModalFooter>
          Modal Footer
        </L.ModalFooter>
        <SimpleAlerts setActiveAlertKey={setActiveAlertKey} />
      </L.Modal>
      <L.Button _warning onClick={() => setOpen(true)}>Open</L.Button>
    </L.Div>
  );
};
