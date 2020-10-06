import { componentSrc } from './index';

export const Api = {
  liveDemo: `
const Api = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <L.Modal
        isOpen={isOpen}
        onClose={() => {
          console.log('click on close icon');
          setIsOpen(false);
        }}
        size="lg"
      >
        <L.ModalHeader>
          Заголовок модального окна
        </L.ModalHeader>
        <L.ModalBody>
          <L.Div _inner>
            Контент
          </L.Div>
        </L.ModalBody>
        <L.ModalFooter>
          <L.Button onClick={() => setIsOpen(false)}>Отмена</L.Button>
          {' '}
          <L.Button _warning form="modal-form">Добавить</L.Button>
        </L.ModalFooter>
      </L.Modal>
      <L.Button _warning onClick={() => setIsOpen(true)}>
        Открыть модальное окно
      </L.Button>
    </>
  );
};

render(<Api />);
`,
  source: componentSrc,
};
