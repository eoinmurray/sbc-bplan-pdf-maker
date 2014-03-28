var
	_			= require('underscore'),
	moment 	= require('moment')

	;


var template = [

	"# <%= model.businessname.value %>",
	"##Written by: <%= model.yourname.value %>\n\n",
	"__" + moment().format('MMMM Do YYYY, h:mm a') + "__",
	"__Confidential - DO Not Disseminate.__ This business plan contains confidential, trade-secret, information and is shared with you only on the understandnig that you will not share its contents or ideas with third parties without the express written consent of the plan author.",

	"<% if(model.superheaders.companydetails.active=== true) { %>",
	"# Business plan",
	"__Business name:__ <%= model.businessname.value %>",
	"__Authors name:__ <%= model.yourname.value %>",
	"__Authors phone number:__ <%= model.yourphonenumber.value %>",
	"__Authors email address:__ <%= model.youremail.value %>",
	"\n### Address",
	"<%= model.street1.value %>",
	"<%= model.street2.value %>",
	"<%= model.town.value %>",
	"<%= model.county.value %>",
	"\n\n__CEO/MD name:__ <%= model.ceoname.value %>",
	"__LinkedIn profile 1:__ <%= model.profile1.value %>",
	"__LinkedIn profile 2:__ <%= model.profile2.value %>",
	"__LinkedIn profile 3:__ <%= model.profile3.value %>",
	"__LinkedIn profile 4:__ <%= model.profile4.value %>",
	"__Website:__ <%= model.website.value %>",
	"__Industry sector:__ <%= model.industrysector.value %>",
	"__Year established:__ <%= model.yearestablished.value %>",
	"<% } %>",

	"<% if(model.superheaders.executivesummary.active=== true) { %>",
	"#Executive summary",
	"## Purpose of this plan",
	"<%= model.purposeofplan.value %>",
	"## Product/services and benifits",
	"<%= model.productsservicesandbenifits.value %>",
	"## Market opportunity",
	"<%= model.marketopportunity.value %>",
	"## Financial summary (turnover)",
	"__Current financial year:__ <%= model.currentfinancialyear.value %>",
	"__Currency:__ <%= model.currency.value %>",
	"__Year -1 turnover:__ <%= model.mostrecent2.value %>",
	"__Current year turnover:__ <%= model.mostrecent.value %>",
	"__Year +1 turnover:__ <%= model.nextyear1.value %>",
	"__Year +2 turnover:__ <%= model.nextyear2.value %>",
	"__Year +3 turnover:__ <%= model.nextyear3.value %>",
	"<% } %>",

	"<% if(model.superheaders.strategy.active=== true) { %>",
	"#Strategy",
	"## Vision",
	"<%= model.vision.value %>",
	"## Milestones",
	"<%= model.milestones.value %>",
	"## Targets",
	"<%= model.targets.value %>",
	"## Purpose",
	"<%= model.purpose.value %>",
	"## Passion",
	"<%= model.passion.value %>",
	"## Guiding principles",
	"<%= model.guidingprinciples.value %>",
	"## Positioning",
	"<%= model.positioning.value %>",
	"## Resources",
	"<%= model.resources.value %>",
	"<% } %>",

	"<% if(model.superheaders.businessdescription.active=== true) { %>",
	"#Business description",
	"## About your business",
	"<%= model.aboutyourbusiness.value %>",
	"##Description of the business model",
	"<%= model.businessmodel.value %>",
	"##Vision and mission",
	"<%= model.visionandmission.value %>",
	"<% } %>",

	"<% if(model.superheaders.managmentteamsuper.active=== true) { %>",
	"# Managment team",
	"<%= model.managmentteam.value %>",
	"<% } %>",

	"<% if(model.superheaders.productsandservices.active=== true) { %>",
	"#Products and services",
	"<%= model.describeyourproduct.value %>",
	"<% } %>",

	"<% if(model.superheaders.targetmarket.active=== true) { %>",
	"#Target market",
	"##Market overview",
	"<%= model.marketoverview.value %>",
	"##Market needs",
	"<%= model.marketneeds.value %>",
	"##Key customers",
	"<%= model.keycustomers.value %>",
	"##Benifit to customers",
	"<%= model.benifittocustomers.value %>",
	"##Competitors",
	"<%= model.competitors.value %>",
	"<% } %>",

	"<% if(model.superheaders.marketingplan.active=== true) { %>",
	"#Marketing plan",
	"##Overview",
	"<%= model.marketingoverview.value %>",
	"##Pricing",
	"<%= model.pricing.value %>",
	"##Promotion",
	"<%= model.promotion.value %>",
	"##Sales plan",
	"<%= model.salesplan.value %>",
	"##Competitive edge",
	"<%= model.competitiveedge.value %>",
	"##SWOT analysis",
	"###Strengths",
	"<%= model.strengths.value %>",
	"###Weaknesses",
	"<%= model.weaknesses.value %>",
	"###Opportunities",
	"<%= model.opportunities.value %>",
	"###Threats",
	"<%= model.threats.value %>",
	"##Distribution strategy",
	"<%= model.distributionstrategy.value %>",
	"<% } %>",

	"<% if(model.superheaders.researchanddevelopment.active=== true) { %>",
	"#Research and development",
	"##Roadmap",
	"<%= 	model.roadmap.value %>",
	"##R&D",
	"<%= model.randd.value %>",
	"##Patents, copyright, trademarks",
	"<%= model.copyrightspatents.value %>",
	"<% } %>",

	"<% if(model.superheaders.operationsandemployment.active=== true) { %>",
	"#Operations and employment",
	"##Employees",
	"<%= model.employees.value %>",
	"##Locations and Facilities",
	"<%= model.locationsandfacilities.value %>",
	"##Technology",
	"<%= model.technology.value %>",
	"##Managment structure",
	"<%= model.managmentstructure.value %>",
	"<% } %>",

].join('\n\n');

var compiled = _.template(template);

module.exports = compiled;