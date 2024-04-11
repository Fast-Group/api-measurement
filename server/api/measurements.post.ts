export default defineEventHandler( async event => {
    const body = await readBody(event)
    console.log(body)
    const payload = {
        "Message": "success",
        "Barcode": "YT2318522147003012",
        "ChuteCode": [2]
    }

    return payload
})

// {
//       "Barcode": [
//         "YT2318522147003012"
//       ],
//       "MachineCode": "PAXF-01",
//       "Weight": 0.0,
//       "Length": 0.0,
//       "Width": 0.0,
//       "Height": 0.0,
//       "RequestTime": "2023-06-08 15:09:29"
//     }

//     {
//           "Message": "success",
//           "Barcode": "YT2318522147003012",
//           "ChuteCode": [ 2 ]
//         }