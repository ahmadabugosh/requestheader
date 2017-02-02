export class Parser {
  static parseRequest(req) {
    // return JSON objec
    return {

    	ipaddress: Parser.getIP(req.connection.remoteAddress),
    	language: Parser.getLanguage(req.headers["accept-language"]),
    	software: Parser.getSoftware(req.headers["user-agent"])

    }

  }

  static getIP(remote)
  {

 let isV6 = remote.indexOf(':') >= 0;

 //check if it is v6 or v4 and return only beginning if it's v4

 return isV6 ? remote.split(':').reverse()[0] : remoteAddress;


  }
static getLanguage(language)
{
return language.split(',')[0].trim();

}

static getSoftware(software)
{
let osInfo = software.split(/[\(\)]/)[1]; // We grab the second field with [1]
return osInfo.trim();


}

}