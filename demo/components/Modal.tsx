/* eslint-disable no-alert, no-console */
import * as React from 'react';
import * as L from '../../leda';

const Alerts = ({ setActiveAlertKey }: any) => (
  <>
    <L.ModalAlert
      alertKey="leave"
      onClose={() => setActiveAlertKey(null)}
    >
      <L.H2>Внимание!</L.H2>
      <L.P>Несохраненные данные будут утеряны!</L.P>
      <L.Div>
        <L.Button onClick={() => setActiveAlertKey(null)}>
          Отмена
        </L.Button>
        &nbsp;&nbsp;&nbsp;
        <L.Button _warning onClick={() => setActiveAlertKey(null)}>
          Ok
        </L.Button>
      </L.Div>
    </L.ModalAlert>
    <L.ModalAlert
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
      <L.H4 _title>Modal</L.H4>
      <br />
      <L.Modal
        activeAlertKey={activeAlertKey}
        isOpen={isOpen}
        onClose={() => {
          setOpen(false);
        }}
        // onCloseButtonClick={() => {
        //   console.log('click on close icon');
        //   setOpen(false);
        // }}
        // onOverlayClick={() => {
        //   console.log('click on overlay');
        //   setOpen(false);
        // }}
        // onEscapePress={() => {
        //   console.log('esc pressed');
        //   setOpen(false);
        // }}
        size="md"
      >
        <L.ModalHeader>
          НОВЫЙ ПОЛЬЗОВАТЕЛЬ
        </L.ModalHeader>
        <L.ModalBody _myClassName>
          <L.Div _inner _demoModalForm _container>
            <L.Div _demoModalLine _row _noGutters>
              <L.Span _colMd2>Фамилия</L.Span>
              <L.Input _colMd10 form="modal-form" name="first-name" isRequired />
            </L.Div>
            <br />
            <L.Div _demoModalLine _row _noGutters>
              <L.Span _colMd2>Имя</L.Span>
              <L.Input _colMd10 form="modal-form" name="last-name" isRequired />
            </L.Div>
            <br />
            <L.Div _demoModalLine _row _noGutters>
              <L.Span _colMd2>Отчество</L.Span>
              <L.Input _colMd10 form="modal-form" name="middle-name" isRequired />
            </L.Div>
            <br />
            <L.Div _demoModalLine _row _noGutters>
              <L.Span _colMd2>Дата рождения</L.Span>
              <L.DatePicker _colMd10 isRequired form="modal-form" name="birth-date" />
            </L.Div>
            <br />
            <L.Div _demoModalLine _row _noGutters>
              <L.Span _colMd2>Паспорт РФ</L.Span>
              <L.MaskedInput _colMd10 mask="####-######" form="modal-form" name="passport" isRequired />
            </L.Div>
            <br />
            <L.Div _demoModalLine _row _noGutters>
              <L.Span _colMd2>Выдан</L.Span>
              <L.Textarea _colMd10 form="modal-form" name="passport-given" isRequired />
            </L.Div>
            <L.Div
              _demoModalLine
              _noGutters
              _row
            >
              <L.Button onClick={() => setActiveAlertKey('leave')}>
                Show Alert 'leave'
              </L.Button>
              <L.Button onClick={() => setActiveAlertKey('simple')}>
                Show Alert 'simple'
              </L.Button>
            </L.Div>
          </L.Div>
        </L.ModalBody>
        <L.ModalFooter>
          <L.Button onClick={() => setOpen(false)}>Отмена</L.Button>
          {' '}
          <L.Button _warning form="modal-form" onClick={() => setOpen(false)} onValidationFail={() => alert('Заполните все поля, пожалуйста!')}>Добавить</L.Button>
        </L.ModalFooter>
        <Alerts setActiveAlertKey={setActiveAlertKey} />
      </L.Modal>
      <br />
      <L.Button _warning onClick={() => setOpen(true)}>Открыть модальное окно</L.Button>
      <br />
    </L.Div>
  );
};
