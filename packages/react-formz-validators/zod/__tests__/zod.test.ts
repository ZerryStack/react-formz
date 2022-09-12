import zod from "zod";
import ZodSchemaValidator from "../zod";

describe("zod", () => {
  it("should validate schema", async () => {
    const schema = zod.object({
      name: zod.string().min(5),
      values: zod.object({
        name: zod.string().min(10),
        id: zod.union([zod.number(), zod.string()]),
      }),
    });

    const validator = new ZodSchemaValidator<{
      name: string;
      values: { name: string };
    }>(schema);

    const result = await validator.validate({ name: "", values: { id: true } });

    expect(result).toEqual({
      errors: {
        name: {
          message: expect.any(String),
          type: expect.any(String),
        },
        "values.name": {
          message: expect.any(String),
          type: expect.any(String),
        },
        "values.id": {
          message: expect.any(String),
          type: expect.any(String),
        },
      },
    });
  });
});
