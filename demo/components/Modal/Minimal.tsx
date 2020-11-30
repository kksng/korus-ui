import React from 'react';
import * as L from '../../../leda';

const SimpleAlerts = ({ setActiveAlertKey }: any) => (
  <>
    <L.ModalAlert
      alertKey="simple"
    >
      <L.H2>Simple alert</L.H2>
      <L.P>Modal Alert</L.P>
    </L.ModalAlert>
  </>
);

export const MinimalModal = (props: { title: string }): React.ReactElement => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <L.Div>
      <L.H4 _title>Modal</L.H4>
      <L.Modal
        isOpen={isOpen}
      >
        <L.ModalHeader>
          Modal Header
        </L.ModalHeader>
        <L.ModalBody _myClassName>
          <L.Div _inner _demoModalForm _container>
            <L.Div>
              Modal Body
            </L.Div>
          </L.Div>
        </L.ModalBody>
        <L.ModalFooter>
          Modal Footer
        </L.ModalFooter>
      </L.Modal>
      <L.Button _warning onClick={() => setOpen(true)}>Open</L.Button>
    </L.Div>
  );
};

export const MinimalModalAlert = (props: { title: string }): React.ReactElement => {
  const [isOpen, setOpen] = React.useState(false);
  const [activeAlertKey, setActiveAlertKey] = React.useState<string | null>(null);

  return (
    <L.Div>
      <L.H4 _title>ModalAlert</L.H4>
      <L.Modal
        activeAlertKey={activeAlertKey}
        isOpen={isOpen}
      >
        <L.ModalBody _myClassName>
          <L.Div _inner _demoModalForm _container>
            <L.Button onClick={() => setActiveAlertKey('simple')}>
              Show Alert
            </L.Button>
          </L.Div>
        </L.ModalBody>
        <SimpleAlerts setActiveAlertKey={setActiveAlertKey} />
      </L.Modal>
      <L.Button _warning onClick={() => setOpen(true)}>Open</L.Button>
    </L.Div>
  );
};
