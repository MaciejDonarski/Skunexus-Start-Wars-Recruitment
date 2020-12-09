import React from 'react';
import { useForm } from 'react-hook-form';

import Modal from 'react-modal';
import { PROP_TYPES } from './constants';

export const PalnetDetailsModal = ({ isOpen, toggleModal, planet, onSubmit }) => {
  const {
    register, handleSubmit, errors,
  } = useForm({
    defaultValues: planet,
  });

  const submit = (data) => {
    toggleModal(false);
    onSubmit(data);
  };
  // COMMENT all this stuff below could be wrapped in components
  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <input
            name="name"
            type="text"
            placeholder="name"
            ref={register({ required: true })}
          />
          {errors?.name && <div>name is required</div>}
        </div>
        <div>
          <input
            name="rotation_period"
            type="number"
            placeholder="rotation_period"
            ref={register({ required: true })}
          />
          {errors?.rotationPeriod && <div>rotationPeriod is required</div>}
        </div>
        <div>
          <input
            name="orbital_period"
            type="number"
            placeholder="orbital_period"
            ref={register({ required: true })}
          />
          {errors?.orbitalPeriod && <div>orbitalPeriod is required</div>}
        </div>
        <div>
          <input
            name="diameter"
            type="number"
            placeholder="diameter"
            ref={register({ required: true })}
          />
          {errors?.diameter && <div>diameter is required</div>}
        </div>
        <div>
          <input
            name="climate"
            type="text"
            placeholder="climate"
            ref={register({ required: true })}
          />
          {errors?.climate && <div>climate is required</div>}
        </div>
        <div>
          <input
            name="terrain"
            type="text"
            placeholder="terrain"
            ref={register({ required: true })}
          />
          {errors?.terrain && <div>terrain is required</div>}
        </div>
        <div>
          <input
            name="surface_water"
            type="text"
            placeholder="surface_water"
            ref={register({ required: true })}
          />
          {errors?.surfaceWater && <div>surfaceWater is required</div>}
        </div>

        <button type="submit">submit</button>
      </form>
    </Modal>
  );
};

PalnetDetailsModal.propTypes = PROP_TYPES;
