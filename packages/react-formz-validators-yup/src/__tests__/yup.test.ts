import * as yup from "yup";
import YupSchemaValidator from "../yup";

describe("yup", () => {
  it("should validate schema", async () => {
    const schema = yup.object({
      name: yup.string().min(5),
      values: yup.object({
        id: yup.string().min(10),
        available: yup.boolean().required()
      }),
    });

    const validator = new YupSchemaValidator<{
      name: string;
      values: { id: string; available?: boolean };
    }>(schema);

    const result = await validator.validate({ name: "l", values: { id: "j" } });

    expect(result).toEqual({
      errors: {
        name: {
          message: expect.any(String),
          type: expect.any(String),
        },
        values: {
          id: {
            message: expect.any(String),
            type: expect.any(String),
          },
          available: {
            message: expect.any(String),
            type: expect.any(String),
          },
        },
      },
    });
  });

  it("should return errors when using abortEarly", async () => {
    const schema = yup.object({
      name: yup.string().min(5),
      values: yup.object({
        id: yup.string().min(10),
        available: yup.boolean().required()
      }),
    });

    const validator = new YupSchemaValidator<{
      name: string;
      values: { id: string; available?: boolean };
    }>(schema, { abortEarly: true });

    const result = await validator.validate({ name: "l", values: { id: "j" } });

    expect(result).toEqual({
      errors: {
        name: {
          message: expect.any(String),
          type: expect.any(String),
        },
      },
    });
  });
});
