import { useState } from "react";
import cuid from "cuid";
import { Button, Form, FormField, Header, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function EventForm({
  setFormOpen,
  setEvents,
  createEvent,
  selectedEvent,
  updateEvent,
}) {
  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  const [values, setValues] = useState(initialValues);

  function handleFormSubmit() {
    selectedEvent
      ? updateEvent({ ...selectedEvent, ...values })
      : createEvent({
          ...values,
          id: cuid(),
          hostedBy: "Bob",
          attendees: [],
          hostPhotoURL: "/assets/user.png",
        });
    setFormOpen(false);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <Segment clearing>
      <Header content={selectedEvent ? "Edit the event" : "Create new event"} />
      <Form onSubmit={handleFormSubmit}>
        <FormField>
          <input
            type='text'
            placeholder='Event title'
            name='title'
            onChange={(e) => handleInputChange(e)}
            value={values.title}
          />
          <input
            type='text'
            placeholder='Category'
            name='category'
            onChange={(e) => handleInputChange(e)}
            value={values.category}
          />
          <input
            type='text'
            placeholder='Description'
            name='description'
            onChange={(e) => handleInputChange(e)}
            value={values.description}
          />
          <input
            type='text'
            placeholder='City'
            name='city'
            onChange={(e) => handleInputChange(e)}
            value={values.city}
          />
          <input
            type='text'
            placeholder='Venue'
            name='venue'
            onChange={(e) => handleInputChange(e)}
            value={values.venue}
          />
          <input
            type='date'
            placeholder='Date'
            name='date'
            onChange={(e) => handleInputChange(e)}
            value={values.date}
          />
        </FormField>
        <Button type='submit' floated='right' positive content='Submit' />
        <Button
          as={Link}
          to='/events'
          type='submit'
          floated='right'
          content='Cancel'
        />
      </Form>
    </Segment>
  );
}
