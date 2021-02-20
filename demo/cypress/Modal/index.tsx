/* eslint-disable no-alert, no-console */
import * as React from 'react';
import * as L from '../../../korus-ui';

const Alerts = ({ setActiveAlertKey }: any) => (
  <>
    <L.ModalAlert
      name="leave"
      alertKey="leave"
      onClose={() => setActiveAlertKey(null)}
    >
      <L.H2>Title!</L.H2>
      <L.P>Lorem sit amet!</L.P>
      <L.Div>
        <L.Button name="cancelButton" onClick={() => setActiveAlertKey(null)}>
          Cancel
        </L.Button>
        &nbsp;&nbsp;&nbsp;
        <L.Button name="okButton" _warning onClick={() => setActiveAlertKey(null)}>
          Ok
        </L.Button>
      </L.Div>
    </L.ModalAlert>
    <L.ModalAlert
      name="simple"
      alertKey="simple"
      onClose={() => setActiveAlertKey(null)}
    >
      <L.H2>Simple alert</L.H2>
      <L.P>Lorem ipsum dolor sit amet</L.P>
    </L.ModalAlert>
  </>
);

export const Modal = () => {
  const [isOpen, setOpen] = React.useState(false);
  const [activeAlertKey, setActiveAlertKey] = React.useState<string | null>(null);

  return (
    <L.Div _demoStory>
      <L.Modal
        activeAlertKey={activeAlertKey}
        isOpen={isOpen}
        onClose={() => { setOpen(false); }}
        size="md"
      >
        <L.ModalHeader>Modal header</L.ModalHeader>
        <L.ModalBody _myClassName>
          <L.Button
            data-test="openAlertLeaveButton"
            onClick={() => setActiveAlertKey('leave')}
          >
            Show Alert 'leave'
          </L.Button>
          <L.Button
            data-test="openAlertSimpleButton"
            onClick={() => setActiveAlertKey('simple')}
          >
            Show Alert 'simple'
          </L.Button>
        </L.ModalBody>
        <L.ModalFooter>
          <L.Button name="cancel" onClick={() => setOpen(false)}>Cancel</L.Button>
          <L.Button name="submit" _warning form="modal-form" onClick={() => setOpen(false)} onValidationFail={() => alert('Заполните все поля, пожалуйста!')}>Submit</L.Button>
        </L.ModalFooter>
        <Alerts setActiveAlertKey={setActiveAlertKey} />
      </L.Modal>
      <L.Button
        data-test="openModalButton"
        onClick={() => setOpen(true)}
      >
        Open Modal
      </L.Button>
    </L.Div>
  );
};
