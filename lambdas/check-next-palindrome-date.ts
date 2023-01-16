import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda"

import { get } from "deep-object-js"

function addDay(date: Date){
  return new Date(date.getTime() + (24 * 60 * 60 * 1000))
}

function checkIsPalindromeDate(date: Date){
  const dateAsString = date.toISOString()
  const dateAsStringReversed = dateAsString.split("-").reverse().join("-")

  return dateAsString === dateAsStringReversed
}

export const handler = async (
  event: APIGatewayEvent
):Promise<APIGatewayProxyResult> => {
  const year = get(event, "pathParameters.year")
  const month = get(event, "pathParameters.month")
  const day = get(event, "pathParameters.day")

  let date = new Date(year, month, day)

  while(!checkIsPalindromeDate(date)){
    date = addDay(date)
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `The date ${date}, is the next palindrome date!`,
    })
  }
}
