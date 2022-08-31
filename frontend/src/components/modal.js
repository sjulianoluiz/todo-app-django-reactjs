import { useState } from 'react';
import {
  Button,
  Modal as ModalStrap,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';

function Modal(props) {
  const { toggle, onSave, activeItem: item } = props;
  const [activeItem, setActiveItem] = useState(item);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (e.target.type === 'checkbox') value = e.target.checked;
    setActiveItem({
      ...activeItem,
      [name]: value
    });
  };

  return (
    <ModalStrap isOpen={true} toggle={toggle}>
      <ModalHeader toggle={toggle}>Todo Item</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for='todo-title'>Title</Label>
            <Input
              type='text'
              id='todo-title'
              name='title'
              value={activeItem.title}
              onChange={handleChange}
              placeholder='Enter Todo Title'
            />
          </FormGroup>
          <FormGroup>
            <Label for='todo-description'>Description</Label>
            <Input
              type='text'
              id='todo-description'
              name='description'
              value={activeItem.description}
              onChange={handleChange}
              placeholder='Enter Todo description'
            />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type='checkbox'
                name='completed'
                checked={activeItem.completed}
                onChange={handleChange}
              />
              Completed
            </Label>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button
          color='success'
          onClick={() => onSave(activeItem)}
        >
          Save
        </Button>
      </ModalFooter>
    </ModalStrap>
  );
}

export default Modal;
