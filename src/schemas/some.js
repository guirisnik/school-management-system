import * as yup from 'yup'

const singleNameSchema = yup
  .string()
  .required(RequiredField)
  .min(
    2,
    'Invalid name',
  )
  .matches(
    //i,
    'Invalid character',
  )

const multiNameSchema = yup
  .string()
  .required(RequiredField)
  .min(
    2,
    'Invalid name',
  )
  .matches(
    //i,
    'Invalid character'
  )

const numberSchema = yup
  .number()
  .typeError('Not a number')
  .integer('Not integer')
  .required(RequiredField)
  .max(
    100,
    'Number must be lower than or equal to 100'
  )
  .min(
    0,
    'Number must be greater than or equal to 0'
  )

const someSchema = yup.object().shape({
  firstName: singleNameSchema,
  lastName: multiNameSchema,
  number: numberSchema,
})

export { someSchema }
