import { z } from "zod";

const MeasurementSchema = z.object({
    Barcode: z.array(z.string()),
    MachineCode: z.string(),
    Weight: z.number(),
    Length: z.number(),
    Width: z.number(),
    Height: z.number(),
    RequestTime: z.string()
})

export default defineEventHandler(async event => {
    const body = await readBody(event)
    const result = MeasurementSchema.safeParse(body)
    let payload = {}

    if (result.success) {
        const barcode = result.data.Barcode[0]
        payload = {
            "Message": "success",
            "Barcode": barcode,
            "ChuteCode": [2]
        }
        // Persist to data store
        const data = {
            "data": {
                "barcode": barcode,
                "machine_code": result.data.MachineCode,
                "weight": result.data.Weight,
                "length": result.data.Length,
                "width": result.data.Width,
                "height": result.data.Height,
                "request_time": result.data.RequestTime
            }
        }
        try {
            const response = await $fetch('https://cms.fast.com.ph/api/measurements', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + process.env.API_KEY,
                },
                body: data
            })
        } catch (error) {
            payload = {
                "Message": "error",
                "Error": error
            }
        }

    } else {
        payload = {
            "Message": "error",
            "Error": result.error
        }
    }

    return payload
})
