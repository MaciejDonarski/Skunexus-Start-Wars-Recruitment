import React from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@components/ui-kit/button';
import { Modal } from '@components/modal';
import { FormItem } from '@components/form-item';
import { PROP_TYPES } from './constants';

import './details-modal.scss';

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
      ariaHideApp={false}
      title={`Edit ${planet.name}`}
    >
      <form onSubmit={handleSubmit(submit)}>
        <FormItem
          error={!!errors?.name}
          errorText="name is required"
          label="Name"
        >
          <input
            name="name"
            type="text"
            placeholder="name"
            ref={register({ required: true })}
          />
        </FormItem>
        <FormItem
          error={!!errors?.rotationPeriod}
          errorText="rotationPeriod is required"
          label="Rotation period"
        >
          <input
            name="rotation_period"
            type="number"
            placeholder="rotation_period"
            ref={register({ required: true })}
          />
        </FormItem>
        <FormItem
          error={!!errors?.orbitalPeriod}
          errorText="orbitalPeriod is required"
          label="Orbital period"
        >
          <input
            name="orbital_period"
            type="number"
            placeholder="orbital_period"
            ref={register({ required: true })}
          />
        </FormItem>
        <FormItem
          error={!!errors?.diameter}
          errorText="diameter is required"
          label="Diameter"
        >
          <input
            name="diameter"
            type="number"
            placeholder="diameter"
            ref={register({ required: true })}
          />
        </FormItem>
        <FormItem
          error={!!errors?.climate}
          errorText="climate is required"
          label="Climate"
        >
          <input
            name="climate"
            type="text"
            placeholder="climate"
            ref={register({ required: true })}
          />
        </FormItem>
        <FormItem
          error={!!errors?.terrain}
          errorText="terrain is required"
          label="Terrain"
        >
          <input
            name="terrain"
            type="text"
            placeholder="terrain"
            ref={register({ required: true })}
          />
        </FormItem>
        <FormItem
          error={!!errors?.surfaceWater}
          errorText="surfaceWater is required"
          label="SurfaceWater"
        >
          <input
            name="surface_water"
            type="text"
            placeholder="surface_water"
            ref={register({ required: true })}
          />
        </FormItem>

        <div className="modal-controls">
          <Button type={2} text="Submit" />
          <Button text="Cancel" onClick={() => toggleModal(false)} />
        </div>
      </form>
    </Modal>
  );
};

PalnetDetailsModal.propTypes = PROP_TYPES;
