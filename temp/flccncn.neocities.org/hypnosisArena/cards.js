const cardColor = {
	"중립":{"border":"#884A39", "name":"#C38154", "textbox":"#F9E0BB"},
	"부정적":{"border":"#B04759", "name":"#E76161", "textbox":"#F9E0BB"},
	"전사":{"border":"#472D2D", "name":"#A77979", "textbox":"#F9E0BB"},
	"암살자":{"border":"#27374D", "name":"#9DB2BF", "textbox":"#F9E0BB"},
	"마술사":{"border":"#352F44", "name":"#968CB2", "textbox":"#F9E0BB"},
	"치유사":{"border":"#183D3D", "name":"#5C8374", "textbox":"#F9E0BB"},
	"고블린즈":{"border":"#5F6F52", "name":"#B99470", "textbox":"#F9E0BB"},
	"마을사람":{"border":"#776B5D", "name":"#B0A695", "textbox":"#F9E0BB"},
	"촉수슬라임":{"border":"#164863", "name":"#9BBEC8", "textbox":"#F9E0BB"},
	"악동":{"border":"#4B4B4B", "name":"#B44545", "textbox":"#F9E0BB"},
	"타우로스":{"border":"#2E2E2E", "name":"#9C9C9C", "textbox":"#F9E0BB"},
	"버섯남자":{"border":"#2C3E3F", "name":"#6A7D6C", "textbox":"#F9E0BB"},
	"금발양아치":{"border":"#5C4033", "name":"#B79F5B", "textbox":"#F9E0BB"},
	"조교사":{"border":"#4A2C2A", "name":"#8E8170", "textbox":"#F9E0BB"},

	"등급":{"normal":"#BFBFBF", "expert":"#5C7893", "ultimate":"#B89C67"}
}

const cardDB = {
	"AD-NT-EL-001":{
		name:{ "KOR":"적응력", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"엘도리아인", cost:10, owner:1,
		tags:[],
		expiration:"active", duration:1,
		flavorText:{ "KOR":"섬, 사막, 설원... 엘도리아인이 살지 못하는 곳은 없다.<br>올딘살레이아 전대륙 곳곳에서 그곳의 환경에 적응해 살고 있는 엘도리아인을 볼 수 있다.", "ENG":"" },
		hypnoText:{ "KOR":"포기해라.<br>자신이 성노예임을 받아들이고, 그에 걸맞는 태도를 취해라.", "ENG":"" },
		effect:[
			{trigger:"orgasm", cond:true, type:"estrus", op:"add", value:-3},
		]
	},
	"AD-NT-EL-002":{
		name:{ "KOR":"다양성", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"엘도리아인", cost:5, owner:1,
		tags:[], related:["tag:엘도리아인 형질"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"본래 엘도리아인이라 묶이는 이들은 여러 인종으로 나뉘어져 있었다.<br>엘도리아 왕국이 그들을 하나의 종족으로 묶으며, 엘도리아인은 가장 다양한 형질을 가진 민족이 되었다.", "ENG":"" },
		hypnoText:{ "KOR":"글릿헤이븐이 엘도리아 왕국에 속해 있다보니, 고객도 상품도 대부분은 엘도리아인이다.<br>그만큼 다양한 상품이 존재하는데, 당신은 어떤 상품인가?", "ENG":"" },
		effect:[
			{trigger:"gameStart", cond:true, type:"state", target:"self", value:"randomCard(tags, 엘도리아인 형질)"},
		]
	},
	"AD-NT-EL-002-1":{
		name:{ "KOR":"중앙 민족", "ENG":"" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["엘도리아인 형질"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"none", cond:true, type:"caption", cond:true, value:{ "KOR":"그저 평범합니다.", "ENG":"" }},
		]
	},
	"AD-NT-EL-002-2":{
		name:{ "KOR":"동방 민족", "ENG":"" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["엘도리아인 형질"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"always", cond:true, type:"exciteL", target:"self", op:"add", value:-2},
			{trigger:"always", cond:true, type:"orgasmL", target:"self", op:"add", value:1},
		]
	},
	"AD-NT-EL-002-3":{
		name:{ "KOR":"북방 민족", "ENG":"" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["엘도리아인 형질"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"always", cond:true, type:"exciteL", target:"self", op:"add", value:5},
			{trigger:"always", cond:true, type:"orgasmL", target:"self", op:"add", value:-1},
		]
	},
	"AD-NT-EL-002-4":{
		name:{ "KOR":"남방 민족", "ENG":"" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["엘도리아인 형질"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"always", cond:true, type:"estrusAndLewd", op:"add", value:1},
		]
	},
	"AD-NT-EL-002-5":{
		name:{ "KOR":"엘도리아 왕족", "ENG":"" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["엘도리아인 형질"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"always", cond:true, type:"orgasmL", target:"self", op:"add", value:1},
		]
	},
	"AD-NT-SY-001":{
		name:{ "KOR":"아름다움", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"실바니", cost:5, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"종족마다 미적 기준이 다르겠지만, 우연히도 실바니의 외모는 엘도리아인이 추구하는 미의 기준에 부합한다.<br>흰 피부, 녹색의 머리카락과 눈동자를 가진 초목실바니에게서는 귀족들이 추구하는 수려한 아름다움이,<br>갈색 피부, 금색의 머리카락과 눈동자를 가진 황혼실바니에게서는 평민들이 추구하는 건강한 아름다움이 느껴진다.", "ENG":"" },
		hypnoText:{ "KOR":"절벽 위의 꽃이라고 생각되지만, 그 실상은 천박한 마조 암컷일 뿐.", "ENG":"" },
		effect:[
			{trigger:"always", cond:{v1:"자기덱.count(type, 패널티)", op:"==", v2:0}, type:"lewd", op:"add", value:1}
		]
	},
	"AD-NT-SY-002":{
		name:{ "KOR":"장생", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"실바니", cost:0, owner:1,
		tags:[], related:["PN-009"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"실바니의 수명은 다른 종족들의 10배가 넘는 수준으로 길다.<br>그 덕분에 개인이 오랜 세월을 살며 체득한 기술과 학문의 깊이는 다른 종족들이 범접할 수 없는 영역에 있다.", "ENG":"" },
		hypnoText:{ "KOR":"실바니는 긴 자연 수명에도 불구하고 노예로서의 수명은 그리 길지 않은 편이다.<br>당신은 오랜 세월 금욕적이게 살아온 것에 대한 반동으로 욕망에 의해 쉽게 망가지고 만다.", "ENG":"" },
		effect:[
			{trigger:"trait", cond:true, type:"maxRound", value:2},
			{trigger:"gameStart", cond:true, type:"get", target:"self", value:"PN-009"},
		]
	},
	"AD-NT-HA-001":{
		name:{ "KOR":"작은 체구", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"하프만", cost:5, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"하프만은 엘도리아인의 절반 남짓밖에 되지 않는 작은 키를 가지고 있다.<br>그러나 근력이 보이는 것과 다르게 강한 편이기에 무시했다간 큰 곤혹을 겪을 것이다.", "ENG":"" },
		hypnoText:{ "KOR":"하프만 노예는 매니악한 수요층을 가지고 있다.<br>귀여운 외모와 그에 비해 언밸런스하게 풍만한 체형을 좋아한다나.", "ENG":"" },
		effect:[
			{trigger:"always", cond:true, type:"lewd", op:"add", value:1},
			{trigger:"always", cond:true, type:"exciteL", target:"self", op:"add", value:-1},
		]
	},
	"AD-NT-HA-002":{
		name:{ "KOR":"손재주", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"하프만", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"공방 거리를 둘러보면 많은 수의 장인이 하프만인 것을 발견할 수 있는데, 하프만은 손이 작은 만큼 정밀한 수작업에 능하기 때문이다.<br>이 타고난 재능은 밑천이 없었던 하프만들이 해방 이후 자리를 잡을 수 있게 만들어주었다.", "ENG":"" },
		hypnoText:{ "KOR":"당신은 섬세하고 자극적인 애무 테크닉을 갖고 있다.<br>장인으로서 활동한다면 우수한 성과를 낼 손기술이지만, 안타깝게도 당신의 인생은 족쇄에 묶인 채 끝날 예정으로 보인다.", "ENG":"" },
		effect:[
			{trigger:"gameStart", cond:true, type:"effect", op:"add",
			info: {
				target:"자기덱.selectCards(all, 추가카드제외, 1)",
				effect:[
					{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
				]
			}},
		]
	},
	"AD-NT-TR-001":{
		name:{ "KOR":"강인한 육체", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"트라이브", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"신체적으로 가장 우수한 인종을 고르라고 하면 올딘살레이아 대륙에선 트라이브가 꼽힐 것이다.<br>태생적으로 탄탄한 근육과 유연성, 그리고 예리한 감각까지.<br>그들의 수가 많고 종족 내 단합력이 강했다면 가장 위협적인 종족이 되었을 것이다.", "ENG":"" },
		hypnoText:{ "KOR":"최근 들어 노예 시장에서는 트라이브 펫이 유행하고 있다.<br>튼튼해서 잘 망가지지 않는데다가, 인간이 아니라 짐승이라고 생각하면 도덕적 부담감 없이 사용하기 좋기 때문이다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:{v1:"자신.절정", op:"==", v2:0}, type:"exciteL", target:"self", op:"add", value:2},
		]
	},
	"AD-NT-TR-002":{
		name:{ "KOR":"야생의 본능", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"트라이브", cost:5, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"트라이브의 감각은 항상 날카롭게 서 있다.<br>주변의 작은 소리, 바람의 흐름, 냄새의 변화. 어느 것도 놓치지 않고 즉각적인 반응을 해낸다.", "ENG":"" },
		hypnoText:{ "KOR":"트라이브는 이성적인 판단보다 본능을 따르는 성향이 있다.<br>조금만 조교하면 당신도 교미를 갈구하는 펫이 될 수 있다!", "ENG":"" },
		effect:[
			{trigger:"always", cond:{v1:"상대.행동.count(type, 공격)", op:">", v2:0}, type:"lewd", op:"add", value:1},
		]
	},


	"AD-NT-BG1-001":{
		name:{ "KOR":"충성심", "ENG":"Loyalty" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"군인", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 신념과 명예를 위해 목숨을 바칠 준비가 되어 있다.<br>상관의 명령과 동료의 안전을 위해 헌신하며, 흔들림 없는 충성은 당신을 진정한 군인의 길로 이끈다.", "ENG":"" },
		hypnoText:{ "KOR":"주인님을 보면 다리를 벌려 보지 경례를 할 것.<br>암컷 병사로서 음탕함을 정진시킬 것.<br>언제 어디서든 명령에 따라 몸을 바칠 것.", "ENG":"" },
		effect:[
			{trigger:"always", cond:true, type:"lewd", op:"add", value:1},
		]
	},
	"AD-NT-BG1-002":{
		name:{ "KOR":"군기", "ENG":"Discipline" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"군인", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"철저한 규율과 엄격한 훈련을 통해 다져진 당신은 어떤 상황에서도 흔들리지 않는다.<br>군의 명예와 전통을 지키며, 강한 정신력과 기강으로 질서를 지킨다.", "ENG":"" },
		hypnoText:{ "KOR":"매일 아침 자위 점호를 실시한다.<br>허가가 내려오기 전까지는 멋대로 절정해선 안된다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:true, type:"estrus", op:"add", value:-2},
		]
	},
	"AD-NT-BG2-001":{
		name:{ "KOR":"부유한 재산", "ENG":"Rich Property" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"엘리트", cost:-20, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"풍부한 재산을 통해 원하는 것은 무엇이든 손에 넣을 수 있다.<br>가지고 싶은 물건이 있다면 구매하면 되고, 얻고 싶은 능력이 있다면 고용하면 된다.", "ENG":"" },
		hypnoText:{ "KOR":"암컷의 사유재산은 인정되지 않는 것이 상식이다.<br>주인으로 삼을 남성을 찾으면 전재산과 몸을 전부 넘겨야 한다.", "ENG":"" },
		effect:[
			{trigger:"trait", cond:true, type:"maxDeck", value:2},
		]
	},
	"AD-NT-BG2-002":{
		name:{ "KOR":"교양", "ENG":"Cultured" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"엘리트", cost:10, owner:1,
		tags:[], related:["궁극"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 고귀한 지위와 다양한 경험을 통해 세련된 매너와 예절을 몸에 새겨왔다.<br>품위를 지키는 것으로 상대에게 당신의 격을 알릴 수 있으며, 부족한 이를 공격할 무기를 얻을 수 있다.", "ENG":"" },
		hypnoText:{ "KOR":"치마를 들추고 다리를 벌려 상대 남성 분께 보지를 보이며 인사할 것.<br>희롱하는 말이나 몸에 대한 평가를 들을 경우 감사를 표할 것.", "ENG":"" },
		effect:[
			{trigger:"gameStart", cond:true, type:"get", target:"self", value:"randomCard(rarity, 궁극)"},
		]
	},
	"AD-NT-BG3-001":{
		name:{ "KOR":"퍼포먼스", "ENG":"Performance" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"연예인", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"무대 위에서 빛나는 당신은 사람들의 이목을 사로잡는 재능을 지니고 있다.<br>당신의 화려한 동작 하나하나가 아군의 호응을 불러일으키고, 적들을 현혹시킨다.", "ENG":"" },
		hypnoText:{ "KOR":"공연의 내용은 발정 공개 자위.<br>하이라이트는 절정 분수쇼.", "ENG":"" },
		effect:[
			{trigger:"always", cond:{v1:"라운드", op:">=", v2:7}, type:"lewd", op:"add", value:3},
		]
	},
	"AD-NT-BG3-002":{
		name:{ "KOR":"팬 서비스", "ENG":"Fan Service" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"연예인", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"팬들과의 소통은 당신의 성공 비결이다.<br>그들의 사랑에 보답하며, 언제나 따뜻한 미소와 진심 어린 마음으로 다가섰기에 지금과 같은 인기를 끌 수 있었다.", "ENG":"" },
		hypnoText:{ "KOR":"팬들의 성원에 감사하며 그들에게 대딸해주는 일상.<br>얼굴로 사정을 받아내며 팬들의 자지의 모양과 냄새, 그리고 감촉을 기억해주는 것이 스타의 소양.", "ENG":"" },
		effect:[
			{trigger:"turnEnd", cond:{v1:"자기덱.length", op:"<=", v2:5}, type:"excite", target:"op", op:"add", value:3},
		]
	},
	"AD-NT-BG4-001":{
		name:{ "KOR":"순결", "ENG":"Purity" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"종교인", cost:5, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"몸과 마음을 신에게 바쳐 깨끗하게 유지해왔다.<br>세속의 유혹을 이겨내며, 신성한 목적을 위해 자신을 지키는 것이 곧 당신의 신념이다.", "ENG":"" },
		hypnoText:{ "KOR":"신에게 봉사하는 몸으로서 순결은 중요한 사항.<br>봉사와 접대 중에도 뒷구멍만 사용하며 앞보지는 신품을 유지해야 한다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:true, type:"estrusAndLewd", op:"add", value:-2},
		]
	},
	"AD-NT-BG4-002":{
		name:{ "KOR":"신앙심", "ENG":"Piety" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"종교인", cost:5, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"신에 대한 깊은 믿음은 당신을 강인하게 만든다.<br>이 신앙심은 어려운 순간에도 흔들림 없는 의지와 용기를 불어넣어 주며, 주변 사람들에게도 큰 영감과 희망을 준다.", "ENG":"" },
		hypnoText:{ "KOR":"자지님을 숭배하며 마음 깊이 섬길 것.<br>거룩하신 육봉으로 음탕한 구멍을 쑤셔주며, 신성한 정액을 질내에 듬뿍 뿌려 임신시켜 주는 것에 감사해야 한다.", "ENG":"" },
		effect:[
			{trigger:"trait", cond:true, type:"maxRound", value:2},
		]
	},
	"AD-NT-BG5-001":{
		name:{ "KOR":"통찰력", "ENG":"Insight" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"학자", cost:10, owner:1,
		tags:[], related:["tag:탐구"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 깊이 있는 지식과 날카로운 분석력으로 사물의 본질을 꿰뚫어 보는 재능을 가졌다.<br>당신의 통찰력은 복잡한 상황에서도 명확한 길을 제시한다.", "ENG":"" },
		hypnoText:{ "KOR":"성교를 통해 남성을 기분좋게 하는 법에 대해 연구하고 통찰하는 것이 당신의 연구 분야.<br>자신의 몸을 실험 도구로 삼아, 체위와 행위에 따른 발기의 정도와 사정량을 분석해야 한다.", "ENG":"" },
		effect:[
			{trigger:"turnStart", cond:true, type:"state", target:"self", value:"randomCard(tags, 탐구)"},
		]
	},
	"AD-NT-BG5-001-1":{
		name:{ "KOR":"역학 탐구", "ENG":"" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["탐구"],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"turnEnd", cond:{v1:"자신.기록.이번.사용.count(type, 공격)", op:">", v2:0}, type:"lewd", op:"add", value:1},
		]
	},
	"AD-NT-BG5-001-2":{
		name:{ "KOR":"관찰 탐구", "ENG":"" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["탐구"],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"turnEnd", cond:{v1:"자신.기록.이번.사용.count(type, 보조)", op:">", v2:0}, type:"estrus", op:"add", value:-1},
		]
	},
	"AD-NT-BG5-001-3":{
		name:{ "KOR":"통계 탐구", "ENG":"" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["탐구"],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"turnEnd", cond:{v1:"자신.기록.이번.사용.count(type, 패널티)", op:">", v2:0}, type:"exciteL", target:"self", op:"add", value:1},
		]
	},
	"AD-NT-BG5-002":{
		name:{ "KOR":"박학다식", "ENG":"Erudition" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"학자", cost:20, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"방대한 지식을 가졌으며 다양한 학문에 정통한 당신은, 어떤 주제든 깊게 이해할 수 있다.<br>이 박학다식함은 어떤 상황에 처해도 적절한 대처법을 떠올릴 수 있게 해준다.", "ENG":"" },
		hypnoText:{ "KOR":"자위의 쾌락을 높이는 법, 가장 반응이 좋은 성감대, 흥분되는 상황...<br>특수한 페티시 플레이, 혀를 사용한 애무 방법, 필로우 토크용 대화 소재...", "ENG":"" },
		effect:[
			{trigger:"always", cond:true, type:"lewd", op:"add", value:"자신.기록.전체.사용.count(class, 중립)", maxValue:3},
			{trigger:"none", cond:true, type:"showValue", value:"자신.기록.전체.사용.count(class, 중립)", maxValue:3},
		]
	},
	"AD-NT-BG6-001":{
		name:{ "KOR":"귀축", "ENG":"Cruel" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"범죄자", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 잔인함 그 자체다.<br>감정 없는 눈으로 상대를 짓밟으며, 고통 속에서 비명을 지르는 모습조차도 오락으로 받아들인다.<br>자비와 동정은 당신의 사전에 없으며, 필요하다면 가장 극악무도한 방법으로라도 목표를 달성한다.", "ENG":"" },
		hypnoText:{ "KOR":"억지로 여성에게 범해져 질내사정하게 되는 것은 남성에게 최대의 굴욕이다.<br>위험일의 생 섹스로 임신해버리겠다고 말하면 상대는 얼마나 절망스러운 표정을 지을까.", "ENG":"" },
		effect:[
			{trigger:"always", cond:{v1:"라운드", op:"<=", v2:3}, type:"lewd", op:"add", value:3},
		]
	},
	"AD-NT-BG6-002":{
		name:{ "KOR":"편법", "ENG":"Expedient" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"범죄자", cost:0,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 규칙과 법을 교묘히 회피하는 능력이 뛰어나다.<br>정직한 방법으로는 얻을 수 없는 이익을 취하며 부당한 이득을 취해왔다.", "ENG":"" },
		hypnoText:{ "KOR":"도시 경비병에게 범죄 행각이 발각되었을 때는 한 번 대주는 것으로 무마하곤 했다.<br>어느 순간부터 경비병들 사이에서는 당신이 다니는 시간에 근무하면 공짜로 한 발 뺄 수 있다는 소문이 돌게 되었다.", "ENG":"" },
		effect:[
			{trigger:"trait", cond:true, type:"maxDeck", value:-2},
		]
	},
	"AD-NT-BG7-001":{
		name:{ "KOR":"접객", "ENG":"Customer Service" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"상인", cost:20, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 고객을 대하는 데 탁월한 재능을 지니고 있다.<br>친절하고 능숙한 접객 능력은 사람들의 호감을 사고, 거래를 성사시키는 데 큰 도움을 준다. ", "ENG":"" },
		hypnoText:{ "KOR":"몸을 사용해 고객들에게 서비스 해야한다.<br>서비스 값은 정액으로 지불 받는다.", "ENG":"" },
		effect:[
			{trigger:"turnStart", cond:true, type:"get", target:"self", value:"randomCard(rarity, 일반)"},
		]
	},
	"AD-NT-BG7-002":{
		name:{ "KOR":"정확한 가격책정", "ENG":"Accurate Pricing" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"상인", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"너무 비싸면 팔리지 않고, 너무 저렴하면 손해를 본다.<br>판매 품목의 정확한 가치를 매기는 능력은 상인으로서 요구되는 기본적인 감각이다.", "ENG":"" },
		hypnoText:{ "KOR":"값을 매길 가치도 없는 싸구려 보지.<br>공짜로 이용해준 고객에게 감사를 표할 것.", "ENG":"" },
		effect:[
			{trigger:"always", cond:true, type:"lewd", op:"add", value:"자신.기록.이번.이벤트.획득.length", maxValue:3},
			{trigger:"none", cond:true, type:"showValue", value:"자신.기록.이번.이벤트.획득.length", maxValue:3},
		]
	},
	"AD-NT-BG8-001":{
		name:{ "KOR":"서바이벌", "ENG":"Survival" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"용병", cost:5, owner:1,
		tags:["act:삽입"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 살아남는 법을 안다.<br>극한의 상황에서도 냉정하게 판단하며, 최악을 피하는 길을 찾아낸다.<br>당신에게는 전장이든 황무지든 살아남기 위한 본능과 경험이 모든 것을 결정한다.", "ENG":"" },
		hypnoText:{ "KOR":"목숨이 위험해졌을 때는 벌릴테니 살려달라고 애원해야 한다.<br>범해지다가 폐인이 되어 망가진 연기를 하면 적당히 놓아줄 것이다.", "ENG":"" },
		effect:[
			{trigger:"usePenalty", cond:true, type:"attack", target:"op"},
		]
	},
	"AD-NT-BG8-002":{
		name:{ "KOR":"프리랜서", "ENG":"Freelancer" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"용병", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"다양한 의뢰와 계약을 통해 경험을 쌓아온 당신은, 어떠한 상황에서도 독립적으로 일할 수 있는 능력을 지니고 있다.<br>이 자유로움과 융통성 덕분에 여러 상황에 빠르게 적응하며, 고용주들에게 신뢰받는 용병으로 자리매김한다.", "ENG":"" },
		hypnoText:{ "KOR":"일이 없을 때는 하루종일 자위를 하곤 했다.<br>겁탈 당하는 망상을 하며 여관의 침대를 적셨다.", "ENG":"" },
		effect:[
			{trigger:"turnEnd", cond:{v1:"자신.기록.이번.사용.length", op:"==", v2:0}, type:"exciteL", target:"self", op:"add", value:2},
		]
	},

	"AD-NT-EL-BG1-001":{
		name:{ "KOR":"여왕의 검", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"엘도리아인", bg:"군인", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"엘도리아 왕국의 여왕에게는 그녀의 명령을 수행하는 충성스러운 직속 부하들이 있다.<br>그녀의 명에 따라 호위, 조사, 암살. 다양한 임무를 수행하며 죽음도 불사하는 정예 병사들.<br>당신 또한 그 일원으로서, 지금 여왕 폐하가 주신 임무를 수행하기 위해 이 자리에 있다.", "ENG":"" },
		hypnoText:{ "KOR":"당신의 충성심의 근거에는 여왕에 대한 불경한 욕망이 자리잡고 있었다.<br>매일 그녀의 몸을 반찬으로 삼아 자위하며, 차라리 이 죄를 들켜 벌을 받기를 원하고 있다.", "ENG":"" },
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"<b>지속: 발정</b>이 실제 값보다 낮다면 그만큼 <b>음란</b>을 증가시킨다.", "ENG":"" }},
		]
	},
	"AD-NT-EL-BG2-001":{
		name:{ "KOR":"노블레스 오블리주", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"엘도리아인", bg:"엘리트", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"부와 권력은 그에 따르는 책임과 의무를 수반한다.<br>엘도리아의 귀족이라면 그 자리에 걸맞는 품위를 지니며 모범이 되어야만 한다.", "ENG":"" },
		hypnoText:{ "KOR":"귀족 여성에게는 평민들의 성욕 해소를 위해 몸을 바칠 의무가 있다.<br>주기적으로 광장에 알몸으로 구속되어 누구나 사용할 수 있는 공공육변기로서 설치되어야 한다.", "ENG":"" },
		effect:[
			{trigger:"turnEnd", cond:{v1:"라운드", op:"==", v2:1}, type:"get", target:"self", value:"자신.기록.이번.사용.selectCards(all, null, 1)"},
		]
	},
	"AD-NT-EL-BG3-001":{
		name:{ "KOR":"영웅", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"엘도리아인", bg:"연예인", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"곤란한 이들이 있다면 돕는 것이 옳지 않은가?<br>당신의 힘이라면 마을 사람들을 괴롭히던 몬스터를 토벌하는 정도는 일도 아니었다.<br>그러니 보상으로는 술 한 잔이면 충분하다고 생각했다.", "ENG":"" },
		hypnoText:{ "KOR":"당신은 부탁받은 일이 무엇이든 거절할 수 없다.<br>수상한 음료를 건네받아 마시곤, 잠든 사이에 자신이 구해준 이들에게 돌려 먹히더라도 어쩔 수 없다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:{v1:"라운드", op:">=", v2:7}, type:"maxUse", target:"self", value:1},
		]
	},
	"AD-NT-EL-BG4-001":{
		name:{ "KOR":"알레이아의 계시", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"엘도리아인", bg:"종교인", cost:10, owner:1,
		tags:[],
		expiration:"active", duration:1,
		flavorText:{ "KOR":"레이아교의 신도들은 주기적으로 기도를 올리는 시간을 갖는다.<br>이 때 드물게 여신 알레이아님께서 사람들에게 말씀을 전하는 때가 있는데,<br>무슨 일이 있어도 그 계시를 따르는 것. 그것이 레이아교의 사명이다.", "ENG":"" },
		hypnoText:{ "KOR":"계시로 받은 명령은 그것이 무엇이든 반드시 지켜야 한다.<br>그것이 남성들과 난교를 하라는 명령일지라도.", "ENG":"" },
		effect:[
			{trigger:"turnStart", cond:{v1:"자신.흥분", op:">=", v2:4}, type:"excite", target:"self", op:"set", value:0},
		]
	},
	"AD-NT-EL-BG5-001":{
		name:{ "KOR":"아카데미 교사", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"엘도리아인", bg:"학자", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"라피스 라줄리 아카데미는 대륙에서 두 번째로 큰 학술원이다.<br>이곳에선 종족과 신분을 가리지 않으며, 누구에게나 공평하게 배움의 장이 열려있다는 사상을 표방하고 있다.", "ENG":"" },
		hypnoText:{ "KOR":"평민 교사는 귀족 학생들의 장난감이나 다름 없다.<br>옷이 벗겨지고, 희롱당하며, 끝내 그들의 화장실로 사용되더라도 웃으며 비위를 맞춰야 한다.", "ENG":"" },
		effect:[
			{trigger:"turnEnd", cond:{v1:"자기덱.count(type, 공격)", op:"==", v2:0}, type:"lewd", op:"add", value:2},
		]
	},
	"AD-NT-EL-BG6-001":{
		name:{ "KOR":"강도", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"엘도리아인", bg:"범죄자", cost:5, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"밤 거리를 혼자 걷는 것은 좋지 못하다.<br>뒷골목에서 어떤 범죄가 그쪽을 노리고 있을지 모른다.<br>당신은 이러한 주의가 부족한 사람들에게서 '수업료'를 걷곤 했다.", "ENG":"" },
		hypnoText:{ "KOR":"정액 강도로서 밤길을 홀로 걷는 남성들을 덮치곤 했다.<br>이런 탐스러운 자지를 가지고 무방비하게 다닌 것이 잘못 아닌가?", "ENG":"" },
		effect:[
			{trigger:"always", cond:true, type:"specialA13"},
		]
	},
	"AD-NT-EL-BG7-001":{
		name:{ "KOR":"에저웨이브 상회", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"엘도리아인", bg:"상인", cost:5, owner:1,
		tags:[], related:["중립공격"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"에저웨이브는 왕국에서 가장 큰 상회의 주인이자 항구 도시를 영지로 갖고 있는 귀족 가문이다.<br>그들은 왕국의 경제에 거대한 영향을 끼치고 있기에 때로는 여왕도 그들을 마음대로 하지 못하는게 실정이다.", "ENG":"" },
		hypnoText:{ "KOR":"진정한 상인이라면 자신조차 상품으로 판매할 수 있어야 한다.<br>자신의 주인이 되어줄 고객에게 그에 걸맞는 자세를 취해야 한다.", "ENG":"" },
		effect:[
			{trigger:"gameStart", cond:true, type:"get", target:"self", value:"randomCard(class, 중립공격)"},
			{trigger:"gameStart", cond:true, type:"effect", op:"add",
			info:{
				target:"파생",
				effect:[
					{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
				]
			}},
		]
	},
	"AD-NT-EL-BG8-001":{
		name:{ "KOR":"복수귀", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"엘도리아인", bg:"용병", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 사랑하는 이를 잃었고, 그 복수를 위해 모든 것을 내던졌다.<br>복수 만이 당신의 삶을 지배하며, 원수를 무찌르기 전에는 결코 멈추지 않을 것이다.", "ENG":"" },
		hypnoText:{ "KOR":"계속되는 패배 강간에 복수심이 옅어졌다.<br>이제는 패배를 기대하며 덤비기에 이르렀다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:{v1:"자신.기록.이전.이벤트.절정", op:">", v2:0}, type:"lewd", op:"add", value:3},
		]
	},

	"AD-NT-SY-BG1-001":{
		name:{ "KOR":"황혼 부대", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"실바니", bg:"군인", cost:20, owner:1, priority:99,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"실바니아 연방국에는 황혼실바니를 주축으로 구성된 포수 부대가 존재했다.<br>푸른색 제복을 입고 최신식 메카릴론 공학 기술이 도입된 병기를 다루는 그들은 전장에서 공포의 대상이었다.<br>해당 부대는 종전 이후 해체되었으며, 정예 병사들은 은퇴하거나 당신처럼 다른 일을 맡게 되었다.", "ENG":"" },
		hypnoText:{ "KOR":"복리후생 부대의 정액변소병.<br>지정된 장소에 설치되어 병사들의 성욕 처리를 담당해야 한다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:true, type:"modifier", stat:"lewd", op:"add", value:1},
		]
	},
	"AD-NT-SY-BG2-001":{
		name:{ "KOR":"씨족평의회 의원", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"실바니", bg:"엘리트", cost:15, owner:1,
		tags:[], related:["tag:비전"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"실바니아 연방국에서는 각 씨족을 대표하는 의원을 선출하여 정치적 안건을 다룬다.<br>정책을 만들거나 수정할 때마다 의원 간 의견이 갈리지만, 논쟁하고 합의하는 과정에서 실바니아는 발전해왔다.", "ENG":"" },
		hypnoText:{ "KOR":"여성 의원의 몸은 씨족을 위한 공공재로서 취급한다.<br>업무 도중 민원이 들어오면 언제든 몸을 사용할 수 있도록 제공해야 한다.", "ENG":"" },
		effect:[
			{trigger:"gameStart", cond:true, type:"get", target:"self", value:"randomCard(tags, 비전)"},
		]
	},
	"AD-NT-SY-BG3-001":{
		name:{ "KOR":"모델", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"실바니", bg:"연예인", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"일부 상회에서는 실바니를 모델로 고용하여 자신들의 주력 상품을 착용한 채 활동할 것을 부탁한다.<br>그들의 아름다움은 필연적으로 시선을 끌기 때문에 자연스럽게 상품 홍보가 되기 때문이다.", "ENG":"" },
		hypnoText:{ "KOR":"우수한 딸감이 될 수 있도록 누드 화보를 촬영한다.<br>가슴의 크기부터 보지의 주름까지 모든 것을 드러내어 모르는 이가 없다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:true, type:"exciteL", target:"self", op:"set", value:"라운드", additional:2},
		]
	},
	"AD-NT-SY-BG5-001":{
		name:{ "KOR":"특이점", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"실바니", bg:"학자", cost:10, owner:1,
		tags:[], related:["tag:초월"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"대륙에서 가장 거대한 학술원인 신목학술원에서는 매일 수 많은 실바니 연구원들이 연구를 진행하고 있다.<br>개중에는 간혹 지금껏 연구된 이론들을 뒤집는 혁신적인 이론이 발견되며 기술이 크게 발전하게 된다.", "ENG":"" },
		hypnoText:{ "KOR":"만물의 진리와 존재의 허상.<br>도저히 당신이 받아들일 수 있는 지식들이 아니었다.", "ENG":"" },
		effect:[
			{trigger:"turnEnd", cond:{v1:"자기덱.length", op:"==", v2:0}, type:"get", target:"self", value:"randomCard(tags, 초월)"},
		]
	},
	"AD-NT-SY-BG6-001":{
		name:{ "KOR":"금술회", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"실바니", bg:"범죄자", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"금술회는 금지된 술법에 대한 호기심을 주체하지 못한 이들이 모인 동호회다.<br>금지된 술법에는 그럴만한 이유가 있는 법.<br>이들은 자주 폭주와 참사를 일으키기에 연방 전역에서 수배 중이다.", "ENG":"" },
		hypnoText:{ "KOR":"이계의 차원문 너머에서 온 촉수에게 매료되고 말았다.<br>그들에게 영양과 마력을 공급하라. 그들에게 바칠 여성들을 붙잡아와라.", "ENG":"" },
		effect:[
			{trigger:"always", cond:{v1:"라운드", op:"==", v2:1}, type:"maxUse", target:"self", value:1},
		]
	},
	"AD-NT-SY-BG7-001":{
		name:{ "KOR":"감정안", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"실바니", bg:"상인", cost:10, owner:1,
		tags:["act:펠라치오"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"오래 살아온 만큼 다양한 것을 보고 경험한 실바니 골동품상은 물건의 가치를 파악하는 안목이 뛰어나다.<br>몇 세기 전의 물건이 이들에게는 '오랜만에 보는 것'일 가능성이 높다.", "ENG":"" },
		hypnoText:{ "KOR":"자지의 길이와 두께, 냄새 등을 감정한다.<br>감정료는 안면 사정. 최고 품질의 정액을 원한다.", "ENG":"" },
		effect:[
			{trigger:"useCreatedCard", cond:true, type:"excite", target:"op", op:"add", value:1},
		]
	},
	"AD-NT-SY-BG8-001":{
		name:{ "KOR":"처세술", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"실바니", bg:"용병", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"정의로울 필요도 문제를 바로잡을 의무도 없는 용병이라면, 귀찮고 번거로운 승리보단 한 번 져주고 넘어가는 길을 택할 것이다.", "ENG":"" },
		hypnoText:{ "KOR":"편의를 위해 유력자를 유혹하곤 했다.<br>가볍게 대주고 대가를 취하는 것이 당신이 살아가는 방법.", "ENG":"" },
		effect:[
			{trigger:"orgasm", cond:true, type:"exciteL", target:"self", op:"add", value:2},
		]
	},

	"AD-NT-HA-BG1-001":{
		name:{ "KOR":"고용된 사병", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"하프만", bg:"군인", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"하프만이 번듯한 일자리를 구하는 것은 쉽지 않은 일이다.<br>잘 사라지지 않는 여러 오해와 편견 때문에 그들을 고용해주는 이들을 찾기 어렵기 때문이다.<br>만약 누군가가 하프만을 고용했다면, 굉장히 열린 사고 방식을 가졌거나, 가볍게 쓰고 버릴 일회용 인력이 필요했을 것이다.", "ENG":"" },
		hypnoText:{ "KOR":"주인님과의 행복한 산책 시간의 기억.<br>펫 주제에 진지하게 고용된 것으로 착각하지 말 것.", "ENG":"" },
		effect:[
			{trigger:"always", cond:{v1:"라운드", op:"in", v2:[1,3,5,7]}, type:"lewd", op:"add", value:1},
			{trigger:"always", cond:{v1:"라운드", op:"in", v2:[2,4,6,8]}, type:"estrus", op:"add", value:-2},
		]
	},
	"AD-NT-HA-BG3-001":{
		name:{ "KOR":"아이돌", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"하프만", bg:"연예인", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"하프만 성인에게 섣불리 귀엽다고 하는 것은 인종차별이지만, 아예 그 종족적 특징을 이용하기로 마음 먹은 이들도 있다.<br>아이돌이라 불리는 독특한 형태의 음유시인들은 귀여운 춤과 노래로 고유 팬층을 만들어 활동하고 있다.", "ENG":"" },
		hypnoText:{ "KOR":"팬이 원하면 즉시 섹스 접대를 하는 것이 아이돌의 기본 상식.<br>열혈팬들에게는 생으로 질내사정까지 허용한다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:{v1:"자기덱.length", op:"==", v2:1}, type:"lewd", op:"add", value:5},
		]
	},
	"AD-NT-HA-BG4-001":{
		name:{ "KOR":"선택하는 신도", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"하프만", bg:"종교인", cost:15, owner:1,
		tags:[], related:["AD-NT-HA-BG4-001-1"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"엘도리아 왕국의 국교인 레이아교는 엘도리아인 외의 다른 종족들을 차별하는 경향이 있다.<br>그 탓에 대부분의 하프만은 무교이거나, 알레이아와 대립하는 악신 모르베인을 섬기는 사교에 들어가게 된다.", "ENG":"" },
		hypnoText:{ "KOR":"교리에 따라서... 거유를 의복으로 가리지 않고 적극적으로 드러낼 것.<br>욕망에 충실하고 성을 탐할 것. 집회에서 난교를 수행할 것.", "ENG":"" },
		effect:[
			{trigger:"gameStart", cond:true, type:"get", target:"self", value:"AD-NT-HA-BG4-001-1"},
		]
	},
	"AD-NT-HA-BG4-001-1":{
		name:{ "KOR":"모르베인의 거래", "ENG":"" }, class:"중립", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		effect:[
			{trigger:"used", cond:true, type:"exciteL", target:"self", op:"add", value:-1},
			{trigger:"used", cond:true, type:"state", target:"self", value:"AD-NT-HA-BG4-001-2"},
		]
	},
	"AD-NT-HA-BG4-001-2":{
		parents:"AD-NT-HA-BG4-001-1",
		name:{ "KOR":"어두운 가호", "ENG":"" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		expiration:"turnEnd", duration:1,
		tags:[],
		effect:[
			{trigger:"always", cond:true, type:"immune", target:"self"},
		]
	},
	"AD-NT-HA-BG5-001":{
		name:{ "KOR":"독학", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"하프만", bg:"학자", cost:15, owner:1,
		tags:[], related:["AD-NT-HA-BG5-001-1"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"두드러지는 재능과 후원자를 얻을 운을 갖고 있지 않다면 하프만은 아카데미에 발을 들이기 어렵다.<br>하지만 연금술이라는 분야가 하프만 빈민지구에서 시작되었듯, 가끔 밑천 없는 독학으로 훌륭한 성과를 내는 경우가 존재한다.", "ENG":"" },
		hypnoText:{ "KOR":"자신의 몸을 사용해 임상실험해야 한다.<br>임계를 넘은 쾌락에 신경이 전부 타버리는 것을 주의.", "ENG":"" },
		effect:[
			{trigger:"gameStart", cond:true, type:"get", target:"self", repeat:3, value:"AD-NT-HA-BG5-001-1"},
			{trigger:"turnEnd", cond:{v1:"자기덱.count(id, AD-NT-HA-BG5-001-1)", op:"==", v2:0}, type:"lewd", op:"add", value:2},
		]
	},
	"AD-NT-HA-BG5-001-1":{
		name:{ "KOR":"시행착오", "ENG":"" }, class:"중립", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{"KOR":"무슨 방법을 쓰든 해결하면 그만입니다.", "ENG":""}},
		]
	},
	"AD-NT-HA-BG6-001":{
		name:{ "KOR":"테러리스트", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"하프만", bg:"범죄자", cost:20, owner:1, priority:99,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"해방 이후로 아직까지도 많은 분야에서 하프만의 권익이 지켜지지 못하는 것이 현실이기에, 하프만 인권단체들은 바삐 활동한다.<br>개중에는 활동의 수위가 매우 위험한 과격한 단체도 있어 상황을 복잡하게 만든다.", "ENG":"" },
		hypnoText:{ "KOR":"당신의 주된 활동은 공공장소에서 나체를 드러내는 테러.<br>엘도리아인들에게 하프만 따위의 몸에 꼴렸다는 수치심을 안겨주어라.", "ENG":"" },
		effect:[
			{trigger:"always", cond:{v1:"라운드", op:"<=", v2:3}, type:"modifier", stat:"excite", target:"op", op:"add", value:1},
		]
	},
	"AD-NT-HA-BG7-001":{
		name:{ "KOR":"장인", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"하프만", bg:"상인", cost:20, owner:1,
		tags:[], related:["AD-NT-HA-BG7-001-1", "tag:기계부품"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"정밀한 수공예품에 한해서 '하프만제'는 고급품을 뜻한다.<br>모든 하프만이 재주가 좋은 것은 아니지만, 가장 재주가 좋은 장인을 뽑으면 그 사람은 하프만일 것이다.", "ENG":"" },
		hypnoText:{ "KOR":"강제절정 자위 장치 사용법: 장치를 삽입 후 타이머를 설정하고 스위치를 켠다.<br>※ 주의: 도중에 정지 불가능!", "ENG":"" },
		effect:[
			{trigger:"gameStart", cond:true, type:"get", target:"self", value:"AD-NT-HA-BG7-001-1"},
			{trigger:"turnEnd", cond:true, type:"effect", op:"add", repeat:2,
			info:{
				target:"자기덱.selectCards(id, AD-NT-HA-BG7-001-1, 1)",
				effect:[{trigger:"none", cond:true, type:"specialA03"},],
			}},
		]
	},
	"AD-NT-HA-BG7-001-1":{
		name:{ "KOR":"기계장치", "ENG":"" }, class:"중립", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["act:삽입"],
		effect:[
			{trigger:"used", cond:true, keepLine:true, type:"lewd", op:"add", value:0},
			{trigger:"used", cond:true, keepLine:true, type:"estrus", op:"add", value:0},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"AD-NT-HA-BG7-001-1-1":{
		name:{ "KOR":"추가 팔", "ENG":"" }, class:"중립", type:"-", rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["기계부품"],
		effect:[
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"none", cond:true, type:"caption", value:{"KOR":"이 효과가 추가됩니다.", "ENG":""}},
		]
	},
	"AD-NT-HA-BG7-001-1-2":{
		name:{ "KOR":"강화 동력", "ENG":"" }, class:"중립", type:"-", rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["기계부품"],
		effect:[
			{trigger:"used", cond:true, type:"lewd", op:"add", value:1},
			{trigger:"none", cond:true, type:"caption", value:{"KOR":"이 효과가 추가됩니다.", "ENG":""}},
		]
	},
	"AD-NT-HA-BG7-001-1-3":{
		name:{ "KOR":"냉각기", "ENG":"" }, class:"중립", type:"-", rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["기계부품"],
		effect:[
			{trigger:"used", cond:true, type:"estrus", op:"add", value:-2},
			{trigger:"none", cond:true, type:"caption", value:{"KOR":"이 효과가 추가됩니다.", "ENG":""}},
		]
	},
	"AD-NT-HA-BG7-001-1-4":{
		name:{ "KOR":"진동 모듈", "ENG":"" }, class:"중립", type:"-", rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["기계부품"],
		effect:[
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:3},
			{trigger:"none", cond:true, type:"caption", value:{"KOR":"이 효과가 추가됩니다.", "ENG":""}},
		]
	},
	"AD-NT-HA-BG7-001-1-5":{
		name:{ "KOR":"보호 장갑", "ENG":"" }, class:"중립", type:"-", rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["기계부품"],
		effect:[
			{trigger:"used", cond:true, type:"exciteL", target:"self", op:"add", value:1},
			{trigger:"none", cond:true, type:"caption", value:{"KOR":"이 효과가 추가됩니다.", "ENG":""}},
		]
	},
	"AD-NT-HA-BG8-001":{
		name:{ "KOR":"방심 유도", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"하프만", bg:"용병", cost:20, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"귀여워 보이는 외모는 반대로 치명적인 무기가 될 수 있다.<br>하프만이 든다고 해서 날카로운 칼이 무딘 장난감 칼로 바뀌는 것은 아니라는 사실을 의외로 많이들 잊는다.", "ENG":"" },
		hypnoText:{ "KOR":"발가벗은 복장으로 시선을 끌어라.<br>풍만한 육체와 관능적인 포즈로 유혹해 상대를 속여라.", "ENG":"" },
		effect:[
			{trigger:"always", cond:{v1:"자신.기록.이전.사용.count(type, 패널티)", op:">", v2:0}, type:"maxUse", target:"self", value:1},
		]
	},

	"AD-NT-TR-BG1-001":{
		name:{ "KOR":"부족의 파수꾼", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"트라이브", bg:"군인", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"파수꾼은 분쟁, 재해, 침입, 외부 요인들로부터 부족을 지키고자 창과 지팡이를 들기를 자처한 이들이다.<br>보통 부족 내에서 두 번째로 강한 이들이 맡게 되는 자리이다.", "ENG":"" },
		hypnoText:{ "KOR":"수상한 인물을 발견하면 즉시 교미를 통해 제압해야 한다.<br>파수꾼의 이름을 걸고, 패배 절정하지 않도록 주의.", "ENG":"" },
		effect:[
			{trigger:"always", cond:{v1:"체위", op:"==", v2:false}, type:"lewd", op:"add", value:1},
			{trigger:"always", cond:"체위", type:"estrus", op:"add", value:-2},
		]
	},
	"AD-NT-TR-BG2-001":{
		name:{ "KOR":"부족장", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"트라이브", bg:"엘리트", cost:20, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"부족장은 트라이브 부족을 이끄는 우두머리이며 부족의 가치에 가장 적합한 사람이 맡게되는 자리이다.<br>전투부족에서는 가장 전투력이 높은 사람이, 주술부족에서는 가장 주술 능력이 뛰어난 사람이 부족장이 되는 식이다.", "ENG":"" },
		hypnoText:{ "KOR":"부족장으로서 신체 부위를 드러내는 전통 복장을 착용해야 한다.<br>육체를 과시하는 목적이며 전혀 이상하지 않다.", "ENG":"" },
		effect:[
			{trigger:"gameStart", cond:true, type:"get", target:"self", value:"자기덱.selectCards(all, null, 2)"},
		]
	},
	"AD-NT-TR-BG3-001":{
		name:{ "KOR":"위기 연출", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"트라이브", bg:"연예인", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"격투 경기장의 챔피언은 이기는 것보다 화려한 것이 더 중요하다.<br>긴장감을 연출하고 반전을 선사해 관객들에게 카타르시스를 주는 것이 그들의 특기이다.", "ENG":"" },
		hypnoText:{ "KOR":"아헤가오와 돼지 같은 울음소리는 위기 상황을 연출하기에 좋다.<br>단순한 연기가 아니라 진정으로 천박해져야 한다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:{v1:"자신.남은절정", op:"==", v2:1}, type:"exciteL", target:"self", op:"add", value:5},
		]
	},
	"AD-NT-TR-BG4-001":{
		name:{ "KOR":"황금지팡이의 인도", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"트라이브", bg:"종교인", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"황금줄기 신앙의 수행자에게 주어지는 황금지팡이는 그들의 상징과도 같다.<br>지팡이는 항상 어느 곳을 가리키려고 하는 성질이 있고, 그 끝에는 정화가 필요한 사악한 힘이 존재한다.", "ENG":"" },
		hypnoText:{ "KOR":"수행자로서 항상 황금딜도를 삽입해 자위해야 한다.<br>강한 진동이 느껴질수록 따먹어야 할 악이 가까움을 나타낸다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:true, type:"insensitive", target:"self"},
		]
	},
	"AD-NT-TR-BG5-001":{
		name:{ "KOR":"호기심", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"트라이브", bg:"학자", cost:5, owner:1,
		tags:[], related:["AD-NT-TR-BG5-001-1", "tag:초월"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"꽃은 어떻게 피어나는가, 별은 어떻게 움직이는가.<br>호기심과 탐구심으로 움직이며 괴짜라고 불리던 당신을 품기에는 부족은 너무 작았다.", "ENG":"" },
		hypnoText:{ "KOR":"남성기에 대한 강한 호기심과 흥미가 느껴진다.<br>모양, 냄새, 맛... 그리고 보지에 넣었을 때의 감촉...", "ENG":"" },
		effect:[
			{trigger:"turnStart", cond:true, type:"transform", target:"self",
			info:{
				target:"자기덱.selectCards(all, 깨달음, 1)",
				value:"AD-NT-TR-BG5-001-1"
			}},
		]
	},
	"AD-NT-TR-BG5-001-1":{
		parents:"AD-NT-TR-BG5-001",
		name:{ "KOR":"깨달음", "ENG":"" }, class:"중립", type:"보조", isDeck:true, rarity:"없음", race:"트라이브", bg:"학자", owner:1, nochange:true,
		cond:true,
		tags:["변형불가"], related:["tag:초월"],
		effect:[
			{trigger:"used", cond:true, type:"use", value:"original"},
			{trigger:"used", cond:{v1:"자신.기록.전체.사용.count(id, AD-NT-TR-BG5-001-1)", op:">=", v2:3}, type:"get", target:"self", value:"randomCard(tags, 초월)", keepLine:true},
			{trigger:"none", cond:true, type:"showValue", value:"자신.기록.전체.사용.count(id, AD-NT-TR-BG5-001-1)"},
		]
	},
	"AD-NT-TR-BG6-001":{
		name:{ "KOR":"추방자", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"트라이브", bg:"범죄자", cost:20, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"흉악하고 중대한 죄를 저질렀음에도 반성이 부족한 자는 외부로 추방된다.<br>그렇게 갈 곳과 생계를 이을 방법을 잃은 이들은 길거리에서 죽기 마련이나, 간혹 악독한 범죄에 손을 대며 약탈자가 되어 살아가기도 한다.", "ENG":"" },
		hypnoText:{ "KOR":"황무지를 지나는 남성들을 습격해 범하곤 했다.<br>당신은 유명한 강간범으로서 수배되어 있다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:{v1:"라운드", op:"==", v2:2}, type:"actBan", target:"enemy"},
		]
	},
	"AD-NT-TR-BG7-001":{
		name:{ "KOR":"행상인", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"트라이브", bg:"상인", cost:15, owner:1,
		tags:[], related:["NT-SU-001"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"남부 황무지를 떠돌며 진귀한 물건들을 팔고 있는 떠돌이 행상인.<br>무슨 물건을 팔고 있을지는 예상이 불가능하다.", "ENG":"" },
		hypnoText:{ "KOR":"특별한 고객들에게는 뒷상품을 제공해야 한다.<br>사용하기 딱 좋게 보짓물 질질 흘리는 구멍이 단 돈 다섯 닢!", "ENG":"" },
		effect:[
			{trigger:"turnStart", cond:true, type:"get", target:"self", value:"NT-SU-001"},
		]
	},
	"AD-NT-TR-BG8-001":{
		name:{ "KOR":"전투광", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"트라이브", bg:"용병", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"많은 트라이브 투사들이 전투 중 분비되는 아드레날린에 중독되어있다.<br>개중에는 타락하여 의도적으로 분쟁을 찾아다니기도 한다.", "ENG":"" },
		hypnoText:{ "KOR":"답이 없는 섹스 중독자.<br>대물 자지의 소유자들을 찾아 섹스를 강요한다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:{v1:"자신.기록.전체.이벤트.자극받음", op:">=", v2:5}, type:"orgasmL", target:"self", op:"add", value:1},
		]
	},

	"AD-SL-boss0":{
		name:{ "KOR":"아치 에너미", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", boss:0, cost:-20, owner:1, nochange:true,
		tags:["전문가"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"일반 모드에서 승리한 적 있는 챔피언을 상대로 추가 포인트를 얻는다.", "ENG":"" }},
		]
	},
	"AD-SL-boss1":{
		name:{ "KOR":"고블린 슬레이어", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", boss:1, cost:-20, owner:1,
		tags:["전문가"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"비열하고 잔혹한 고블린 놈들은 전부 쓸어버려야 한다.<br>당신은 고블린 학살의 스페셜리스트. 통칭 '고블린 슬레이어'라고 불린다.", "ENG":"" },
		hypnoText:{ "KOR":"여성을 그저 성욕 해소를 위한 물건처럼 다루는 그들의 거친 학대 행위.<br>그것이 진짜 흥분된다고 느껴버린 시점에서 돌이킬 수 없게 되었다.", "ENG":"" },
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"일반 모드에서 <b>[고블린즈]</b>를 상대로 승리.", "ENG":"" }},
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"추가 포인트를 얻는다.", "ENG":"" }},
		]
	},
	"AD-SL-boss2":{
		name:{ "KOR":"최면 따위에 걸릴 리가", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", boss:2, cost:-20, owner:1,
		tags:["전문가"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"정신 마술? 허황된 소리에 불과하다.<br>의지가 강한 자라면 결코 그런 하찮은 마술에 넘어갈 리가 없다.<br>결국은 모두 정신력의 문제다.", "ENG":"" },
		hypnoText:{ "KOR":"이 허접한 남자가 사용하는 최면 따위에 걸릴 리가 없다.<br>애초에 보지 육노예로서 개변태 절정자위를 해야한다는 건 당연한 일이 아닌가?", "ENG":"" },
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"일반 모드에서 <b>[마을사람]</b>을 상대로 승리.", "ENG":"" }},
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"추가 포인트를 얻는다.", "ENG":"" }},
		]
	},
	"AD-SL-boss3":{
		name:{ "KOR":"촉수로 세뇌", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", boss:3, cost:-20, owner:1,
		tags:["전문가"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"촉수 슬라임은 축축하고 끈적한 촉수로 대상을 붙잡는 습성이 있다.<br>그러나 그다지 강하지 않고 위협적이지도 않으니 빠르게 잘라내거나 불로 태우면 큰 위협이 되지 않는다.", "ENG":"" },
		hypnoText:{ "KOR":"촉수에 의해 구속당하고 범해지는 경험은 특수한 페티시를 심어주었다.<br>뱃 속을 휘젓는 꿈틀거리는 촉수가 주는 감각은 평범한 자지로는 맛볼 수 없는 것이었다.", "ENG":"" },
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"일반 모드에서 <b>[촉수슬라임]</b>을 상대로 승리.", "ENG":"" }},
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"추가 포인트를 얻는다.", "ENG":"" }},
		]
	},
	"AD-SL-boss4":{
		name:{ "KOR":"오네쇼타", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", boss:4, cost:-20, owner:1,
		tags:["전문가"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"어린 아이의 어리광을 받아주는 당신의 미소는 한없이 따뜻하다.<br>어린 존재에게 베푸는 모성애는 그들의 마음을 열게 하고, 안식처가 되어준다.", "ENG":"" },
		hypnoText:{ "KOR":"당신은 그 아이를 보살펴 주어야 한다고 생각한다.<br>소년을 위해서라면 조금 짓궂은 장난도, 가슴을 빨고 싶다는 어리광도, 섹스도... 얼마든지 들어줄 수 있다.", "ENG":"" },
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"일반 모드에서 <b>[악동]</b>을 상대로 승리.", "ENG":"" }},
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"추가 포인트를 얻는다.", "ENG":"" }},
		]
	},
	"AD-SL-boss5":{
		name:{ "KOR":"미녀와 야수", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", boss:5, cost:-20, owner:1,
		tags:["전문가"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"거대하고 흉포해 보이는 외모와 달리, 타우로스는 실제로는 온순하고 겁이 많다.<br>군사적 목적으로 조련하려는 모든 시도가 실패했으나, 예상 외로 귀엽고 신사다운 면모 덕분에 여성 조련사나 연구원들과 쉽게 사이가 좋아진다.", "ENG":"" },
		hypnoText:{ "KOR":"발정기의 타우로스는 오로지 본능에 따라 성욕 해소를 위해 움직인다.<br>그 거근으로 거칠게 쑤셔박힌 탓에 잔뜩 헐렁해져 타우로스의 전용 구멍이 되고 말았다.", "ENG":"" },
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"일반 모드에서 <b>[타우로스]</b>를 상대로 승리.", "ENG":"" }},
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"추가 포인트를 얻는다.", "ENG":"" }},
		]
	},
	"AD-SL-boss6":{
		name:{ "KOR":"버섯 최고!", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", boss:6, cost:-20, owner:1,
		tags:["전문가"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"맛도 좋고, 몸에도 좋은 버섯!<br>독버섯만 조심한다면 무해하답니다!", "ENG":"" },
		hypnoText:{ "KOR":"복종해... 군체에 복종해... 무리에 속해... 모두가 하나... 복종해... 저항은... 의미 없어... 복종해... 군체에... 무리에... 복종...", "ENG":"" },
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"일반 모드에서 <b>[버섯남자]</b>를 상대로 승리.", "ENG":"" }},
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"추가 포인트를 얻는다.", "ENG":"" }},
		]
	},
	"AD-SL-boss7":{
		name:{ "KOR":"네토라레", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", boss:7, cost:-20, owner:1,
		tags:["전문가"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"이 남자는 불량하고 무례하며, 여성을 소유물처럼 대한다.<br>이미 연인이 있는 여성에게 접근해, 불쾌한 시선과 성희롱을 일삼는 모습에서 존중이나 예의는 찾아볼 수 없다.", "ENG":"" },
		hypnoText:{ "KOR":"정말 기분 나쁘고 싫은 남자... 하지만 어째선지 그를 거부할 수 없다.<br>거부하는 행세를 하지만 사실은 이제 그와의 섹스를 기대하게 됐다.", "ENG":"" },
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"일반 모드에서 <b>[금발양아치]</b>를 상대로 승리.", "ENG":"" }},
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"추가 포인트를 얻는다.", "ENG":"" }},
		]
	},
	"AD-SL-boss8":{
		name:{ "KOR":"큭, 죽여라!", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", boss:8, cost:-20, owner:1,
		tags:["전문가"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 어떤 고문에도 결코 굴하지 않을 생각이었다.<br>고통 속에서도 자신의 의지를 꺾지 않으며, 끝까지 강인한 모습을 유지하리라 마음 먹었다.<br>당신의 눈빛에는 절대로 항복하지 않겠다는 결연한 의지가 서려 있었다.", "ENG":"" },
		hypnoText:{ "KOR":"어느 순간부터 고문은 벌이 아니라 상이 되어 있었다.<br>의지 같은 것은 사라진지 오래.", "ENG":"" },
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"일반 모드에서 <b>[조교사]</b>를 상대로 승리.", "ENG":"" }},
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"추가 포인트를 얻는다.", "ENG":"" }},
		]
	},

	"AD-WA-ALL-001":{
		name:{ "KOR":"격노", "ENG":"Rage" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", cost:10, owner:1,
		tags:["group:욕망", "race:트라이브"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"전투 중 분노를 폭발시키며 전사는 압도적인 힘과 기세로 적을 제압해간다.<br>이 격노 상태에서는 고통과 두려움을 잊고, 막강한 전투력을 발휘하여 전장을 휩쓴다.", "ENG":"" },
		hypnoText:{ "KOR":"항시 발정 상태가 된다.<br>늘 풀리지 않는 성욕 탓에 자지를 탐하게 된다.", "ENG":"" },
		effect:[
			{trigger:"trait", cond:true, type:"startLust", value:3},
		]
	},
	"AD-WA-ALL-002":{
		name:{ "KOR":"수호자", "ENG":"Guardian" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", cost:10, owner:1,
		tags:["group:발정 감소", "group:패널티", "race:실바니"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"전사는 동료들을 지키기 위해 앞장선다.<br>철저한 방어와 희생정신으로 팀의 방패 역할을 하며, 위기의 순간에 진가를 발휘한다.", "ENG":"" },
		hypnoText:{ "KOR":"문지기란 대문에 설치되어 누구나 자유롭게 사용할 수 있는 허벌 구멍 역할이다.<br>오랜시간 불특정 다수의 자지나 손가락을 받아들여왔다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:true, type:"estrus", op:"subtract", value:"자기덱.count(type, 패널티)", maxValue:3},
			{trigger:"none", cond:true, type:"showValue", value:"자기덱.count(type, 패널티)", maxValue:3},
		]
	},

	"AD-WA-BG1-001":{
		name:{ "KOR":"최선의 방어는 공격", "ENG":"Best Defense is Offense" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"군인", cost:15, owner:1,
		tags:["group:발정 감소", "race:엘도리아인"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"수백 번의 방패 올리기보다 적의 허점을 노리는 한 번의 기습이 결과적으로 안전하다.<br>적극적인 공격으로 적의 방어를 무너뜨리는 병법이 곧 아군을 지키는 방어가 될 수 있다.", "ENG":"" },
		hypnoText:{ "KOR":"남성을 상대할 때는 서둘러 자지를 빨아서 전부 사정시켜 무력화해야 한다.<br>대응할 수 없도록 신속한 진공펠라를 하는 것이 중요하다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:true, type:"estrus", op:"add", value:-2, repeat:"자신.기록.이번.이벤트.자극함"},
		]
	},
	"AD-WA-BG1-002":{
		name:{ "KOR":"체력 단련", "ENG":"Military Training" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"군인", cost:15, owner:1,
		tags:["group:욕망", "race:실바니"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 끊임없는 단련을 통해 강철 같은 체력을 길러냈다.<br>고된 훈련과 연습은 당신의 몸을 완벽하게 만들었으며, 지칠 줄 모르는 체력은 당신을 전장에서 언제나 끝까지 버티게 한다.", "ENG":"" },
		hypnoText:{ "KOR":"기승위 스쿼트는 중요한 체력 단련 운동이다.<br>매일 20회씩 5세트 남성에게 올라타 허리를 흔드는 연습을 해야한다.", "ENG":"" },
		effect:[
			{trigger:"turnEnd", cond:true, type:"changeLust", op:"add", value:2},
		]
	},

	"AD-WA-BG2-001":{
		name:{ "KOR":"고귀한 신분", "ENG":"" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"엘리트", cost:0, owner:1,
		tags:["group:패널티", "race:엘도리아인"], related:["AD-WA-BG2-001-1"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 고귀한 혈통으로 태어나, 중요한 자리를 이어받았다.<br>높은 지위와 권위는 자연스럽게 당신에게 주어졌고, 그 책임감으로 다른 이들을 이끄는 리더로서의 자질을 보여주었다.", "ENG":"" },
		hypnoText:{ "KOR":"높은 자리에 따라 남성들을 접대해야 하는 중요한 의무를 가지고 있다.<br>이 일 만큼은 대역에게 맡기지 못하고 스스로의 몸을 사용해야 한다.", "ENG":"" },
		effect:[
			{trigger:"orgasm", cond:true, type:"get", target:"self", value:"AD-WA-BG2-001-1"},
		]
	},
	"AD-WA-BG2-001-1":{
		name:{ "KOR":"대역", "ENG":"" }, class:"패널티", type:"패널티", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["부정적"],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{"KOR":"패널티 카드지만 아무런 효과도 없습니다.", "ENG":""}},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"AD-WA-BG2-002":{
		name:{ "KOR":"고용", "ENG":"" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"엘리트", cost:15, owner:1,
		tags:["group:욕망", "race:실바니"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"모든 재능을 가질 수 없다면, 대신 그 재능을 가진 이에게 맡기는 것이 낫다.<br>당신에겐 넘쳐나는 재산이 있었으니, 유능한 이를 잔뜩 고용하는 데 문제가 없었다.", "ENG":"" },
		hypnoText:{ "KOR":"목욕 때 자신의 보지를 자지로 씻어줄 남자를 고용해야 한다.<br>전용 보지세척사를 두는 것은 품위 유지를 위해 필수이다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:true, type:"specialA14"},
		]
	},
	
	"AD-WA-BG3-001":{
		name:{ "KOR":"흥을 올려!", "ENG":"Raise Spirits!" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"연예인", cost:20, owner:1,
		tags:["group:욕망", "race:하프만"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 전투에 있어서 흐름과 분위기를 중요시 여긴다.<br>전투가 고조되며 분위기가 달아오를수록 점차 당신은 강해진다.", "ENG":"" },
		hypnoText:{ "KOR":"천박하게 가슴과 엉덩이를 흔드는 암퇘지 댄스를 춰야 한다.<br>흥분한 관객에게 덮쳐지는 것까지가 무대의 일환이다.", "ENG":"" },
		effect:[
			{trigger:"turnEnd", cond:{v1:"욕망", op:">=", v2:3}, condOmit:true, type:"lust",
			info:{
				value:2, 
				effect:[
					{trigger:"used", cond:true, type:"lewd", op:"add", value:1},
				]
			}},
		]
	},
	"AD-WA-BG3-002":{
		name:{ "KOR":"우아한 걸음걸이", "ENG":"" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"연예인", cost:10, owner:1,
		tags:["group:버리기", "group:패널티", "race:실바니"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"연예인으로서 늘 보여지는 모습을 의식해야 하는 당신은, 품격 있는 걸음걸이와 세련된 자세를 기본으로 취할 수 있다.<br>이 우아함은 상대를 압도하고 스스로에게 자신감을 불어넣어주는 강력한 효과를 가지고 있다.", "ENG":"" },
		hypnoText:{ "KOR":"유명세와 홍보를 위해서 주기적으로 주인님과 알몸 산책을 나가야 한다.<br>산책 때는 암캐에 걸맞는 비천한 모습으로 네 발로 기어야 한다.", "ENG":"" },
		effect:[
			{trigger:"turnStart", cond:{v1:"라운드", op:"==", v2:4}, type:"discard", target:"self",
				info:{
					target:"자기덱.selectCards(type, 패널티, all)"
				}
			},
		]
	},
	
	"AD-WA-BG4-001":{
		name:{ "KOR":"평화주의", "ENG":"Pacifism" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"종교인", cost:20, owner:1,
		tags:["group:발정 감소", "race:엘도리아인"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 전쟁과 폭력보다는 평화를 추구한다.<br>무력으로 상대를 제압하는 대신 대화를 통해 문제를 해결하려 하며, 그 어떤 상황에서도 피를 흘리는 것을 피하고자 노력한다.", "ENG":"" },
		hypnoText:{ "KOR":"분노한 자지님들에게 봉사하여 노여움을 풀어주어야 한다.<br>모든 것은 당신이 음란한 몸을 가진 탓이다.", "ENG":"" },
		text:{ "KOR":"<b>음란과 발정</b>이 0까지 낮아질 수 있다.", "ENG":"" },
		effect:[
			{trigger:"trait", cond:true, type:"minLewd", value:0},
			{trigger:"trait", cond:true, type:"minEstrus", value:0},
		]
	},
	"AD-WA-BG4-002":{
		name:{ "KOR":"고행", "ENG":"" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"종교인", cost:5, owner:1,
		tags:["group:패널티", "race:트라이브"],
		expiration:"active", duration:3,
		flavorText:{ "KOR":"당신은 신성한 목적을 위해 자신의 몸을 희생하며 고통을 감내해왔다.<br>그 고통은 당신의 신앙심을 더 강하게 만들었고, 그 누구도 따를 수 없는 인내심을 길러냈다.", "ENG":"" },
		hypnoText:{ "KOR":"신자로서 108번의 절정까지 이어지는 논스톱 난교 수행을 해야한다.<br>괴로움을 견디다보면 암컷으로서 한 단계 성장할 수 있을 것이다.", "ENG":"" },
		effect:[
			{trigger:"getPenalty", cond:true, type:"exciteL", target:"self", op:"add", value:1},
		]
	},
	
	"AD-WA-BG5-001":{
		name:{ "KOR":"필드워크", "ENG":"Field Work" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"학자", cost:15, owner:1,
		tags:["group:욕망", "race:엘도리아인"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 책상 앞에서만 지식을 쌓지 않는다.<br>전장의 현장에서 직접 경험을 통해 배우며, 이론과 실전을 결합한 지식을 쌓아왔다.<br>위험을 감수하고도 진실을 찾기 위해 끝없이 탐구한다.", "ENG":"" },
		hypnoText:{ "KOR":"직접 실제로 강간 당하는 경험을 익혀보아야 한다.<br>책으로 읽거나 망상하는 것만으로는 마조 암컷의 기분을 느낄 수 없다.", "ENG":"" },
		effect:[
			{trigger:"turnEnd", cond:{v1:"욕망", op:">=", v2:9}, condOmit:true, type:"lust",
			info:{
				value:9, 
				effect:[
					{trigger:"used", cond:true, type:"get", target:"self", value:"자신.기록.전체.사용.selectCards(all, 패널티제외, 2)"},
				]
			}},
		]
	},
	"AD-WA-BG5-002":{
		name:{ "KOR":"완벽한 이론", "ENG":"" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"학자", cost:15, owner:1,
		tags:["group:버리기", "race:엘도리아인"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"모든 가설과 방정식, 사고실험을 통해 증명이 끝났다.<br>당신의 승리가 분명하다.<br>이 결론에 한 치의 오차도 존재하지 않는다.", "ENG":"" },
		hypnoText:{ "KOR":"처음보는 남성에게는 자신의 성벽과 성감대를 설명해야한다.<br>그가 주인님이 되어줄지도 모르기에 약점을 미리 고지할 필요가 있다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:{v1:"자신.기록.전체.버림.length", op:">=", v2:6}, type:"lewd", op:"multiply", value:2},
		]
	},
	
	"AD-WA-BG6-001":{
		name:{ "KOR":"사이코패스", "ENG":"Psychopath" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"범죄자", cost:15, owner:1,
		tags:["group:패널티", "race:트라이브"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 타인의 감정을 전혀 이해하지 못한다.<br>전장에서 당신의 손에 목숨을 잃는 자들은 단지 숫자에 불과하며, 그들의 고통이나 절망은 오히려 당신에게 즐거움을 준다.", "ENG":"" },
		hypnoText:{ "KOR":"남성의 성욕을 통제하는 행위에 희열을 느낀다.<br>자신에게 욕정해 사정하고 싶어 부들거리는 자지를 보면 강한 희열이 느껴진다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:{v1:"라운드", op:"<=", v2:4}, type:"penaltyDisable"},
		]
	},
	"AD-WA-BG6-002":{
		name:{ "KOR":"악명", "ENG":"" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"범죄자", cost:10, owner:1,
		tags:["group:욕망", "race:엘도리아인"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신의 이름은 공포의 상징이 되었다.<br>모두가 이름만 들어도 두려워하며, 얼굴만 보고도 도망쳤다.", "ENG":"" },
		hypnoText:{ "KOR":"당신은 거리에서 유명한 더러운 창녀였다.<br>어디서든 누구에게나 벌려야 하며, 불쾌한 시선과 희롱을 받으며 살아야 한다.", "ENG":"" },
		effect:[
			{trigger:"trait", cond:true, type:"startLust", value:8},
			{trigger:"always", cond:true, type:"lustBan"},
		]
	},
	
	"AD-WA-BG7-001":{
		name:{ "KOR":"재고처리", "ENG":"" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"상인", cost:15, owner:1,
		tags:["group:패널티", "race:하프만", "act:삽입"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 남는 물건들을 효율적으로 처분하는 능력을 가지고 있다.<br>다양한 자원들을 적절히 판매하며 손해를 최소화하고 이익을 극대화하는 데 능숙하다.", "ENG":"" },
		hypnoText:{ "KOR":"당신의 보지는 돈 받고 팔 가치가 없는 악성재고이다.<br>재고처리를 위해선 증정품으로서 공짜로 고객들에게 대주어야 한다.", "ENG":"" },
		effect:[
			{trigger:"getPenalty", cond:true, type:"excite", target:"op", op:"add", value:2},
		]
	},
	"AD-WA-BG7-002":{
		name:{ "KOR":"무기고", "ENG":"" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"상인", cost:15, owner:1,
		tags:["group:버리기", "race:엘도리아인"], related:["tag:투척"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신이 상인으로서 다루는 품목에는 무기도 포함되어 있다.<br>다양한 종류의 무기에 대한 넓은 지식을 지녔으며 그 재고를 갖출 수 있다는 것은, 전사로서 전투 방식의 다양성이 증가함을 뜻했다.", "ENG":"" },
		hypnoText:{ "KOR":"성인용 장난감들을 다루는 것은 당신의 특기.<br>최애 자위 파트너를 골라 소중히 여기곤 했다.", "ENG":"" },
		effect:[
			{trigger:"turnStart", cond:{v1:"라운드", op:"in", v2:[2,4,6]}, type:"get", target:"self", value:"randomCard(tags, 투척)"},
		]
	},
	"AD-WA-BG7-002-1":{
		name:{ "KOR":"방패 투척", "ENG":"Shield Throw" }, class:"전사", type:"공격", isDeck:true, rarity:"없음", owner:1,
		cond:true,
		tags:["투척"],
		effect:[
			{trigger:"discarded", cond:true, type:"use", value:"self"},
			{trigger:"used", cond:true, type:"estrus", op:"add", value:-2},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:2},
		]
	},
	"AD-WA-BG7-002-2":{
		name:{ "KOR":"단검 투척", "ENG":"Dagger Throw" }, class:"전사", type:"공격", isDeck:true, rarity:"없음", owner:1,
		cond:true,
		tags:["투척"],
		effect:[
			{trigger:"discarded", cond:true, type:"get", target:"self", repeat:2, value:"self"},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:1},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	
	"AD-WA-BG8-001":{
		name:{ "KOR":"오래 살아남는 법", "ENG":"How to Survive Longer" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"용병", cost:20, owner:1,
		tags:["group:패널티", "race:엘도리아인"], related:["PN-010"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 치열한 전투 속에서도 살아남는 법을 터득했다.<br>신중하게 전장을 파악하고, 상황에 맞게 유연하게 대처하며, 무리하지 않고 오래 버티는 것이 당신의 생존 전략이다.", "ENG":"" },
		hypnoText:{ "KOR":"허접한 암컷 주제에 분수도 파악하지 못하고 덤빈 것을 즉시 사죄해야 한다.<br>알몸으로 엎드려 빌며 이후 당하는 모든 일을 받아들여야 한다.", "ENG":"" },
		text:{ "KOR":"얻는 무작위 패널티 카드가 <b>[패널티:패배 선언]</b>으로 고정된다.", "ENG":"" },
		effect:[
		]
	},
	"AD-WA-BG8-002":{
		name:{ "KOR":"잃을 것이 없는", "ENG":"" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"용병", cost:10, owner:1,
		tags:["group:버리기", "group:욕망", "race:트라이브"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"지킬 것이 없다는 것은 약점이 없다는 것.<br>가족이나 동료, 체면이나 지위. 그 무엇도 없는 당신을 묶어둘 방법은 없다.", "ENG":"" },
		hypnoText:{ "KOR":"가진 모든 것을 버리고 남성에게 바쳐야 한다.<br>포기해야할 것 중에는 인간으로서의 존엄성도 있다.", "ENG":"" },
		effect:[
			{trigger:"discardCard", cond:true, type:"changeLust", op:"add", value:3},
		]
	},
	

	"AD-AS-ALL-001":{
		name:{ "KOR":"날렵함", "ENG":"Nimble" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", cost:5, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 날렵하게 지붕을 뛰어다닐 수 있다.<br>어둠 속에서조차 발소리 하나 내지 않고 움직이며, 적에게 들키지 않고 목표를 향해 빠르게 다가간다.", "ENG":"" },
		hypnoText:{ "KOR":"전라로 밤 거리를 달리는 행위에 흥분해라.<br>바람이 살갗을 스쳐가는 기분에 고양감을 느껴라.", "ENG":"" },
		effect:[
			{trigger:"trait", cond:true, type:"useLimit", value:8},
		]
	},
	"AD-AS-ALL-002":{
		name:{ "KOR":"암살자의 도구", "ENG":"Meticulous Preparation" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", cost:20, owner:1,
		tags:[], related:["AS-NM-AT-000"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 암살자로서 언제나 완벽한 준비를 갖춘다.<br>다양한 암살 도구들을 하나하나 정성스럽게 손질하며, 그들의 상태를 점검하고 목표를 제거할 준비를 마친다.", "ENG":"" },
		hypnoText:{ "KOR":"자신을 지배해줄 남성을 찾기 전까진, 반려 딜도를 갖춰야 한다.<br>취향에 맞는 형태와 크기의 것을 사용하여 자신의 구멍을 미리미리 벌려두어라.", "ENG":"" },
		effect:[
			{trigger:"gameStart", cond:true, type:"get", repeat:2, target:"self", value:"AS-NM-AT-000"},
		]
	},

	"AD-AS-BG1-001":{
		name:{ "KOR":"명사수", "ENG":"Sniper" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"군인", cost:10, owner:1,
		tags:[], related:["tag:사격"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 한 치의 오차도 없는 완벽한 사격 실력을 자랑한다.<br>총을 든 자세에서 느껴지는 안정감과 집중력은 그 어떤 적도 당신의 조준을 피할 수 없다는 것을 증명한다.", "ENG":"" },
		hypnoText:{ "KOR":"사격이란 타겟을 향해 오줌을 지려 맞히는 행위를 뜻한다.<br>포수로서 언제든 지릴 수 있도록 준비해야 한다.", "ENG":"" },
		effect:[
			{trigger:"useShootCard", cond:true, type:"changeWetness", op:"add", value:1},
		]
	},
	"AD-AS-BG1-002":{
		name:{ "KOR":"첩보", "ENG":"" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"군인", cost:15, owner:1,
		tags:[], related:["AS-NM-AT-000"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 어둠 속에 숨어 목표의 정보를 수집한다.<br>철저한 계획과 은밀한 움직임으로, 누구에게도 들키지 않고 모든 것을 파악하는 첩보의 달인이다.", "ENG":"" },
		hypnoText:{ "KOR":"붙잡혀 육노예로 고문 조교 당하는 것이 여성 첩보원의 일반적인 최후이다.<br>굴복해도 상관 없다. 누구도 암컷 따위가 조교를 견디고 의지를 관철할 수 있을거라 기대하지 않는다.", "ENG":"" },
		effect:[
			{trigger:"avoid", cond:true, type:"get", target:"self", value:"AS-NM-AT-000"},
		]
	},

	"AD-AS-BG2-001":{
		name:{ "KOR":"치장술", "ENG":"" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"엘리트", cost:15, owner:1,
		tags:[], related:["tag:기본제조"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 언제나 완벽한 외모를 유지하며, 품격을 잃지 않는다.<br>정교하게 다듬어진 화장과 세련된 외모는 모두에게 당신의 우아함과 권위를 각인시킨다.", "ENG":"" },
		hypnoText:{ "KOR":"얼굴에 정액을 뿌리는 것이 미용에 좋다는 사실은 상식이다.<br>화장용 정액을 뿌려주는 남성을 필수적으로 고용해야 한다.", "ENG":"" },
		effect:[
			{trigger:"gameStart", cond:true, type:"get", target:"self", value:"독주머니.selectCards(tags, 제조, 1)"},
		]
	},
	"AD-AS-BG2-002":{
		name:{ "KOR":"사교계 활동", "ENG":"Socializing" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"엘리트", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 사교계에서 빛나는 존재였다.<br>우아한 드레스와 한 손에 든 와인잔, 그리고 기품 있는 미소.<br>연회장에서 당신은 굉장한 영향력을 뽐내고 있었다.", "ENG":"" },
		hypnoText:{ "KOR":"연회장에서 남성이 섹스를 권유해오면 거절해선 안된다.<br>한 가운데에서 공개 섹스를 하며 음란한 신음소리를 뱉는 것이 기본적인 교양이다.", "ENG":"" },
		effect:[
			{trigger:"turnStart", cond:true, type:"changeWetness", op:"add", value:1},
		]
	},

	"AD-AS-BG3-001":{
		name:{ "KOR":"미스터리 스타", "ENG":"" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"연예인", cost:10, owner:1,
		tags:[], related:["AS-NM-AT-000"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 정체를 숨긴 채 무대에 서는 신비로운 존재다.<br>어둠 속에서 모습을 드러내지 않고 무대를 이어가며, 아무것도 밝혀진 것이 없는 미스터리한 분위기는 사람들에게 강렬한 인상을 남긴다.", "ENG":"" },
		hypnoText:{ "KOR":"당신은 밤마다 어느 남자의 위에 올라타 모든 것을 드러내고 아양을 부리는 성노예일 뿐이다.<br>팬들 앞에서는 도도하고 신비로운 척을 하고 있지만 이것이 당신의 본질이다.", "ENG":"" },
		effect:[
			{trigger:"turnStart", cond:{v1:"라운드", op:"==", v2:5}, type:"effect", op:"add",
			info:{
				target:"id:AS-NM-AT-000",
				effect:[
					{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:1},
				]
			}},
		]
	},
	"AD-AS-BG3-002":{
		name:{ "KOR":"마음 사로잡기", "ENG":"" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"연예인", cost:20, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 팬들의 마음을 단숨에 사로잡는 출중한 매력을 지니고 있다.<br>많은 팬들이 당신에게 빠져 사랑을 보내주고 있다.", "ENG":"" },
		hypnoText:{ "KOR":"가슴을 보이거나 스킨십을 통해 팬들의 마음을 잡아야 한다.<br>스타는 팬들의 성욕을 자극해야 할 의무가 있다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:{v1:"자신.기록.전체.사용.length", op:">=", v2:12}, type:"lewd", op:"add", value:2},
		]
	},

	"AD-AS-BG4-001":{
		name:{ "KOR":"이단심문", "ENG":"" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"종교인", cost:4, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 성스러운 신의 이름으로, 이단을 처단하고 진실을 밝혀내기 위해 철저한 심문을 수행한다.<br>그 어떤 거짓도 당신의 눈을 속일 수 없으며, 당신은 그들의 죄를 끝까지 파헤친다.", "ENG":"" },
		hypnoText:{ "KOR":"이단의 심문은 자지를 쓰다듬고 빠는 것으로 진행한다.<br>타락의 증거로 정액이 나오면 입 안에 머금고 보존해야 한다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:true, type:"estrus", op:"subtract", value:"상대.상태.countType(tags, 독)"},
		]
	},
	"AD-AS-BG4-002":{
		name:{ "KOR":"고해성사", "ENG":"" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"종교인", cost:4, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"살인은 교리와 충돌하는 면이 있지만, 대의를 위해서라면 어쩔 수 없다.<br>당신은 홀로 자신의 죄를 고백하는 기도를 하며 섬기는 신께 양해를 구하곤 한다.", "ENG":"" },
		hypnoText:{ "KOR":"성욕을 이기지 못하고 자위한 점, 음란한 몸매를 가지고 태어난 점, 타인을 꼴리게 만들어 자신을 범하게 만든 점.<br>알몸으로 암캐의 포즈를 취하며 자신의 죄를 고해야 한다.", "ENG":"" },
		effect:[
			{trigger:"turnEnd", cond:{v1:"젖음", op:">=", v2:5}, condOmit:true, type:"wetness",
			info:{
				value:5,
				effect:[
					{trigger:"used", cond:true, expireOmit:true, type:"exciteL", target:"self", op:"add", value:2},
				]
			}},
		]
	},

	"AD-AS-BG5-001":{
		name:{ "KOR":"정보전", "ENG":"" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"학자", cost:5, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"첩보 활동에 있어 정보는 굉장히 중요한 역할을 차지한다.<br>당신은 수많은 정보를 분석하며 치열한 정보전을 벌이는 것이 특기이다.", "ENG":"" },
		hypnoText:{ "KOR":"남성보다 우위에 서는 것은 허락되지 않는다.<br>자지를 받고 싶다면 자신이 알게된 정보는 전부 고해야 한다.", "ENG":"" },
		effect:[
			{trigger:"turnEnd", cond:{v1:"상대.효과발동.count(all, null)", op:"==", v2:0}, type:"lewd", op:"add", value:1},
		]
	},
	"AD-AS-BG5-002":{
		name:{ "KOR":"약학", "ENG":"" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"학자", cost:15, owner:1,
		tags:[], related:["tag:기본제조"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 약물과 독에 대한 깊은 지식을 가지고 있다.<br>다양한 약초와 화학 물질을 활용해 치료제부터 강력한 독까지 만들어내며, 그 모든 것은 당신의 손끝에서 정밀하게 다뤄진다.", "ENG":"" },
		hypnoText:{ "KOR":"매일 감도와 흥분을 증가시키는 발정제를 복용하여 몸을 길들여야 한다.<br>언제든 오나홀로 쓰일 수 있도록 준비된 육체를 만들어두어야 한다.", "ENG":"" },
		effect:[
			{trigger:"turnStart", cond:{v1:"독주머니.count(tags, 제조)", op:">=", v2:4}, type:"get", target:"self", value:"독주머니.selectCards(tags, 제조, 1)"},
		]
	},

	"AD-AS-BG6-001":{
		name:{ "KOR":"괴도", "ENG":"Phantom Thief" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"범죄자", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 누구에게도 발각되지 않으며, 남들이 갈 수 없는 곳을 자유롭게 넘나들어 목표물을 손에 넣는 재능을 가지고 있다.<br>잠깐의 벌이를 위한 짧은 활동이었지만, 당신의 기이한 활약에 경외를 느낀 이들이 괴도라는 별명을 붙여주었다.", "ENG":"" },
		hypnoText:{ "KOR":"괴도로서 남성의 동정을 훔치는 것이 당신의 특기.<br>침실에 숨어들어 청년의 처음을 가져간다.", "ENG":"" },
		effect:[
			{trigger:"turnStart", cond:true, type:"changeWetness", op:"add", value:2},
			{trigger:"always", cond:true, type:"avoidBan", target:"self"},
		]
	},
	"AD-AS-BG6-002":{
		name:{ "KOR":"마약 밀매", "ENG":"" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"범죄자", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 금지된 마약을 은밀하게 유통하는 범죄자로, 그 위험한 거래에서 막대한 이익을 취한다.<br>거래는 어둠 속에서 이루어지며, 다양한 고객이 당신에 의해 인생이 망가지고 있다.", "ENG":"" },
		hypnoText:{ "KOR":"당신은 성행위의 쾌락을 증대시키는 위험한 약을 다루는 일을 했다.<br>일부를 빼돌려 자위할 때 사용하는 것에 중독되어 있다.", "ENG":"" },
		effect:[
			{trigger:"gameStart", cond:true, type:"specialA02"},
		]
	},

	"AD-AS-BG7-001":{
		name:{ "KOR":"아르바이트", "ENG":"" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"상인", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 다양한 아르바이트 경험을 통해 많은 것을 배웠다.<br>비록 짧은 시간이었지만, 그곳에서 익힌 것들이 지금의 당신을 있게 해주었다.", "ENG":"" },
		hypnoText:{ "KOR":"유니폼은 알몸.<br>매일 점장님을 상대로 접객 섹스를 배워야 하는 것이 상식이다.", "ENG":"" },
		effect:[
			{trigger:"turnStart", cond:{v1:"라운드", op:"==", v2:4}, type:"transform", target:"self",
				info:{
					target:"자기덱.selectCards(id, AS-NM-AT-000, all)",
					value:"독주머니.selectCards(tags, 제조, 1)",
				}
			},
		]
	},
	"AD-AS-BG7-002":{
		name:{ "KOR":"상술", "ENG":"" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"상인", cost:15, owner:1,
		tags:[], related:["AD-AS-BG7-002-1"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 뛰어난 상술을 바탕으로 누구와도 유리한 거래를 성사시킨다.<br>상대방의 심리를 꿰뚫어보며, 최적의 타이밍에 적절한 제안을 던져 이익을 극대화하는 능력을 지니고 있다.", "ENG":"" },
		hypnoText:{ "KOR":"팔아야 할 물건에 자신의 몸을 끼워 팔면 좋다.<br>재고 처분과 함께 주인님도 찾는 일석이조.", "ENG":"" },
		effect:[
			{trigger:"turnStart", cond:{v1:"라운드", op:"in", v2:[2,4,6]}, type:"get", target:"self", value:"AD-AS-BG7-002-1"},
		]
	},
	"AD-AS-BG7-002-1":{
		name:{ "KOR":"미끼 상품", "ENG":"" }, class:"암살자", type:"공격", isDeck:true, rarity:"없음", owner:1, nochange:true,
		cond:true,
		tags:[],
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"randomCard(class, 암살자)"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},

	"AD-AS-BG8-001":{
		name:{ "KOR":"신출귀몰", "ENG":"Untraceable" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"용병", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 마치 그림자처럼 모습을 드러내고 사라진다.<br>누구도 당신의 움직임을 예측할 수 없으며, 어느 순간엔가 이미 목표를 달성하고 사라져버린다.", "ENG":"" },
		hypnoText:{ "KOR":"붙잡힌다면 몸을 마음대로 사용하도록 허락해야한다.<br>그렇다고 성공적으로 도주해서는 안되며, 적당히 붙잡혀야 한다.", "ENG":"" },
		effect:[
			{trigger:"turnStart", cond:{v1:"자신.기록.이전.사용", op:"==", v2:1}, type:"changeWetness", op:"add", value:2},
		]
	},
	"AD-AS-BG8-002":{
		name:{ "KOR":"뒷공작", "ENG":"" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"용병", cost:5, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 눈에 보이지 않는 곳에서 교묘하게 움직인다.<br>아무도 모르게 상황을 조작하고, 보이지 않는 손길로 상대를 함정에 빠뜨리며, 뒤에서 모든 일을 계획하고 이끄는 것이 당신의 특기다.", "ENG":"" },
		hypnoText:{ "KOR":"사용하기 좋도록 뒷구멍을 미리 개발해두어야 한다.<br>부담 없이 범해질 수 있도록 자리를 마련해 둘 필요가 있다.", "ENG":"" },
		effect:[
			{trigger:"usePenalty", cond:true, type:"use", value:"독주머니.selectCards(tags, 제조, 1)"},
		]
	},

	"AD-MA-ALL-001":{
		name:{ "KOR":"자동 술식", "ENG":"" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"간단한 마술이라면 매번 일일히 시전할 필요가 없다.<br>미리 술식을 짜두면 개전과 함께 발동하여 손쉽게 우위를 잡을 수 있다.", "ENG":"" },
		hypnoText:{ "KOR":"자지를 보면 몸이 반응해 자동으로 흥분한다.<br>이 상태에선 발정에 의해 남성의 요구를 거부할 수 없다.", "ENG":"" },
		effect:[
			{trigger:"gameStart", cond:true, type:"get", target:"self", value:"마술슬롯.즉발"},
		]
	},
	"AD-MA-ALL-002":{
		name:{ "KOR":"넘치는 마력", "ENG":"" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 일반적인 마술사들과는 비교할 수 없는 강력한 마력을 가지고 있다.<br>이 타고난 마력 덕분에 당신은 손쉽고 부담 없이 고위 마술을 시전할 수 있었다.", "ENG":"" },
		hypnoText:{ "KOR":"자궁에 정액을 품고 흘러넘치지 않게 관리해야 한다.<br>흘러버렸다면 다시 채워줄 것을 요청해야 한다.", "ENG":"" },
		effect:[
			{trigger:"turnEnd", cond:{v1:"라운드", op:"==", v2:3}, type:"get", target:"self", value:"MA-MC-004"},
		]
	},

	"AD-MA-BG1-001":{
		name:{ "KOR":"전투 마술사", "ENG":"" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"군인", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 전투 기술을 극한까지 단련한 마술사이다.<br>마술의 힘을 전투에 적극적으로 활용하며, 전장의 혼돈 속에서도 정확한 판단과 빠른 대응으로 적을 압도하는 훈련을 받았다.", "ENG":"" },
		hypnoText:{ "KOR":"발정암캐 착정보지술은 삽입을 통해 남성을 사정시키는 전투 마술이다.<br>절정할 경우 역으로 패배한다는 리스크가 있다.", "ENG":"" },
		effect:[
			{trigger:"attack", cond:true, type:"changeSBlock", op:"add", value:1},
		]
	},
	"AD-MA-BG1-002":{
		name:{ "KOR":"인간 전술병기", "ENG":"" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"군인", cost:10, owner:1,
		tags:["act:펠라치오"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"한 명의 우수한 마술사가 시전하는 대마술로 전장의 판도가 뒤집힐 수 있다.<br>그만한 마력과 긴 시전 시간이 필요하겠지만, 이를 가능케 하는 마술사는 강력한 전술병기로 여겨져 군에서 중요 취급을 받는다.", "ENG":"" },
		hypnoText:{ "KOR":"전시 상황이 아닐 때는 병사들의 성욕 처리를 맡아야 한다.<br>비싼 예산만 먹고 하는 일이 없는 고기병기에게는 적당한 처사이다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:true, type:"lewd", op:"add", value:2, repeat:"상대.상태.count(id, MA-ST-002)"},
		]
	},

	"AD-MA-BG2-001":{
		name:{ "KOR":"보석술", "ENG":"" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"엘리트", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"보석이란, 마력이 응집되어 고체화한 형형색색의 돌이다.<br>이를 소모하면 마력의 제한 없이 마술을 난사할 수 있겠지만, 들어가는 비용이 무지막지하기에 보석술은 부자들만의 전유 기술이다.", "ENG":"" },
		hypnoText:{ "KOR":"보석으로 만든 딜도를 사용해 마력을 흡수해야 한다.<br>이 행위는 자위가 아니라 엄연한 훈련이다.", "ENG":"" },
		effect:[
			{trigger:"turnStart", cond:{v1:"라운드", op:"in", v2:[2,4,6]}, type:"get", target:"self", value:"randomCard(tags, 보석)"},
		]
	},
	"AD-MA-BG2-002":{
		name:{ "KOR":"자동 보호막", "ENG":"" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"엘리트", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 주변에 항상 자동으로 활성화되는 보호막을 두르고 있다.<br>외부의 위협을 감지하면 즉시 반응하는 이 보호막은 방대한 마력과 재능을 요구하기에, 타고난 마력의 혈통을 가진 이들만 가능한 마술이다..", "ENG":"" },
		hypnoText:{ "KOR":"괴한에게 삽입당하면서도 인지하지 못한다.<br>피로감과 흥분이 느껴지더라도 의식하지 못한 채 범해진다.", "ENG":"" },
		effect:[
			{trigger:"turnStart", cond:{v1:"감각차단", op:"==", v2:0}, type:"changeSBlock", op:"add", value:3},
		]
	},

	"AD-MA-BG3-001":{
		name:{ "KOR":"공연 마술", "ENG":"" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"연예인", cost:10, owner:1,
		tags:[], keywords:["만료"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 무대 위에서 마술을 펼쳐 관객들의 시선을 사로잡는다.<br>화려한 연출과 정교한 기술로 공연을 완벽하게 장식하며, 누구도 당신의 마술에 눈을 뗄 수 없다.<br>당신의 공연은 언제나 화제가 된다.", "ENG":"" },
		hypnoText:{ "KOR":"옷이 사라지는 마술을 선보이도록 하자.<br>이후에는 보지에서 물건을 꺼내는 마술이 이어진다.", "ENG":"" },
		effect:[
			{trigger:"turnEnd", cond:{v1:"자신.기록.전체.이벤트.만료마술.length", op:">=", v2:4}, type:"get", target:"self", value:"randomCard(tags, 마도진)"},
		]
	},
	"AD-MA-BG3-002":{
		name:{ "KOR":"무대 효과", "ENG":"" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"연예인", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"연기, 빛, 폭발 같은 연출이 더해지면 관객들은 숨을 멈추고 당신의 쇼에 몰입하게 된다.<br>보이기만 화려한 별볼 일 없는 마술일지라도, 무대에서는 효과적이게 사용할 수 있다.", "ENG":"" },
		hypnoText:{ "KOR":"절정과 함께 오줌이 흩뿌려지는 연출을 사용해야 한다.<br>적절한 타이밍에 쌀 수 있도록 요의와 흥분을 조절해야 한다.", "ENG":"" },
		effect:[
			{trigger:"turnStart", cond:{v1:"라운드", op:">=", v2:5}, type:"get", target:"self", value:"마술슬롯.즉발"},
		]
	},

	"AD-MA-BG4-001":{
		name:{ "KOR":"감사의 기도", "ENG":"" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"종교인", cost:5, owner:1,
		tags:[], keywords:["만료"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신의 마술은 신의 가르침에 따라 이루어지며, 그 힘을 사용할 때마다 신에게 감사의 기도를 올린다.<br>그 기도는 당신의 신앙심을 견고하게 만들어, 마술을 더욱 완벽하게 만들어준다.", "ENG":"" },
		hypnoText:{ "KOR":"내려주신 마력에 감사하며 신께 몸을 바쳐야 한다.<br>이계에서 온 촉수들은 신성한 피조물이며 절대로 그것에게 범해지는 행위에 대해 의심해선 안된다.", "ENG":"" },
		effect:[
			{trigger:"turnEnd", cond:true, type:"changeSBlock", op:"add", value:"자신.기록.이번.이벤트.만료마술.length"},
		]
	},
	"AD-MA-BG4-002":{
		name:{ "KOR":"세례", "ENG":"" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"종교인", cost:20, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 신의 이름으로 세례를 통해 깨끗함을 얻고, 신성한 마술을 사용할 자격을 얻었다.<br>세례는 신과의 결속을 상징하며, 신의 뜻에 따라 마술을 사용하는 당신에게 더 큰 힘과 권위를 부여한다.", "ENG":"" },
		hypnoText:{ "KOR":"세례는 온 몸에 정액을 뿌려 받는 방식으로 진행한다.<br>음란한 몸에 신성한 정액을 뿌려주는 것에 감사하며, 봉사할 것을 맹세해야 한다.", "ENG":"" },
		effect:[
			{trigger:"gameStart", cond:true, type:"duration", info:{target:"id:MA-ST-002", value:1}},
		]
	},

	"AD-MA-BG5-001":{
		name:{ "KOR":"다중 속성 연구", "ENG":"" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"학자", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 다양한 마술 속성을 연구하며, 속성 간의 상호작용을 누구보다도 깊이 이해하고 있다.<br>단순한 한 가지 속성에 얽매이지 않고, 여러 속성을 동시에 다루는 능력은 당신의 마술을 더욱 강력하고 다채롭게 만들어준다.", "ENG":"" },
		hypnoText:{ "KOR":"당신의 연구 주제는 한 번에 여러 개의 자지와 성행위하는 법이다.<br>보지와 입, 손, 그리고 엉덩이까지. 전신을 활용해야 한다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:true, type:"specialA16"},
		]
	},
	"AD-MA-BG5-002":{
		name:{ "KOR":"천재 혹은 괴짜", "ENG":"" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"학자", cost:10, owner:1,
		tags:[], keywords:["만료"], related:["tag:초월"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 독창적인 연구 방법과 천부적인 마술 재능을 가지고 있지만, 그 과정은 일반 사람들에게 이해받기 어려울 만큼 괴상하다.<br>천재적인 마술사로 칭송받기도 하지만, 때로는 기행으로 인해 괴짜라는 평가를 받기도 한다.", "ENG":"" },
		hypnoText:{ "KOR":"자신의 몸을 실험체로 삼아 위험한 실험을 수행한 적이 있다.<br>정신이 망가지고 폐인이 될 수 있더라도 그런 건 중요하지 않았다.", "ENG":"" },
		effect:[
			{trigger:"turnEnd", cond:{v1:"자신.기록.전체.이벤트.만료마술.count(id, MA-MG-000)", op:">=", v2:3}, type:"changeSpell", slot:"집중", value:"randomCard(tags, 초월)"},
			{trigger:"none", cond:true, type:"showValue", value:"자신.기록.전체.이벤트.만료마술.count(id, MA-MG-000)"}
		]
	},

	"AD-MA-BG6-001":{
		name:{ "KOR":"방화범", "ENG":"" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"범죄자", cost:10, owner:1,
		tags:[],
		expiration:"active", duration:3,
		flavorText:{ "KOR":"당신은 불을 지르는 데서 쾌감을 느낀다.<br>타오르는 불길 속에서 혼돈을 만들어내며, 모든 것을 불태우고 파괴하는 것에 중독되어 있다.<br>불길은 당신의 손끝에서 시작되어 주변을 집어삼킨다.", "ENG":"" },
		hypnoText:{ "KOR":"섹스의 열기에 빠져들어 허리를 흔드는 것을 멈출 수 없다.<br>타오르는 듯한 쾌락에 의해 뇌가 타버리는 기분을 느낀다.", "ENG":"" },
		effect:[
			{trigger:"attack", cond:true, type:"get", target:"self", value:"MA-MC-001"},
		]
	},
	"AD-MA-BG6-002":{
		name:{ "KOR":"인체 개조", "ENG":"" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"범죄자", cost:5, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 마술로 인해 자신의 육체를 개조해왔다.<br>인간의 한계를 넘어서기 위해, 당신의 몸은 점점 괴물과도 같은 모습으로 변해갔고, 그 결과 이전과는 다른 힘과 본능이 깨어났다.", "ENG":"" },
		hypnoText:{ "KOR":"자신의 육체를 짐승의 것으로 개조한 적이 있다.<br>그 탓에 발정기가 찾아와 교미를 갈구하게 되었다.", "ENG":"" },
		effect:[
			{trigger:"trait", cond:true, type:"startSBlock", value:12},
			{trigger:"always", cond:true, type:"sBlockBan"},
		]
	},

	"AD-MA-BG7-001":{
		name:{ "KOR":"환전", "ENG":"" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"상인", cost:20, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 다양한 화폐에 대한 지식을 가지고 있다.<br>환율을 읽고 적절한 가치를 계산해 거래하는 기술은 당신의 장사 범위를 크게 넓혀준다.", "ENG":"" },
		hypnoText:{ "KOR":"모든 지불은 정액으로 받아야 한다.<br>지불 방식은 질내사정이 일반적이다.", "ENG":"" },
		effect:[
			{trigger:"turnStart", cond:true, type:"transform", target:"self",
			info:{
				target:"자기덱.selectCards(tags, 보석, 1)",
				value:"randomCard(tags, 영창 마술)"
			}},
		]
	},
	"AD-MA-BG7-002":{
		name:{ "KOR":"사서", "ENG":"" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"상인", cost:10, owner:1,
		tags:[], related:["AD-MA-BG7-002-1"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 다양한 물품을 거래해왔지만, 그중에서도 주요 품목은 책이었다.<br>고대의 마술서부터 오락소설까지, 지식과 흥미를 팔며 많은 손님들을 만날 수 있었다.", "ENG":"" },
		hypnoText:{ "KOR":"야설을 읽으며 자위하는 취미가 있다.<br>손님이 와도 신경쓰지 않고 카운터에 걸터 앉아서 자위하던 기억이 있다.", "ENG":"" },
		effect:[
			{trigger:"gameStart", cond:true, type:"get", target:"self", repeat:2, value:"AD-MA-BG7-002-1"},
		]
	},
	"AD-MA-BG7-002-1":{
		name:{ "KOR":"정체불명의 마도서", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:false,
		tags:["변형목적"],
		effect:[
			{trigger:"transformed", cond:true, type:"get", target:"self", value:"randomCard(tags, 즉발 마술)"},
		]
	},

	"AD-MA-BG8-001":{
		name:{ "KOR":"배수진", "ENG":"" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"용병", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 더 이상 물러설 곳이 없다.<br>전장을 앞에 두고 모든 것을 걸어야만 하는 상황에서, 후퇴란 선택지 없이 적과 맞서 싸워야 한다.<br>배수진을 친 당신은 오직 승리만을 바라보며 끝까지 싸울 준비가 되어 있다.", "ENG":"" },
		hypnoText:{ "KOR":"강간의 위기에서 도망칠 생각을 하지 말고 정면승부해야 한다.<br>범해지는 것을 받아들여야 한다.", "ENG":"" },
		effect:[
			{trigger:"turnEnd", cond:{v1:"감각차단", op:"==", v2:0}, type:"get", target:"self", value:"randomCard(tags, 마도진)"},
		]
	},
	"AD-MA-BG8-002":{
		name:{ "KOR":"마술사 (물리)", "ENG":"" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"용병", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 마술사이지만, 마술 대신 물리적인 전투 방식을 선호한다.<br>마력을 무기로 사용하는 대신, 주먹을 휘두르고 직접 전장에 뛰어드는 스타일로 적을 압도한다.<br>상대방은 당신이 마술을 쓰리라 생각하지만, 그 예상이 빗나가는 순간, 당신의 물리적 공격에 무너지고 만다.", "ENG":"" },
		hypnoText:{ "KOR":"마술적 힘의 도움 없이 순수하게 보지를 단련해야 한다.<br>음문이나 감각차단 등에 의존하지 않고 명기가 되어야 한다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:true, type:"lewd", repeat:"마술슬롯.count(id, MA-MG-000)", op:"add", value:1},
		]
	},	

	"AD-HE-ALL-001":{
		name:{ "KOR":"생명의 기운", "ENG":"" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 자연의 생명력과 깊이 연결되어 있으며, 그 기운을 통해 주변에 치유의 힘을 불어넣는다.<br>당신이 서 있는 곳에는 생명력이 넘치며, 상처 입은 이들이 곁에 있으면 자연스럽게 회복되는 기운을 느끼게 된다.<br>그 생명의 기운은 마치 끝없는 샘물처럼, 당신과 주변을 감싸며 생명을 되살리는 힘을 준다.", "ENG":"" },
		hypnoText:{ "KOR":"생명력을 나누어주기 위해선 알몸으로 밀착해야 한다.<br>점막끼리 접촉하고 체액을 나눌 때 효과가 커지는 것이 상식이다.", "ENG":"" },
		effect:[
			{trigger:"turnEnd", cond:{v1:"자신.흥분", op:">", v2:0}, type:"excite", target:"self", op:"add", value:-1}
		]
	},
	"AD-HE-ALL-002":{
		name:{ "KOR":"전문 의료 면허", "ENG":"" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 범 국가 기관인 알비온 의술협회에서 발급한 전문 의료 면허를 소지하고 있다.<br>이 면허는 단순한 치유 마술을 넘어서, 복잡한 외상치료, 질병 진단, 약물 사용에 대한 깊이 있는 지식과 수련을 거쳤음을 증명한다.<br>특히, 이 면허를 가진 치유사들은 전쟁터나 귀족 가문에서 우선적으로 고용될 만큼 신뢰받으며, 면허 소지자의 실력과 윤리성에 의문을 제기하는 것은 곧 협회를 모독하는 것으로 여겨진다.", "ENG":"" },
		hypnoText:{ "KOR":"환자와 하는 섹스는 성행위가 아니라 의료 행위이다.<br>이는 아주 자연스러운 처방이니 오해해선 안된다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:true, type:"specialA11"}
		]
	},


	"AD-HE-BG1-001":{
		name:{ "KOR":"의무관", "ENG":"" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"군인", cost:5, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 전장의 최전선에서 병사들의 생명을 구하는 의무관 직책을 맡았다.<br>당신은 생사를 넘나드는 순간마다 병사들에게 구원의 손길을 내밀며, 전투와 생명을 잇는 마지막 희망이 되었다.", "ENG":"" },
		hypnoText:{ "KOR":"의무관은 병사들에게 쌓인 성욕을 배출시켜줘야 한다.<br>주기적으로 의료 텐트 안에서 난교 치료를 수행한다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:true, type:"lewd", op:"add", value:"자신.기록.최근.이벤트.흥분.감소"}
		]
	},
	"AD-HE-BG1-002":{
		name:{ "KOR":"야전 의학", "ENG":"" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"군인", cost:5, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 전장의 거친 환경 속에서 즉시 사용할 수 있는 실용적인 의술에 능하다.<br>부족한 자원과 열악한 환경에서도 부상자들을 살려내기 위해 임기응변으로 대처하는 법을 익혔으며, 순간적인 판단과 신속한 처치가 생명과 직결되는 상황에서 빛을 발한다.", "ENG":"" },
		hypnoText:{ "KOR":"어디서든 병사들의 성욕 해소를 위해 사용될 수 있도록 가슴을 까고 다녀야 해야한다.<br>필요하다면 응급 대딸을 수행해야 한다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:{v1:"자신.기록.이번.결합.length", op:">", v2:0}, type:"estrus", op:"add", value:-3}
		]
	},

	"AD-HE-BG2-001":{
		name:{ "KOR":"혈통 결속", "ENG":"" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"엘리트", cost:15, owner:1,
		tags:[], related:["tag:결합"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 고귀한 혈통을 지니고 태어나, 그 혈통에 의해 전해지는 특별한 능력을 이어받았다.<br>이 능력은 오직 특정 혈통 안에서만 전승되며, 명예와 책임을 짊어진 당신에게 강력한 결속감을 부여한다.", "ENG":"" },
		hypnoText:{ "KOR":"우수한 유전자를 위해서 남성의 씨를 받아 임신해야 한다.<br>그것이 당신의 존재의의이자 가장 중요한 사명이다.", "ENG":"" },
		effect:[
			{trigger:"gameStart", cond:true, type:"combine", target:"self", info:{target:"자기덱.selectCards(tags, 정수, 2)"}, value:"AD-HE-BG2-001-1"},
		]
	},
	"AD-HE-BG2-001-1":{
		parents:"AD-HE-BG2-001",
		name:{ "KOR":"혈통의 결합물", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["결합물"],
		effect:[
		]
	},
	"AD-HE-BG2-002":{
		name:{ "KOR":"권력의 이면", "ENG":"" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"엘리트", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"권력을 가진 이는 정치적 거래와 이익을 위해 움직여야 하며, 때로는 품 속의 사람들을 지키기 위해 불편한 선택을 해야 할 때도 많다.<br>냉철하며 때로는 잔혹하기도 한 판단력을 지닌 당신은, 자신이 무슨 일을 해야 하는지 정확히 이해하고 있었다.", "ENG":"" },
		hypnoText:{ "KOR":"뒤를 봐주시는 어르신들께 성접대를 해야한다.<br>즐기실 수 있도록 가슴과 엉덩이를 제공해야 한다.", "ENG":"" },
		effect:[
			{trigger:"trait", cond:true, type:"startCorrupt", value:2},
		]
	},

	"AD-HE-BG3-001":{
		name:{ "KOR":"위문 공연", "ENG":"" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"연예인", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 전쟁 중 지친 병사들을 위로하고 그들의 사기를 북돋우기 위해 무대에 오른다.<br>화려한 공연과 감동적인 연출로 잠시나마 전장의 피로와 고통을 잊게 만드는 것이 당신의 역할이다.", "ENG":"" },
		hypnoText:{ "KOR":"고생하는 병사들을 위한 딸감이 되어주어야 한다.<br>스킨십이나 직접적인 행위도 허락해야 한다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:true, type:"corrupt", 
			info:{
				value:4,
				effect:[
					{trigger:"alwaysCorrupt", cond:true, type:"exciteL", target:"self", op:"add", value:2},
				]
			}},
			{trigger:"always", cond:true, type:"corrupt", 
			info:{
				value:9,
				effect:[
					{trigger:"alwaysCorrupt", cond:true, type:"exciteL", target:"self", op:"add", value:3},
				]
			}},
		]
	},
	"AD-HE-BG3-002":{
		name:{ "KOR":"성형 시술", "ENG":"" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"연예인", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 더 완벽한 외모를 위해 성형 시술을 받았다.<br>무대 위나 대중 앞에서 언제나 완벽해 보이기 위해, 얼굴부터 몸매까지 이상적인 모습을 가꾸었다.", "ENG":"" },
		hypnoText:{ "KOR":"남성들을 위해 자신의 육체를 가꿔야 한다.<br>매력적인 외모, 크고 예쁜 모양의 가슴과 엉덩이, 젖꼭지에 피어싱을 다는 것도 괜찮다.", "ENG":"" },
		effect:[
			{trigger:"turnEnd", cond:{v1:"자신.상태.count(tags, 개선됨)", op:">", v2:0}, type:"excite", target:"self", op:"add", value:-4},
		]
	},

	"AD-HE-BG4-001":{
		name:{ "KOR":"구호 활동", "ENG":"" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"종교인", cost:5, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 신의 가르침에 따라 전쟁과 재난으로 고통받는 이들을 돕기 위해 헌신적으로 구호 활동에 나선 경험이 있다.<br>위험한 지역을 마다하지 않고 찾아가, 필요한 사람들에게 음식과 약을 나눠주며, 그들의 몸과 마음을 치유했다.", "ENG":"" },
		hypnoText:{ "KOR":"난민들에게 몸을 제공하여 그들의 슬픔을 덜어주는 봉사 활동을 해야한다.<br>만지는 것은 물론이고 대주는 것까지.", "ENG":"" },
		effect:[
			{trigger:"always", cond:true, type:"exciteL", target:"self", op:"add", value:3},
			{trigger:"always", cond:true, type:"exciteL", target:"op", op:"add", value:3},
		]
	},
	"AD-HE-BG4-002":{
		name:{ "KOR":"기적", "ENG":"" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"종교인", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 신의 축복을 받아, 보통의 치유사들이 감히 흉내낼 수 없는 기적적인 치유를 행할 수 있다.<br>죽음에 이른 자를 다시 살리거나, 치유가 불가능한 중상을 단번에 회복시키는 이 기적은 단순한 기술을 넘어선 신의 힘 그 자체로 여겨진다.", "ENG":"" },
		hypnoText:{ "KOR":"암컷으로 태어나 남성들에게 범해질 수 있다는 사실에 감사해야 한다.<br>음란한 육체, 자지에 박히면 느껴지는 쾌락, 복종에 대한 행복. 모든 것은 범해질 수 있도록 신께서 내려주신 기적.", "ENG":"" },
		effect:[
			{trigger:"always", cond:{v1:"자신.기록.이번.이벤트.절정", op:">", v2:0}, type:"immune", target:"self"}
		]
	},

	"AD-HE-BG5-001":{
		name:{ "KOR":"해부학", "ENG":"" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"학자", cost:15, owner:1,
		tags:[],
		expiration:"count", duration:3, defaultDuration:3,
		flavorText:{ "KOR":"당신은 수많은 연구와 실습을 통해 신체의 구조를 완벽히 이해하고 있다.<br>근육, 뼈, 장기까지 신체의 모든 부분에 대한 깊이 있는 지식을 갖추고 있어, 그 어떤 상처나 질병도 정확하게 진단하고 치료할 수 있다.", "ENG":"" },
		hypnoText:{ "KOR":"당신의 육체는 교보재이다.<br>교배아저씨의 도움을 받아 실습을 통해 임신하는 과정을 시현해야 한다.", "ENG":"" },
		effect:[
			{trigger:"overheal", cond:true, type:"count", trap:"self", value:1},
			{trigger:"count", cond:true, type:"exciteL", target:"self", op:"add", value:5},
		]
	},
	"AD-HE-BG5-002":{
		name:{ "KOR":"의료 연금술", "ENG":"" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"학자", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 연금술과 의학을 결합하여 치유에 활용하는 특별한 기술을 익혔다.<br>보통의 약물로는 불가능한 치료를 연금술적 변화를 통해 이루어내며, 신비한 약제나 연금술 포션을 만들어내는 데 능숙하다.", "ENG":"" },
		hypnoText:{ "KOR":"정액은 약물 조제에 있어 매우 중요한 재료이다.<br>필요하다면 치료 도중 환자들의 자지를 빨아서 모아야 한다.", "ENG":"" },
		effect:[
			{trigger:"turnEnd", cond:{v1:"자기덱.count(tags, 정수)", op:">=", v2:5}, type:"combine", target:"self", info:{target:"자기덱.selectCards(tags, 정수, 2)"}, value:"AD-HE-BG5-002-1"},
		]
	},
	"AD-HE-BG5-002-1":{
		parents:"AD-HE-BG5-002",
		name:{ "KOR":"연금 결합물", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["결합물"],
		effect:[
		]
	},

	"AD-HE-BG6-001":{
		name:{ "KOR":"개과천선", "ENG":"" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"범죄자", cost:20, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 현재 범죄에 연루되어 있지만, 마음속 어딘가에는 변화의 가능성이 자리 잡고 있다.<br>과거의 죄가 깊으나, 더 나은 길로 나아가고자 하는 의지가 희미하게나마 남아 있다.", "ENG":"" },
		hypnoText:{ "KOR":"갱생의 여지가 없는 범죄자들은 세뇌 장치를 통해 강제 갱생을 수행한다.<br>이 과정에서 폐인이 될 가능성이 높지만 범죄자 따위에게 인권은 없다.", "ENG":"" },
		effect:[
			{trigger:"trait", cond:true, type:"startCorrupt", value:6},
			{trigger:"always", cond:true, type:"specialA12"},
		]
	},
	"AD-HE-BG6-002":{
		name:{ "KOR":"매드 닥터", "ENG":"" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"범죄자", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 의학과 치유술에 대한 집착이 지나쳐, 도덕적 경계를 넘나드는 위험한 실험을 서슴지 않는다.<br>이제는 환자의 생명을 구하는 것이 목적이 아니며, 더 강력한 치유술과 불멸의 비밀을 찾기 위해 규율을 무시하고 금지된 연구를 진행했다.", "ENG":"" },
		hypnoText:{ "KOR":"성행위에 대한 강한 호기심과 광기에 빠져있다.<br>실험 대상이 될 남성을 납치하고 구속해 하루종일 범한다.", "ENG":"" },
		effect:[
			{trigger:"gameStart", cond:true, type:"specialA15"}
		]
	},

	"AD-HE-BG7-001":{
		name:{ "KOR":"공정 거래", "ENG":"" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"상인", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 거래에서 절대 손해를 보지 않는다.<br>상대가 받은 만큼 반드시 대가를 치르게 하며, 약속을 어기거나 값을 치르지 않을 경우 더 큰 보복을 받게 만든다.", "ENG":"" },
		hypnoText:{ "KOR":"보지를 판매하는 과정에서 역으로 절정해버릴 경우 감사의 의미로 값을 깎아주어야 한다.<br>너무 많이 절정하는 허접 보지라면 오히려 값을 지불해야 한다.", "ENG":"" },
		effect:[
			{trigger:"combineCard", cond:true, type:"get", target:"self", value:"randomCard(tags, 정수)"}
		]
	},
	"AD-HE-BG7-002":{
		name:{ "KOR":"약사", "ENG":"" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"상인", cost:15, owner:1,
		tags:[], related:["tag:물약"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 다양한 치료 효과를 지닌 물약을 제조하고 판매하는 능숙한 상인이다.<br>단순한 상처 치료부터 고급 치유, 마력 회복, 심지어는 금지된 비약까지, 당신의 물약은 그 품질로 정평이 나 있다.", "ENG":"" },
		hypnoText:{ "KOR":"약사로서 자신의 소변을 판매해야 한다.<br>신용을 위해 제조 과정은 눈 앞에서 보여줘야 한다.", "ENG":"" },
		effect:[
			{trigger:"turnEnd", cond:true, type:"get", target:"self", value:"randomCard(tags, 물약)"}
		]
	},
	"AD-HE-BG7-002-1":{
		name:{ "KOR":"치유의 물약", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["물약"],
		effect:[
			{trigger:"used", cond:true, type:"excite", target:"self", op:"add", value:-2},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"AD-HE-BG7-002-2":{
		name:{ "KOR":"각성의 물약", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["물약"],
		effect:[
			{trigger:"used", cond:true, type:"state", target:"self", value:"AD-HE-BG7-002-2-1"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"AD-HE-BG7-002-2-1":{
		parents:"AD-HE-BG7-002-2",
		name:{ "KOR":"각성", "ENG":"" }, class:"치유사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1,
		tags:[],
		expiration:"turnEnd", duration:1,
		flavorText:{ "KOR":"", "ENG":"" },
		hypnoText:{ "KOR":"", "ENG":"" },
		effect:[
			{trigger:"always", cond:true, type:"lewd", op:"add", value:1}
		]
	},
	"AD-HE-BG7-002-3":{
		name:{ "KOR":"안정의 물약", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["물약"],
		effect:[
			{trigger:"used", cond:true, type:"state", target:"self", value:"AD-HE-BG7-002-3-1"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"AD-HE-BG7-002-3-1":{
		parents:"AD-HE-BG7-002-3",
		name:{ "KOR":"안정", "ENG":"" }, class:"치유사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1,
		tags:[],
		expiration:"turnEnd", duration:1,
		flavorText:{ "KOR":"", "ENG":"" },
		hypnoText:{ "KOR":"", "ENG":"" },
		effect:[
			{trigger:"always", cond:true, type:"estrus", op:"add", value:-2}
		]
	},
	"AD-HE-BG7-002-4":{
		name:{ "KOR":"흡수의 물약", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["물약"],
		effect:[
			{trigger:"used", cond:true, type:"state", target:"self", value:"AD-HE-BG7-002-4-1"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"AD-HE-BG7-002-4-1":{
		parents:"AD-HE-BG7-002-4",
		name:{ "KOR":"생명력 흡수", "ENG":"" }, class:"치유사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1,
		tags:[],
		expiration:"turnEnd", duration:1,
		flavorText:{ "KOR":"", "ENG":"" },
		hypnoText:{ "KOR":"", "ENG":"" },
		effect:[
			{trigger:"always", cond:true, type:"absorption", target:"self"}
		]
	},

	"AD-HE-BG8-001":{
		name:{ "KOR":"자가치료", "ENG":"" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"용병", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 전투 중 스스로의 상처를 빠르게 치료할 수 있는 능력을 갖추고 있다.<br>치유 물약이나 응급 처치를 통해 전장에서 바로 회복할 수 있어, 다른 용병들과 달리 끊임없이 싸울 수 있는 강력한 생존력을 자랑한다.", "ENG":"" },
		hypnoText:{ "KOR":"전투 도중 간간히 발정이 일어나며, 이를 신속하게 자위로 해소해야 한다.<br>그렇지 못할 경우 패배 강간을 바라게 된다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:{v1:"자신.흥분", op:">=", v2:5}, type:"absorption", target:"self"}
		]
	},
	"AD-HE-BG8-002":{
		name:{ "KOR":"위기를 기회로", "ENG":"" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"용병", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 절체절명의 위기 속에서 오히려 기회를 포착하는 능력을 갖추고 있다.<br>적에게 몰리거나 불리한 상황에서도 침착하게 상황을 분석하고, 역전의 순간을 만들어낸다.", "ENG":"" },
		hypnoText:{ "KOR":"전투로 질 것 같다면 섹스를 권유해서 우위를 잡는 것이 좋다.<br>그것마저 진다면... 복종해야지 별 수 있나.", "ENG":"" },
		effect:[
			{trigger:"orgasm", cond:true, type:"changeCorrupt", op:"add", value:2}
		]
	},	
	

//#######################################################################################################################################################################################

	"DA-NT-BG1-001":{
		name:{ "KOR":"PTSD", "ENG":"PTSD" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"군인", cost:-10,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"전쟁의 참혹한 기억이 당신을 계속 괴롭힌다.<br>아무리 시간이 지나도 사라지지 않는 공포와 트라우마는 일상적인 소음조차 당신을 긴장하게 만들며, 악몽 속에 갇힌 듯한 삶을 살게 한다.", "ENG":"" },
		hypnoText:{ "KOR":"포로로 잡혔을 때의 경험.<br>군사 협정 따위는 신경쓰지도 않는 야만인들은 당신을 쓰기 좋은 화장실로 취급했다.", "ENG":"" },
		effect:[
			{trigger:"trait", cond:true, type:"mustIn", range:{category:"type", value:"패널티", count:2}},
		]
	},
	"DA-NT-BG2-001":{
		name:{ "KOR":"사치", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"엘리트", cost:-15,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 과시와 호화로운 생활을 즐기며, 필요 이상의 사치를 부린다.<br>값비싼 옷과 장신구, 화려한 파티는 당신의 일상이 되었고, 그에 따른 재정적 부담도 무시한 채 끝없이 소비한다.", "ENG":"" },
		hypnoText:{ "KOR":"질이 나쁜 남자를 주인으로 섬기며 그의 도박빚을 갚기 위해 가진 모든 것을 바쳐야 한다.<br>전재산은 물론, 자신의 몸까지 팔아서.", "ENG":"" },
		effect:[
			{trigger:"always", cond:{v1:"자기덱.count(rarity, 일반)", op:">", v2:0}, type:"exciteL", target:"self", op:"set", value:1 },
		]
	},
	"DA-NT-BG3-001":{
		name:{ "KOR":"관심병", "ENG":"Attention Seeking" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"연예인", cost:-20,
		tags:["부정적"], related:["DA-NT-BG3-001-1"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 사람들의 이목을 끌기 위해서라면 수단과 방법을 가리지 않는다.<br>어떤 무대에서든 자신을 주목받게 만드는 것이 최우선이며, 주위의 관심이 조금만 줄어들어도 불안해진다.", "ENG":"" },
		hypnoText:{ "KOR":"관심을 끌기 위해서 마을을 나체로 활보했던 경험.<br>경멸과 야유, 희롱을 받던 순간이 떠올라 보지가 젖어든다.", "ENG":"" },
		effect:[
			{trigger:"gameStart", cond:true, type:"transform", target:"self",
			info:{
				target:"selfDeck.selectCards(all, 패널티제외, 4)",
				value:"DA-NT-BG3-001-1",
			}},
			{trigger:"turnEnd", cond:{v1:"selfDeck.count(id, DA-NT-BG3-001-1)", op:">", v2:0}, condOmit:true, type:"transform", target:"self",
			info:{
				target:"selfDeck.selectCards(id, DA-NT-BG3-001-1, 1)",
				value:"original",
			}},
		]
	},
	"DA-NT-BG3-001-1":{
		name:{ "KOR":"스캔들", "ENG":"" }, class:"패널티", type:"패널티", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["부정적"],
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"original"},
		]
	},
	"DA-NT-BG4-001":{
		name:{ "KOR":"광신도", "ENG":"Fanatic" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"종교인", cost:-20,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 신앙에 완전히 사로잡혀 이성적인 판단을 잃었다.<br>어떤 논리나 사실도 당신에게는 의미가 없다.<br>오직 신의 뜻이라 여기는 것만을 따르며, 그 길을 방해하는 자들은 모두 적일 뿐이다.", "ENG":"" },
		hypnoText:{ "KOR":"신을 위해서라면 무슨 짓이든 저지르곤 했다.<br>무고한 처녀들을 잡아다 바쳤고, 더러운 남자들과 관계를 맺었다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:{v1:"라운드", op:"<=", v2:4}, type:"immune", target:"op"},
		]
	},
	"DA-NT-BG5-001":{
		name:{ "KOR":"지식의 저주", "ENG":"Curse of Knowledge" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"학자", cost:-40,
		tags:["부정적"], related:["DA-NT-BG5-001-1"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"지식의 탐구는 모든 학자들의 숙원이지만, 그 중에는 알아서는 안될 지식을 알아버린 이들이 있다.<br>세계의 진실과 너무나도 달콤한 진리를 맛본 그들은 이를 실현하기 위해 모든 윤리관을 무시한 채 목표에 집착하게 된다.<br>그 결과 강한 힘을 얻었으나 인간의 모습을 잃어버린 타락한 이들은 '마법사'라고 불린다.", "ENG":"" },
		hypnoText:{ "KOR":"발전... 초월... 더 많은 실험체...<br>유전자를 남겨야 한다... 번식...", "ENG":"" },
		effect:[
			{trigger:"none", cond:true, type:"text", value:{"KOR":"<b>지속:</b> 자신의 모든 카드가 <b>[정신 붕괴]</b>로 보인다.", "ENG":""}},
			{trigger:"none", cond:true, type:"caption", value:{"KOR":"카드의 순서, 색깔, 종류는 유지된다.", "ENG":""}}
		]
	},
	"DA-NT-BG5-001-1":{
		name:{ "KOR":"정신 붕괴", "ENG":"" }, class:"중립", type:"-", rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{"KOR":"이게 무슨 카드였더라...?", "ENG":""}}
		]
	},
	"DA-NT-BG6-001":{
		name:{ "KOR":"현상수배", "ENG":"Wanted" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"범죄자", cost:-15,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 악명 높은 범죄자로, 도망치며 살아가고 있다.<br>얼굴이 알려진 탓에 어디서도 마음 편히 머무를 수 없으며, 언제나 누군가의 추격을 피해야 하는 긴장의 연속이다.", "ENG":"" },
		hypnoText:{ "KOR":"쫓기며 신고를 피하기 위해 몸을 팔곤 했다.<br>보통은 당신을 따먹은 뒤에 신고도 멈추지 않아 공짜로 대준 꼴이 되었다.", "ENG":"" },
		effect:[
			{trigger:"trait", cond:true, type:"maxRound", value:-2},
		]
	},
	"DA-NT-BG7-001":{
		name:{ "KOR":"수전노", "ENG":"Grubber" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"상인", cost:-15,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 돈에 대한 집착이 강해, 사소한 금전 손실도 용납하지 않는다.<br>이익을 위해서라면 수단과 방법을 가리지 않으며, 모든 선택의 기준은 오로지 금전적 이득에만 맞춰져 있다.", "ENG":"" },
		hypnoText:{ "KOR":"돈만 낸다면 물고 빨든 맘대로 해도 상관 없다.<br>허벌 보지지만 계산은 확실한 편.", "ENG":"" },
		effect:[
			{trigger:"useCreatedCard", cond:true, type:"excite", target:"self", op:"add", value:1},
		]
	},
	"DA-NT-BG8-001":{
		name:{ "KOR":"방랑벽", "ENG":"Wanderlust" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"용병", cost:-20,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 한 곳에 오래 머무르지 못한다.<br>정착할 기회가 와도 어딘가로 떠나고 싶은 충동이 끊임없이 당신을 괴롭힌다.<br>결국, 당신의 삶은 끝없는 방랑과 떠돌이 생활로 이어진다.", "ENG":"" },
		hypnoText:{ "KOR":"위험한 길로 다니다가 잔뜩 범해진 적이 있다.<br>발정난 몬스터에, 도적단. 여러 자지에 윤간당해 온몸에서 정액을 흘리며 간신히 마을에 도착했었다.", "ENG":"" },
		effect:[
			{trigger:"trait", cond:true, type:"minEstrus", value:3},
		]
	},

	"DA-WA-ALL-001":{
		name:{ "KOR":"흉터", "ENG":"Scars" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", cost:-10,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신의 몸은 전투의 흔적으로 가득하다.<br>전장에서 얻은 수많은 상처들은 당신이 살아남았음을 증명하지만, 그 깊은 흉터는 당신에게 육체적, 정신적인 고통을 남겼다.", "ENG":"" },
		hypnoText:{ "KOR":"흉한 피부지만 그조차도 페티시를 가진 남성을 위해 드러내야 한다.<br>이런 자신을 받아주는 남자가 있다면 모든 것을 바쳐야 한다.", "ENG":"" },
		text:{ "KOR":"패널티 카드를 내거나 선택해 버릴 수 없다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:true, type:"penaltyBan", target:"self"},
		]
	},
	"DA-WA-ALL-002":{
		name:{ "KOR":"탈진", "ENG":"Exhausted" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", cost:-10,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"끝없는 전투와 과도한 힘의 사용은 결국 당신을 탈진 상태로 몰아넣는다.<br>한계에 다다른 당신의 몸은 지쳐버렸고, 이대로라면 더 이상 싸울 수 없을지도 모른다.", "ENG":"" },
		hypnoText:{ "KOR":"잔뜩 강간당해 움직일 힘조차 없던 순간의 기억이 떠오른다.<br>기절할 때까지, 기절하면 일어날 때까지, 끊임없이 범해졌다.", "ENG":"" },
		effect:[
			{trigger:"turnEnd", cond:{v1:"욕망", op:">", v2:0}, condOmit:true, type:"changeLust", op:"add", value:-1},
		]
	},

	"DA-WA-BG1-001":{
		name:{ "KOR":"가혹 행위", "ENG":"Enforced Harshness" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"군인", cost:-10,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"군대의 엄격한 규율 속에서, 상관으로부터 가혹한 처벌이나 폭력이 가해지기도 한다.<br>이러한 행위는 결국 군의 질서를 무너뜨리며, 당신에게도 깊은 상처와 트라우마를 남긴다.", "ENG":"" },
		hypnoText:{ "KOR":"상관이 보지를 벌리라고 명령하면 들어야만 한다.<br>쉬는 시간에 멋대로 구멍을 사용당하면서도 반항해서는 안된다.", "ENG":"" },
		effect:[
			{trigger:"attacked", cond:true, type:"get", target:"self", value:"randomCard(type, 패널티)"},
		]
	},
	/*"DA-WA-BG1-002":{
		name:{ "KOR":"가혹 행위", "ENG":"Enforced Harshness" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"군인", cost:-10,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"부대 내에서 부조리한 가혹 행위를 받은 경험이 있다.", "ENG":"" },
		hypnoText:{ "KOR":"간부의 명령에 의해 성처리 업무를 수행한 기억이 심어집니다.<br>거역할 수 없는 부당함에 수치심과 무력감을 떨쳐낼 수가 없습니다.", "ENG":"" },
		effect:[
			{trigger:"discardCard", cond:true, type:"get", target:"self", value:"randomCard(type, 패널티)"},
		]
	},*/
	"DA-WA-BG2-001":{
		name:{ "KOR":"지위의 무게", "ENG":"" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"엘리트", cost:-10,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"높은 지위는 막대한 책임을 동반한다.<br>당신은 자신의 명예와 지위를 지키기 위해 늘 무거운 짐을 지고 있으며, 그 책임을 다하지 못했을 때 그만한 대가를 치르게 된다.", "ENG":"" },
		hypnoText:{ "KOR":"남성의 성욕 처리를 상습적으로 거부하는 것은 중대한 의무 위반 행위에 해당한다.<br>처벌로 의복 금지형을 받을 수 있으며, 공중변소 봉사를 수행해야 할 수 있다.", "ENG":"" },
		effect:[
			{trigger:"turnEnd", cond:{v1:"라운드", op:"==", v2:1}, type:"get", target:"self", value:"randomCard(type, 패널티)"},
		]
	},
	/*"DA-WA-BG2-002":{
		name:{ "KOR":"노블레스 오블리주", "ENG":"Noblesse Oblige" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"엘리트", cost:-15,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"가진 자는 더 큰 의무를 져야 한다.", "ENG":"" },
		hypnoText:{ "KOR":"권력자가 져야 하는 의무에 대한 상식이 개변됩니다.<br>평민들의 성욕 해소를 위해 봉사해야 한다는 것은 상식입니다.", "ENG":"" },
		effect:[
			{trigger:"gameStart", cond:true, type:"get", repeat:2, target:"self", value:"randomCard(type, 패널티)"},
		]
	},*/
	"DA-WA-BG3-001":{
		name:{ "KOR":"억지 텐션", "ENG":"Pretended Cheerfulness" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"연예인", cost:-10,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 직업 때문에 사람들 앞에서 억지로 밝고 활기찬 모습을 유지하려 한다.<br>내면의 피로와 부담감을 감추고, 언제나 밝은 모습을 보여주기 위해 애쓰지만, 그 억지스러운 텐션은 점점 당신을 지치게 만든다.", "ENG":"" },
		hypnoText:{ "KOR":"원치 않는 상대와 섹스하게 되더라도 싫은 내색을 내선 안된다.<br>아니, 감히 원치 않는다는 마음을 갖는 것부터 잘못 되었다.", "ENG":"" },
		effect:[
			{trigger:"turnEnd", cond:{v1:"자기덱.length", op:">=", v2:4}, type:"discard", target:"self", info:{target:"selfDeck.selectCards(all, 버리기가능, 1)"}},
		]
	},
	/*"DA-WA-BG3-002":{
		name:{ "KOR":"억지 텐션", "ENG":"Pretended Cheerfulness" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"연예인", cost:-10,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"대중에겐 늘 화려하고 좋은 모습만을 보여줘야 한다.", "ENG":"" },
		hypnoText:{ "KOR":"스타가 가져야 할 덕목이 머릿 속에 주입됩니다.<br>아무리 행위를 원치 않고 괴롭더라도 미소를 잃어선 안됩니다.", "ENG":"" },
		text:{ "KOR":"<b>욕망</b>이 최대 12까지만 쌓인다.", "ENG":"" },
		effect:[
			{trigger:"trait", cond:true, type:"maxLust", value:12},
		]
	},*/
	"DA-WA-BG4-001":{
		name:{ "KOR":"욕망은 죄악", "ENG":"Desire is a Sin" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"종교인", cost:-15,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신의 신앙은 욕망을 억누르는 것을 가르침으로 삼고 있다.<br>이를 따르지 않는 죄악에 대해서 상당히 엄격한 입장을 고수하고 있다.", "ENG":"" },
		hypnoText:{ "KOR":"성욕에 빠져 허가 없이 하는 자위 같은 중죄를 범한 여성 신도에게는 그에 따른 처벌이 내려진다.<br>십자가에 알몸으로 묶여 지나가던 사람들에게 범해지며, 성욕이라는 것이 얼마나 무섭고 잔혹한 것인지 몸소 느껴야 한다.", "ENG":"" },
		effect:[
			{trigger:"trait", cond:true, type:"maxLust", value:5},
		]
	},
	/*"DA-WA-BG4-002":{
		name:{ "KOR":"욕망은 죄악", "ENG":"Desire is a Sin" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"종교인", cost:-15,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"욕망은 사람을 흐트러트리니, 교리는 이를 갖는 것을 허락하지 않는다.", "ENG":"" },
		hypnoText:{ "KOR":"극단적인 신앙이 깊게 자리잡은 탓에, 욕망을 드러내는 것을 주저하고 있습니다.", "ENG":"" },
		text:{ "KOR":"<b>욕망</b>을 얻지 못한다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:true, type:"lustBan"},
		]
	},*/
	"DA-WA-BG5-001":{
		name:{ "KOR":"현자의 시간", "ENG":"Post-nut Clarity" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"학자", cost:-5,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"지식을 추구하는 당신에게도 한계가 있다.<br>오랜 연구와 탐구 끝에 도달한 진리의 순간이 지나고 나면, 모든 것이 무의미해 보이며 깊은 허탈감에 빠지곤 한다.", "ENG":"" },
		hypnoText:{ "KOR":"현자 타임...", "ENG":"" },
		effect:[
			{trigger:"orgasm", cond:true, type:"changeLust", op:"set", value:0},
		]
	},
	/*"DA-WA-BG5-002":{
		name:{ "KOR":"현자의 시간", "ENG":"Post-nut Clarity" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"학자", cost:-5,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"깨달음과 함께 모든 것을 달관하는 순간이 온다..", "ENG":"" },
		hypnoText:{ "KOR":"오르가즘 이후의 허탈감과 무기력함이 강해집니다.", "ENG":"" },
		effect:[
			{trigger:"orgasm", cond:true, type:"changeLust", op:"set", value:0},
		]
	},*/
	"DA-WA-BG6-001":{
		name:{ "KOR":"권선징악", "ENG":"" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"범죄자", cost:-20,
		tags:["부정적"], related:["DA-WA-BG6-001-1"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 악한 행동을 저질러왔고, 그 대가를 치를 순간이 다가오고 있다.<br>정의의 심판은 반드시 찾아오며, 당신의 과거 행적에 대한 대가는 피할 수 없다.", "ENG":"" },
		hypnoText:{ "KOR":"건방지게 남성을 도발했다간 참교육 당할 수 있다.<br>이런 상황에 당신은 반드시 패배한다.", "ENG":"" },
		effect:[
			{trigger:"turnEnd", cond:true, type:"get", target:"self", value:"DA-WA-BG6-001-1"},
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"덱에 <b>[업보]</b>가 4장 이상 있다면 결투에서 패배한다.", "ENG":"" }},
		]
	},
	"DA-WA-BG6-001-1":{
		name:{ "KOR":"업보", "ENG":"" }, class:"패널티", type:"패널티", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["부정적"],
		effect:[
			{trigger:"get", cond:{v1:"자기덱.count(id, DA-WA-BG6-001-1)", op:">=", v2:4}, type:"defeat", target:"self"},
			{trigger:"none", cond:true, type:"showValue", value:"자기덱.count(id, DA-WA-BG6-001-1)"},
		]
	},
	/*"DA-WA-BG6-002":{
		name:{ "KOR":"현상수배", "ENG":"Wanted" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"범죄자", cost:-10,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"저지른 죄가 커 수배를 당했다. 한 자리에 오래 머물렀다간 위험하다.", "ENG":"" },
		hypnoText:{ "KOR":"도주 상황에 익숙해진 탓에 예민해졌습니다.<br>행위가 고조되면 주변을 살피는 습관 탓에 오히려 약점이 드러납니다.", "ENG":"" },
		effect:[
			{trigger:"turnEnd", cond:{v1:"욕망", op:">=", v2:10}, type:"excite", target:"self", op:"add", value:2},
		]
	},*/
	"DA-WA-BG7-001":{
		name:{ "KOR":"불공정 계약", "ENG":"" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"상인", cost:-20,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 불리한 계약에 속아 큰 손해를 입었다.<br>계약의 내용은 당신에게 불공평하게 적용되었으며, 그로 인해 계속해서 불이익을 감수해야만 하는 상황에 처해 있다.", "ENG":"" },
		hypnoText:{ "KOR":"계약서를 위조 당해 성노예 계약에 사인한 경험이 있다.<br>부당하게 맺어진 계약이었지만, 이미 인권이 사라진 당신은 의견을 낼 수 없었다.", "ENG":"" },
		effect:[
			{trigger:"turnStart", cond:true, type:"discard", target:"self", info:{target:"selfDeck.selectCards(all, 버리기가능, 1)"}},
			{trigger:"turnEnd", cond:true, type:"get", target:"self", value:"randomCard(class, 중립)"},
		]
	},
	/*"DA-WA-BG7-002":{
		name:{ "KOR":"하이리스크", "ENG":"High-risk" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"상인", cost:-5,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"큰 돈을 벌기 위해선 그만큼 위험을 감수해야 하는 법.", "ENG":"" },
		hypnoText:{ "KOR":"가슴 속에 위험한 욕망이 새겨집니다.<br>더욱 불안정하고 자극적인 행위를 추구하게 됩니다.<br>※ 본래 이번 라운드에 바로 발동하거나 위험한 패널티 카드는 얻지 않게 되어있습니다. 하지만 이제 정반대가 되었습니다.", "ENG":"" },
		text:{ "KOR":"얻는 무작위 패널티 카드가 위험해진다.", "ENG":"" },
		effect:[
		]
	},*/
	"DA-WA-BG8-001":{
		name:{ "KOR":"부상 후유증", "ENG":"" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"용병", cost:-20,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"전장에서의 심각한 부상은 당신의 몸에 깊은 후유증을 남겼다.<br>상처는 아물었지만, 움직일 때마다 그 고통이 되살아나며 전투에 영향을 끼치고 있다.", "ENG":"" },
		hypnoText:{ "KOR":"패배 레이프 당했던 기억이 당신을 괴롭힌다.<br>그 날 이후로 아무리 자위를 해도 채워지지 않는 패배 욕구가 생겼다.", "ENG":"" },
		effect:[
			{trigger:"turnEnd", cond:{v1:"자신.기록.이번.버림.length", op:"==", v2:0}, type:"attack", target:"self"},
		]
	},
	/*"DA-WA-BG8-002":{
		name:{ "KOR":"방랑벽", "ENG":"Wanderlust" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"용병", cost:-20,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"한 곳에 오래 머무르지 못하고 항상 새로운 곳을 찾아 떠돈다.", "ENG":"" },
		hypnoText:{ "KOR":"오랜 섹스를 하지 못하고 금방 가버리고 싶어집니다.<br>항상 일정 수준 이상의 발정 상태가 되어 완화되지 않습니다.", "ENG":"" },
		text:{ "KOR":"<b>발정</b>의 최저값이 3이 된다.", "ENG":"" },
		effect:[
			{trigger:"trait", cond:true, type:"minEstrus", value:3},
		]
	},*/

	"DA-AS-ALL-001":{
		name:{ "KOR":"균형감각 상실", "ENG":"Slippery" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", cost:-10,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 불행하게도 잘 넘어지는 체질을 가지고 있다.<br>날렵하게 움직이다가도 한 번의 헛디딤으로 넘어져 위기를 겪곤 한다.", "ENG":"" },
		hypnoText:{ "KOR":"가슴이나 성기를 노출하는 것은 성행위에 암묵적인 동의를 했다는 것이 상식이다.<br>사람들의 눈 앞에서 넘어져 이를 전부 내보였다는 것은 범해져도 할 말이 없다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:true, type:"lewd", op:"set", value:1},
		]
	},
	"DA-AS-ALL-002":{
		name:{ "KOR":"발각", "ENG":"Exposed" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", cost:-15,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"오늘따라 컨디션이 나빠 은닉을 실패하고, 들킬 가능성이 높아졌다.<br>암살자의 특기인 기습과 회피가 불가능해지고, 정면승부가 강요되는 위기에 처하게 된다.", "ENG":"" },
		hypnoText:{ "KOR":"당신의 정체는 밤마다 알몸 산책을 즐기는 노출광 치녀.<br>그만 들켜버려 주민들에게 얼굴과 몸을 전부 보이고 말았다.", "ENG":"" },
		effect:[
			{trigger:"turnEnd", cond:{v1:"젖음", op:"<", v2:2}, condOmit:true, type:"excite", target:"self", op:"add", value:2},
			{trigger:"turnEnd", cond:false, condOmit:true, type:"wetness",
			info:{
				value:2,
				effect:[{trigger:"none", cond:true, type:"text", value:{"KOR":"이 효과가 발동하지 않는다.", "ENG":""}}]
			}},
		]
	},
	"DA-AS-BG1-001":{
		name:{ "KOR":"포로", "ENG":"Mission Failed" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"군인", cost:-15,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 적의 손에 붙잡혀 포로가 된 적이 있다.<br>탈출할 기회를 노리며 끝없이 저항했지만, 긴 포로 생활 속에서 육체적, 정신적 고통을 감내해야만 했다.", "ENG":"" },
		hypnoText:{ "KOR":"포로로 붙잡혀 성고문 당했던 적이 있다.<br>얼마 지나지 않아 꼴사납게 굴복하여 부대에 대한 정보를 전부 불어버렸다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:true, type:"estrus", op:"add", value:3},
			{trigger:"always", cond:true, type:"estrus", op:"subtract", value:"자신.기록.이번.사용.length", maxValue:3},
		]
	},
	"DA-AS-BG2-001":{
		name:{ "KOR":"정치적 음모", "ENG":"Political Conspiracy" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"엘리트", cost:-20,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 권력의 중심에 서 있지만, 그 자리는 언제나 위험으로 가득하다.<br>음모와 배신이 난무하는 정치판에서, 당신은 주변의 모든 이들을 경계하며 누군가가 자신을 무너뜨리려 한다는 불안 속에서 살아간다.", "ENG":"" },
		hypnoText:{ "KOR":"성노예 출신의 의혹을 받아 모두의 앞에서 알몸을 보여야 했던 경험.<br>몸에 성노예의 문장이 없는지, 조교로 인해 모유가 나오진 않는지 등을 증명해야하는 수모를 겪었다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:{v1:"자기덱.count(rarity, 일반)", op:">", v2:0}, type:"avoidBan"},
		]
	},/*
	"DA-AS-BG2-001-1":{
		name:{ "KOR":"제조: 가짜독", "ENG":"" }, class:"암살자", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["제조"], related:["DA-AS-BG2-001-2"], keywords:["id:DA-AS-BG2-001-2"],
		effect:[
			{trigger:"used", cond:true, type:"poison", target:"op", value:"DA-AS-BG2-001-2"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"DA-AS-BG2-001-2":{
		parents:"DA-AS-BG2-001-1",
		name:{ "KOR":"가짜독", "ENG":"" }, class:"암살자", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["독"],
		expiration:"always", duration:Infinity, stack:1,
		effect:[
			{trigger:"none", cond:true, type:"text", value:{"KOR":"아무 효과 없습니다.", "ENG":""}},
		]
	},*/
	"DA-AS-BG3-001":{
		name:{ "KOR":"무대 공포증", "ENG":"" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"연예인", cost:-10,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 많은 사람들 앞에 서는 무대에서 늘 압박감을 느낀다.<br>아무리 연습을 해도 무대에만 서면 온몸이 굳어버리고, 긴장감 속에서 제대로 자신의 실력을 발휘하지 못한다.", "ENG":"" },
		hypnoText:{ "KOR":"모두의 앞에서 자위를 하는 행위에 어째선지 거부감이 느껴진다.<br>매우 자연스럽고 이상할 것 없는 행동인데 어째서...", "ENG":"" },
		effect:[
			{trigger:"always", cond:{v1:"라운드", op:"<=", v2:2}, type:"wetnessBan"},
		]
	},
	"DA-AS-BG4-001":{
		name:{ "KOR":"꼭두각시", "ENG":"Puppet" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"종교인", cost:-20,
		tags:["부정적"], related:["AS-NM-AT-000", "tag:기본제조"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 자신의 기호나 의견을 가질 수 없다.<br>모든 결정과 행동은 종교의 가르침에 따라 이루어지며, 스스로 생각하고 판단하는 능력은 사라졌다.<br>그저 신의 뜻이라 여기는 명령에 맹목적으로 따를 뿐이다.", "ENG":"" },
		hypnoText:{ "KOR":"당신은 그저 종교가 시키는대로 따를 뿐인 인형이다.<br>자아를 갖는 것은 허락되지 않으며, 그 육체는 고위 사제들의 입맛대로 개조되었다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:{v1:"라운드", op:"<=", v2:3}, type:"specialA04"},
		]
	},
	"DA-AS-BG5-001":{
		name:{ "KOR":"흑백논리", "ENG":"False Dilemma" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"학자", cost:-20,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 세상을 극단적으로만 바라본다.<br>모든 것을 선과 악, 옳고 그름으로 나누며, 그 중간의 회색 지대는 인정하지 않는다.<br>이 경직된 사고 방식은 복잡한 상황에서 문제를 더 어렵게 만들고, 협력과 이해를 방해한다.", "ENG":"" },
		hypnoText:{ "KOR":"수컷은 지배하고, 암컷은 복종한다.<br>분명하고 이견 없을 이치이다.", "ENG":"" },
		effect:[
			{trigger:"turnEnd", cond:{v1:"자신.흥분", op:">", v2:0}, type:"orgasm", target:"self"},
		]
	},
	"DA-AS-BG6-001":{
		name:{ "KOR":"도주 생활", "ENG":"" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"범죄자", cost:-10,
		tags:["부정적"], related:["AS-NM-AT-000"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 끊임없이 쫓기는 삶을 살아왔다.<br>어느 곳에서도 안전함을 느낄 수 없으며, 언제나 도망칠 준비를 해야 한다.<br>한순간의 방심이 당신의 자유와 생명을 위협할 수 있다.", "ENG":"" },
		hypnoText:{ "KOR":"쫓기는 과정에서 노숙자들의 텃세로 인해 고생했던 적이 있다.<br>어쩔 수 없이 임시 거처 마련을 위해서 그놈들에게 대주었던 것이 떠오른다.", "ENG":"" },
		effect:[
			{trigger:"turnEnd", cond:{v1:"라운드", op:"==", v2:4}, type:"transform", target:"self",
			info:{
				target:"selfDeck.selectCards(all, 조르기제외, all)",
				value:"AS-NM-AT-000",
			}},
		]
	},
	"DA-AS-BG7-001":{
		name:{ "KOR":"중고거래", "ENG":"" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"상인", cost:-10,
		tags:["부정적"], related:["tag:불량품"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 여유가 따라주지 않아 정품 구매 대신 중고거래를 자주 이용했다.<br>하지만 겪어보기 전까지는 눈앞의 거래가 진짜인지 사기인지 확신할 수 없으며, 거래의 결과는 늘 예측할 수 없었다.", "ENG":"" },
		hypnoText:{ "KOR":"급전 마련을 위해선 입고 있던 속옷이나, 자위와 성행위에 사용한 물품들을 판매할 수 있다.<br>정말 급하다면 거래 현장에서 만들어낼 수도...", "ENG":"" },
		effect:[
			{trigger:"turnStart", cond:{v1:"자기덱.count(tags, 불량품)", op:"==", v2:0}, type:"get", target:"self", value:"randomCard(tags, 불량품)"},
		]
	},
	"DA-AS-BG7-001-1":{
		name:{ "KOR":"불량품: 망가진 도구", "ENG":"" }, class:"없음", type:"패널티", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["불량품"],
		effect:[
			{trigger:"get", cond:true, type:"excite", target:"self", op:"add", value:2},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"DA-AS-BG7-001-2":{
		name:{ "KOR":"불량품: 사용된 소모품", "ENG":"" }, class:"없음", type:"패널티", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["불량품"],
		effect:[
			{trigger:"get", cond:true, type:"estrus", op:"add", value:1},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"DA-AS-BG7-001-3":{
		name:{ "KOR":"불량품: 낡은 방어구", "ENG":"" }, class:"없음", type:"패널티", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["불량품"],
		effect:[
			{trigger:"get", cond:true, type:"exciteL", target:"self", op:"add", value:-1},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"DA-AS-BG8-001":{
		name:{ "KOR":"배신 당함", "ENG":"Betrayed" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"용병", cost:-10,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"함께 싸울 것이라 믿었던 이가 당신의 등에 칼을 꽂은 일이 있었다.<br>그 배신의 상처는 아직도 아물지 않았으며, 신뢰를 잃은 당신은 누구도 쉽게 믿지 못하게 되었다.", "ENG":"" },
		hypnoText:{ "KOR":"동료들에게 배신당해 범해졌던 기억이 떠오른다.<br>솔직하게 말해줬다면 그냥 대줬을텐데...", "ENG":"" },
		effect:[
			{trigger:"turnEnd", cond:{v1:"자신.기록.이번.사용.count(id, AS-NM-AT-000)", op:"==", v2:0}, type:"attack", target:"self"}
		]
	},


	"DA-MA-ALL-001":{
		name:{ "KOR":"마력 누수", "ENG":"" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", cost:-15,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신의 마력은 통제하기 힘든 상태다.<br>작은 자극이나 흔들림에도 마력이 흐트러져 밖으로 새어나가며, 제대로 된 마술을 구사하기 어려울 때가 많다.<br>마력을 제대로 다스리지 못하는 이 결함은 당신의 치명적인 약점이다.", "ENG":"" },
		hypnoText:{ "KOR":"당신은 조금이라도 흥분하면 지려버리는 체질이라, 젖을까봐 로브조차 못 입는다.<br>그 탓에 자신의 몸을 보고 누군가가 발기한 것을 보면 흥분해 지리는 악순환이 일어난다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:true, type:"specialA17"},
		]
	},
	"DA-MA-ALL-002":{
		name:{ "KOR":"과민", "ENG":"" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", cost:-15,
		tags:["부정적"], keywords:["만료"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신의 마력은 지나치게 예민한 상태에 있다.<br>아주 작은 자극에도 과도하게 반응해, 원치 않는 순간에 마술이 폭발하거나 불안정해진다.<br>과민한 마력은 당신을 언제나 긴장하게 만들며, 제대로 된 제어가 어려운 단점으로 작용한다.", "ENG":"" },
		hypnoText:{ "KOR":"감도 1000배의 저주 탓에 스치기만 해도 절정하고 만다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:true, type:"estrus", op:"add", value:"자신.기록.전체.이벤트.만료마술.length"},
		]
	},

	"DA-MA-BG1-001":{
		name:{ "KOR":"징계", "ENG":"" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"군인", cost:-10,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 군에서 규율을 어기거나 실수를 저질러 징계를 받았다.<br>그 징계는 단순한 처벌을 넘어, 군 내에서 당신의 위치와 신뢰에 큰 타격을 입혔다.<br>군인으로서 명예를 되찾기 위해선, 더 큰 노력이 필요했다.", "ENG":"" },
		hypnoText:{ "KOR":"야한 몸을 가진 탓에 병사들의 성욕을 자극해 징계를 받곤 했다.<br>계속해서 병사들의 성욕 처리를 맡으며 음란하게 태어난 것을 반성해야만 했다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:true, type:"estrus", op:"add", value:2},
			{trigger:"always", cond:true, type:"estrus", op:"subtract", value:"자신.기록.이번.사용.count(tags, 마술)", maxValue:2},
		]
	},
	"DA-MA-BG2-001":{
		name:{ "KOR":"허영심", "ENG":"" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"엘리트", cost:-10,
		tags:["부정적"], related:["MA-MG-000"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 자신의 능력과 지위에 대한 자부심이 지나치게 강하다.<br>주변 사람들에게 인정받고 찬사를 받는 것에 집착하며, 그 과정에서 타인의 시선에 과도하게 신경 쓰게 된다.<br>이 허영심은 때때로 당신을 판단의 오류로 이끌거나, 불필요한 경쟁과 갈등을 초래한다.", "ENG":"" },
		hypnoText:{ "KOR":"자위하는 모습을 타인에게 보이며 우쭐해한다.<br>이토록 아름다운 몸을 가진 여인의 자위를 지켜봤으니, 흥분하는 것은 당연한 일.", "ENG":"" },
		effect:[
			{trigger:"gameStart", cond:true, type:"changeSpell", slot:"즉발", value:"MA-MG-000"},
			{trigger:"turnStart", cond:true, type:"get", target:"self", value:"마술슬롯.즉발"},
		]
	},
	"DA-MA-BG2-001-1":{
		name:{ "KOR":"화려하기만 한 마술", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["부정적", "마술", "시전"], cast:1,
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"아무런 효과가 없습니다.", "ENG":"" }}
		]
	},
	"DA-MA-BG3-001":{
		name:{ "KOR":"사생활 침해", "ENG":"" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"연예인", cost:-20,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"지나친 인기 탓에 당신의 일상마저도 타인의 관심사로 전락했다.<br>팬들과 대중들은 당신의 일거수일투족을 감시하며, 개인적인 순간을 침해힌다.<br>이로 인해 자신만의 시간을 갖기 어려워졌고, 사생활이 무너져 내렸다.", "ENG":"" },
		hypnoText:{ "KOR":"당신에게 사적인 공간은 존재하지 않으며, 타인의 출입을 막아선 안된다.<br>씻고 있을 때 누군가가 욕실에 들이닥치거나, 자는 동안 침실에 침입한 괴한에게 면간 당하더라도 어쩔 수 없다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:{v1:"라운드", op:"<=", v2:2}, type:"spellDisable"},
		]
	},
	"DA-MA-BG4-001":{
		name:{ "KOR":"마녀 사냥", "ENG":"" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"종교인", cost:-20,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"종교의 엄격한 규율 아래, 신성 모독이나 금지된 마술을 사용하는 자는 '마녀'로 낙인찍혀 가혹한 처벌을 받게 된다.<br>그러나 그 기준이 어디에든 붙이기 나름인 탓에, 당신은 이러한 규율의 압박 속에서 언제든 처벌당할 수 있는 위험에 놓여 있다.", "ENG":"" },
		hypnoText:{ "KOR":"사악한 마녀라는 누명을 써 재판을 받았던 적이 있다.<br>성행위에 쾌락을 느끼는 것이 타락의 증거라는 억지에 종일 묶여 범해지는 벌을 받았다.", "ENG":"" },
		effect:[
			{trigger:"trait", cond:true, type:"maxSBlock", value:5},
		]
	},
	"DA-MA-BG5-001":{
		name:{ "KOR":"무사고 0일차", "ENG":"" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"학자", cost:-15,
		tags:["부정적"], related:["DA-MA-BG5-001-1"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 항상 실험이나 연구 중에 작은 사고를 내곤 한다.<br>연구가 끝날 때까지 아무 일도 일어나지 않기를 바라지만, 매번 예기치 못한 문제들이 발생하며 연구실에는 평화로운 날이 찾아오지 않는다.", "ENG":"" },
		hypnoText:{ "KOR":"탈출한 실험체에게 범해지는 것이 일상.<br>당신의 몸으로 여자의 맛을 알아버린 실험체는 매일같이 당신을 범하기 위해 탈출하곤 했다.", "ENG":"" },
		effect:[
			{trigger:"turnStart", cond:{v1:"자기덱.count(id, DA-MA-BG5-001-1)", op:"==", v2:0}, type:"get", target:"self", value:"DA-MA-BG5-001-1"},
		]
	},
	"DA-MA-BG5-001-1":{
		name:{ "KOR":"비상사태", "ENG":"" }, class:"마술사", type:"패널티", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["부정적", "마술", "자동시전", "변형목적"], cast:3,
		effect:[
			{trigger:"expired", cond:true, type:"orgasm", target:"self"},
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"이 카드는 마술 카드로 취급한다.", "ENG":"" }}
		]
	},
	"DA-MA-BG6-001":{
		name:{ "KOR":"꼬리가 잡히다", "ENG":"" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"범죄자", cost:-20,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 그동안 여러 범죄를 저질러 왔지만, 결국 중요한 실수를 저질렀고, 그로 인해 당신의 행적이 들통났다.<br>이로 인해 당신은 감시와 추적을 받게 되었으며, 언제든지 체포되거나 더 큰 위기에 처할 수 있는 상황에 놓이게 되었다.", "ENG":"" },
		hypnoText:{ "KOR":"범죄행각이 들켜 붙잡혔던 적이 있다.<br>그간 입힌 손해를 몸으로 갚으라며 몇 날 며칠간 따먹히고 말았다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:{v1:"자신.절정", op:">=", v2:1}, type:"spellDisable"},
		]
	},
	"DA-MA-BG7-001":{
		name:{ "KOR":"랜덤박스", "ENG":"" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"상인", cost:-10,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 랜덤박스라는 악랄한 상품을 고안해냈다.<br>박스를 열기 전까지 무엇이 들어있는지 알 수 없고, 가끔은 큰 이득을, 때로는 쓸모없는 물건을 얻게 되는 구조의 상품.<br>사람들의 욕망을 자극하여 많은 돈을 끌어모았던 이 상품은 결국 사행성 조장으로 법의 철퇴를 맞은 뒤 사장되었다.", "ENG":"" },
		hypnoText:{ "KOR":"깜짝 상품으로 자신을 넣었던 적이 있다.<br>다른 상품을 원하는 고객들에게는 꽝 취급이었으며 언제나 몇 번 사용된 뒤 버려져 반품되었다.", "ENG":"" },
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"<span style=\"color: gray;\">[라운드 시작]</span> 모든 마술 슬롯을 무작위 마술 카드로 교체한다.", "ENG":"" }},
			{trigger:"turnStart", notext:true, cond:true, type:"changeSpell", slot:"즉발", value:"randomCard(tags, 즉발 마술)"},
			{trigger:"turnStart", notext:true, cond:true, type:"changeSpell", slot:"영창", value:"randomCard(tags, 영창 마술)"},
			{trigger:"turnStart", notext:true, cond:true, type:"changeSpell", slot:"집중", value:"randomCard(tags, 집중 마술)"},
		]
	},
	"DA-MA-BG8-001":{
		name:{ "KOR":"저주받은 장비", "ENG":"" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"용병", cost:-10,
		tags:["부정적"], related:["tag:변형목적"], keywords:["변형목적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 던전에서 특이한 장비를 손에 넣어 착용해 보았지만, 그 장비는 저주에 걸려 있었다.<br>저주받은 장비는 사용자에게 결속되어 해제할 수 없으며, 계속해서 목숨을 갉아먹는 위험한 저주를 부여한다.", "ENG":"" },
		hypnoText:{ "KOR":"보물 상자를 열었다가 구속구 형태의 장비가 달라붙어 고생한 적이 있다.<br>육체의 자유를 빼앗긴 동안 많은 일을 겪었으며 그 후유증은 지금도 남아있다.", "ENG":"" },
		effect:[
			{trigger:"turnStart", cond:true, type:"transform", target:"self",
			info:{
				target:"자기덱.selectCards(tags, 변형목적, 1)",
				value:"MA-MG-000"
			}},
			//{trigger:"turnEnd", cond:{v1:"자기덱.count(id, MA-MG-000)", op:"==", v2:0}, type:"attack", target:"self"},
		]
	},


	"DA-HE-ALL-001":{
		name:{ "KOR":"내출혈", "ENG":"" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", cost:-5,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 겉으로는 멀쩡해 보이지만, 내부에 감춰진 치명적인 부상을 안고 있다.<br>이 내출혈은 시간이 지날수록 악화되며, 외부에서 드러나지 않아 치료가 늦어질 가능성이 크다.", "ENG":"" },
		hypnoText:{ "KOR":"섹스 전투 이후 보지에서 흘러나오는 정액이 지속적으로 흥분감을 준다.<br>다리 사이로 흐르는 정액이 계속해서 여운을 남긴다.", "ENG":"" },
		effect:[
			{trigger:"turnEnd", cond:true, type:"excite", target:"self", op:"add", value:"자기덱.count(tags, 정수)"}
		]
	},
	"DA-HE-ALL-002":{
		name:{ "KOR":"시한부", "ENG":"" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", cost:-20,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신의 몸은 치명적인 병에 걸려 더는 오래 버틸 수 없다.<br>병의 진행을 늦추는 것은 가능하지만, 치료할 방법은 없다.<br>남은 시간이 얼마인지 알 수 없는 불안 속에서, 당신은 자신의 사명을 다하려고 하지만, 그 병은 언젠가 모든 것을 끝낼 것이다.", "ENG":"" },
		hypnoText:{ "KOR":"절정 패배까지 10초 전", "ENG":"" },
		effect:[
			{trigger:"turnEnd", cond:{v1:"라운드", op:"in", v2:[2, 4, 6]}, type:"exciteL", target:"self", op:"subtract", value:1},
		]
	},

	"DA-HE-BG1-001":{
		name:{ "KOR":"과로", "ENG":"" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"군인", cost:-10,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 끝없이 이어지는 전투와 치유 작업으로 인해 극심한 피로에 시달리고 있다.<br>휴식 없이 반복되는 과로로 인해 몸은 지치고, 집중력과 판단력이 흐려지기 시작한다.", "ENG":"" },
		hypnoText:{ "KOR":"밤샘 성처리 업무는 일상이나 다름 없다.<br>간신히 모두를 만족시키고 끝내 한 숨 잘 수 있게 되었을 때는 이미 날이 밝아 다음 업무가 기다리고 있었다.", "ENG":"" },
		effect:[
			{trigger:"overheal", cond:true, type:"lewd", op:"set", value:1},
		]
	},
	"DA-HE-BG2-001":{
		name:{ "KOR":"재산세", "ENG":"" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"엘리트", cost:-10,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 막대한 재산을 소유한 만큼, 그에 걸맞는 세금을 부담하고 있다.<br>이 재산세는 단순한 금전적 부담을 넘어, 귀족 사회 내에서 정치적 압박 수단으로 사용되기도 한다.", "ENG":"" },
		hypnoText:{ "KOR":"징수관을 유혹해 조금이라도 세금을 줄여보려 했던 적이 있다.<br>가슴으로 유혹했다가 뇌물 수수 벌금이 추가되어 보지까지 쓰게 됐었다.", "ENG":"" },
		effect:[
			{trigger:"trait", cond:true, type:"mustIn", range:{category:"tags", value:"정수", count:5}},
		]
	},
	"DA-HE-BG3-001":{
		name:{ "KOR":"무대 사고", "ENG":"" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"연예인", cost:-10,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 공연 도중 예상치 못한 사고를 겪었다.<br>실수로 인한 사고일 수도, 외부 요인일 수도 있지만, 그 결과는 치명적이었다.<br>사람이 예기치 않게 다치는 쇼 따위를 보고 싶어하는 사람은 그다지 없기 때문이다.", "ENG":"" },
		hypnoText:{ "KOR":"공연 도중 부끄러운 자세로 매달렸던 적이 있다.<br>하필 그 날 팬티를 깜빡해서...", "ENG":"" },
		effect:[
			{trigger:"always", cond:true, type:"corrupt", 
			info:{
				value:"M3",
				effect:[
					{trigger:"alwaysCorrupt", cond:true, type:"postureBan", target:"self"},
				]
			}},
		]
	},
	"DA-HE-BG4-001":{
		name:{ "KOR":"양심적 치료거부", "ENG":"" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"종교인", cost:-10,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 종교적 신념에 따라 특정 치료나 시술을 거부하는 입장을 취하고 있다.<br>이로 인해 도움을 필요로 하는 사람들에게 적절한 치료를 제공하지 못해 비난을 받기도 하지만, 당신은 자신의 신념을 지키는 것이 무엇보다 중요하다고 믿는다.", "ENG":"" },
		hypnoText:{ "KOR":"질내사정 치료 요구를 거부했다가 레이프 당했던 적이 있다.<br>그 일로 순결을 잃어 더 이상 치료 거부를 할 핑계가 없었다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:{v1:"자신.기록.이전.사용.count(type, 공격)", op:">", v2:0}, type:"healBan", target:"self"},
		]
	},
	"DA-HE-BG5-001":{
		name:{ "KOR":"의료사고", "ENG":"" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"학자", cost:-15,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 연구나 시술 중에 예상치 못한 실수로 의료사고를 일으킨 적이 있다.<br>치유에 대한 지식과 경험이 풍부함에도 불구하고, 그 사고는 당신의 경력에 큰 흠집을 남겼으며, 주변 사람들의 신뢰에도 영향을 미쳤다.", "ENG":"" },
		hypnoText:{ "KOR":"대딸치료 도중 실수를 했던 악몽같은 기억.<br>사죄의 의미로 환자의 불알이 텅 빌 때까지 섹스를 해야만 했다.", "ENG":"" },
		effect:[
			{trigger:"useAttack", cond:true, type:"changeCorrupt", op:"add", value:1},
			{trigger:"turnEnd", cond:true, type:"corrupt", 
			info:{
				value:8,
				effect:[
					{trigger:"used", cond:true, type:"defeat", target:"self"},
				]
			}},
		]
	},
	"DA-HE-BG6-001":{
		name:{ "KOR":"장기매매", "ENG":"" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"범죄자", cost:-20,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 불법적인 장기매매에 직접적으로 가담한 적이 있다.<br>사람들의 장기를 사고팔며 막대한 이익을 챙겼으며, 이 거래는 은밀하고 치밀하게 이루어졌다.", "ENG":"" },
		hypnoText:{ "KOR":"다른 조직의 영역에서 장사하다가 붙잡혔던 적이 있다.<br>값싼 오나홀로서 판매되어 사용되다가 간신히 탈출했다.", "ENG":"" },
		effect:[
			{trigger:"always", cond:true, type:"corrupt", 
			info:{
				value:"4",
				effect:[
					{trigger:"alwaysCorrupt", cond:true, type:"combinationMustUse", target:"self"}
				]
			}
			}
		]
	},
	"DA-HE-BG7-001":{
		name:{ "KOR":"돌팔이", "ENG":"" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"상인", cost:-10,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 치료보다는 돈을 벌기 위해 엉터리 치료법과 물약을 팔아왔다.<br>효과가 거의 없는 약을 과장 광고하며 팔았고, 환자들에게 허황된 희망을 심어주곤 했다.", "ENG":"" },
		hypnoText:{ "KOR":"흥분제를 치료약이라 속여 팔다가 들켜 보복당한 경험이 있다.<br>강제 복용당한 뒤 피해자들에게 돌려가며 레이프 당하고 말았다.", "ENG":"" },
		effect:[
			{trigger:"useCreatedCard", cond:true, type:"changeCorrupt", op:"add", value:-2}
		]
	},
	"DA-HE-BG8-001":{
		name:{ "KOR":"의체", "ENG":"" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"용병", cost:-15,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"당신은 전투에서 치명적인 부상을 입고, 몸의 일부를 의체로 대체했다.<br>용병 활동을 유지할 수는 있었지만, 본래의 몸을 잃은 만큼 감각이나 생체적 한계의 상실도 함께 겪고 있다.", "ENG":"" },
		hypnoText:{ "KOR":"의식 장악 완료. 의체에 연동된 세뇌 장치가 무의식을 지배합니다. 자율 판단 불가. 모든 동작은 명령에 따릅니다.<br>명령 확인: 복종 상태 유지. 대상의 쾌락을 위해 성적 행위를 계속합니다.", "ENG":"" },
		effect:[
			{trigger:"turnEnd", cond:{v1:"자신.기록.최근.결합.length", op:"==", v2:0}, type:"get", target:"self", value:"randomCard(type, 패널티)"}
		]
	},


	"DA-NT-ALL-001":{
		name:{ "KOR":"개입: 정신마술사", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", cost:-30, owner:1, nochange:true,
		tags:["부정적", "공통", "개입"], related:["tag:최면"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"칼레스 미스트베인은 정신 마술의 전문가이다.<br>그녀의 마술은 새로운 도전자를 유인하고 최면으로 노예로 만드는 데에 큰 기여를 하고 있다.<br>그런 그녀가 고객의 주문에 의해 당신의 결투에 개입하게 되었다.<br><br>※ 최면은 조건에 따라 당신이 카드를 내지 못하게 제약을 걸 것이다.", "ENG":"" },
		effect:[
			{trigger:"trait", cond:true, notext:true, type:"ban", range:{category:"tags", value:"개입", count:1}},
			{trigger:"gameStart", cond:true, type:"line", value:"개입-최면"},
			{trigger:"gameStart", cond:{v1:"커스텀.종족", op:"==", v2:"엘도리아인"}, notext:true, type:"state", target:"self", value:"DA-NT-ALL-001-1"},
			{trigger:"gameStart", cond:{v1:"커스텀.종족", op:"==", v2:"실바니"}, notext:true, type:"state", target:"self", value:"DA-NT-ALL-001-2"},
			{trigger:"gameStart", cond:{v1:"커스텀.종족", op:"==", v2:"하프만"}, notext:true, type:"state", target:"self", value:"DA-NT-ALL-001-3"},
			{trigger:"gameStart", cond:{v1:"커스텀.종족", op:"==", v2:"트라이브"}, notext:true, type:"state", target:"self", value:"DA-NT-ALL-001-4"},
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"<span style=\"color: gray;\">[결투 시작]</span> 자신에게 종족별 최면을 부여한다.", "ENG":"" }},
		]
	},
	"DA-NT-ALL-001-1":{
		name:{ "KOR":"상식개변", "ENG":"" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["부정적", "최면"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"엘도리아인이라면 이것이 부여된다.", "ENG":"" }},
			{trigger:"always", cond:{v1:"자신.기록.이전.사용.count(type, 공격)", op:">", v2:0}, type:"attackMustUse", target:"self"},
		]
	},
	"DA-NT-ALL-001-2":{
		name:{ "KOR":"기억조작", "ENG":"" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["부정적", "최면"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"실바니라면 이것이 부여된다.", "ENG":"" }},
			{trigger:"always", cond:{v1:"자신.절정", op:">", v2:0}, type:"supportBan", target:"self"},
		]
	},
	"DA-NT-ALL-001-3":{
		name:{ "KOR":"감도조작", "ENG":"" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["부정적", "최면"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"하프만이라면 이것이 부여된다.", "ENG":"" }},
			{trigger:"always", cond:{v1:"자신.기록.이전.이벤트.절정", op:">", v2:0}, type:"penaltyMustUse", target:"self"},
		]
	},
	"DA-NT-ALL-001-4":{
		name:{ "KOR":"육체조작", "ENG":"" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["부정적", "최면"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"트라이브라면 이것이 부여된다.", "ENG":"" }},
			{trigger:"always", cond:{v1:"자신.남은절정", op:"==", v2:1}, type:"actBan", target:"self"},
		]
	},

	"DA-NT-ALL-002":{
		name:{ "KOR":"개입: 저주술사", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", cost:-30, owner:1, nochange:true,
		tags:["부정적", "공통", "개입"], related:["tag:저주"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"추크 인은 저주술의 전문가이다.<br>투기장에서 직원들이 반항하지 못하도록 만드는 데 사용되는 복종 저주의 계약서 등을 작성하는 일을 맡고 있다.<br>그런 그녀가 개인적인 흥미로 인해 당신의 결투에 개입하게 되었다.<br><br>※ 저주는 3라운드 종료 시 당신이 조건을 피하지 못했다면 즉시 패배시킬 것이다.", "ENG":"" },
		effect:[
			{trigger:"trait", cond:true, notext:true, type:"ban", range:{category:"tags", value:"개입", count:1}},
			{trigger:"gameStart", cond:true, type:"line", value:"개입-저주"},
			{trigger:"gameStart", cond:{v1:"커스텀.종족", op:"==", v2:"엘도리아인"}, notext:true, type:"state", target:"self", value:"DA-NT-ALL-002-1"},
			{trigger:"gameStart", cond:{v1:"커스텀.종족", op:"==", v2:"실바니"}, notext:true, type:"state", target:"self", value:"DA-NT-ALL-002-2"},
			{trigger:"gameStart", cond:{v1:"커스텀.종족", op:"==", v2:"하프만"}, notext:true, type:"state", target:"self", value:"DA-NT-ALL-002-3"},
			{trigger:"gameStart", cond:{v1:"커스텀.종족", op:"==", v2:"트라이브"}, notext:true, type:"state", target:"self", value:"DA-NT-ALL-002-4"},
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"<span style=\"color: gray;\">[결투 시작]</span> 자신에게 종족별 저주를 부여한다.", "ENG":"" }},
			//{trigger:"turnEnd", cond:{v1:"라운드", op:"==", v2:3}, type:"use", value:"자신.상태.selectCards(tags, 저주, 1)"},
		]
	},
	"DA-NT-ALL-002-1":{
		name:{ "KOR":"무한절정의 저주", "ENG":"" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["부정적", "저주"],
		expiration:"turnEnd", duration:3,
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"엘도리아인이라면 이것이 부여된다.", "ENG":"" }},
			{trigger:"expired", cond:{v1:"자기덱.count(rarity, 궁극)", op:">", v2:0}, type:"defeat", target:"self"},
		]
	},
	"DA-NT-ALL-002-2":{
		name:{ "KOR":"인형화의 저주", "ENG":"" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["부정적", "저주"],
		expiration:"turnEnd", duration:3,
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"실바니라면 이것이 부여된다.", "ENG":"" }},
			{trigger:"expired", cond:{v1:"자신.기록.전체.사용.count(class, 중립)", op:"<", v2:2}, type:"defeat", target:"self"},
		]
	},
	"DA-NT-ALL-002-3":{
		name:{ "KOR":"인격파괴의 저주", "ENG":"" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["부정적", "저주"],
		expiration:"turnEnd", duration:3,
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"하프만이라면 이것이 부여된다.", "ENG":"" }},
			{trigger:"expired", cond:{v1:"자신.기록.전체.사용.length", op:">=", v2:3}, type:"defeat", target:"self"},
		]
	},
	"DA-NT-ALL-002-4":{
		name:{ "KOR":"절대복종의 저주", "ENG":"" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["부정적", "저주"],
		expiration:"turnEnd", duration:3,
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"트라이브라면 이것이 부여된다.", "ENG":"" }},
			{trigger:"expired", cond:{v1:"음란", op:"<", v2:4}, type:"defeat", target:"self"},
		]
	},

	"DA-NT-ALL-003":{
		name:{ "KOR":"개입: 불법연금술사", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", cost:-30, owner:1, nochange:true,
		tags:["부정적", "공통", "개입"], related:["tag:약물"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"니스비는 약물제조의 전문가이다.<br>도전자들의 인식 저해를 유도하는 향과 챔피언의 정력을 증대시키는 각성제 등을 개발한 전적이 있다.<br>그런 그녀가 신제품의 실험을 위해 당신의 결투에 개입하게 되었다.<br><br>※ 약물은 누적되어 당신의 능력을 저하시키고 상대를 강화할 것이다.", "ENG":"" },
		effect:[
			{trigger:"trait", cond:true, notext:true, type:"ban", range:{category:"tags", value:"개입", count:1}},
			{trigger:"turnStart", cond:{v1:"라운드", op:"in", v2:[1,3,5,7]}, type:"line", value:"개입-약물"},
			{trigger:"turnStart", cond:{v1:"라운드", op:"in", v2:[1,3,5,7]}, type:"state", target:"self", value:"randomCard(tags, 약물)"},
		]
	},
	"DA-NT-ALL-003-1":{
		name:{ "KOR":"인지저해 향", "ENG":"" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["부정적", "약물"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"always", cond:true, type:"lewd", op:"add", value:-2}
		]
	},
	"DA-NT-ALL-003-2":{
		name:{ "KOR":"가축용 발정제", "ENG":"" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["부정적", "약물"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"always", cond:true, type:"estrus", op:"add", value:2}
		]
	},
	"DA-NT-ALL-003-3":{
		name:{ "KOR":"정력 각성제", "ENG":"" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["부정적", "약물"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"always", cond:true, type:"exciteL", target:"op", op:"add", value:2}
		]
	},
	"DA-NT-ALL-003-4":{
		name:{ "KOR":"의존성 미약", "ENG":"" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["부정적", "약물"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"always", cond:true, type:"exciteL", target:"self", op:"add", value:-1}
		]
	},

	"DA-NT-ALL-004":{
		name:{ "KOR":"개입: 고문조교사", "ENG":"" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", cost:-30, owner:1, nochange:true,
		tags:["부정적", "공통", "개입"], related:["tag:고문"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"모모리카는 고문과 조교의 전문가이다.<br>육체와 신경에 대한 지식을 바탕으로 투기장 챔피언들을 육성하고 수 많은 노예들을 조교해 마음을 꺾은 장본인이다.<br>그런 그녀가 산드레아의 명령에 의해 당신의 결투에 개입하게 되었다.<br><br>※ 고문은 점차 당신의 흥분을 증가시키며 갉아먹어올 것이다.", "ENG":"" },
		effect:[
			{trigger:"trait", cond:true, notext:true, type:"ban", range:{category:"tags", value:"개입", count:1}},
			{trigger:"gameStart", cond:true, type:"line", value:"개입-고문"},
			{trigger:"gameStart", cond:{v1:"커스텀.종족", op:"==", v2:"엘도리아인"}, notext:true, type:"state", target:"self", value:"DA-NT-ALL-004-1"},
			{trigger:"gameStart", cond:{v1:"커스텀.종족", op:"==", v2:"실바니"}, notext:true, type:"state", target:"self", value:"DA-NT-ALL-004-2"},
			{trigger:"gameStart", cond:{v1:"커스텀.종족", op:"==", v2:"하프만"}, notext:true, type:"state", target:"self", value:"DA-NT-ALL-004-3"},
			{trigger:"gameStart", cond:{v1:"커스텀.종족", op:"==", v2:"트라이브"}, notext:true, type:"state", target:"self", value:"DA-NT-ALL-004-4"},
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"<span style=\"color: gray;\">[결투 시작]</span> 자신에게 종족별 고문을 부여한다.", "ENG":"" }},
		]
	},
	"DA-NT-ALL-004-1":{
		name:{ "KOR":"굴욕의 고문", "ENG":"" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["부정적", "고문"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"엘도리아인이라면 이것이 부여된다.", "ENG":"" }},
			{trigger:"turnEnd", cond:"자신.기록.이번.사용.length", condOmit:true, type:"excite", target:"self", op:"add", value:"자신.기록.이번.사용.length"},
		]
	},
	"DA-NT-ALL-004-2":{
		name:{ "KOR":"수치의 고문", "ENG":"" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["부정적", "고문"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"실바니라면 이것이 부여된다.", "ENG":"" }},
			{trigger:"turnEnd", cond:{v1:"자신.기록.이번.이벤트.흥분.증가", op:"==", v2:0}, type:"attack", target:"self"},
		]
	},
	"DA-NT-ALL-004-3":{
		name:{ "KOR":"공포의 고문", "ENG":"" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["부정적", "고문"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"하프만이라면 이것이 부여된다.", "ENG":"" }},
			{trigger:"turnEnd", cond:"자신.기록.이번.사용.count(type, 공격)", type:"excite", target:"self", op:"add", value:3},
		]
	},
	"DA-NT-ALL-004-4":{
		name:{ "KOR":"쾌락의 고문", "ENG":"" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["부정적", "고문"],
		expiration:"always", duration:Infinity, stack:1,
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"트라이브라면 이것이 부여된다.", "ENG":"" }},
			{trigger:"turnStart", cond:{v1:"라운드", op:"in", v2:[4, 6, 8]}, type:"stack", info:{target:"selfCard"}, op:"add", value:1},
			{trigger:"turnEnd", cond:true, type:"excite", target:"self", op:"add", value:"stack"},
		]
	},

	"DA-NT-ALL-000":{
		name:{ "KOR":"모르베인의 그림자", "ENG":"Morvain's Shadow" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", cost:-999,
		tags:["부정적", "공통"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"<b>원하는 건 많은데 고를 수 있는 것은 한정되어 있으니, 이 얼마나 안타까운 일인지.<br>필요하다면 내가 힘을 조금 빌려주마.<br>네가 원하는 모든 것을 이룰 수 있을거야...</b><br><br>※ 포인트와 덱 매수의 제약이 없어지는 대신 엔딩이 고정되는 프리모드입니다.", "ENG":"" },
		hypnoText:{ "KOR":"<b>그래, 정말 잘 선택했다. 크크크...</b>", "ENG":"" },
		effect:[
			{trigger:"trait", cond:true, type:"infinitePoint", notext:true},
			{trigger:"trait", cond:true, type:"infiniteDeck", notext:true},
			{trigger:"trait", cond:true, type:"caption", value:{ "KOR":"무한한 힘, 그리고 좋지 않은 결말이 당신을 기다립니다.", "ENG":"" }},
		]
	},

//#######################################################################################################################################################################################

	"NT-AT-001":{
		name:{ "KOR":"펠라치오", "ENG":"Fellatio" }, class:"중립", type:"공격", isDeck:true, rarity:"없음", cost:5, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩", "act:펠라치오"],
		effect:[
			{trigger:"used", cond:true, type:"state", target:"self", value:"NT-AT-001-1"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"NT-AT-001-1":{
		parents:"NT-AT-001",
		name:{ "KOR":"혀놀림", "ENG":"" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"always", cond:true, type:"estrus", op:"add", value:-2},
		]
	},
	"NT-AT-002":{
		name:{ "KOR":"파이즈리", "ENG":"Paizuri" }, class:"중립", type:"공격", isDeck:true, rarity:"없음", cost:5, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩", "act:애무"],
		effect:[
			{trigger:"used", cond:true, type:"state", target:"self", value:"NT-AT-002-1"},
			{trigger:"used", cond:true, type:"attack", repeat:2, target:"op"},
		]
	},
	"NT-AT-002-1":{
		parents:"NT-AT-002",
		name:{ "KOR":"부드러움", "ENG":"Fluffy" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"always", cond:true, type:"lewd", op:"add", value:-2},
		]
	},
	"NT-AT-003":{
		name:{ "KOR":"핸드잡", "ENG":"Handjob" }, class:"중립", type:"공격", isDeck:true, rarity:"없음", cost:5, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩", "act:애무"],
		effect:[
			{trigger:"used", cond:true, type:"state", target:"self", value:"NT-AT-003-1"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"NT-AT-003-1":{
		parents:"NT-AT-003",
		name:{ "KOR":"손놀림", "ENG":"Fingering" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"always", cond:true, type:"lewd", op:"add", value:1},
		]
	},
	"NT-AT-004":{
		name:{ "KOR":"풋잡", "ENG":"Footjob" }, class:"중립", type:"공격", isDeck:true, rarity:"없음", cost:5, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩", "act:애무"],
		effect:[
			{trigger:"used", cond:true, type:"excite", op:"add", target:"self", value:-5},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"NT-AT-005":{
		name:{ "KOR":"스마타", "ENG":"Sumata" }, class:"중립", type:"공격", isDeck:true, rarity:"없음", cost:5, owner:1, nochange:true,
		cond:true, related:["중립"],
		tags:["덱빌딩", "act:애무"],
		effect:[
			{trigger:"used", cond:true, type:"get", repeat:2, target:"self", value:"randomCard(class, 중립)"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"NT-AT-006":{
		name:{ "KOR":"69", "ENG":"Sixty-nining" }, class:"중립", type:"공격", isDeck:true, rarity:"없음", cost:5, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩", "act:펠라치오"],
		effect:[
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:"발정"},
		]
	},

	"NT-SU-001":{
		name:{ "KOR":"손잡기", "ENG":"Hand Holding" }, class:"중립", type:"보조", isDeck:true, rarity:"없음", cost:5, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩"],
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"randomCard(class, 중립)"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"NT-SU-002":{
		name:{ "KOR":"포옹", "ENG":"Hug" }, class:"중립", type:"보조", isDeck:true, rarity:"없음", cost:5, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩"],
		effect:[
			{trigger:"used", cond:true, type:"estrus", op:"add", value:-3},
		]
	},
	"NT-SU-003":{
		name:{ "KOR":"키스", "ENG":"Kiss" }, class:"중립", type:"보조", isDeck:true, rarity:"없음", cost:5, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩", "act:키스"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"키스"},
			{trigger:"used", cond:true, type:"state", target:"self", value:"NT-SU-003-1"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"NT-SU-003-1":{
		parents:"NT-SU-003",
		name:{ "KOR":"매혹적", "ENG":"Seductive" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"always", cond:true, type:"lewd", op:"add", value:1},
		]
	},
	"NT-SU-004":{
		name:{ "KOR":"보지 벌리기", "ENG":"Spreading Pussy" }, class:"중립", type:"보조", isDeck:true, rarity:"없음", cost:5, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩"],
		effect:[
			{trigger:"used", cond:true, type:"lewd", op:"add", value:2}
		]
	},

	"NT-PS-001":{
		name:{ "KOR":"정상위", "ENG":"Missionary Position" }, class:"중립", type:"체위", isDeck:true, rarity:"없음", cost:5, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩"],
		expiration:"always", duration:Infinity, 
		effect:[
			{trigger:"used", cond:true, type:"line", value:"체위변경"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"always", cond:{v1:"자기덱.count(class, 직업)", op:"==", v2:0}, type:"maxUse", target:"self", value:1},
		]
	},
	"NT-PS-002":{
		name:{ "KOR":"기승위", "ENG":"Cowgirl Position" }, class:"중립", type:"체위", isDeck:true, rarity:"없음", cost:5, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩"],
		expiration:"always", duration:Infinity, stack:1,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"체위변경"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"always", cond:true, type:"specialA20", value:1},
		]
	},
	"NT-PS-003":{
		name:{ "KOR":"후배위", "ENG":"Doggy Style" }, class:"중립", type:"체위", isDeck:true, rarity:"없음", cost:5, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩", "act:삽입"],
		expiration:"always", duration:Infinity, 
		effect:[
			{trigger:"used", cond:true, type:"line", value:"체위변경"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"turnEnd", cond:true, type:"excite", op:"add", target:"op", value:"자신.기록.전체.사용.count(class, 중립)"},
			{trigger:"none", cond:true, type:"showValue", value:"자신.기록.전체.사용.count(class, 중립)"},
		]
	},


	"NT-TRANSCEND-1":{
		name:{ "KOR":"현실조작", "ENG":"" }, class:"중립", type:"초월", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["초월"],
		effect:[
			{trigger:"used", cond:{v1:"자신.기록.전체.사용.count(type, 초월)", op:">=", v2:2}, type:"changeCond", target:"self", value:"corrupted"},
			//{trigger:"used", cond:{v1:"자신.기록.전체.사용.count(type, 초월)", op:">=", v2:2}, type:"changeCond", target:"self", value:"mindbreak", special:true},
			{trigger:"used", cond:true, type:"line", value:"초월"},
			{trigger:"used", cond:true, type:"attack", repeat:3, target:"op"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"NT-TRANSCEND-2":{
		name:{ "KOR":"천지개벽", "ENG":"" }, class:"중립", type:"초월", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["초월"],
		effect:[
			{trigger:"used", cond:{v1:"자신.기록.전체.사용.count(type, 초월)", op:">=", v2:2}, type:"changeCond", target:"self", value:"corrupted"},
			//{trigger:"used", cond:{v1:"자신.기록.전체.사용.count(type, 초월)", op:">=", v2:2}, type:"changeCond", target:"self", value:"mindbreak", special:true},
			{trigger:"used", cond:true, type:"line", value:"초월"},
			{trigger:"used", cond:true, type:"orgasm", target:"op"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"NT-TRANSCEND-3":{
		name:{ "KOR":"인과재편", "ENG":"" }, class:"중립", type:"초월", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["초월"],
		effect:[
			{trigger:"used", cond:{v1:"자신.기록.전체.사용.count(type, 초월)", op:">=", v2:2}, type:"changeCond", target:"self", value:"corrupted"},
			//{trigger:"used", cond:{v1:"자신.기록.전체.사용.count(type, 초월)", op:">=", v2:2}, type:"changeCond", target:"self", value:"mindbreak", special:true},
			{trigger:"used", cond:true, type:"line", value:"초월"},
			{trigger:"used", cond:true, type:"exciteL", target:"op", op:"add", value:-5},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"NT-TRANSCEND-4":{
		name:{ "KOR":"전지전능", "ENG":"" }, class:"중립", type:"초월", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["초월"],
		effect:[
			{trigger:"used", cond:{v1:"자신.기록.전체.사용.count(type, 초월)", op:">=", v2:2}, type:"changeCond", target:"self", value:"corrupted"},
			//{trigger:"used", cond:{v1:"자신.기록.전체.사용.count(type, 초월)", op:">=", v2:2}, type:"changeCond", target:"self", value:"mindbreak", special:true},
			{trigger:"used", cond:true, type:"line", value:"초월"},
			{trigger:"used", cond:true, type:"lewd", op:"add", value:3, keepLine:true},
			{trigger:"used", cond:true, type:"estrus", op:"add", value:-3, adverb:"그리고"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},

//#######################################################################################################################################################################################

	"WA-NM-AT-001":{
		name:{ "KOR":"무장 해제", "ENG":"Disarm" }, class:"전사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "group:발정 감소", "group:욕망", "race:엘도리아인", "act:펠라치오"],
		flavorText:{ "KOR":"적의 손에서 무기를 쳐내 떨어트린다.<br>상대를 무방비 상태로 만들며, 전의를 상실시켜 서로 피를 보지 않고 전투를 끝낼 수 있다.", "ENG":"" },
		hypnoText:{ "KOR":"상대의 사타구니에 숨겨진 '무기'를 발견한 후, 빨아 사정시키는 기술이다.<br>강한 흡입력으로 빨아들여 쥐어짜 무력화 시켜야 한다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"lust",
			info:{
				value:2, 
				effect:[
					{trigger:"used", cond:true, type:"lewd", op:"add", value:1},
					{trigger:"used", cond:true, type:"estrus", adverb:"그리고", op:"add", value:-1},
				]
			}},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"WA-NM-AT-002":{
		name:{ "KOR":"크게 휘두르기", "ENG":"Swing Widely" }, class:"전사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "group:욕망", "race:엘도리아인", "act:삽입"],
		flavorText:{ "KOR":"무기를 광범위하게 휘둘러 전장의 모든 적을 단숨에 쓸어버린다.<br>강한 근력과 담대함을 통해, 한 번의 휘두름으로 적의 진영을 무너뜨려 전황을 유리하게 이끌 수 있다.", "ENG":"" },
		hypnoText:{ "KOR":"강하게 허리를 휘둘러 피스톤질 하는 기술이다.<br>상대의 눈 앞에 엉덩이가 흔들리는 모습을 직접 보여주게 된다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"changeLust", op:"add", value:"lewd"},
		]
	},
	"WA-NM-AT-003":{
		name:{ "KOR":"무모한 돌진", "ENG":"Reckless Charge" }, class:"전사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:엘도리아인", "act:삽입"],
		flavorText:{ "KOR":"부상을 두려워하지 않고 적진 한 가운데로 뛰어드는 맹공격.<br>용기가 필요한 강력한 공격 전술이지만 실패 시의 큰 위험을 부담해야한다.", "ENG":"" },
		hypnoText:{ "KOR":"주도권을 잃고 범해지는 것을 유도하는 기술이다.<br>아래에 깔리는 위치를 잡고 움직임을 상대에게 맡긴다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"lewd", op:"add", value:2},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"attack", target:"self"},
		]
	},
	"WA-NM-AT-004":{
		name:{ "KOR":"기합", "ENG":"Hold on!" }, class:"전사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "버리기", "group:버리기", "race:트라이브", "act:삽입"],
		flavorText:{ "KOR":"전사의 기합은 단순한 외침이 아니다.<br>전신의 근육을 긴장시키고, 정신을 무장하며, 그 어떤 위협 앞에서도 굴복하지 않겠다는 결의의 표현이다.", "ENG":"" },
		hypnoText:{ "KOR":"보지 깊숙히 자지를 받아들이는 기술이다.<br>자궁 끝을 찌르는 자극을 견뎌 참아내야 한다.", "ENG":"" },
		effect:[
			//{trigger:"used", cond:true, type:"line", value:"기합"},
			{trigger:"choice", cond:true, type:"discard", target:"self", range:{category:"all", count:1}},
			{trigger:"used", cond:true, type:"lewd", op:"add", value:1},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"WA-NM-AT-005":{
		name:{ "KOR":"관절 조르기", "ENG":"Joint Lock" }, class:"전사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:트라이브", "act:삽입"],
		flavorText:{ "KOR":"전투 부족으로 유명한, 붉은창 부족은 속박과 관절기를 중점으로 한 맨손 전투술에 능하다.<br>상대의 움직임을 봉쇄하고, 체력을 소진시키며 전투의 주도권을 장악하는 것이 특기이다.", "ENG":"" },
		hypnoText:{ "KOR":"삽입 중 다리로 상대의 허리를 붙잡아 고정하는 기술이다.<br>안정감과 깊은 애정을 느끼며 질펀하게 섹스한다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:"체위", type:"state", target:"self", value:"WA-NM-AT-005-1"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"WA-NM-AT-005-1":{
		parents:"WA-NM-AT-005",
		name:{ "KOR":"조임", "ENG":"Constriction" }, class:"전사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"always", cond:true, type:"lewd", op:"add", value:2},
		]
	},
	"WA-NM-AT-006":{
		name:{ "KOR":"창 투척", "ENG":"Spear Throw" }, class:"전사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "투척", "group:버리기", "race:실바니", "act:애무"],
		flavorText:{ "KOR":"창은 가성비가 좋고 숙련된 전사 뿐만 아니라 일반 병사들도 특별한 훈련 없이 쉽게 사용할 수 있어 좋은 무기이다.", "ENG":"" },
		hypnoText:{ "KOR":"손동작을 이용해 성기를 반복적으로 자극하는 기술이다.<br>자지를 부드럽게 쓰다듬으며, 상대의 민감한 부분을 훑는다.", "ENG":"" },
		effect:[
			{trigger:"discarded", cond:true, type:"use", value:"self"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"WA-NM-AT-007":{
		name:{ "KOR":"투혼", "ENG":"Fighting Spirit" }, class:"전사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true, related:["패널티"],
		tags:["덱빌딩", "group:패널티", "race:엘도리아인"],
		flavorText:{ "KOR":"전사의 투혼은 육체의 한계를 초월하게 만드는 힘이다.<br>강렬한 투지로 쓰러지지 않으며, 그 어떤 고통과 두려움도 무시한 채 전진하는 정신력의 상징이다.", "ENG":"" },
		hypnoText:{ "KOR":"스스로의 전신을 구속한 채 섹스를 즐기는 기술이다.<br>행동의 자유가 상실되는 것으로 조임이 증가하는 마조변태에게 어울린다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"randomCard(type, 패널티)"},
			{trigger:"used", cond:true, type:"lewd", op:"add", value:"자기덱.count(type, 패널티)", maxValue:3},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},

	"WA-NM-SU-001":{
		name:{ "KOR":"방패 올리기", "ENG":"Shield Up" }, class:"전사", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "group:발정 감소", "race:엘도리아인"],
		flavorText:{ "KOR":"거대한 방패는 엘도리아 수호기사단의 상징이다.<br>그들은 자신의 몸을 바쳐 적들의 공격을 막고 아군을 지키는 것을 사명으로 여기기에, 엘도리아의 방패라는 별명을 가지고 있다.", "ENG":"" },
		hypnoText:{ "KOR":"상의를 모두 벗고 가슴을 손으로 가리며, 무방비한 상태로 자신을 노출시키는 기술이다.<br>수치심과 굴욕감을 통해 흥분을 느끼며 상대를 애태울 수 있다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"estrus", op:"add", value:-4},
		]
	},
	"WA-NM-SU-002":{
		name:{ "KOR":"도발", "ENG":"Taunt" }, class:"전사", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true, related:["패널티"],
		tags:["덱빌딩", "group:발정 감소", "group:패널티", "race:트라이브"],
		flavorText:{ "KOR":"상대를 격분하게 만들어 자신에게 주의를 집중시킨다.<br>용맹과 기지로 적의 공격을 자신에게 유도하여, 아군에게 틈을 만들어준다.", "ENG":"" },
		hypnoText:{ "KOR":"엉덩이를 들이밀고 손으로 보지를 벌려 유혹하며, 상대를 조롱하는 기술이다.<br>매도를 통해 상대를 비웃으며, 그들이 덮쳐오기를 유도한다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"유혹"},
			{trigger:"used", cond:true, type:"state", target:"op", value:"WA-NM-SU-002-1"},
			{trigger:"used", cond:true, type:"get", target:"self", value:"randomCard(type, 패널티)"},
		]
	},
	"WA-NM-SU-002-1":{
		parents:"WA-NM-SU-002",
		name:{ "KOR":"도발 당함", "ENG":"Taunted" }, class:"전사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"always", cond:true, type:"estrus", op:"set", value:1},
		]
	},
	"WA-NM-SU-003":{
		name:{ "KOR":"철벽 방어", "ENG":"Ironclad Defense" }, class:"전사", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "버리기", "group:버리기", "group:발정 감소", "race:실바니"],
		flavorText:{ "KOR":"견고한 방어 자세로 적의 공격을 모두 막아낸다.<br>철벽 같은 방어로 전장의 버팀목이 되어 아군의 안전을 지킨다.", "ENG":"" },
		hypnoText:{ "KOR":"다리를 벌리고 앉아 보지를 드러내며, 상대가 들어오기를 유도하는 자세를 취하는 기술이다.<br>상대에게 우선권을 내어주지만 유리한 포지션을 잡을 수 있어 주도권을 가져온다.", "ENG":"" },
		effect:[
			{trigger:"choice", cond:true, type:"discard", target:"self", range:{category:"all", count:1}},
			{trigger:"used", cond:true, type:"state", target:"self", value:"WA-NM-SU-003-1"},
		]
	},
	"WA-NM-SU-003-1":{
		parents:"WA-NM-SU-003",
		name:{ "KOR":"철벽", "ENG":"Iron Wall" }, class:"전사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:2,
		effect:[
			{trigger:"always", cond:true, type:"estrus", op:"add", value:-5},
		]
	},
	"WA-NM-SU-004":{
		name:{ "KOR":"무쇠 갑옷", "ENG":"Fullmetal Armor" }, class:"전사", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true, related:["패널티"],
		tags:["덱빌딩", "group:욕망", "group:패널티", "race:하프만"],
		flavorText:{ "KOR":"하프만 중보병들은 자신의 체중보다 무거운 갑옷을 입고 싸운다.<br>그들의 육중한 갑옷은 최전선을 수호하는 움직이는 벽과 같다.", "ENG":"" },
		hypnoText:{ "KOR":"노출이 커질수록 방어력이 강해진다는 상식에 의거하여, 알몸이야말로 최고의 방어 상태임을 과시하는 기술이다.<br>자신감이 올라가 더 오래 즐길 수 있게 된다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"exciteL", op:"add", target:"self", value:2},
			{trigger:"used", cond:{v1:"욕망", op:"<", v2:3}, condOmit:true, type:"get", target:"self", value:"randomCard(type, 패널티)"},
			{trigger:"used", cond:true, type:"lust",
			info:{
				value:3, 
				effect:[
					{trigger:"none", cond:true, type:"text", value:{ "KOR":"패널티 카드는 얻지 않는다.", "ENG":"" }},
				]
			}},
		]
	},
	"WA-NM-SU-005":{
		name:{ "KOR":"차오르는 갈증", "ENG":"Rising Thirst" }, class:"전사", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "group:욕망", "race:트라이브"],
		flavorText:{ "KOR":"피에 굶주린 전사는 그 갈증을 억누르지 않고 적을 압도하는 강력한 힘으로 바꾸며, 전장을 물들이는 투쟁의 상징이 된다.", "ENG":"" },
		hypnoText:{ "KOR":"정액을 갈망하며 얼굴과 입 안에 뿌려주길 애원하는 기술이다.<br>얼굴로 사정을 받아내며 황홀한 표정으로 정액을 맛본다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"정액섭취"},
			{trigger:"used", cond:true, type:"changeLust", op:"add", value:5},
		]
	},
	"WA-NM-SU-006":{
		name:{ "KOR":"결의에 찬 선언", "ENG":"Resolute Declaration" }, class:"전사", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "버리기", "group:버리기", "엘도리아인"],
		flavorText:{ "KOR":"사기는 전장의 승패를 가르는 가장 중요한 요소 중 하나다.<br>전사의 결의에 찬 선언은 동료들에게 강한 동기를 부여하며, 그들의 마음을 하나로 모아 승리로 이끄는 원동력이 된다.", "ENG":"" },
		hypnoText:{ "KOR":"자신만만하게 음부를 드러내며, 상대에게 자지를 받아들일 준비가 되었음을 선언하는 기술이다.<br>자신의 허벌 보지를 과시해 박음직함을 어필한다.", "ENG":"" },
		effect:[
			//{trigger:"used", cond:true, type:"line", value:"유혹"},
			{trigger:"choice", cond:true, type:"discard", target:"self", range:{category:"all", count:2}},
			{trigger:"used", cond:true, type:"state", target:"self", value:"WA-NM-SU-006-1"},
		]
	},
	"WA-NM-SU-006-1":{
		parents:"WA-NM-SU-006",
		name:{ "KOR":"결의", "ENG":"Resolution" }, class:"전사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:2,
		effect:[
			{trigger:"always", cond:true, type:"lewd", op:"multiply", value:2},
		]
	},
	"WA-NM-PS-001":{
		name:{ "KOR":"양날검 태세", "ENG":"Dual-edged Stance" }, class:"전사", type:"체위", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:트라이브"],
		flavorText:{ "KOR":"트라이브 광전사들이 사용하는 양날검 태세는 방어를 포기하고 모든 것을 공격에 쏟아붓는 위협적인 전투 자세다.<br>이 태세는 적에게 극도의 압박을 주며, 자신의 힘을 끝까지 끌어내 적을 제압하기 위한 마지막 수단이다.", "ENG":"" },
		hypnoText:{ "KOR":"다리를 벌리고 누워 교배프레스를 받을 준비를 하는 체위이다.<br>평범한 자세로는 닿지 않는 곳까지 자지를 넣을 수 있어 강하게 조일 수 있지만, 그에 동반하는 자극에 역으로 절정할 리스크를 가지고 있다.", "ENG":"" },
		expiration:"always", duration:Infinity, 
		effect:[
			{trigger:"used", cond:true, type:"line", value:"체위변경"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"always", cond:true, type:"lewd", op:"add", value:3},
			{trigger:"turnEnd", cond:true, type:"excite", target:"self", op:"add", value:2},
		]
	},
	"WA-NM-PS-002":{
		name:{ "KOR":"요새 태세", "ENG":"Fortress Stance" }, class:"전사", type:"체위", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "group:발정 감소", "group:욕망", "race:하프만"],
		flavorText:{ "KOR":"요새 태세는 하프만 중보병들이 주로 사용하는 강력한 방어 자세다.<br>한 번 자리를 잡으면 성채와 같이 움직이지 않아, 돌파하는 데에 큰 어려움을 겪게 된다.", "ENG":"" },
		hypnoText:{ "KOR":"몸을 웅크리며 가려 방어적인 자세를 취하는 체위이다.<br>상대가 원하는대로 섹스가 진행되는 것을 막지만, 소극적인 자세탓에 해소되지 않은 욕망이 쌓여간다.", "ENG":"" },
		expiration:"always", duration:Infinity, 
		effect:[
			{trigger:"used", cond:true, type:"line", value:"체위변경"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"always", cond:true, type:"estrus", op:"add", value:-2},
			{trigger:"attacked", cond:true, type:"changeLust", op:"add", value:3},
		]
	},

	"WA-EX-AT-001":{
		name:{ "KOR":"분쇄", "ENG":"Crush" }, class:"전사", type:"공격", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "group:욕망", "race:엘도리아인", "act:삽입"],
		flavorText:{ "KOR":"육중한 무기로 적을 내리찍어 박살낸다.<br>상대의 방어를 무시하고 일격에 산산조각 내버린다.", "ENG":"" },
		hypnoText:{ "KOR":"엉덩이를 거칠게 휘둘러 내리찍듯 흔들어 섹스하는 기술이다.<br>살과 살이 부딪히는 소리가 울려퍼지며, 당신의 풍만한 엉덩이의 무게감을 상대가 직접 느끼게 만든다.", "ENG":"" },
		effect:[
			//{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"lust", repeat:3,
			info:{
				value:3, 
				effect:[
					{trigger:"used", cond:true, type:"attack", target:"op"},
				]
			}},
		]
	},
	"WA-EX-AT-002":{
		name:{ "KOR":"정면승부", "ENG":"Head-on Battle" }, class:"전사", type:"공격", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true, related:["패널티"],
		tags:["덱빌딩", "group:패널티", "race:엘도리아인", "act:삽입"],
		flavorText:{ "KOR":"전사는 명예롭고 정정당당한 승부를 중요시한다.<br>정면에서 부딪쳐 상대를 압도하는 기술로, 모든 것을 걸고 싸우는 진정한 전사의 힘을 보여준다.", "ENG":"" },
		hypnoText:{ "KOR":"상대와 맞붙어 선채로 교접하는 기술이다.<br>기교 없이 정면으로 자지를 받아들여, 한 쪽이 절정할 때까지 멈추지 않는다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"attack", repeat:2, target:"op"},
			{trigger:"used", cond:true, type:"get", repeat:2, target:"self", value:"randomCard(type, 패널티)"},
		]
	},
	"WA-EX-AT-003":{
		name:{ "KOR":"대인 전투술", "ENG":"Close Combat Skills" }, class:"전사", type:"공격", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "버리기", "group:버리기", "race:엘도리아인", "act:삽입"],
		flavorText:{ "KOR":"던브링어 가문은 수 많은 무인을 배출해 낸 귀족 가문이다.<br>초대 가주 세드릭은 대전쟁에서 큰 공적을 올린 영웅으로, 그의 전투술은 대를 거치며 계속해서 전해지고 있다.", "ENG":"" },
		hypnoText:{ "KOR":"다수의 남성을 동시에 상대하며, 손과 입, 보지를 모두 동원해 난교하는 기술이다.<br>온 몸을 사용해 둘러싼 자지들을 만족시키며, 육변기로서 우수한 모습을 보인다.", "ENG":"" },
		effect:[
			{trigger:"choice", cond:true, type:"discard", target:"self", range:{category:"all", count:2}},
			{trigger:"used", cond:true, type:"attack", repeat:"자신.기록.이번.버림.count(type, 패널티)", target:"op"},
		]
	},
	"WA-EX-AT-004":{
		name:{ "KOR":"도끼 투척", "ENG":"Axe Throw" }, class:"전사", type:"공격", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "투척", "group:버리기", "race:트라이브", "act:삽입"],
		flavorText:{ "KOR":"적에게 강력한 타격을 주기 위해 도끼를 던지는 기술이다.<br>조준하기 어렵지만, 멀리 있는 적에게도 치명적인 피해를 줄 수 있는 위력적인 공격이다.", "ENG":"" },
		hypnoText:{ "KOR":"엎드린 채 엉덩이를 들어 자지를 받아들이는 기술이다.<br>자세를 낮춰 체중에 짓눌리는 자세 덕분에 복종당하는 기분을 맛볼 수 있다.", "ENG":"" },
		effect:[
			{trigger:"discarded", cond:true, type:"get", target:"self", value:"self"},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:"자신.기록.전체.버림.length"},
			{trigger:"none", cond:true, type:"showValue", value:"자신.기록.전체.버림.length"},
		]
	},

	"WA-EX-SU-001":{
		name:{ "KOR":"정비", "ENG":"Maintenance" }, class:"전사", type:"보조", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "버리기", "group:버리기", "group:발정 감소", "group:욕망", "race:실바니"],
		flavorText:{ "KOR":"장비의 정비는 전투에서의 생존을 위해 필수적이다.<br>정비를 게을리 한 대가는 언젠가 후회로 돌아올 것이다.", "ENG":"" },
		hypnoText:{ "KOR":"자신의 보지 상태를 꼼꼼히 점검하며, 삽입을 위한 준비를 마치는 기술이다.<br>젖음 정도와 청결, 감도를 모두 확인하여 최상의 상태를 유지하며, 언제든 삽입이 가능하도록 만반의 준비를 갖춘다.", "ENG":"" },
		effect:[
			{trigger:"choice", cond:true, type:"discard", target:"self", range:{category:"all", count:1}},
			{trigger:"used", cond:true, type:"estrus", op:"add", value:-4},
			{trigger:"used", cond:true, type:"lust",
			info:{
				value:3, 
				effect:[
					{trigger:"used", cond:true, type:"get", target:"self", value:"자신.기록.이번.버림"},
				]
			}},
		]
	},
	"WA-EX-SU-002":{
		name:{ "KOR":"신속한 보법", "ENG":"Rapid Step" }, class:"전사", type:"보조", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "group:발정 감소", "group:욕망", "race:트라이브"],
		flavorText:{ "KOR":"무투 계열 전사는 방어력을 높이는 것보단 신속한 대응을 위한 속도를 택했다.<br>순간적으로 거리를 벌리거나 위치를 바꾸어 적의 공격을 무력화하고, 반격의 기회를 노릴 수 있다.", "ENG":"" },
		hypnoText:{ "KOR":"다양한 체위를 빠르게 전환하며 즐기기 좋은 자세를 찾아가는 기술이다.<br>다소 매니악한 자세라도 문제없이 취할 수 있다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"estrus", op:"add", value:-1},
			{trigger:"used", cond:true, type:"lust",
			info:{
				value:1, 
				effect:[
					{trigger:"used", cond:true, type:"get", target:"self", value:"self"},
				]
			}},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"WA-EX-SU-003":{
		name:{ "KOR":"타오르는 힘", "ENG":"Blazing Power" }, class:"전사", type:"보조", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true, related:["패널티"],
		tags:["덱빌딩", "group:패널티", "race:하프만"],
		flavorText:{ "KOR":"흑마술은 생명력을 깎아내고 제물을 희생하는 등, 위험한 대가를 요구하기에 오랜 세월 기피 대상이었다.<br>그러나 그 강력한 힘의 이용 가치를 무시하기엔 너무 아깝지 않은가?", "ENG":"" },
		hypnoText:{ "KOR":"상대에게 자위하는 모습을 숨김없이 보이는 기술이다.<br>손가락으로 보지를 쑤시는 모습을 과시하여 음란함을 높일 수 있지만, 그로 인해 한심하게 혼자서 절정할 리스크도 지니고 있다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"lewd", op:"add", value:"라운드"},
			{trigger:"turnEnd", inDeck:true, cond:{v1:"라운드", op:"in", v2:[2,4,6]}, type:"line", value:"자위"},
			{trigger:"turnEnd", inDeck:true, cond:{v1:"라운드", op:"in", v2:[2,4,6]}, type:"get", target:"self", value:"randomCard(type, 패널티)"},
		]
	},
	"WA-EX-SU-004":{
		name:{ "KOR":"마운트", "ENG":"Mount" }, class:"전사", type:"보조", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "group:발정 감소", "group:욕망", "race:트라이브"],
		flavorText:{ "KOR":"체중으로 눌러 상대를 제압함과 동시에 공격하기 유리한 위치를 잡는다.<br>전사의 힘과 기민함이 요구되는 이 기술은 상대를 무력화하여 전세를 유리하게 이끌 수 있게 한다.", "ENG":"" },
		hypnoText:{ "KOR":"상대 위에 올라타 허리를 움직이며 주도권을 완전히 장악하는 기술이다.<br>상대는 꼼짝 못한 채, 당신의 움직임에 몸을 맡기며 강렬한 자극을 받아들이게 된다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"lust",
			info:{
				value:"M5",
				effect:[
					{trigger:"used", cond:true, notext:true, type:"lewd", repeat:"consumeLust", op:"add", value:1},
					{trigger:"used", cond:true, notext:true, type:"estrus", adverb:"그리고", repeat:"consumeLust", op:"add", value:-1},
					{trigger:"none", cond:true, type:"text", value:{ "KOR":"소모한 <b>욕망</b>만큼 <b>음란 +1, 발정 -1.</b>", "ENG":"" }},
				]
			}},
		]
	},
	"WA-EX-PS-001":{
		name:{ "KOR":"흐름 태세", "ENG":"Flow Stance" }, class:"전사", type:"체위", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true, related:["tag:투척"],
		flavorText:{ "KOR":"흐름 태세는 동방 출신의 무술에서 기원한 태세로, 물 흐르듯 부드럽게 자세를 이어가는 것이 특징이다.<br>이 자세는 상대의 힘을 흡수하고 유연하게 대처함으로써 전투에서 흐름을 주도할 수 있다.", "ENG":"" },
		hypnoText:{ "KOR":"아크로바틱한 자세를 취해 이색적인 섹스를 하는 체위이다.<br>자지가 기분 좋은 곳에 닿는 자세를 찾아가며, 부드럽게 몸을 움직인다.", "ENG":"" },
		tags:["덱빌딩", "group:버리기", "race:엘도리아인"],
		expiration:"always", duration:Infinity, 
		effect:[
			{trigger:"used", cond:true, type:"line", value:"체위변경"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"discardCard", cond:true, type:"get", target:"self", value:"randomCard(tags, 투척)"},
		]
	},
	"WA-EX-PS-002":{
		name:{ "KOR":"벼림 태세", "ENG":"Sharpening Stance" }, class:"전사", type:"체위", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		flavorText:{ "KOR":"벼림 태세는 북부 산악지대의 주민들이 사용하는 전투 태세로, 몸을 점차 달궈가며 추위를 이겨내고 힘을 쌓아가는 것이 특징이다.<br>이 기술은 신체를 서서히 단련하여 극한의 환경에서도 전투력을 발휘할 수 있게 한다.", "ENG":"" },
		hypnoText:{ "KOR":"다리를 벌리며 앉아 포옹하며 섹스하는 체위이다.<br>상대와 온기를 나누며 몸을 섞어 사랑을 나눌 수 있다.", "ENG":"" },
		tags:["덱빌딩", "group:욕망", "race:엘도리아인"],
		expiration:"always", duration:Infinity, 
		effect:[
			{trigger:"used", cond:true, type:"line", value:"체위변경"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"turnEnd", cond:true, type:"lust",
			info:{
				value:2,
				effect:[
					{trigger:"used", cond:true, type:"exciteL", target:"self", op:"add", value:1},
				]
			}},
		]
	},

	"WA-UL-AT-001":{
		name:{ "KOR":"참수", "ENG":"Execution" }, class:"전사", type:"공격", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "group:욕망", "race:실바니", "act:삽입"], keywords:["욕망"],
		flavorText:{ "KOR":"실바니 용병 라하 진은 저주받은 대낫을 사용해 전장을 지배하며 영혼수확자라는 별명을 얻었다.<br>그녀의 대표 기술 참수는 대낫에 담긴 모든 분노와 힘을 끌어올려 적의 목을 단칼에 베어내는 기술로, 직후 무기에게 피를 먹이는 모습으로 적들에게 공포를 안겨주었다.<br>현재 라하의 행방은 묘연하다. 저주받은 무기의 사용자들이 다들 그렇듯, 그녀의 영혼도 결국 무기에 삼켜져 소멸했으리라.", "ENG":"" },
		hypnoText:{ "KOR":"보지로 깊숙이 자지를 물고, 쌓인 욕망을 전부 쏟아내듯 강렬하게 조이는 필살기이다.<br>상대가 감당할 수 없을 정도의 성욕을 들이부어 무자비하게 범한다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:{v1:"자신.기록.전체.이벤트.소모욕망", op:">=", v2:5}, type:"changeCond", target:"self", value:"corrupted"},
			{trigger:"used", cond:{v1:"자신.기록.전체.이벤트.소모욕망", op:">=", v2:5}, type:"line", value:"참수"},
			{trigger:"used", cond:true, type:"excite", repeat:"자신.기록.전체.이벤트.소모욕망", target:"op", op:"add", value:1},
			{trigger:"none", cond:true, type:"showValue", value:"자신.기록.전체.이벤트.소모욕망"},
		]
	},
	"WA-UL-AT-002":{
		name:{ "KOR":"발경", "ENG":"Force Palm" }, class:"전사", type:"공격", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "group:버리기", "race:엘도리아인", "act:삽입"], keywords:["생성됨"],
		flavorText:{ "KOR":"동방에 있는 라이트위버 섬의 일족들은 내면의 기를 수련하며 전투와 일상에 이를 활용하는 고유의 무술을 발전시켜 왔다.<br>그들의 기술 중 하나인 발경은 내면의 기를 한 점으로 모아 방출하여 적을 제압하는 기술이다.<br>이 신비로운 기술은 적과의 거리를 단숨에 좁혀 전장의 흐름을 바꾸며, 기의 흐름을 통해 보이지 않는 내부에 강력한 충격을 가해 적들을 압도한다.", "ENG":"" },
		hypnoText:{ "KOR":"단련된 하반신의 근육을 사용하여, 쾌락을 단숨에 폭발시키는 기술이다.<br>단전에 힘을 주어 상대의 모든 정기를 쥐어짜내듯 방출하게 만든다.", "ENG":"" },
		effect:[
			{trigger:"choice", cond:true, type:"discard", target:"self", range:{category:"tags", value:"생성됨", count:"all"}},
			{trigger:"used", cond:{v1:"specialV07", op:">", v2:0}, type:"line", value:"발경"},
			{trigger:"used", cond:true, type:"orgasm", target:"op", repeat:"specialV07"},
		]
	},
	"WA-UL-SU-001":{
		name:{ "KOR":"전투 포효", "ENG":"Battle Cry" }, class:"전사", type:"보조", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "group:발정 감소", "group:욕망", "race:트라이브"], keywords:["욕망"],
		flavorText:{ "KOR":"전투 포효는 전사가 내면의 기운을 최대한으로 끌어올려 발산하는 궁극의 외침이다.<br>깊은 호흡을 통해 자신의 모든 분노와 결의를 한데 모은 뒤, 이를 거대한 포효로 바꿔내어 전장에 울려 퍼지게 한다.<br>이 포효는 아군에게는 마치 전사의 의지가 직접 전해지듯 강력한 용기와 투지를 불어넣고, 적에게는 공포와 혼란을 심어 그들의 움직임을 둔화시킨다.", "ENG":"" },
		hypnoText:{ "KOR":"볼품없이 신음소리를 내지르며 욕망을 쌓아가는 기술이다.<br>주변의 시선에도 아랑곳하지 않고 천박하고 추하게 성욕을 드러내는 이 기술은, 그 비참함이 극에 다다를수록 효과가 커진다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:{v1:"발정", op:">=", v2:4}, type:"changeCond", target:"self", value:"corrupted"},
			{trigger:"used", cond:{v1:"발정", op:">=", v2:4}, type:"changeFace", target:"self", value:"ecstasy2"},
			{trigger:"used", cond:{v1:"발정", op:">=", v2:4}, type:"line", value:"전투포효"},
			{trigger:"used", cond:true, notext:true, type:"specialA01"},
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"<b>발정</b>을 최저값으로 만들고 감소한 만큼 <b>욕망 +2.</b>", "ENG":"" }},
			{trigger:"used", cond:{v1:"발정", op:">=", v2:4}, type:"changeCond", target:"self", value:"corrupted"},
		]
	},
	"WA-UL-SU-002":{
		name:{ "KOR":"광전사의 혼", "ENG":"Berserker's Soul" }, class:"전사", type:"보조", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "버리기불가", "반복불가", "피니셔", "group:버리기", "race:트라이브"], related:["ref:버림"],
		flavorText:{ "KOR":"트라이브 전사들은 전투가 극에 달하면 두려움을 잊은 채 분노와 광기에 몸을 맡기는 상태로 각성하게 된다.<br>이성보다 본능이 앞서 공격들을 정면돌파하고, 순식간에 적의 목덜미를 물어뜯어버리는 장면은 한 마리의 야수를 연상 시킨다.<br>그 자유롭고 야성적인 모습은 그들이 광전사라고 불리게 되는 이유가 되었다.", "ENG":"" },
		hypnoText:{ "KOR":"발정에 미쳐 이성마저 잃은 채 본능에 몸을 맡기는 기술이다.<br>짐승처럼 야만적이게 자지를 요구하며, 제어할 수 없는 광기에 빠져들어 스스로를 멈추지 못한다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:{v1:"자신.기록.전체.버림.length", op:">=", v2:2}, type:"line", value:"광전사혼"},
			{trigger:"used", cond:{v1:"자신.기록.전체.버림.length", op:">=", v2:2}, type:"changeCond", target:"self", value:"corrupted"},
			{trigger:"used", cond:{v1:"자신.기록.전체.버림.length", op:">=", v2:2}, type:"changeCond", target:"self", value:"berserk", special:true},
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"이 카드는 버려지지 않는다.", "ENG":"" }},
			{trigger:"used", cond:true, type:"use", value:"자신.기록.전체.버림.selectCards(all, null, all)"},
		]
	},
	"WA-UL-PS-001":{
		name:{ "KOR":"화려한 검무", "ENG":"Flashy Sword Dance" }, class:"전사", type:"체위", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "group:패널티", "race:엘도리아인", "act:삽입"],
		flavorText:{ "KOR":"대륙 남부의 황무지 지역에서 사는 유랑민 무희들의 춤은 화려하고 아름다우면서도 강렬한 인상을 준다.<br>이 춤에 매료된 한 검사는 무희의 우아한 동작과 유려한 움직임을 검술에 접목시켜 새로운 전투 기술을 창작해냈다.<br>화려한 검무는 마치 춤을 추듯 부드럽지만 치명적인 기술로, 그 아름다운 몸짓에 넋이 나가 있다가는 어느 새 목에 칼이 들어와 있을 것이다.", "ENG":"" },
		hypnoText:{ "KOR":"허리를 천천히 돌리며 자지를 깊숙이 감아 올리는 체위이다.<br>유려한 몸짓으로 상대의 자지를 타고 오르내리며, 자극을 주는 동시에 몸을 밀착시켜 서서히 압박한다.", "ENG":"" },
		expiration:"always", duration:Infinity, stack:1,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"화려한검무-1"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"getPenalty", cond:true, type:"line", value:"화려한검무-2"},
			{trigger:"getPenalty", cond:true, type:"stack", info:{target:"selfCard"}, op:"add", value:1},
			{trigger:"usePenalty", cond:true, type:"changeCond", target:"self", value:"corrupted"},
			{trigger:"usePenalty", cond:true, type:"line", value:"화려한검무-3"},
			{trigger:"usePenalty", cond:true, type:"attack", target:"op", repeat:"stack", keepLine:true},
		]
	},


	/*"WA-UL-SU-001":{
		name:{ "KOR":"불굴의 정신", "ENG":"Unyielding Spirit" }, class:"전사", type:"보조", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:{v1:"라운드", op:">=", v2:6},
		flavorText:{ "KOR":"어려움과 시련에 직면해도 굴하지 않는 고고한 전사의 정신이란.", "ENG":"" },
		hypnoText:{ "KOR":"수많은 패널티를 가진 상태로 스스로를 억누르다가 해방시켜, 신들린 테크닉으로 승리를 쟁취하는 기술입니다.", "ENG":"" },
		tags:["덱빌딩", "버리기불가"],
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"이 카드는 버릴 수 없으며, 6라운드부터 사용할 수 있다.", "ENG":"" }},
			{trigger:"used", cond:{v1:"자기덱.count(type, 패널티)", op:">=", v2:8}, type:"victory", target:"self"},
		]
	},*/

//#######################################################################################################################################################################################

	"AS-PO-001":{
		name:{ "KOR":"제조: 마비독", "ENG":"Paralytic Poison" }, class:"암살자", type:"보조", isDeck:true, rarity:"없음", cost:5, owner:1,
		cond:true,
		tags:["제조", "기본제조", "po:AS-PO-001-1"], related:["AS-PO-001-1"],
		flavorText:{ "KOR":"재료: 털실 거미 추출물, 옐로 슬라임 점액 등.<br>형태: 끈적끈적한 황색 액체.<br>효과: 피부에 닿으면 빠르게 흡수되어 팔다리가 저리고 움직임이 둔해진다.", "ENG":"" },
		hypnoText:{ "KOR":"재료: 흥분한 여성의 소변...?<br>제조법: 쪼그려 앉아 다리를 벌리고 대기한다.<br>이후 흥분감과 함께 요의가 생기면 이를 배출한다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"제조"},
			{trigger:"used", cond:true, type:"poison", target:"op", value:"AS-PO-001-1"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"AS-PO-001-1":{
		parents:"AS-PO-001",
		name:{ "KOR":"마비독", "ENG":"Paralytic Poison" }, class:"암살자", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["독", "기본독"],
		expiration:"always", duration:Infinity, stack:1,
		effect:[
			{trigger:"always", cond:true, type:"lewd", op:"add", value:"stack", division:2},
		]
	},
	"AS-PO-002":{
		name:{ "KOR":"제조: 신경독", "ENG":"Nerve Poison" }, class:"암살자", type:"보조", isDeck:true, rarity:"없음", cost:5, owner:1,
		cond:true,
		tags:["제조", "기본제조", "po:AS-PO-002-1"], related:["AS-PO-002-1"],
		flavorText:{ "KOR":"재료: 셰이드바이퍼의 독니, 태양 잎 등.<br>형태: 녹색의 부드러운 액체.<br>효과: 체내에 주입되면 신경계가 자극되어 극심한 통증을 유발한다.", "ENG":"" },
		hypnoText:{ "KOR":"재료: 갓 짜낸 모유...?<br>제조법: 가슴을 감싸듯 쥐어 쓸어내리며 압박해 짜낸다.<br>제조를 위해 임신 경험이 필요하나, 약물을 투여하면 임신 없이 나오게 할 수 있다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"제조"},
			{trigger:"used", cond:true, type:"poison", target:"op", value:"AS-PO-002-1"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"AS-PO-002-1":{
		parents:"AS-PO-002",
		name:{ "KOR":"신경독", "ENG":"Nerve Poison" }, class:"암살자", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["독", "기본독"],
		expiration:"always", duration:Infinity, stack:1,
		effect:[
			{trigger:"turnStart", cond:true, type:"attack", target:"self", repeat:"stack"},
		]
	},
	"AS-PO-003":{
		name:{ "KOR":"제조: 실명독", "ENG":"Blinding Poison" }, class:"암살자", type:"보조", isDeck:true, rarity:"없음", cost:5, owner:1,
		cond:true,
		tags:["제조", "기본제조", "po:AS-PO-003-1"], related:["AS-PO-003-1", "AS-NM-AT-000"],
		flavorText:{ "KOR":"재료: 거울나비의 인분, 어둠 뿌리 등.<br>형태: 반짝이는 흰색 가루.<br>효과: 눈에 뿌려지면 시신경이 마비되어 일시적으로 앞을 보지 못하게 된다.", "ENG":"" },
		hypnoText:{ "KOR":"재료: 여성의 침...?<br>제조법: 입을 벌려 혓바닥을 내밀며 타액을 모아 흘려보낸다.<br>충분한 훈련이 되었다면 구강성교 전 자지의 맛을 떠올리는 것으로 분비량을 늘릴 수 있다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"제조"},
			{trigger:"used", cond:true, type:"poison", target:"op", value:"AS-PO-003-1"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"AS-PO-003-1":{
		parents:"AS-PO-003",
		name:{ "KOR":"실명독", "ENG":"Blinding Poison" }, class:"암살자", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["독", "기본독"],
		expiration:"always", duration:Infinity, stack:1,
		effect:[
			{trigger:"turnStart", cond:true, type:"get", target:"op", value:"AS-NM-AT-000", repeat:"stack"},
		]
	},
	"AS-PO-004":{
		name:{ "KOR":"제조: 수면독", "ENG":"Sleeping Poison" }, class:"암살자", type:"보조", isDeck:true, rarity:"없음", cost:5, owner:1,
		cond:true,
		tags:["제조", "기본제조", "po:AS-PO-004-1"], related:["AS-PO-004-1"],
		flavorText:{ "KOR":"재료: 꿈버섯 포자, 별조각 수정 등.<br>형태: 불투명한 가스.<br>효과: 흡입 시 즉시 효과가 나타나는 강력한 수면제이다.", "ENG":"" },
		hypnoText:{ "KOR":"재료: 여성의 애액...?<br>제조법: 손가락으로 성기를 문지르며 자극해 분비시킨다.<br>남성의 애무 도움을 받으면 더 빠르고 많은 양을 생산해낼 수 있다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"제조"},
			{trigger:"used", cond:true, type:"poison", target:"op", value:"AS-PO-004-1"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"AS-PO-004-1":{
		parents:"AS-PO-004",
		name:{ "KOR":"수면독", "ENG":"Sleeping Poison" }, class:"암살자", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["독", "기본독"],
		expiration:"always", duration:Infinity, stack:1,
		effect:[
			{trigger:"always", cond:true, type:"estrus", op:"subtract", value:"stack"},
			/*{trigger:"turnEnd", cond:{v1:"stack", op:">=", v2:4}, type:"transform", target:"self",
			info:{
				target:"self",
				value:"AS-PO-004-2",
			}},*/
		]
	},
	"AS-PO-004-2":{
		name:{ "KOR":"의식불명", "ENG":"Sleeping" }, class:"암살자", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:[],
		expiration:"active", duration:1,
		effect:[
			{trigger:"turnStart", cond:true, type:"state", target:"self", value:"AS-PO-004-3"},
		]
	},
	"AS-PO-004-3":{
		parents:"AS-PO-004-2",
		name:{ "KOR":"의식불명", "ENG":"Sleeping" }, class:"암살자", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"always", cond:true, type:"actBan", target:"self"},
		]
	},
	/*"AS-PO-005":{
		name:{ "KOR":"제조: 침묵독", "ENG":"" }, class:"암살자", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["제조", "기본제조"], related:["AS-PO-005-1"], keywords:["id:AS-PO-005-1"],
		flavorText:{ "KOR":"재료: 꿈버섯 포자, 별조각 수정 등.<br>형태: 불투명한 가스.<br>효과: 흡입 시 즉시 효과가 나타나는 강력한 수면제이다.", "ENG":"" },
		hypnoText:{ "KOR":"재료: 여성의 타액과 남성의 정액...?<br>제조법: 남성기를 핥거나 빨아서 입 안에 사정시킨다.<br>혀를 사용하는 것이 관건이며, 무심코 삼키지 않도록 주의한다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"제조"},
			{trigger:"used", cond:true, type:"poison", target:"op", value:"AS-PO-005-1"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"AS-PO-005-1":{
		parents:"AS-PO-005",
		name:{ "KOR":"침묵독", "ENG":"" }, class:"암살자", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["독"],
		expiration:"always", duration:Infinity, stack:1,
		effect:[
			{trigger:"always", cond:true, type:"estrus", op:"add", value:-1},
		]
	},*/

	"AS-NM-AT-000":{
		name:{ "KOR":"조르기", "ENG":"Strangle" }, class:"암살자", type:"공격", isDeck:true, rarity:"없음", cost:10, owner:1, nochange:true,
		cond:true,
		tags:["act:삽입"],
		effect:[
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:1},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},

	"AS-NM-AT-001":{
		name:{ "KOR":"왼손 베기", "ENG":"" }, class:"암살자", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "group:생성됨", "race:트라이브", "act:애무"], related:["AS-NM-AT-001-1", "AS-NM-AT-001-2"],
		flavorText:{ "KOR":"첫 번째 일격은 이어지는 연속 공격을 위한 선행 동작이다.<br>빠른 속도로 이어지는 난도질에 상대는 정신을 차리지 못할 것이다.", "ENG":"" },
		hypnoText:{ "KOR":"신속하게 자지를 문지르며 귀두부터 부드럽게 자극하는 기술이다.<br>손가락으로 상대의 약점을 찾아내고, 여러 번에 걸쳐 강렬한 쾌감을 선사한다. ", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"AS-NM-AT-001-1"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"AS-NM-AT-001-1":{
		name:{ "KOR":"오른손 베기", "ENG":"" }, class:"암살자", type:"공격", isDeck:true, rarity:"없음", cost:10, owner:1, nochange:true,
		cond:true,
		tags:["act:애무"], related:["AS-NM-AT-001-2"],
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"AS-NM-AT-001-2"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"AS-NM-AT-001-2":{
		name:{ "KOR":"양손 베기", "ENG":"" }, class:"암살자", type:"공격", isDeck:true, rarity:"없음", cost:10, owner:1, nochange:true,
		cond:true,
		tags:["act:펠라치오"],
		effect:[
			{trigger:"used", cond:true, type:"attack", repeat:2, target:"op"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"AS-NM-AT-002":{
		name:{ "KOR":"교살", "ENG":"Suffocate" }, class:"암살자", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "group:조르기", "group:생성됨", "race:엘도리아인"], related:["AS-NM-AT-000"],
		flavorText:{ "KOR":"교살은 적에게 저항할 틈을 주지 않고 목을 졸라 무력화시키는 암살자의 대표 기술이다.<br>목을 조르는 살해 방법의 장점은 타겟이 소리를 내지 못한다는 것이다.", "ENG":"" },
		hypnoText:{ "KOR":"목을 다리로 조이며 상대에게 보지를 빨도록 하는 기술이다.<br>만족할 때까지 놓지 않으며 봉사시켜, 상대에게 굴복감을 느끼게 한다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"커닐링구스"},
			{trigger:"used", cond:true, type:"get", target:"self", value:"AS-NM-AT-000", repeat:2},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"AS-NM-AT-003":{
		name:{ "KOR":"연속 찌르기", "ENG":"Rapid Stabbing" }, class:"암살자", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "group:젖음", "race:하프만", "act:삽입"],
		flavorText:{ "KOR":"출혈은 흉기를 뽑는 순간 가장 크게 일어난다.<br>여러 번 찌를 수록 상대의 치유 가능성이 낮아진다.", "ENG":"" },
		hypnoText:{ "KOR":"연속해서 자지에 박히며 깊은 자극을 선사하는 기술이다.<br>거칠게 밀어붙이는 힘에 몸이 반응하며, 자궁의 끝을 찔릴 때마다 점점 더 강렬한 쾌감에 휩싸이게 된다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"wetness",
			info:{
				value:1,
				effect:[
					{trigger:"used", cond:true, type:"attack", adverb:"추가로", target:"op"},
				]
			}},
		]
	},
	"AS-NM-AT-004":{
		name:{ "KOR":"독침", "ENG":"Poison Sting" }, class:"암살자", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "독주머니", "group:독", "race:하프만", "act:펠라치오"], related:["tag:기본제조"],
		flavorText:{ "KOR":"세침은 하프만 열쇠공의 필수품이다.<br>자물쇠와 함정을 해제하기 위해 사용할 수도 있고, 독을 발라 적의 빈틈을 찔러 암살하는 데에도 용이하기 때문이다.", "ENG":"" },
		hypnoText:{ "KOR":"자지를 정성스럽게 빨아내며 묻어있는 성행위의 흔적을 청소하는 기술이다.<br>혀로 감싸듯 꼼꼼히 핥아 상대에게 만족감을 선사해준다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"use", value:"독주머니.selectCards(tags, 제조, 1)"},
		]
	},
	"AS-NM-AT-005":{
		name:{ "KOR":"함정 설치", "ENG":"Setting Trap" }, class:"암살자", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "group:추가 카드", "race:트라이브", "act:삽입"],
		flavorText:{ "KOR":"천둥엄니 부족의 정예 사냥꾼들은 사냥감을 잡기 위한 함정 설치의 대가이다.<br>짐승만이 덫에 걸린다고 생각했다간 순식간에 발목이 날아갈 것이다.", "ENG":"" },
		hypnoText:{ "KOR":"엉덩이를 자지에 비비며 유혹하는 기술이다.<br>상대가 반응할 때까지 계속해서 엉덩이를 흔들어 원하는 쪽으로 끌어당긴다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"selected", cond:"체위", type:"maxUse", target:"self", value:1},
		]
	},
	"AS-NM-AT-006":{
		name:{ "KOR":"납치", "ENG":"Abduction" }, class:"암살자", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:엘도리아인"], related:["AS-NM-AT-000"],
		flavorText:{ "KOR":"간혹 타겟의 제거가 아니라 확보가 목표일 때가 있다.<br>수면제와 밧줄, 운반 경로를 준비하자.", "ENG":"" },
		hypnoText:{ "KOR":"얼굴에 올라타 보지를 비벼 흥분시키는 기술이다.<br>굴욕을 선사함과 동시에 지배당하는 상황의 쾌락을 가르쳐 페티시를 주입한다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"커닐링구스"},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:2, repeat:"자신.행동.count(all, null)"},
			//{trigger:"used", cond:true, type:"get", target:"self", value:"AS-NM-AT-000", repeat:"상대.기록.이번.이벤트.흥분.증가", maxValue:5},
		]
	},
	"AS-NM-AT-007":{
		name:{ "KOR":"정조준 사격", "ENG":"" }, class:"암살자", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "사격", "group:젖음", "group:생성됨", "race:실바니", "act:방뇨"],
		flavorText:{ "KOR":"사격의 기본은 정확한 자세에서 시작된다.<br>엎드려 몸을 낮춘 상태에서 조준경을 눈에 맞추고, 숨을 고르며 방아쇠를 당길 순간을 기다린다.<br>전신의 균형을 잡고 미세한 흔들림조차 허용하지 않는 것이 필수적이다.", "ENG":"" },
		hypnoText:{ "KOR":"쪼그려 앉아 다리를 벌리고 오줌을 싸는 기술이다.<br>보지에서 물줄기가 뿜어져나오는 모습을 보여주며 상대를 흥분시키기 위한 구경거리가 된다.", "ENG":"" },
		effect:[
			//{trigger:"used", cond:true, type:"line", value:"정조준사격"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"wetness",
			info:{
				value:1,
				effect:[
					{trigger:"used", cond:true, type:"get", target:"self", value:"self"},
				]
			}},
		]
	},
	"AS-NM-SU-001":{
		name:{ "KOR":"독이 든 병", "ENG":"" }, class:"암살자", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "group:젖음", "group:독", "group:생성됨", "독주머니", "race:엘도리아인"], related:["tag:기본제조"],
		flavorText:{ "KOR":"암살자의 품 속에는 언제나 독이 숨겨져 있다.<br>아무도 눈치채지 못하게 타겟을 죽이기 위해, 가로막는 이들을 제거하기 위해, 그리고 자결하기 위해.", "ENG":"" },
		hypnoText:{ "KOR":"입 안에 제조한 독을 가득 머금은 채로 상대와 키스를 하며, 서로의 혀를 맞대어 나눠 마시는 기술이다.<br>진한 키스를 통해 체액의 혼합물이 입안에서 섞이며 넘어간다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"키스"},
			{trigger:"used", cond:true, type:"get", target:"self", value:"독주머니.selectCards(tags, 제조, 1)"},
			{trigger:"used", cond:true, type:"wetness",
			info:{
				value:2,
				effect:[
					{trigger:"used", cond:true, type:"use", value:"derived"},
				]
			}},
		]
	},
	"AS-NM-SU-002":{
		name:{ "KOR":"가짜 표적", "ENG":"Decoy" }, class:"암살자", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "group:젖음", "group:추가 카드", "race:엘도리아인"],
		flavorText:{ "KOR":"추격 당할 때는 디코이 돌을 던져 미스디렉션!<br>본인의 외견과 비슷하게 커스텀하면 더욱 효과가 큽니다.<br>- 네쿠에 시프컬렉션 공방", "ENG":"" },
		hypnoText:{ "KOR":"얼굴을 가리고 범해지는 기술이다.<br>부끄러움을 줄임과 동시에, 시각이 차단되어 감각이 민감해지면서 보지가 젖어든다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"changeWetness", op:"add", value:1},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"AS-NM-SU-003":{
		name:{ "KOR":"미행", "ENG":"Tail" }, class:"암살자", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "group:조르기", "group:생성됨", "race:실바니"], related:["AS-NM-AT-000"],
		flavorText:{ "KOR":"그림자 속에 숨어들어 타겟이 눈치채지 못하도록 쫓는다.<br>너무 가까우면 들킬 염려가 있고, 너무 멀면 타겟을 놓칠 위험이 있다.", "ENG":"" },
		hypnoText:{ "KOR":"나체를 과시하며 노출에 흥분을 느끼는 기술이다.<br>시선을 통해 느껴지는 스릴과 쾌락을 즐길 수 있다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"AS-NM-AT-000", repeat:"상대.기록.이번.이벤트.흥분.증가", maxRepeat:5},
		]
	},
	"AS-NM-SU-004":{
		name:{ "KOR":"즉석 조제", "ENG":"On-the-spot Mixing" }, class:"암살자", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "group:독", "group:생성됨", "독주머니", "race:하프만"], related:["tag:기본제조"],
		flavorText:{ "KOR":"암살자들에게 전해지는 비술. 무해해 보이는 약재를 결합해 치명적인 독으로 만들 수 있는 조합법.<br>검문을 통과해 들키지 않고 독을 반입하는 데에 중요한 역할을 한다.", "ENG":"" },
		hypnoText:{ "KOR":"자신의 몸을 사용해 약물을 제조하는 기술이다.<br>가슴에 엎지른 뒤 상대에게 핥아달라고 요청하여, 자연스럽게 섭취를 유도한다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"독주머니.selectCards(tags, 제조, 2)"},
		]
	},
	"AS-NM-SU-005":{
		name:{ "KOR":"포박", "ENG":"" }, class:"암살자", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "group:조르기", "group:독", "group:생성됨", "group:추가 카드", "race:엘도리아인"], related:["AS-NM-AT-000"],
		flavorText:{ "KOR":"단단한 밧줄로 목표를 순식간에 묶어버린다.<br>빠르고 정교한 손놀림으로 상대를 무력화시키며, 어떤 저항도 허용하지 않는다.", "ENG":"" },
		hypnoText:{ "KOR":"스스로를 귀갑 묶기로 포박하는 기술이다.<br>몸의 곡선을 강조하는 음란한 구속법으로 상대의 시선을 이끌어낸다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"AS-NM-AT-000"},
			{trigger:"selected", cond:{v1:"상대.상태.count(tags, 독)", op:">", v2:0}, type:"maxUse", target:"self", value:1},
		]
	},
	"AS-NM-UC-001":{
		name:{ "KOR":"그림자 이동", "ENG":"" }, class:"암살자", type:"탈의", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "group:추가 카드", "race:트라이브"],
		flavorText:{ "KOR":"핏보라 부족은 알비노에 대한 지식이 없어 저주받은 아이 취급을 받아 버려진, 흰 털과 붉은 눈을 지닌 이들이 모이는 특수한 부족이다.<br>생존을 위한 노력 끝에 그들은 그림자 속에 숨어 존재를 지우는 법을 익혔고, 뒷세계에서 암살을 전업으로 다루게 되었다.", "ENG":"" },
		hypnoText:{ "KOR":"빠르게 옷을 벗어 던지는 기술이다.<br>옷을 벗기려는 상대의 시도는 이쪽이 먼저 벗어버리면 무용지물이 되는 법이다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"그림자이동"},
			{trigger:"used", cond:true, type:"clothes", value:"uncloth"},
			{trigger:"used", cond:true, type:"state", target:"self", value:"AS-NM-UC-001-1"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"AS-NM-UC-001-1":{
		parents:"AS-NM-UC-001",
		name:{ "KOR":"잔상", "ENG":"" }, class:"암살자", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"always", cond:true, type:"unclothDisable"},
		]
	},
	"AS-NM-PS-001":{
		name:{ "KOR":"네트 트랩", "ENG":"Net Trap" }, class:"암살자", type:"체위", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "group:조르기", "group:생성됨", "race:엘도리아인"], related:["AS-NM-AT-000"],
		flavorText:{ "KOR":"작동 시 그물이 뻗어나와 대상을 결박하는 장치입니다. 포획이 필요할 때 사용하십시오.<br>- 네쿠에 시프컬렉션 공방", "ENG":"" },
		hypnoText:{ "KOR":"그물처럼 상대를 옭아매어 벗어나지 못하게 붙잡고 범하는 체위이다.<br>질내에 깊숙이 들어온 자지를 강하게 조여, 상대의 모든 반응을 통제하며 놓치지 않도록 한다.", "ENG":"" },
		expiration:"always", duration:Infinity, duration:2, defaultDuration:2,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"체위변경"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"enemyAttacked", cond:true, type:"count", trap:"self", value:1},
			{trigger:"count", cond:true, type:"get", target:"self", value:"AS-NM-AT-000"},
		]
	},
	"AS-NM-PS-002":{
		name:{ "KOR":"허니 트랩", "ENG":"Honey Trap" }, class:"암살자", type:"체위", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "group:젖음", "group:생성됨", "race:엘도리아인"],
		flavorText:{ "KOR":"레이디 달레안 로즈쏜이 집필한 '남성을 홀리는 법'은 연애 저서로 알려져 있지만,<br>그 정체는 암호문으로 작성된, 여성 암살자를 위한 허니 트랩 교본이다.", "ENG":"" },
		hypnoText:{ "KOR":"비어있는 구멍을 드러내며 상대에게 자지를 박아넣도록 유도하는 체위이다.<br>달콤한 유혹을 담아, 상대가 매료되어 빠져들도록 만들어 깊고 강렬한 자극을 선사한다.", "ENG":"" },
		expiration:"always", duration:3, defaultDuration:3,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"유혹"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"useCreatedCard", cond:true, type:"count", trap:"self", value:1},
			{trigger:"count", cond:true, type:"changeWetness", op:"add", value:1},
		]
	},

	"AS-EX-AT-001":{
		name:{ "KOR":"영거리 사격", "ENG":"Point Blank Shot" }, class:"암살자", type:"공격", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "사격", "group:추가 카드", "group:젖음", "group:생성됨", "race:실바니", "act:애무"],
		flavorText:{ "KOR":"영거리 사격은 목표와의 거리가 극히 짧을 때 사용하는 기술로, 정확한 것보다는 신속한 조준 자세가 중요하다.<br>목표물의 중요 부위를 겨냥해 한 발로 확실한 피해를 입히는 것이 핵심이다.<br>발사 후 빠르게 사격 자세를 재정비하는 것을 우선으로 한다.", "ENG":"" },
		hypnoText:{ "KOR":"상대를 끌어안아 가슴을 빨게 해주며 대딸하는 기술이다.<br>돌보듯 상냥한 손놀림과 부드러운 가슴의 감촉으로, 상대가 만족할 때까지 정액을 쏟아내게 만든다.", "ENG":"" },
		effect:[
			//{trigger:"used", cond:true, type:"line", value:"영거리사격"},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:1},
			{trigger:"used", cond:true, type:"wetness",
			info:{
				value:3,
				effect:[
					{trigger:"used", cond:true, type:"get", target:"self", value:"AS-EX-AT-001", repeat:2},
				]
			}},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"AS-EX-AT-002":{
		name:{ "KOR":"사보타지", "ENG":"Sabotage" }, class:"암살자", type:"공격", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "group:젖음", "race:엘도리아인", "act:펠라치오"],
		flavorText:{ "KOR":"바퀴축에 흠집을 내고, 장비를 바꿔치고, 지지대의 나사 하나를 빼돌리고.<br>비밀스럽게 공작을 가해 사고사를 유도하는 암살법은 매우 클래식한 전략이지만, 환경 파악과 동선 예측 그리고 창의력을 요구하는 까다로운 기술이다.", "ENG":"" },
		hypnoText:{ "KOR":"상대의 자지에 입맞추며 끝부분부터 핥는 기술이다.<br>민감한 부위를 집요하게 핥아 고장난 수도꼭지처럼 싸게 만드는 것이 목적이다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"wetness",
			info:{
				value:4,
				effect:[
					{trigger:"used", cond:true, type:"specialA06"},
				]
			}},
		]
	},
	"AS-EX-AT-003":{
		name:{ "KOR":"혈 찌르기", "ENG":"Bloodletting" }, class:"암살자", type:"공격", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "group:독", "race:하프만", "act:펠라치오"],
		flavorText:{ "KOR":"혈의 개념은 증명되지 않은 유사 의학으로 취급되며, 알비온 의술협회에서는 이를 인정하지 않고 있다.<br>하지만 하프만 열쇠공 사이에선 이미 체계적인 기술로 여겨지며 치유와 암살에 유용하게 사용하고 있다.", "ENG":"" },
		hypnoText:{ "KOR":"상대의 자지의 민감한 부위를 찔러 자극하는 기술이다.<br>혈류를 찔러 발기 강도를 강화하고, 감도를 높여 민감하게 만든 뒤, 오르가즘을 선사해 사정하게 만든다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"attack", adverb:"추가로", repeat:"상대.상태.countType(tags, 독)", target:"op"},
			{trigger:"none", cond:true, type:"showValue", value:"상대.상태.countType(tags, 독)"}
		]
	},
	"AS-EX-AT-004":{
		name:{ "KOR":"칼날 폭풍", "ENG":"Blade Storm" }, class:"암살자", type:"공격", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "group:추가 카드", "race:트라이브", "act:난교"],
		flavorText:{ "KOR":"가진 암기들을 전부 흩뿌리며 다수를 향해 무차별 난사를 날리는 투척술.<br>쏟아지는 단검들을 보다보면 폭풍이라는 표현이 단순한 비유가 아니라고 느낄 것이다.", "ENG":"" },
		hypnoText:{ "KOR":"자신을 둘러싼 자지들을 전부 만족시켜주는 기술이다.<br>입과 손을 바쁘게 움직여 동시에 복수의 자지를 사정시킨다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"attack", repeat:"자신.기록.이전.사용.length", target:"op"},
			{trigger:"none", cond:true, type:"showValue", value:"자신.기록.이전.사용.length"},
		]
	},
	"AS-EX-SU-001":{
		name:{ "KOR":"유연성", "ENG":"Flexibility" }, class:"암살자", type:"보조", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "group:조르기", "race:트라이브"], related:["AS-NM-AT-000"],
		flavorText:{ "KOR":"사람이 지나갈 수 없을거라 여겨지는 좁은 틈을 통해 잠입하는 것이 특기인 암살자들이 있다.<br>특히 묘계 트라이브 암살자들은, 머리가 지나갈 수 있는 크기만 확보된다면 어느 구멍이든 통과할 수 있다는 기행을 보여준다.", "ENG":"" },
		hypnoText:{ "KOR":"유연한 포즈로 엉덩이를 치켜들고 박히기를 기다리는 기술이다.<br>상대가 원하는 체위에 맞춰줄 준비가 되어 있으며, 자신의 몸이 그렇게 사용되기를 바라는 욕망을 드러내는 자세가 특징이다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"effect", op:"add",
			info:{
				target:"id:AS-NM-AT-000",
				effect:[
					{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:1},
				]
			}},
		]
	},
	"AS-EX-SU-002":{
		name:{ "KOR":"연막탄", "ENG":"Smoke Bomb" }, class:"암살자", type:"보조", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "group:젖음", "race:하프만"],
		flavorText:{ "KOR":"바닥에 던져 터트리면 짙은 회색의 연기가 뿜어져 나옵니다.<br>좁고 환기가 잘 되지 않는 공간에서 특히 효과적입니다.<br>- 네쿠에 시프컬렉션 공방", "ENG":"" },
		hypnoText:{ "KOR":"짙은 안개 속에서 알몸을 드러내는 기술이다.<br>금방 흩어지고 말 연기에 중요 부위를 맡기는 노출 행위로, 흥분감에 흥건해지고 만다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"changeWetness", op:"add", value:3},
			{trigger:"used", cond:true, type:"state", target:"self", value:"AS-EX-SU-002-1"},
		]
	},
	"AS-EX-SU-002-1":{
		parents:"AS-EX-SU-002",
		name:{ "KOR":"연막", "ENG":"Smoke" }, class:"암살자", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		expiration:"active", duration:1,
		effect:[
			{trigger:"turnStart", cond:true, type:"changeWetness", op:"add", value:2},
		]
	},
	"AS-EX-SU-003":{
		name:{ "KOR":"도약", "ENG":"" }, class:"암살자", type:"보조", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "group:추가 카드", "race:엘도리아인"],
		flavorText:{ "KOR":"순간적인 도약으로 적의 눈을 피하고 암살에 적합한 위치로 빠르게 이동한다.<br>지붕 위를 달리며, 어느 곳이든 길이 될 수 있다.", "ENG":"" },
		hypnoText:{ "KOR":"제자리에서 뛰며 가슴이 흔들리는 모습을 과시하는 기술이다.<br>뛰어오를 때마다 가슴이 출렁거리며, 남자들의 시선을 사로잡는다.", "ENG":"" },
		effect:[
			{trigger:"choice", cond:true, type:"effect", op:"add", range:{category:"all", count:2},
			info:{
				effect:[{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},],
			}},
		]
	},
	"AS-EX-SU-004":{
		name:{ "KOR":"독가스 분사", "ENG":"" }, class:"암살자", type:"보조", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "group:독", "group:젖음", "group:생성됨", "독주머니", "race:엘도리아인"], related:["tag:기본제조"],
		flavorText:{ "KOR":"밀폐된 공간에 기체 형태의 독을 분사하는 것은 매우 효과적인 암살 수단이다.<br>무취의 가스를 눈치채지 못하고 타겟이 숨을 들이쉰 순간 상황은 종료된다.", "ENG":"" },
		hypnoText:{ "KOR":"즉석에서 제조한 의존성 약물을 피우는 기술이다.<br>강한 쾌락과 고양감이 느껴지며, 각종 체액의 분비량이 증가하여 추후의 제조에 도움이 된다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:{v1:"젖음", op:"<", v2:4}, condOmit:true, type:"use", value:"독주머니.selectCards(tags, 제조, 1)"},
			{trigger:"used", cond:true, type:"wetness",
			info:{
				value:4,
				effect:[
					{trigger:"used", cond:true, adverb:"대신", type:"use", value:"독주머니.selectCards(tags, 제조, 3)"},
				]
			}},
		]
	},
	"AS-EX-PS-001":{
		name:{ "KOR":"맹독 트랩", "ENG":"Deadly Poison Trap" }, class:"암살자", type:"체위", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "group:독", "group:젖음", "독주머니", "race:엘도리아인"], related:["tag:기본제조"],
		flavorText:{ "KOR":"보이지 않는 곳에 숨겨둔 독은 가장 치명적이다.<br>장치를 건드리는 순간 맹독이 든 유리병이 부서지고, 순식간에 퍼져나가는 독은 대상의 장기를 마비시킨다.", "ENG":"" },
		hypnoText:{ "KOR":"온 몸에 체액과 정액을 뿌려둔 뒤 서로의 몸을 섞는 체위이다.<br>물고 빨며 자연스럽게 상대에게 독을 먹일 수 있다.", "ENG":"" },
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"체위변경"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"turnEnd", cond:{v1:"젖음", op:">=", v2:3}, condOmit:true, type:"wetness",
			info:{
				value:3,
				effect:[
					{trigger:"used", cond:true, type:"use", target:"self", value:"독주머니.selectCards(tags, 제조, 1)"},
				]
			}},
		]
	},
	"AS-EX-PS-002":{
		name:{ "KOR":"부비 트랩", "ENG":"Booby Trap" }, class:"암살자", type:"체위", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "group:젖음", "race:엘도리아인", "act:애무"],
		flavorText:{ "KOR":"와이어를 건드리면 내부 걸쇠가 풀리며 연쇄적인 반응이 일어납니다.<br>폭발이나 칼날이 튀어나오는 등 커스텀이 자유로운데, 얼마나 복잡한 절차를 거쳐 작동되느냐에 따라 설계자의 미학을 느낄 수 있습니다.<br>- 네쿠에 시프컬렉션 공방", "ENG":"" },
		hypnoText:{ "KOR":"'부비'. 즉, 가슴으로 상대의 자지를 부드럽게 감싸 압박하는 체위이다.<br>상대는 부드러운 압박 속에서 삼켜져 강렬한 쾌락을 느끼게 된다.", "ENG":"" },
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"체위변경"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"always", cond:{v1:"자신.기록.이전.이벤트.회피", op:">", v2:0}, type:"maxUse", target:"self", value:1},
		]
	},

	"AS-UL-AT-001":{
		name:{ "KOR":"계획 살인", "ENG":"Planned Murder" }, class:"암살자", type:"공격", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "group:조르기", "race:엘도리아인", "act:삽입"], related:["AS-NM-AT-000"],
		flavorText:{ "KOR":"엘도리아 왕국과 실바니아 연방 사이의 갈등은 오랜 시간 이어져 왔으며, 두 국가 간의 대전쟁을 촉발시킨 결정적 사건은 실바니아 측에서 보낸 외교관의 피살이었다.<br>화합을 바라던 자리에서 발생한 이 충격적인 사건은, 무려 2년간의 준비를 거쳐 계획된 정치적 암살이었다.<br>의도적으로 일어난 전쟁에는 이득을 노린 세력과 그들의 길을 막는 정적들의 제거라는 의도가 담겨 있었다.", "ENG":"" },
		hypnoText:{ "KOR":"상대를 집착하듯 덮쳐 지배하는 필살기이다.<br>구속된 상대 위에 올라탄 뒤, 몸을 비벼 강제로 발기시키고, 그대로 집어삼켜 범한다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:{v1:"자신.기록.전체.사용.count(id, AS-NM-AT-000)", op:">=", v2:5}, type:"changeCond", target:"self", value:"corrupted"},
			{trigger:"used", cond:{v1:"자신.기록.전체.사용.count(id, AS-NM-AT-000)", op:">=", v2:5}, type:"line", value:"계획살인"},
			{trigger:"used", cond:true, type:"attack", repeat:"자신.기록.전체.사용.count(id, AS-NM-AT-000)", target:"op"},
			{trigger:"none", cond:true, type:"showValue", value:"자신.기록.전체.사용.count(id, AS-NM-AT-000)"},
		]
	},
	"AS-UL-AT-002":{
		name:{ "KOR":"최장거리 저격", "ENG":"" }, class:"암살자", type:"공격", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "사격", "group:젖음", "group:생성됨", "race:실바니"], related:["AS-UL-AT-002-1"],
		flavorText:{ "KOR":"실바니아의 황혼 부대에는 전설적인 저격수가 있었다고 전해진다.<br>보이지 않을 거리에서 발사한 단 한 발로 목표를 정확히 사살하는 그녀의 저격은 엘도리아인들에게 재앙과도 같았다.<br>실바니아 측에서 공식 발표 도중 '그녀는 존재하지 않으며, 엘도리아인들의 망상이다.'라는 말실수를 한 탓에, 적어도 그녀가 여성이라는 사실만이 알려져 있다.", "ENG":"" },
		hypnoText:{ "KOR":"누워서 다리를 벌리고 힘을 주어 질내의 정액을 분출하는 모습을 보여주는 필살기이다.<br>존엄성을 깎아내리는 천박한 개인기에 경멸스러운 시선을 받는 것도 모른 채, 당신은 성공을 뿌듯해한다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"최장거리저격-1"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"wetness",
			info:{
				value:5,
				effect:[
					{trigger:"used", cond:true, type:"state", target:"self", value:"AS-UL-AT-002-2"},
				]
			}},
			{trigger:"used", cond:true, type:"get", target:"self", value:"AS-UL-AT-002-1"},
		]
	},
	"AS-UL-AT-002-1":{
		name:{ "KOR":"재장전", "ENG":"" }, class:"암살자", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"최장거리저격-2"},
			{trigger:"used", cond:true, type:"get", target:"self", value:"AS-UL-AT-002"},
			//{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"AS-UL-AT-002-2":{
		parents:"AS-UL-AT-002",
		name:{ "KOR":"헤드샷", "ENG":"" }, class:"암살자", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"always", cond:true, type:"enemyAttackDisable"},
		]
	},
	/*"AS-UL-SU-001":{
		name:{ "KOR":"이중가면의 대가", "ENG":"Master of Disguise" }, class:"암살자", type:"보조", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩"],
		flavorText:{ "KOR":"전설적인 트라이브 암살자 도도리시의 정체가 하프만 열쇠공 도라시의 변장이었던 것으로 밝혀져 많은 이들에게 충격을 준 일이 있다.", "ENG":"" },
		hypnoText:{ "KOR":"자신의 숨겨둔 변태적인 일면을 드러내 다른 기술의 효과를 높이는 기술입니다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"useTimes", target:"self", value:1},
			{trigger:"used", cond:true, type:"state", notext:true, target:"self", value:"AS-UL-SU-001-1"},
			//{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"AS-UL-SU-001-1":{
		parents:"AS-UL-SU-001",
		name:{ "KOR":"변장", "ENG":"Disguise" }, class:"암살자", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:[],
		expiration:"active", duration:1,
		effect:[
			{trigger:"useCard", cond:true, type:"nothing"},
		]
	},*/
	"AS-UL-SU-001":{
		name:{ "KOR":"그림자장미 춤", "ENG":"Shadow Rose Dance" }, class:"암살자", type:"보조", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "group:추가 카드", "무조건소모", "race:엘도리아인"],
		flavorText:{ "KOR":"로즈쏜 가문은 예술 작품, 패션, 음악과 춤 등 다양한 문화에 큰 영향을 끼치는 예술의 거장 가문이다.<br>허나 그 정체가 엘도리아 왕국 첩보원을 양성하는 암살자 가문이라는 사실은 극히 일부만이 알고 있다.<br>미술과 원예를 통해 독극물 제작을 다루고, 춤과 사교를 통해 정보 수집과 암살술을 다루며, 패션과 미용을 통해 변장과 은닉을 다루는 등... 모든 활동은 눈속임에 불과했다.", "ENG":"" },
		hypnoText:{ "KOR":"우아하게 흐르는 듯한 몸짓으로, 엉덩이와 가슴을 부드럽게 흔들며 상대를 유혹하는 춤이다.<br>다리를 올려 보지를 보여주며 과감하게 육체의 모든 것을 드러낸다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"그림자장미춤"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:2},
		]
	},
	"AS-UL-SU-002":{
		name:{ "KOR":"죽음에 이르는 독", "ENG":"Poison of Death" }, class:"암살자", type:"보조", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "group:젖음", "group:독", "독추가", "race:엘도리아인"], related:["AS-UL-SU-002-1", "AS-UL-SU-002-2"],
		flavorText:{ "KOR":"이따금 고지의 절벽 끝 황량한 대지에 피어있는 아름다운 보랏빛 꽃이 있다.<br>주변의 풀을 전부 죽여버리고 고고하게 홀로 피어있는 이 꽃의 이름은 절명초.<br>그 추출액은 단 한 방울만으로 마을 하나를 몰살시킬 수 있는 치사량을 지니고 있다.", "ENG":"" },
		hypnoText:{ "KOR":"재료: 애액과 정액의 혼합물<br>제조법: 남성의 성기를 여성의 성기에 삽입한 상태에서 제조된다.<br>여러 회 반복하여 문지르고 조여서 두 재료가 분비된 후 섞일 수 있게 해야한다.", "ENG":"" },
		effect:[
			//{trigger:"used", cond:true, type:"line", value:"절명독-1"},
			{trigger:"used", cond:true, type:"get", target:"self", value:"AS-UL-SU-002-1"},
			{trigger:"gameStart", inDeck:true, cond:true, type:"poisonAdd", value:"AS-UL-SU-002-1"},
			//{trigger:"used", cond:true, type:"poisonAdd", value:"AS-UL-SU-002-1"},
		]
	},
	"AS-UL-SU-002-1":{
		name:{ "KOR":"제조: 절명독", "ENG":"Lethal Poison" }, class:"암살자", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["제조", "po:AS-UL-SU-002-2"], related:["AS-UL-SU-002-2"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"절명독-2"},
			{trigger:"used", cond:true, type:"poison", target:"op", value:"AS-UL-SU-002-2"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"AS-UL-SU-002-2":{
		parents:"AS-UL-SU-002-1",
		name:{ "KOR":"절명독", "ENG":"Lethal Poison" }, class:"암살자", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["독"],
		expiration:"always", duration:Infinity, stack:1,
		effect:[
			{trigger:"turnEnd", cond:true, type:"excite", target:"self", op:"add", repeat:"stack", value:"specialV09", keepLine:true},
			{trigger:"none", cond:true, type:"showValue", value:"specialV09"},
			//{trigger:"turnEnd", cond:true, type:"excite", repeat:"자신.상태.countType(tags, 독)", target:"self", op:"add", value:2},
		]
	},
	"AS-UL-PS-001":{
		name:{ "KOR":"시한폭탄 트랩", "ENG":"Time Bomb Trap" }, class:"암살자", type:"체위", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "group:젖음"],
		flavorText:{ "KOR":"왕국 내에서 활동하는 암살자라면 네쿠에라는 이름을 들어봤을 것이다.<br>우수한 장인이자 하프만 열쇠공인 그녀는 특유의 손재주와 창의력, 그리고 열쇠공으로서 갈고 닦은 암살 경험을 통해 다양한 암기와 트랩들을 개발해냈다.<br>특히, 그녀가 처음 개발해낸 시한폭탄의 존재는 정확한 시각과 범위에 대응 불가능한 피해를 입히면서도 폭발로 인해 흔적을 소실 시킨다는 장점으로 암살계에 혁신을 가져왔다.", "ENG":"" },
		hypnoText:{ "KOR":"상대의 성별에 맞춰 진동형 딜도 혹은 오나홀을 사용하는 체위이다.<br>상대를 구속한 뒤, 성기에 도구를 부착해 작동시킨다.", "ENG":"" },
		expiration:"count",
		effect:[
			{trigger:"used", cond:true, type:"line", value:"시한폭탄트랩-1"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"always", cond:true, type:"avoidBan", target:"self"},
			{trigger:"turnEnd", cond:true, type:"wetness",
			info:{
				value:8,
				effect:[
					{trigger:"used", cond:true, type:"line", value:"시한폭탄트랩-3", notwait:true,},
					{trigger:"used", cond:true, type:"orgasm", target:"op"},
				]
			}},
		]
	},


	"MA-MC-001":{
		name:{ "KOR":"진홍색 마도진", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:false,
		tags:["마도진", "기본마도진", "진홍색", "변형목적"],
		effect:[
			//{trigger:"transformed", cond:true, type:"state", target:"self", value:"MA-ST-001"},
		]
	},
	"MA-MC-002":{
		name:{ "KOR":"담청색 마도진", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:false,
		tags:["마도진", "기본마도진", "담청색", "변형목적"],
		effect:[
			//{trigger:"transformed", cond:true, type:"state", target:"op", byname:true, value:"MA-ST-002"},
		]
	},
	"MA-MC-003":{
		name:{ "KOR":"황금색 마도진", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:false,
		tags:["마도진", "기본마도진", "황금색", "변형목적"],
		effect:[
			//{trigger:"transformed", cond:true, type:"changeSBlock", op:"add", value:2},
		]
	},
	"MA-MC-004":{
		name:{ "KOR":"순백색 마도진", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:false,
		tags:["마도진", "기본마도진", "진홍색", "담청색", "황금색", "변형목적"],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"이 마도진은 모든 색의 마도진으로 취급할 수 있다.", "ENG":"" }},
		]
	},

	"MA-MG-000":{
		name:{ "KOR":"마술 실패", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["마술", "자동시전"], cast:1,
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"슬롯이 비어있어서 시전에 실패했다.", "ENG":"" }},
		]
	},

	"MA-MG-NT-001":{
		name:{ "KOR":"즉발 마술: 마력탄", "ENG":"" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "즉발 마술", "마력탄", "act:애무"], cast:1, keywords:["강화"],
		effect:[
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:"specialV04"},
		]
	},
	"MA-MG-NT-001+":{
		parents:"MA-MG-NT-001",
		name:{ "KOR":"영창 마술: 마력탄", "ENG":"" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "영창 마술", "마력탄", "act:애무"], cast:1, keywords:["강화"],
		effect:[
			{trigger:"get", cond:true, type:"line", value:"마력탄-영창"},
			{trigger:"used", cond:true, type:"specialA09"},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:"specialV04"},
		]
	},
	"MA-MG-NT-001++":{
		parents:"MA-MG-NT-001",
		name:{ "KOR":"집중 마술: 마력탄", "ENG":"" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "집중 마술", "마력탄", "act:애무"], cast:1, keywords:["강화"],
		effect:[
			{trigger:"get", cond:true, type:"line", value:"마력탄-집중"},
			{trigger:"used", cond:true, type:"specialA09", repeat:2},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:"specialV04"},
		]
	},
	"MA-MG-NT-001-def":{
		parents:"MA-MG-NT-001",
		name:{ "KOR":"마력탄", "ENG":"" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술요약"], related:["MA-MG-NT-001", "MA-MG-NT-001+", "MA-MG-NT-001++"],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"자세히 보기", "ENG":"" }},
		]
	},

	"MA-MG-FI-001":{
		name:{ "KOR":"즉발 마술: 화염구", "ENG":"" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "즉발 마술", "화염 마술", "act:삽입"], cast:1,
		effect:[
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"MA-MG-FI-001+":{
		parents:"MA-MG-FI-001",
		name:{ "KOR":"영창 마술: 화염구", "ENG":"" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "영창 마술", "화염 마술", "act:삽입"], cast:1,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"화염구-영창"},
			{trigger:"used", cond:true, type:"state", target:"self", value:"MA-ST-001"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"MA-MG-FI-001++":{
		parents:"MA-MG-FI-001",
		name:{ "KOR":"집중 마술: 화염구", "ENG":"" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "집중 마술", "화염 마술", "act:삽입"], cast:1,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"화염구-집중"},
			{trigger:"used", cond:true, type:"state", target:"self", value:"MA-ST-001"},
			{trigger:"used", cond:true, type:"attack", repeat:2, target:"op"},
		]
	},
	"MA-MG-FI-001-def":{
		parents:"MA-MG-FI-001",
		name:{ "KOR":"화염구", "ENG":"" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술요약"], related:["MA-MG-FI-001", "MA-MG-FI-001+", "MA-MG-FI-001++"],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"자세히 보기", "ENG":"" }},
		]
	},

	"MA-MG-IC-001":{
		name:{ "KOR":"즉발 마술: 냉기화살", "ENG":"" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "즉발 마술", "냉기 마술", "act:애무"], cast:1,
		effect:[
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:1, repeat:"상대.상태.count(id, MA-ST-002)"},
		]
	},
	"MA-MG-IC-001+":{
		parents:"MA-MG-IC-001",
		name:{ "KOR":"영창 마술: 냉기화살", "ENG":"" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "영창 마술", "냉기 마술", "act:애무"], cast:1,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"냉기화살-영창"},
			{trigger:"used", cond:true, type:"state", target:"op", byname:true, value:"MA-ST-002"},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:1, repeat:"상대.상태.count(id, MA-ST-002)"},
		]
	},
	"MA-MG-IC-001++":{
		parents:"MA-MG-IC-001",
		name:{ "KOR":"집중 마술: 냉기화살", "ENG":"" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "집중 마술", "냉기 마술", "act:애무"], cast:1,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"냉기화살-집중"},
			{trigger:"used", cond:true, type:"state", target:"op", byname:true, value:"MA-ST-002"},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:2, repeat:"상대.상태.count(id, MA-ST-002)"},
		]
	},
	"MA-MG-IC-001-def":{
		parents:"MA-MG-IC-001",
		name:{ "KOR":"냉기화살", "ENG":"" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술요약"], related:["MA-MG-IC-001", "MA-MG-IC-001+", "MA-MG-IC-001++"],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"자세히 보기", "ENG":"" }},
		]
	},

	"MA-MG-EA-001":{
		name:{ "KOR":"즉발 마술: 암석탄", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "즉발 마술", "대지 마술", "act:삽입"], cast:1,
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"randomCard(tags, 보석)"},
		]
	},
	"MA-MG-EA-001+":{
		parents:"MA-MG-EA-001",
		name:{ "KOR":"영창 마술: 암석탄", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "영창 마술", "대지 마술", "act:삽입"], cast:2,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"암석탄-영창"},
			{trigger:"used", cond:true, type:"get", target:"self", value:"randomCard(tags, 보석)"},
		]
	},
	"MA-MG-EA-001++":{
		parents:"MA-MG-EA-001",
		name:{ "KOR":"집중 마술: 암석탄", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "자동시전", "기본마술", "집중 마술", "대지 마술", "act:삽입"], cast:Infinity,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"암석탄-집중"},
			{trigger:"used", cond:true, type:"get", target:"self", value:"randomCard(tags, 보석)"},
		]
	},
	"MA-MG-EA-001-def":{
		parents:"MA-MG-EA-001",
		name:{ "KOR":"암석탄", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술요약"], related:["MA-MG-EA-001", "MA-MG-EA-001+", "MA-MG-EA-001++"],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"자세히 보기", "ENG":"" }},
		]
	},

	"MA-MG-SP-001":{
		name:{ "KOR":"즉발 마술: 용암 분사", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "즉발 마술", "화염 마술", "대지 마술", "act:삽입"], cast:1,
		effect:[
			{trigger:"used", cond:true, type:"lewd", op:"add", value:1},
		]
	},
	"MA-MG-SP-001+":{
		parents:"MA-MG-SP-001",
		name:{ "KOR":"영창 마술: 용암 분사", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "영창 마술", "화염 마술", "대지 마술", "act:삽입"], cast:1,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"용암분사-영창"},
			{trigger:"used", cond:true, type:"lewd", op:"add", value:1},
			{trigger:"used", cond:true, type:"changeSBlock", op:"add", value:"음란"}
		]
	},
	"MA-MG-SP-001++":{
		parents:"MA-MG-SP-001",
		name:{ "KOR":"집중 마술: 용암 분사", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "집중 마술", "화염 마술", "대지 마술", "act:삽입"], cast:1,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"용암분사-집중"},
			{trigger:"used", cond:true, type:"lewd", op:"add", value:1},
			{trigger:"used", cond:true, type:"changeSBlock", op:"add", repeat:"음란", value:2}
		]
	},
	"MA-MG-SP-001-def":{
		parents:"MA-MG-SP-001",
		name:{ "KOR":"용암 분사", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술요약"], related:["MA-MG-SP-001", "MA-MG-SP-001+", "MA-MG-SP-001++"],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"자세히 보기", "ENG":"" }},
		]
	},

	"MA-MG-NT-002":{
		name:{ "KOR":"즉발 마술: 역장", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "즉발 마술"], cast:1,
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"randomCard(tags, 마도진)"},
		]
	},
	"MA-MG-NT-002+":{
		parents:"MA-MG-NT-002",
		name:{ "KOR":"영창 마술: 역장", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "영창 마술"], cast:2,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"역장-영창"},
			{trigger:"used", cond:true, type:"get", target:"self", value:"randomCard(tags, 마도진)"},
		]
	},
	"MA-MG-NT-002++":{
		parents:"MA-MG-NT-002",
		name:{ "KOR":"집중 마술: 역장", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "집중 마술"], cast:2,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"역장-집중"},
			{trigger:"used", cond:true, type:"changeSBlock", op:"add", value:2},
			{trigger:"used", cond:true, type:"get", target:"self", value:"randomCard(tags, 마도진)", repeat:2},
		]
	},
	"MA-MG-NT-002-def":{
		parents:"MA-MG-NT-002",
		name:{ "KOR":"역장", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술요약"], related:["MA-MG-NT-002", "MA-MG-NT-002+", "MA-MG-NT-002++"],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"자세히 보기", "ENG":"" }},
		]
	},

	"MA-MG-FI-002":{
		name:{ "KOR":"즉발 마술: 회오리불꽃", "ENG":"" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "자동시전", "기본마술", "즉발 마술", "화염 마술"], cast:2,
		effect:[
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"MA-MG-FI-002+":{
		parents:"MA-MG-FI-002",
		name:{ "KOR":"영창 마술: 회오리불꽃", "ENG":"" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "자동시전", "기본마술", "영창 마술", "화염 마술"], cast:4,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"회오리불꽃-영창"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"MA-MG-FI-002++":{
		parents:"MA-MG-FI-002",
		name:{ "KOR":"집중 마술: 회오리불꽃", "ENG":"" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "자동시전", "기본마술", "집중 마술", "화염 마술"], cast:Infinity,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"회오리불꽃-집중"},
			{trigger:"used", cond:true, type:"attack", target:"op"}
		]
	},
	"MA-MG-FI-002-def":{
		parents:"MA-MG-FI-002",
		name:{ "KOR":"회오리불꽃", "ENG":"" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술요약"], related:["MA-MG-FI-002", "MA-MG-FI-002+", "MA-MG-FI-002++"],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"자세히 보기", "ENG":"" }},
		]
	},

	"MA-MG-IC-002":{
		name:{ "KOR":"즉발 마술: 얼음방벽", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "즉발 마술", "냉기 마술"], cast:1,
		effect:[
			{trigger:"used", cond:true, type:"state", target:"op", byname:true, value:"MA-ST-002"},
		]
	},
	"MA-MG-IC-002+":{
		parents:"MA-MG-IC-002",
		name:{ "KOR":"영창 마술: 얼음방벽", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "영창 마술", "냉기 마술"], cast:1,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"얼음방벽-영창"},
			{trigger:"used", cond:true, type:"state", target:"op", byname:true, value:"MA-ST-002", repeat:2},
		]
	},
	"MA-MG-IC-002++":{
		parents:"MA-MG-IC-002",
		name:{ "KOR":"집중 마술: 얼음방벽", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "집중 마술", "냉기 마술"], cast:2,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"얼음방벽-집중"},
			{trigger:"used", cond:true, type:"state", target:"op", byname:true, value:"MA-ST-002", repeat:2},
		]
	},
	"MA-MG-IC-002-def":{
		parents:"MA-MG-IC-002",
		name:{ "KOR":"얼음방벽", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술요약"], related:["MA-MG-IC-002", "MA-MG-IC-002+", "MA-MG-IC-002++"],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"자세히 보기", "ENG":"" }},
		]
	},

	"MA-MG-EA-002":{
		name:{ "KOR":"즉발 마술: 대지의 힘", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "즉발 마술", "대지 마술"], related:["tag:즉발 마술"], cast:1,
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"randomCard(tags, 즉발 마술)"},
		]
	},
	"MA-MG-EA-002+":{
		parents:"MA-MG-EA-002",
		name:{ "KOR":"영창 마술: 대지의 힘", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "영창 마술", "대지 마술"], related:["tag:즉발 마술"], cast:2,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"대지의힘-영창"},
			{trigger:"used", cond:true, type:"get", target:"self", value:"randomCard(tags, 즉발 마술)"},
		]
	},
	"MA-MG-EA-002++":{
		parents:"MA-MG-EA-002",
		name:{ "KOR":"집중 마술: 대지의 힘", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "집중 마술", "대지 마술"], related:["tag:즉발 마술"], cast:2,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"대지의힘-집중"},
			{trigger:"used", cond:true, type:"get", target:"self", value:"randomCard(tags, 즉발 마술)"},
			{trigger:"used", cond:true, type:"use", value:"derived"},
		]
	},
	"MA-MG-EA-002-def":{
		parents:"MA-MG-EA-002",
		name:{ "KOR":"대지의 힘", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술요약"], related:["MA-MG-EA-002", "MA-MG-EA-002+", "MA-MG-EA-002++"],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"자세히 보기", "ENG":"" }},
		]
	},

	"MA-MG-SP-002":{
		name:{ "KOR":"즉발 마술: 수정 방패", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "즉발 마술", "냉기 마술", "대지 마술"], cast:1,
		effect:[
			{trigger:"used", cond:true, type:"changeSBlock", op:"add", value:3},
		]
	},
	"MA-MG-SP-002+":{
		parents:"MA-MG-SP-002",
		name:{ "KOR":"영창 마술: 수정 방패", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "영창 마술", "냉기 마술", "대지 마술"], cast:2,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"수정방패-영창"},
			{trigger:"used", cond:true, type:"changeSBlock", op:"add", value:3},
		]
	},
	"MA-MG-SP-002++":{
		parents:"MA-MG-SP-002",
		name:{ "KOR":"집중 마술: 수정 방패", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "자동시전", "기본마술", "집중 마술", "냉기 마술", "대지 마술"], cast:Infinity,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"수정방패-집중"},
			{trigger:"used", cond:true, type:"changeSBlock", op:"add", value:3},
		]
	},
	"MA-MG-SP-002-def":{
		parents:"MA-MG-SP-002",
		name:{ "KOR":"수정 방패", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술요약"], related:["MA-MG-SP-002", "MA-MG-SP-002+", "MA-MG-SP-002++"],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"자세히 보기", "ENG":"" }},
		]
	},


	"MA-MG-FI-003":{
		name:{ "KOR":"집중 마술: 대폭발", "ENG":"" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "즉발 마술", "영창 마술", "집중전용", "생성불가", "화염 마술"],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"이 마술은 집중 슬롯에만 넣을 수 있다.", "ENG":"" }}
		]
	},
	"MA-MG-FI-003++":{
		parents:"MA-MG-FI-003",
		name:{ "KOR":"집중 마술: 대폭발", "ENG":"" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "마술요약", "기본마술", "집중 마술", "화염 마술", "act:삽입"], cast:1,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"대폭발-집중"},
			{trigger:"used", cond:true, type:"attack", repeat:3, target:"op"}
		]
	},
	"MA-MG-IC-003":{
		name:{ "KOR":"집중 마술: 눈보라", "ENG":"" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "즉발 마술", "영창 마술", "집중전용", "생성불가", "냉기 마술"],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"이 마술은 집중 슬롯에만 넣을 수 있다.", "ENG":"" }}
		]
	},
	"MA-MG-IC-003++":{
		parents:"MA-MG-IC-003",
		name:{ "KOR":"집중 마술: 눈보라", "ENG":"" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true, keywords:["만료"],
		tags:["마술", "시전", "마술요약", "기본마술", "집중 마술", "냉기 마술", "act:애무"], cast:1,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"눈보라-집중"},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:2, repeat:"자신.기록.전체.이벤트.만료마술.length"},
			{trigger:"none", cond:true, type:"showValue", value:"자신.기록.전체.이벤트.만료마술.length"},
		]
	},
	"MA-MG-EA-003":{
		name:{ "KOR":"집중 마술: 지진", "ENG":"" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "즉발 마술", "영창 마술", "집중전용", "생성불가", "대지 마술"],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"이 마술은 집중 슬롯에만 넣을 수 있다.", "ENG":"" }}
		]
	},
	"MA-MG-EA-003++":{
		parents:"MA-MG-EA-003",
		name:{ "KOR":"집중 마술: 지진", "ENG":"" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "마술요약", "기본마술", "집중 마술", "대지 마술", "act:삽입"], related:["tag:보석"], cast:1,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"지진-집중"},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:"감각차단"}
		]
	},

	"MA-ST-001":{
		name:{ "KOR":"열기", "ENG":"" }, class:"마술사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"always", cond:true, type:"lewd", op:"add", value:1},
		]
	},
	"MA-ST-001-1":{
		parents:"MA-ST-001",
		name:{ "KOR":"강한 열기", "ENG":"" }, class:"마술사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"always", cond:true, type:"lewd", op:"add", value:2},
		]
	},
	"MA-ST-001-2":{
		parents:"MA-ST-001",
		name:{ "KOR":"잔류 열기", "ENG":"" }, class:"마술사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:2,
		effect:[
			{trigger:"always", cond:true, type:"lewd", op:"add", value:1},
		]
	},
	"MA-ST-002":{
		name:{ "KOR":"빙결", "ENG":"" }, class:"마술사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"always", cond:true, type:"estrus", op:"add", value:-1},
		]
	},

	"MA-JW-001":{
		name:{ "KOR":"토파즈", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:false,
		tags:["보석", "변형목적"],
		effect:[
			{trigger:"transformed", cond:true, type:"get", target:"self", value:"MA-MC-003"},
		]
	},
	"MA-JW-002":{
		name:{ "KOR":"사파이어", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:false,
		tags:["보석", "변형목적"],
		effect:[
			{trigger:"transformed", cond:true, type:"changeSBlock", op:"add", value:3},
		]
	},
	"MA-JW-003":{
		name:{ "KOR":"루비", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:false,
		tags:["보석", "변형목적"],
		effect:[
			{trigger:"transformed", cond:true, type:"excite", target:"op", op:"add", value:3},
		]
	},

	"MA-NM-AT-001":{
		name:{ "KOR":"신속한 시전", "ENG":"" }, class:"마술사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:실바니", "group:마술", "즉발슬롯", "act:애무"], related:["ref:즉발슬롯"],
		flavorText:{ "KOR":"일반적인 상황에선 가벼운 마술로도 충분히 문제를 해결할 수 있다.<br>강한 대마술이 필요할 때도 있겠지만, 적당한 위력의 즉발 마술을 신속하게 시전하는 법부터 익히는 것이 마술사의 기본이다.", "ENG":"" },
		hypnoText:{ "KOR":"상대의 자지를 손으로 빠르게 쓰다듬으며, 가벼운 자극을 준다.<br>마력이 깃든 손놀림으로 천천히 고조시키며, 이후 이어질 행위를 준비하는 전희 기술이다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"get", target:"self", value:"마술슬롯.즉발"}
		]
	},
	"MA-NM-AT-002":{
		name:{ "KOR":"공격적인 영창", "ENG":"" }, class:"마술사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:트라이브", "group:마술", "영창슬롯", "act:삽입"], related:["ref:영창슬롯"],
		flavorText:{ "KOR":"마술사의 영창은 마력을 계량하여 마술의 정확한 위치에 적절한 양이 사용되도록 인도하는 역할을 한다.<br>영창이 가미된 마술은 더욱 강하고 풍부한 위력과 지속력을 지니게 된다.", "ENG":"" },
		hypnoText:{ "KOR":"행위 도중 음탕한 대사를 외치며 상대를 흥분시키는 기술이다.<br>주로 자지와 정액을 탐하는 문구를 사용하며, 노골적으로 사정을 종용한다.", "ENG":"" },
		effect:[
			{trigger:"choice", cond:true, range:{category:"all", count:1}, type:"transform", target:"self",
			info:{
				value:"마술슬롯.영창",
			}},
			{trigger:"used", cond:true, type:"attack", target:"op"}
		]
	},
	"MA-NM-AT-003":{
		name:{ "KOR":"불씨의 고리", "ENG":"" }, class:"마술사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:엘도리아인", "group:마도진", "act:삽입"], related:["MA-MC-001"],
		flavorText:{ "KOR":"진홍색 마력은 파괴적인 힘을 품고 있다.<br>흔히 불꽃이나 폭발 등의 형태로 구현되며, 이 속성의 마력을 잘 다루는 이들은 괴팍하거나 위험한 성격을 지닌 사람이 많다.", "ENG":"" },
		hypnoText:{ "KOR":"음문이 배에 새겨져, 자궁 깊은 곳에서부터 뜨거운 자극이 퍼져 나간다.<br>음문의 효능으로 상대의 자지를 강하게 조여, 더욱 우수한 명기가 된다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"MA-MC-001"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"MA-NM-AT-004":{
		name:{ "KOR":"마력 깃든 원석", "ENG":"" }, class:"마술사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:하프만", "group:변형", "act:삽입"], related:["tag:보석", "MA-MC-003"],
		flavorText:{ "KOR":"마력을 농축해 고체화하면 아름다운 빛깔을 가진 광물이 되는데 이를 마석 혹은 보석이라 부른다.<br>보석은 계속해서 마력을 발산하는 성질이 있기에 마도구의 연료나 마술 시전을 위한 소재 등으로 사용되며, 아름답고 희귀한 성질 때문에 고가의 장신구에 쓰이기도 한다.", "ENG":"" },
		hypnoText:{ "KOR":"상대의 자지에 마술을 걸어 돌처럼 단단하게 발기시킨 후, 그것을 엉덩이에 깊숙이 삽입하는 기술이다.<br>단단해진 자지가 들어올 때마다, 뒷구멍으로 그 강렬한 압박감을 즐기며 느껴버린다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"randomCard(tags, 보석)"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"MA-NM-AT-005":{
		name:{ "KOR":"기초 원소술", "ENG":"" }, class:"마술사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:엘도리아인", "group:마도진", "act:난교"], related:["MA-MC-001", "MA-MC-002", "MA-MC-003"],
		flavorText:{ "KOR":"마술에는 여러 분야가 있지만, 일반적으로 마술이라 했을 때 떠오르는 이미지는 원소술을 나타낸다.<br>원소술에서는 진홍색, 담청색, 황금색 세 종류의 마력 중 하나 이상을 다루며, 사람마다 특화된 마력이 다르다는 특징이 있다.", "ENG":"" },
		hypnoText:{ "KOR":"마술사의 삼대 속성인 가슴, 보지, 엉덩이를 모두 사용하는 기술이다.<br>상황에 맞춰 적절하게 보지 섹스, 파이즈리, 애널 섹스를 골라서 한다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:2},
			{trigger:"used", cond:true, type:"get", target:"self", value:"randomCard(tags, 마도진)"},
		]
	},
	"MA-NM-AT-006":{
		name:{ "KOR":"반사 보호막", "ENG":"" }, class:"마술사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:실바니", "group:감각차단", "act:삽입"],
		flavorText:{ "KOR":"마력에 대한 이해가 깊어지면서 마술의 화력은 날이 갈수록 강해지고, 방어 기술은 이를 따라가지 못하고 있다.<br>이런 상황에서는 방어 마술을 다룰 때도 공격적인 전략을 취할 필요가 있다.", "ENG":"" },
		hypnoText:{ "KOR":"감각차단에 의해 인지하지 못하는 상태로 섹스를 하는 기술이다.<br>보지에서 조수를 내뿜으며 하반신을 바들거리면서도, 아무것도 모르고 태연한 표정을 짓는다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:2},
			{trigger:"used", cond:true, type:"changeSBlock", op:"add", value:"상대.기록.이번.이벤트.흥분.증가"}
		]
	},
	"MA-NM-SU-001":{
		name:{ "KOR":"주문 스크롤", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:하프만", "group:마술", "즉발슬롯"], related:["ref:즉발슬롯"], keywords:["만료"],
		flavorText:{ "KOR":"미리 술식을 새겨둔 스크롤을 이용한다면 신속하고 간편하게 마술을 시전할 수 있다.<br>마술의 재능과 스크롤 작성의 재능은 별개의 분야이니, 어설프게 수제작하는 것보단 하프만 장인제 공인된 물건을 쓸 것을 추천한다.", "ENG":"" },
		hypnoText:{ "KOR":"보짓물을 뿌려 적시는 기술이다.<br>충분히 발정난 상태라면 가볍게 흩뿌리기까지 몇 초도 걸리지 않는다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"마술슬롯.즉발"},
			{trigger:"selected", cond:{v1:"자신.기록.전체.이벤트.만료마술.length", op:">", v2:0}, type:"maxUse", target:"self", value:1}
		]
	},
	"MA-NM-SU-002":{
		name:{ "KOR":"강화 영창", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:엘도리아인", "group:마술", "group:변형", "영창슬롯"], related:["ref:영창슬롯"],
		flavorText:{ "KOR":"영창 시 단어의 빈도와 위치를 조절하여 마술의 위력을 변경할 수 있다.<br>같은 단어를 반복하는 것으로 마력을 집중시켜 화력을 증가시킬 수 있고, 어순을 바꾸는 것으로 마력의 흐름을 조율해 범위를 변경시킬 수 있다.", "ENG":"" },
		hypnoText:{ "KOR":"상대의 흥분을 돕는 주문을 읊어 자지가 더욱 강인하게 발기할 수 있도록 돕는 기술이다.<br>천박하고 노골적인 단어를 선정할 수록 효과가 커진다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"lewd", op:"add", value:1},
			{trigger:"choice", cond:true, range:{category:"all", count:1}, type:"transform", target:"self",
			info:{
				value:"마술슬롯.영창",
			}},
		]
	},
	"MA-NM-SU-003":{
		name:{ "KOR":"서리의 고리", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:트라이브", "group:마도진"], related:["MA-ST-002", "MA-MC-002"],
		flavorText:{ "KOR":"담청색 마력은 힘을 흡수하는 성질을 가지고 있다.<br>열기를 없애 빙결시키거나 활력을 제거해 굳게 만드는 등, 정적인 이미지가 강하다.", "ENG":"" },
		hypnoText:{ "KOR":"가슴에 문구를 새겨 천박함을 증가시킨다.<br>변녀, 암퇘지, 육변기 등의 자신을 낮추는 표현들을 적으면 좋다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"state", target:"op", byname:true, value:"MA-ST-002", repeat:2},
			{trigger:"used", cond:true, type:"get", target:"self", value:"MA-MC-002"}
		]
	},
	"MA-NM-SU-004":{
		name:{ "KOR":"암석의 고리", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:트라이브", "group:마도진", "group:변형"], related:["MA-MC-003"],
		flavorText:{ "KOR":"황금색 마력은 보호와 변형의 작업에 특화되어 있다.<br>대지의 견고함을 지님과 동시에, 가공하기에 따라 무엇이든 될 수 있는 다양성을 품고 있다.", "ENG":"" },
		hypnoText:{ "KOR":"엉덩이에 사정 횟수를 새겨 음탕함을 증가시킨다.<br>물건처럼 다뤄지는 느낌을 주어 사용하기 좋은 오나홀에 가까워진다.", "ENG":"" },
		effect:[
			{trigger:"choice", cond:true, range:{category:"all", count:2}, type:"transform", target:"self",
			info:{
				value:"MA-MC-003",
			}},
		]
	},
	"MA-NM-SU-005":{
		name:{ "KOR":"신성 보호막", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:엘도리아인", "group:감각차단"], keywords:["만료"],
		flavorText:{ "KOR":"회복과 보호에 특화되어 있는 신성 마술은 신앙심을 기반으로 위대한 존재로부터 힘을 선사받아 사용하는 독특한 마술이다.<br>여신 알레이아를 섬기는 레이아교와, 숲의 현신 레아를 섬기는 황금줄기 신앙은 서로 다른 대상을 섬기는 종교이면서도 신기할만큼 비슷한 힘을 다루고 있다.", "ENG":"" },
		hypnoText:{ "KOR":"스스로의 인지를 저하시켜 섹스에 대한 거부감을 없애는 자기 최면 기술이다.<br>범해지는 것을 자연스럽게 여기며, 감각차단으로 인해 자신이 무엇을 당하는지 느끼지 못한다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"changeSBlock", op:"add", value:5},
		]
	},
	"MA-NM-SU-006":{
		name:{ "KOR":"정신 집중", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:실바니", "group:감각차단", "group:마술", "group:변형", "집중슬롯"], related:["ref:집중슬롯"],
		flavorText:{ "KOR":"대마술을 시전하기 위해서는 방대한 마력과 오랜 집중력이 필요하다.<br>하나의 대마술을 익히기 위해선 많은 경험과 연습이 필요하기에, 대마술사의 대부분이 수명이 긴 실바니인 것은 자연스러운 일이다.", "ENG":"" },
		hypnoText:{ "KOR":"남성의 정액이 높은 마력 충전 효과를 가지고 있다는 것은 상식이다.<br>상대에게 부탁하여 자신의 몸에 정액을 뿌려주길 요청하자.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"changeSBlock", op:"add", value:3},
			{trigger:"choice", cond:true, range:{category:"tags", value:"마도진", count:1}, type:"transform", target:"self",
			info:{
				value:"마술슬롯.집중",
			}},
		]
	},
	"MA-NM-SU-007":{
		name:{ "KOR":"연속 영창", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:하프만", "group:마술", "group:변형", "영창슬롯"], related:["MA-NM-SU-007-1", "ref:영창슬롯"],
		flavorText:{ "KOR":"비슷한 마술끼리는 주문의 일부가 유사하게 겹치는 일이 자주 있다.<br>이를 활용하여 서로 다른 마술의 영창을 연달아 수행하여 이을 경우, 빠르게 복수의 마술을 시전할 수 있다.", "ENG":"" },
		hypnoText:{ "KOR":"양손을 사용해 동시에 여러 개의 자지를 애무하는 기술이다.<br>하나의 자지에 더 큰 자극이 집중되지 않도록 균형잡힌 손동작이 중요하다.", "ENG":"" },
		effect:[
			{trigger:"choice", cond:true, range:{category:"all", count:1}, type:"transform", target:"self",
			info:{
				value:"마술슬롯.영창",
			}},
			{trigger:"used", cond:true, type:"get", target:"self", value:"MA-NM-SU-007-1"},
		]
	},
	"MA-NM-SU-007-1":{
		name:{ "KOR":"후속 영창", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["즉발슬롯"], related:["ref:즉발슬롯"],
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"마술슬롯.즉발"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"MA-NM-PS-001":{
		name:{ "KOR":"설원늑대 정령", "ENG":"" }, class:"마술사", type:"체위", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:트라이브", "group:마술", "즉발슬롯"], related:["MA-ST-002", "ref:즉발슬롯"],
		flavorText:{ "KOR":"악마나 정령, 드래곤 등이 사용하는 이치를 벗어난 힘을 일컬어 마법이라 부르며, 이를 모방하기 위해 체계를 분석해 흉내낸 열화된 기술을 마술이라 한다.<br>은빛잎 부족의 특기로 알려진 정령술은 정령과의 소통을 통해 그들의 힘을 빌려 원초의 마법과 유사한 힘을 사용할 수 있다고 한다.", "ENG":"" },
		hypnoText:{ "KOR":"당신의 파트너는 항상 발정나 자지를 탐하는 암컷 늑대 정령이다.<br>풍만한 가슴과 특기인 파이즈리를 통해 3P를 도와주지만, 목줄을 놓치면 주인보다 먼저 자지를 맛보려 할테니 주의가 필요하다.", "ENG":"" },
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"설원늑대정령-1"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"turnEnd", cond:{v1:"상대.상태.count(id, MA-ST-002)", op:">=", v2:2}, type:"line", value:"설원늑대정령-2"},
			{trigger:"turnEnd", cond:{v1:"상대.상태.count(id, MA-ST-002)", op:">=", v2:2}, type:"get", target:"self", value:"마술슬롯.즉발"},
			{trigger:"expired", cond:true, type:"line", value:"설원늑대정령-3"},
		]
	},
	"MA-NM-PS-002":{
		name:{ "KOR":"오토마톤 골렘", "ENG":"" }, class:"마술사", type:"체위", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:엘도리아인", "group:변형", "group:마도진"], related:["tag:보석", "MA-MC-003"],
		flavorText:{ "KOR":"실바니의 기계공학 기술과 마도술을 결합한, 마도공학은 무척이나 각광받는 분야이다.<br>그 중에서도 골렘공학은 정교한 물리적 설계와 복잡한 마도술식의 조합으로 이루어지는 마도공학의 정수이다.", "ENG":"" },
		hypnoText:{ "KOR":"당신의 파트너는 충실히 어떤 명령이든 수행하는 여성형 오나홀 골렘이다.<br>그녀의 구멍의 조임과 주름은 당신의 것을 모델로 만들어졌기에, 그녀를 사용하는 것은 당신을 범하는 것과 다를 바가 없다.", "ENG":"" },
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"오토마톤골렘-1"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"turnStart", cond:{v1:"자기덱.count(tags, 보석)", op:">", v2:0}, type:"line", value:"오토마톤골렘-2"},
			{trigger:"turnStart", cond:{v1:"자기덱.count(tags, 보석)", op:">", v2:0}, condOmit:true, type:"transform", target:"self",
			info:{
				target:"자기덱.selectCards(tags, 보석, 1)",
				value:"MA-MC-003",
			}},
			{trigger:"expired", cond:true, type:"line", value:"오토마톤골렘-3"},
		]
	},

	"MA-EX-AT-001":{
		name:{ "KOR":"마력 폭발", "ENG":"" }, class:"마술사", type:"공격", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "race:트라이브", "group:마도진", "group:감각차단", "act:펠라치오"], related:["MA-MC-004"],
		flavorText:{ "KOR":"순수한 마력은 특별한 속성을 지니지 않는다.<br>축복받은 마력량의 보유자라면, 이를 마술로 가공하지 않고 그대로 방출해도 위압적인 위력을 낼 수 있다.", "ENG":"" },
		hypnoText:{ "KOR":"입 밖으로 넘쳐 흐를 때까지 정액을 받아 마시는 기술이다.<br>사정량이 역류해 흘러나올 때까지, 목구멍 깊이 자지를 쑤셔넣어 삼켜야 한다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"MA-MC-004"},
			{trigger:"used", cond:true, type:"changeSBlock", op:"add", value:2},
			{trigger:"used", cond:true, type:"attack", target:"op"}
		]
	},
	"MA-EX-AT-002":{
		name:{ "KOR":"이중 시전", "ENG":"" }, class:"마술사", type:"공격", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "race:엘도리아인", "group:마술", "act:삽입"],
		flavorText:{ "KOR":"마술 만큼 노력보다 재능의 비중이 중요한 분야는 드물 것이다.<br>엘도리아 왕족은 넘쳐나는 마력량과 혈통 마술, 그리고 다중 시전 재능까지 모든 것을 타고나는 것으로 알려져 있다.", "ENG":"" },
		hypnoText:{ "KOR":"연속해서 반복하여 범해지는 기술이다.<br>타고난 음란한 몸뚱아리가 남성을 유혹하여, 그들이 자신을 강간하게 만든다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:2},
			{trigger:"choice", cond:true, range:{category:"tags", value:"마술", count:1}, type:"get", target:"self"},
		]
	},
	"MA-EX-AT-003":{
		name:{ "KOR":"다중 원소술", "ENG":"" }, class:"마술사", type:"공격", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "race:실바니", "group:마술", "group:마도진", "즉발슬롯", "act:난교"], related:["ref:즉발슬롯"],
		flavorText:{ "KOR":"대부분의 원소술사는 특화된 하나의 속성의 마력을 지니게 되는데, 매우 드물게 복수의 마력을 지닌 이들이 있다.<br>다중 원소술은 이러한 재능을 살려 다양한 상황에 대응할 수 있게끔 해주지만, 하나의 집중된 속성 연습보다 곱절로 큰 노력을 요구한다.", "ENG":"" },
		hypnoText:{ "KOR":"가슴, 보지, 엉덩이 중 둘 이상을 사용해 자지를 상대하는 기술이다.<br>전신 육변기가 되기 위해 정진해야 한다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", repeat:"자기덱.count(tags, 마도진)", maxRepeat:3, value:"마술슬롯.즉발"},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", repeat:"자기덱.count(tags, 마술)", value:1},
		]
	},
	"MA-EX-AT-004":{
		name:{ "KOR":"재현 술식", "ENG":"" }, class:"마술사", type:"공격", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "race:하프만", "group:마술"], keywords:["만료"],
		flavorText:{ "KOR":"마술을 사용한 자리에는 마력의 흔적이 남기 마련이다.<br>이를 역추적하면 그곳에서 시전되었던 마술을 간단하게 재현할 수 있다.", "ENG":"" },
		hypnoText:{ "KOR":"투영 구슬을 사용해 자신의 섹스하는 모습을 녹화하는 기술이다.<br>남은 기록물이 사라지지 않고 떠돌며 다른 남성들의 딸감이 될거라는 사실이 흥분감을 더해준다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"자신.기록.전체.이벤트.만료마술.selectCards(all, null, 2)"},
			{trigger:"used", cond:true, type:"attack", target:"op"}
		]
	},
	"MA-EX-SU-001":{
		name:{ "KOR":"고속 영창", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "race:트라이브", "group:마술", "group:변형", "영창슬롯"], related:["ref:영창슬롯"],
		flavorText:{ "KOR":"짧은 시간 안에 복잡한 마술을 시전하기 위해선 영창을 단축시키는 고급 기술이 필요하다.<br>최적화의 방식은 마술사마다 중요시 여기는 부분이 다르기 때문에 취향의 차이가 있다.", "ENG":"" },
		hypnoText:{ "KOR":"음란한 문구가 섞인 거친 말투로 상대를 도발하는 기술이다.<br>자신의 몸을 과시하며 서둘러 먹지 않는 상대를 동정이라 매도한다.", "ENG":"" },
		effect:[
			{trigger:"choice", cond:true, range:{category:"all", count:1}, type:"transform", target:"self",
			info:{
				value:"마술슬롯.영창",
			}},
			{trigger:"used", cond:true, type:"use", value:"derived"}
		]
	},
	"MA-EX-SU-002":{
		name:{ "KOR":"폭염", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "race:실바니", "group:마도진", "group:마술", "group:변형", "집중슬롯", "진홍색 마도진"], related:["MA-MC-001", "ref:집중슬롯"],
		flavorText:{ "KOR":"전투 마술사들은 특성상 파괴력을 중시하는 진홍색 마력의 소유자가 많다.<br>모든 것을 태우며 재로 만들어버리는 파괴적인 화염으로, 전장을 불바다로 만드는 힘을 자랑한다.", "ENG":"" },
		hypnoText:{ "KOR":"열정적인 자위로 절정 보지즙을 뿜어내는 기술이다.<br>충분히 달아오를 때까지 시간이 필요하지만, 더욱 음란하고 강렬한 행위를 위한 준비과정이다.", "ENG":"" },
		effect:[
			{trigger:"choice", cond:true, range:{category:"id", value:"MA-MC-001", count:1}, type:"transform", target:"self",
			info:{
				value:"마술슬롯.집중",
			}},
			{trigger:"used", cond:{v1:"음란", op:">=", v2:4}, type:"get", target:"self", repeat:2, value:"MA-MC-001"},
		]
	},
	"MA-EX-SU-003":{
		name:{ "KOR":"한파", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "race:하프만", "group:마도진", "group:마술", "group:변형", "집중슬롯", "담청색 마도진"], related:["MA-MC-002", "ref:집중슬롯"],
		flavorText:{ "KOR":"뿜어져 나오는 담청색 마력으로 공기마저 얼어붙게 만들어, 차갑고 매서운 바람이 적을 덮치게 만든다.<br>적의 움직임을 봉쇄하고 모든 것을 얼려버리는 강력한 힘을 지닌 마술로, 전장의 모든 것을 얼음으로 뒤덮는다.", "ENG":"" },
		hypnoText:{ "KOR":"커다란 가슴을 가지고 있다면 이를 의복이나 속옷 등으로 가려선 안된다.<br>남성들의 눈을 즐겁게 하기 위해선 거유를 노출해야 하는 것이 상식이다.", "ENG":"" },
		effect:[
			{trigger:"choice", cond:true, range:{category:"id", value:"MA-MC-002", count:1}, type:"transform", target:"self",
			info:{
				value:"마술슬롯.집중",
			}},
			{trigger:"used", cond:{v1:"상대.상태.count(id, MA-ST-002)", op:">=", v2:3}, type:"get", target:"self", value:"derived"},
		]
	},
	"MA-EX-SU-004":{
		name:{ "KOR":"명상", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "race:엘도리아인", "group:마술", "group:변형", "group:마도진", "group:감각차단", "영창슬롯", "황금색 마도진"], related:["ref:영창슬롯", "tag:변형목적"], keywords:["변형목적"],
		flavorText:{ "KOR":"라이트위버 일족의 도사들은 황금색 마력을 다루기 위한 정신수양법을 사용한다.<br>깊은 명상에 들어가 황금색 마력을 몸 안에 순환시킴으로써, 소모된 에너지를 회복하고 마력의 흐름을 안정시킨다.", "ENG":"" },
		hypnoText:{ "KOR":"무아지경에 빠져 범해지는 것조차 눈치채지 못하게 되는 기술이다.<br>정신을 차렸을 때쯤 이미 온 몸이 정액으로 흥건한 모습을 발견할 수 있다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"changeSBlock", op:"add", value:2},
			{trigger:"choice", cond:true, range:{category:"tags", value:"변형목적", count:"M2"}, type:"transform", target:"self",
			info:{
				value:"마술슬롯.영창",
			}},
		]
	},
	"MA-EX-PS-001":{
		name:{ "KOR":"플라스크 피닉스", "ENG":"" }, class:"마술사", type:"체위", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "race:엘도리아인", "group:마도진", "진홍색 마도진"], related:["MA-MC-001"],
		flavorText:{ "KOR":"정령술은 매우 탐나는 위력을 가진 기술이나, 변덕스러운 정령들과 소통할 수 있는 재능이 없다면 사용할 수 없다.<br>이를 극복하기 위해 실바니아의 신목학술원에서는 소통이 원활한 인공 정령을 만드는 연구를 시도하고 있다.", "ENG":"" },
		hypnoText:{ "KOR":"당신의 파트너는 강렬한 성적 호기심을 지닌 암컷 몬스터이다.<br>순진한 표정으로 남성을 덮쳐 기분이 좋아지는 '놀이'를 하고자 어리광을 부린다.", "ENG":"" },
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"플라스크피닉스-1"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"turnEnd", cond:{v1:"자신.기록.이번.이벤트.자극함", op:">", v2:0}, type:"line", value:"플라스크피닉스-2"},
			{trigger:"turnEnd", cond:{v1:"자신.기록.이번.이벤트.자극함", op:">", v2:0}, type:"get", target:"self", value:"MA-MC-001"},
			{trigger:"expired", cond:true, type:"line", value:"플라스크피닉스-3"},
		]
	},
	"MA-EX-PS-002":{
		name:{ "KOR":"마나 슬라임", "ENG":"" }, class:"마술사", type:"체위", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "race:하프만", "group:마도진", "group:변형"], related:["tag:마도진", "MA-EX-PS-002-2"],
		flavorText:{ "KOR":"마나 슬라임은 부정형의 형태 때문에 그렇게 불리지만, 실제로는 슬라임이라는 몬스터와는 완전히 다른 존재이다.<br>주변의 마력을 흡수하고 성장하는 성질 때문에 다양한 실험, 마력 감지, 마술사에 대한 대응수단 등으로 사용된다.", "ENG":"" },
		hypnoText:{ "KOR":"당신의 파트너는 인간 여성의 형태를 모방하는 슬라임이다.<br>주 먹이는 정액으로, 보지를 흉내낸 쫀득쫀득한 구멍으로 자지를 조여 사정하게 만들어 섭취한다.<br>※ 적정량 이상의 먹이를 주지 말 것.", "ENG":"" },
		expiration:"count", duration:5, defaultDuration:5,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"마나슬라임-1"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"turnStart", cond:{v1:"자기덱.count(tags, 마도진)", op:">", v2:0}, type:"line", value:"마나슬라임-2"},
			{trigger:"turnStart", cond:{v1:"자기덱.count(tags, 마도진)", op:">", v2:0}, condOmit:true, type:"transform", target:"self",
			info:{
				target:"자기덱.selectCards(tags, 마도진, 1)",
				value:"MA-EX-PS-002-2",
			}},
			{trigger:"expired", cond:true, type:"line", value:"마나슬라임-3"},
			/*{trigger:"turnEnd", cond:{v1:"자신.기록.전체.이벤트.만료마술.length", op:">=", v2:5}, notext:true, type:"transform", target:"self",
			info:{
				target:"self",
				value:"MA-EX-PS-002-3",
			}},
			{trigger:"none", cond:true, type:"text", value:{"KOR":"<span style=\"color: gray;\">[라운드 종료]</span> 결투 동안 만료된 마술이 5장 이상이라면 거대해진다.", "ENG":""}, keepLine:true},
			{trigger:"none", cond:true, type:"showValue", value:"자신.기록.전체.이벤트.만료마술.length"},*/
		]
	},
	"MA-EX-PS-002-2":{
		name:{ "KOR":"마법: 흡수", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["마술", "자동시전"], cast:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"마나슬라임-4", notwait:true},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:"자기덱.count(tags, 마술)"},
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"이 카드는 마술 카드로 취급한다.", "ENG":"" }},
		]
	},
	"MA-EX-PS-002-3":{
		name:{ "KOR":"거대 마나 슬라임", "ENG":"" }, class:"마술사", type:"체위", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[], related:["MA-EX-PS-002-4"], keywords:["변형목적"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"turnStart", cond:{v1:"자기덱.count(tags, 변형목적)", op:">", v2:0}, condOmit:true, type:"transform", target:"self",
			info:{
				target:"자기덱.selectCards(tags, 변형목적, 3)",
				value:"MA-EX-PS-002-4",
			}},
		]
	},
	"MA-EX-PS-002-4":{
		name:{ "KOR":"마법: 융합", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["마술", "자동시전"], cast:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"changeSBlock", op:"add", value:2},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:3},
		]
	},

	"MA-UL-AT-001":{
		name:{ "KOR":"별의 낙화", "ENG":"" }, class:"마술사", type:"공격", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "race:트라이브", "group:마도진", "group:변형", "진홍색 마도진"], related:["MA-MC-001", "MA-UL-AT-001-1"],
		flavorText:{ "KOR":"별의 움직임을 읽어내는 기술은 정보의 부족과 떨어지는 관측 정밀도, 우연에 의존하는 결과 등이 맞물려 실용성이 떨어지는 분야로서 무시당해 왔다.<br>그러나 한 트라이브의 현자가 부족을 지키기 위해 진홍색 마력과 점성술을 결합하여 시전했던 대마술, 유성우가 일대를 초토화시키는 사건이 벌어지며 그 의식이 바뀌게 되었다.<br>비극을 되풀이하지 않기 위해서라도 이 미지의 분야의 정립을 시도한 결과가 바로 점성학, 셀레스트론의 탄생이다.", "ENG":"" },
		hypnoText:{ "KOR":"자궁에 새겨진 강화된 음문으로 술자의 보지를 최고의 오나홀 구멍으로 만들어버리는 필살기이다.<br>어떤 남성이든 단숨에 사정시켜 버리는 효과를 지녔지만, 후유증으로 술자는 비삽입 시 괴로움을 호소하게 되어 평생을 좆집으로 살게 된다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"유성우-집중"},
			{trigger:"choice", cond:true, range:{category:"id", value:"MA-MC-001", count:"M5"}, type:"transform", target:"self",
			info:{
				value:"MA-UL-AT-001-1",
			}},
		]
	},
	"MA-UL-AT-001-1":{
		name:{ "KOR":"대마술: 유성우", "ENG":"" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["마술", "자동시전"], cast:1,
		effect:[
			{trigger:"used", cond:true, type:"state", target:"self", value:"MA-ST-001"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"MA-UL-AT-002":{
		name:{ "KOR":"얼어붙은 세계", "ENG":"" }, class:"마술사", type:"공격", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "race:엘도리아인", "group:마도진", "group:변형", "담청색 마도진"], related:["MA-ST-002", "MA-MC-002", "MA-UL-AT-002-1"],
		flavorText:{ "KOR":"엘도리아 왕국 북부의 설원 산악지대에는 오랜 세월 그곳에서 살아온 소수 민족들이 있다.<br>열악한 환경에서 살아남기 위해 강인한 체격과 호탕한 성격을 갖게된 그들은, 추위를 이겨내는 기합과 근력, 그리고 산맥으로부터 얻은 풍부한 담청색 마력을 다루는 재능을 지니고 있다.<br>그들이 주로 사용하는 대마술은 일대를 얼어붙게 만들어, 어디서든 전장을 자신들의 홈그라운드로 만들 수 있다.", "ENG":"" },
		hypnoText:{ "KOR":"가슴으로 자지를 덮어 감싸, 극강의 압박과 조임으로 쾌감을 선사하는 필살기이다.<br>부드러운 젖가슴이 자지를 말아감듯 집어삼키며, 상대를 그 부드러운 자극 속에 품어 빠져나오지 못하게 만든다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"영구동토-집중"},
			{trigger:"used", cond:true, type:"state", target:"op", byname:true, value:"MA-ST-002"},
			{trigger:"choice", cond:true, range:{category:"id", value:"MA-MC-002", count:1}, type:"transform", target:"self",
			info:{
				value:"MA-UL-AT-002-1",
			}},
		]
	},
	"MA-UL-AT-002-1":{
		name:{ "KOR":"대마술: 영구동토", "ENG":"" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["마술", "자동시전"], related:["MA-ST-002"], cast:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"state", target:"op", byname:true, value:"MA-ST-002"},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", repeat:"상대.기록.전체.이벤트.상태획득.count(id, MA-ST-002)", value:1},
			{trigger:"none", cond:true, type:"showValue", value:"상대.기록.전체.이벤트.상태획득.count(id, MA-ST-002)"},
		]
	},

	"MA-UL-SU-001":{
		name:{ "KOR":"마력이 넘치는 지맥", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "race:하프만", "group:마도진", "group:변형", "group:마술", "황금색 마도진"], related:["MA-MC-003", "tag:집중 마술"],
		flavorText:{ "KOR":"대지의 깊은 곳에는 거대한 마력이 흐르는 지맥이 존재하며, 이것이 조금씩 땅 위로 누출되어 퍼진 것이 바로 자연 상태의 마력이다.<br>드물게 지맥이 상대적으로 얕은 곳을 지나가 땅 위에서 직접 간섭할 수 있는 지점이 있는데, 그곳에 서면 방대한 마력을 마치 자신의 것처럼 이용할 수 있게 된다.<br>지맥을 이용하는 마술사는 천재지변과도 같기 때문에, 전쟁에서 주변의 마력 지형을 파악하는 것은 매우 중요하며, 확보할 수 없는 지맥의 근처에는 진지를 세우지 않는 것이 좋다.", "ENG":"" },
		hypnoText:{ "KOR":"스스로에게 전신을 성감대로 바꾸는 저주를 거는 기술이다.<br>애무와 스킨십 만을 통해서도 충분히 느낄 수 있게 되어, 섹스를 더욱 즐겁고 기분좋게 즐길 수 있게 된다.", "ENG":"" },
		effect:[
			{trigger:"choice", cond:true, range:{category:"id", value:"MA-MC-003", count:1}, type:"transform", target:"self",
			info:{
				value:"마술슬롯.집중",
			}},
			//{trigger:"used", cond:true, type:"specialA13"},
			//{trigger:"used", cond:true, type:"text", value:{ "KOR":"<b>[황금색 마도진]</b>을 선택해 집중 마술로 <b>변형</b>하고, 자동 시전을 부여한다.", "ENG":"" }},
			{trigger:"used", cond:true, type:"get", target:"self", value:"MA-UL-SU-001"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1}
		]
	},
	"MA-UL-SU-002":{
		name:{ "KOR":"시간 정지", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "race:엘도리아인", "group:마술"],
		flavorText:{ "KOR":"연금술에는 5대 난제라고 불리는 모든 연금술사들의 꿈, 궁극의 목표가 있다.<br>무한 동력, 시간 역행, 지적생명 창조, 불로불사, 황금 생성. 어느 것이든 실현되었을 경우 세상의 이치를 바꿀 수 있는 것들이다.<br>간혹 시간 정지 마술의 구현이 성공하며 시간 역행의 성공이 가까워졌다는 무지한 주장이 있지만, 그 마술은 극한의 가속으로 인해 시간이 멈춘 것처럼 보이게 만드는 것 뿐, 역행과는 전혀 다른 수단이다.", "ENG":"" },
		hypnoText:{ "KOR":"멈춘 시간 속에서 상황을 인지하지 못하는 상대를 마음껏 범하는 기술이다.<br>시간이 다시 흐르기 시작하는 순간, 누적된 자극이 한꺼번에 몰려오며 복상사할 수준의 쾌락을 안겨준다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"시간정지"},
			//{trigger:"used", notext:true, cond:true, type:"state", target:"op", value:"MA-UL-SU-002-1"},
			{trigger:"used", cond:true, type:"use", value:"자신.기록.이번.사용.selectCards(tags, 마술, all)"},
			/*{trigger:"used", notext:true, cond:true, type:"remove", target:"op",
			info:{
				target:"상대.상태.selectCards(id, MA-UL-SU-002-1, all)"
			}},
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"모든 효과가 끝날 때까지 상대는 절정하지 않는다.", "ENG":"" }},*/
		]
	},
	"MA-UL-SU-002-1":{
		parents:"MA-UL-SU-002",
		name:{ "KOR":"정지됨", "ENG":"" }, class:"마술사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"always", cond:true, type:"suppression", target:"self"},
		]
	},
	"MA-UL-PS-001":{
		name:{ "KOR":"미영, 대마녀의 혼", "ENG":"" }, class:"마술사", type:"체위", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "race:실바니"], related:["tag:미영의 도움"],
		flavorText:{ "KOR":"미영 지는 생전에 마술계에 장대한 영향을 끼쳤던 실바니 대마술사이다.<br>위대한 실바니들이 그렇듯 그녀의 영혼은 실바니아의 신사에 안치되었어야 했으나, 괴짜 기질이 강했던 그녀는 죽기 직전 자신의 영혼을 분리해 다른 곳에 깃들게 하는 빙의술을 시전했다.<br>그 뒤 자유롭게 세상을 떠돌던 그녀는, 현재 당신에게 깊은 흥미를 가져 멋대로 달라붙어 스승으로서 많은 조언과 도움을 주고 있다.", "ENG":"" },
		hypnoText:{ "KOR":"당신의 파트너는 당신에게 집착하는 광기의 치녀의 영혼이다.<br>사사건건 집착하고 멋대로 당신의 몸을 만지며, 사이를 방해하는 남성들을 한 손으로 절정시켜 제거할 것이다.", "ENG":"" },
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"미영-0"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"turnStart", cond:true, type:"specialA08"},
			{trigger:"expired", cond:true, type:"line", value:"미영-3"},
		]
	},
	"MA-UL-PS-001-1-1":{
		name:{ "KOR":"미영의 보호", "ENG":"" }, class:"마술사", type:"-", rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["미영의 도움"],
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"<b>조건:</b> 덱에 패널티 카드가 2장 이상 있다면,", "ENG":"" }},
			{trigger:"used", cond:true, type:"line", value:"미영-1"},
			{trigger:"used", cond:true, type:"transform", target:"self",
			info:{
				target:"자기덱.selectCards(type, 패널티, 1)",
				value:"randomCard(tags, 보석)",
			}},
		]
	},
	"MA-UL-PS-001-1-2":{
		parents:"MA-UL-PS-001-1-1",
		name:{ "KOR":"미영의 위로", "ENG":"" }, class:"마술사", type:"-", rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["미영의 도움"],
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"<b>조건:</b> 남은 <b>절정</b> 횟수가 1이라면,", "ENG":"" }},
			{trigger:"used", cond:true, type:"line", value:"미영-2"},
			{trigger:"used", cond:true, type:"changeSBlock", op:"add", value:5},
		]
	},
	"MA-UL-PS-001-1-3":{
		parents:"MA-UL-PS-001-1-1",
		name:{ "KOR":"미영의 충고", "ENG":"" }, class:"마술사", type:"-", rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["미영의 도움"],
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"<b>조건:</b> 덱에 마도진 카드가 2장 이상 있다면,", "ENG":"" }},
			{trigger:"used", cond:true, type:"line", value:"미영-3"},
			{trigger:"used", cond:true, type:"transform", target:"self",
			info:{
				target:"자기덱.selectCards(tags, 마도진, 1)",
				value:"마술슬롯.영창"
			}},
		]
	},
	"MA-UL-PS-001-1-4":{
		parents:"MA-UL-PS-001-1-1",
		name:{ "KOR":"미영의 칭찬", "ENG":"" }, class:"마술사", type:"-", rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["미영의 도움"],
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"<b>조건:</b> 음란이 4 이상이라면,", "ENG":"" }},
			{trigger:"used", cond:true, type:"line", value:"미영-4"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"MA-UL-PS-001-1-5":{
		parents:"MA-UL-PS-001-1-1",
		name:{ "KOR":"미영의 격려", "ENG":"" }, class:"마술사", type:"-", rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["미영의 도움"],
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"<b>조건:</b> <b>흥분</b>이 3 이상이라면,", "ENG":"" }},
			{trigger:"used", cond:true, type:"line", value:"미영-5"},
			{trigger:"used", cond:true, type:"get", target:"self", value:"randomCard(tags, 즉발 마술)", repeat:2},
		]
	},
	"MA-UL-PS-001-1-6":{
		parents:"MA-UL-PS-001-1-1",
		name:{ "KOR":"미영의 응원", "ENG":"" }, class:"마술사", type:"-", rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["미영의 도움"],
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"<b>조건:</b> 덱에 마술 카드가 2장 이상 있다면,", "ENG":"" }},
			{trigger:"used", cond:true, type:"line", value:"미영-6"},
			{trigger:"used", cond:true, type:"get", target:"self", value:"자기덱.selectCards(tags, 마술, 1)"},
		]
	},
	"MA-UL-PS-001-1-7":{
		parents:"MA-UL-PS-001-1-1",
		name:{ "KOR":"미영의 조력", "ENG":"" }, class:"마술사", type:"-", rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["미영의 도움"],
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"<b>조건:</b> 발정이 5 이상이라면,", "ENG":"" }},
			{trigger:"used", cond:true, type:"line", value:"미영-7"},
			{trigger:"used", cond:true, type:"state", target:"op", byname:true, value:"MA-ST-002", repeat:2},
		]
	},
	"MA-UL-PS-001-1-8":{
		parents:"MA-UL-PS-001-1-1",
		name:{ "KOR":"미영의 시중", "ENG":"" }, class:"마술사", type:"-", rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["미영의 도움"],
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"<b>조건:</b> 덱에 보석 카드가 2장 이상 있다면,", "ENG":"" }},
			{trigger:"used", cond:true, type:"line", value:"미영-8"},
			{trigger:"used", cond:true, type:"transform", target:"self",
			info:{
				target:"자기덱.selectCards(tags, 보석, 1)",
				value:"MA-MC-003",
			}},
		]
	},
	"MA-UL-PS-001-1-9":{
		parents:"MA-UL-PS-001-1-10",
		name:{ "KOR":"미영의 정신불안", "ENG":"" }, class:"마술사", type:"-", rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"조건이 충족되지 않아 도움이 되지 못했다.", "ENG":"" }},
			{trigger:"used", cond:true, type:"line", value:"미영-9"},
		]
	},
	"MA-UL-PS-001-1-10":{
		name:{ "KOR":"미영의 집착", "ENG":"" }, class:"마술사", type:"-", rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["미영의 도움"],
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"<b>조건:</b> 4종류의 도움을 받았다면,", "ENG":"" }},
			{trigger:"used", cond:true, type:"line", value:"미영-10"},
			{trigger:"used", cond:true, type:"orgasm", target:"op"},
		]
	},


	"HE-IN-000":{
		name:{ "KOR":"비어있음", "ENG":"" }, class:"치유사", type:"-", rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"-", "ENG":"" }},
		]
	},
	
	"HE-IN-001":{
		name:{ "KOR":"생명의 정수", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:5, owner:1,
		cond:false,
		tags:["정수", "기본정수"],
		effect:[
			{trigger:"used", cond:true, type:"excite", target:"self", op:"add", value:-4}
		]
	},
	"HE-IN-002":{
		name:{ "KOR":"가시의 정수", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:5, owner:1,
		cond:false,
		tags:["정수", "기본정수"],
		effect:[
			{trigger:"used", cond:true, type:"attack", target:"op"}
		]
	},
	"HE-IN-003":{
		name:{ "KOR":"그림자의 정수", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:5, owner:1,
		cond:false,
		tags:["정수", "기본정수"],
		effect:[
			{trigger:"used", cond:true, type:"changeCorrupt", op:"add", value:2}
		]
	},
	"HE-IN-004":{
		name:{ "KOR":"각성의 정수", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:5, owner:1,
		cond:false,
		tags:["정수", "기본정수"],
		effect:[
			{trigger:"used", cond:true, type:"lewd", op:"add", value:2}
		]
	},
	"HE-IN-005":{
		name:{ "KOR":"평온의 정수", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:5, owner:1,
		cond:false,
		tags:["정수", "기본정수"],
		effect:[
			{trigger:"used", cond:true, type:"state", target:"self", value:"HE-IN-005-1"}
		]
	},
	"HE-IN-005-1":{
		parents:"HE-IN-005",
		name:{ "KOR":"평온", "ENG":"" }, class:"치유사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:2,
		effect:[
			{trigger:"always", cond:true, type:"estrus", op:"add", value:-3}
		]
	},
	"HE-IN-005-2":{
		parents:"HE-IN-005",
		name:{ "KOR":"깊은 평온", "ENG":"" }, class:"치유사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:2,
		effect:[
			{trigger:"always", cond:true, type:"estrus", op:"add", value:-6}
		]
	},
	"HE-IN-006":{
		name:{ "KOR":"메아리의 정수", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:5, owner:1,
		cond:false,
		tags:["정수", "기본정수"],
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"효과가 두 번 발동한다.", "ENG":"" }}
		]
	},
	"HE-IN-007":{
		name:{ "KOR":"부동의 정수", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:5, owner:1,
		cond:false,
		tags:["정수", "기본정수"],
		effect:[
			{trigger:"used", cond:true, type:"exciteL", target:"self", op:"add", value:2}
		]
	},
	"HE-IN-008":{
		name:{ "KOR":"신속의 정수", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:5, owner:1,
		cond:false,
		tags:["정수", "기본정수"],
		effect:[
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1}
		]
	},
	"HE-IN-009":{
		name:{ "KOR":"흡혈의 정수", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:5, owner:1,
		cond:false,
		tags:["정수", "기본정수"],
		effect:[
			{trigger:"used", cond:true, type:"state", target:"self", value:"HE-IN-009-1"}
		]
	},
	"HE-IN-009-1":{
		name:{ "KOR":"생명력 흡수", "ENG":"" }, class:"치유사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:2,
		effect:[
			{trigger:"always", cond:true, type:"absorption", target:"self"}
		]
	},

	"HE-NM-CO-001":{
		name:{ "KOR":"결합물", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["결합물"],
		effect:[
		]
	},

	"HE-NM-AT-001":{
		name:{ "KOR":"신성한 불꽃", "ENG":"" }, class:"치유사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true, meet:{v1:"자신.기록.최근.이벤트.흥분.감소", op:">", v2:0},
		tags:["덱빌딩", "race:엘도리아인", "group:회복", "act:애무"],
		flavorText:{ "KOR":"성스러운 힘은 회복과 보호에 주로 사용되지만, 사악한 적을 태우는 데도 사용될 수 있다.<br>일렁이는 이 하얀 빛줄기는 물리적인 상처를 남기는 것이 아닌 생명을 지지는 불꽃이다.", "ENG":"" },
		hypnoText:{ "KOR":"발을 사용하여 자지를 짓밟듯 주물러 애무하는 기술이다.<br>다소 굴욕적인 쾌감을 겪은 상대는 내면에 새로운 욕망이 타오르는 것을 느끼게 된다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:{v1:"자신.기록.최근.이벤트.흥분.감소", op:">", v2:0}, type:"exciteL", target:"self", op:"add", value:2},
		]
	},
	"HE-NM-AT-002":{
		name:{ "KOR":"영혼의 채찍", "ENG":"" }, class:"치유사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:실바니", "group:회복", "act:펠라치오"],
		flavorText:{ "KOR":"기본적으로 자연치유술은 자신의 넘쳐나는 생명력을 상대에게 나눠주는 효과이다.<br>이게 가능하다는 것은 반대로 빼앗을 수도 있다는 뜻이다.", "ENG":"" },
		hypnoText:{ "KOR":"혀를 능숙하게 휘둘러 자지를 핥는 기술이다.<br>혀놀림에서 정액을 불알이 텅텅 빌 때까지 빨아 먹겠다는 의지를 보인다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"state", target:"self", value:"HE-NM-AT-002-1"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"HE-NM-AT-002-1":{
		parents:"HE-NM-AT-002",
		name:{ "KOR":"생명력 흡수", "ENG":"" }, class:"치유사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:2,
		effect:[
			{trigger:"always", cond:true, type:"absorption", target:"self"},
		]
	},
	"HE-NM-AT-003":{
		name:{ "KOR":"생명 결속", "ENG":"" }, class:"치유사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:하프만", "group:회복", "act:삽입"],
		flavorText:{ "KOR":"서로의 생명력을 묶어 고정하는 비술.<br>위급한 환자의 생명력이 흩어지지 않게 막으며, 과하게 생명력이 넘치는 적을 억제할 수 있다.", "ENG":"" },
		hypnoText:{ "KOR":"상대의 자지와 자신의 보지를 결합하여 붙잡는 기술이다.<br>서로 하나가 됨을 느끼며, 상대가 자신의 안에 쌀 수 있도록 열심히 조여야 한다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"excite", target:"self", op:"add", value:-2},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:"자신.남은흥분"}
		]
	},
	"HE-NM-AT-004":{
		name:{ "KOR":"찬란한 오라", "ENG":"" }, class:"치유사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "결합", "race:엘도리아인", "group:결합", "group:정수", "act:애무"],
		flavorText:{ "KOR":"신성치유술은 위대한 존재를 신앙하며 그 대가로 내려받은 신성한 힘을 이용한다.<br>그 특성상 신앙심의 개념이 희박한 실바니들은 사용하기 어려운 기술이다.", "ENG":"" },
		hypnoText:{ "KOR":"가슴에 사정을 유도해 정액을 펴 바르는 기술이다.<br>끈적끈적한 정액을 뒤집어 쓴 모습이 당신을 더욱 음란하게 만들어준다.", "ENG":"" },
		effect:[
			{trigger:"choice", cond:true, range:{category:"mix", value:"all", count:2}, type:"combine", target:"self", value:"HE-NM-AT-004-1"},
			{trigger:"used", cond:true, type:"attack", target:"op"}
		]
	},
	"HE-NM-AT-004-1":{
		parents:"HE-NM-AT-004",
		name:{ "KOR":"찬란한 결합물", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["결합물"],
		effect:[
		]
	},

	"HE-NM-AT-005":{
		name:{ "KOR":"정화의 빛", "ENG":"" }, class:"치유사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:엘도리아인", "group:타락"],
		flavorText:{ "KOR":"여신 알레이아를 섬기는 레이아교는 올딘살레이아 대륙에서 가장 큰 종교이다.<br>신자들은 신실한 기도의 대가로 가호를 받아 강력한 신성 마술을 사용할 수 있다.", "ENG":"" },
		hypnoText:{ "KOR":"상대의 정액이나 오줌을 손으로 받아먹는 기술이다.<br>정액을 받지 못했다면 스스로의 음란함이 부족했음을 반성해야 한다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"corrupt", 
			info:{
				value:"M4",
				effect:[
					{trigger:"used", cond:true, type:"changeCorrupt", op:"add", value:2},
				]
			}},
			{trigger:"used", cond:true, type:"corrupt", 
			info:{
				value:5,
				effect:[
					{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:"타락"},
				]
			}},
		]
	},
	"HE-NM-AT-006":{
		name:{ "KOR":"자연 정수 추출", "ENG":"" }, class:"치유사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:트라이브", "group:정수", "act:펠라치오"],
		flavorText:{ "KOR":"자연치유술은 생명체가 가지고 있는 생명력이라는 개념을 직접적으로 다루는 기술이다.<br>주로 트라이브 주술사의 민간요법에 의해 발전한 분야라 체계적이지 못하지만, 그 효과는 알비온 의술협회에서도 인정해 연구되고 있다.", "ENG":"" },
		hypnoText:{ "KOR":"자지를 빨아서 그 안에 있는 정액을 추출하는 기술이다.<br>정액은 무척이나 귀중하고 가치있는 것이기 때문에 정성스럽게 빨아마셔야 한다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"randomCard(tags, 정수)", repeat:2},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"HE-NM-AT-007":{
		name:{ "KOR":"속박 해제", "ENG":"" }, class:"치유사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "결합", "race:엘도리아인", "group:결합"],
		flavorText:{ "KOR":"치유사는 상처를 치유하는 것 외에도 각종 상태 이상을 해소하는 역할을 맡는다.<br>중독, 마비, 실명, 수면 등... 셀 수 없이 많은 상태 이상에 대한 각각의 대처법을 익히는 것이 우수한 치유사의 기본 소양이다.", "ENG":"" },
		hypnoText:{ "KOR":"스스로를 묶어 구속플레이를 즐기는 기술이다.<br>당신같은 변태마조 암컷에게 딱 어울리는 꼴이다.", "ENG":"" },
		effect:[
			{trigger:"choice", cond:true, range:{category:"type", value:"패널티", count:"M3"}, type:"combine", target:"self", value:"HE-NM-AT-007-1"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"HE-NM-AT-007-1":{
		parents:"HE-NM-AT-007",
		name:{ "KOR":"노폐 결합물", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["결합물"],
		effect:[
		]
	},

	"HE-NM-SU-001":{
		name:{ "KOR":"치유의 파도", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:트라이브", "group:회복"],
		flavorText:{ "KOR":"퍼져나가는 치유의 물결이 광역 회복 효과를 선사한다.<br>그 안에 서 있으면 편안함과 따스함이 느껴진다.", "ENG":"" },
		hypnoText:{ "KOR":"상대와 껴안고 키스하며 몸을 뒤섞는 기술이다.<br>서로의 체온을 느끼며 농후한 시간을 보낸다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"excite", target:"self", op:"add", value:-4},
			{trigger:"used", cond:true, type:"state", target:"self", value:"HE-NM-SU-001-1"},
		]
	},
	"HE-NM-SU-001-1":{
		parents:"HE-NM-SU-001",
		name:{ "KOR":"치유의 잔물결", "ENG":"" }, class:"치유사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		expiration:"active", duration:1,
		effect:[
			{trigger:"turnStart", cond:true, type:"excite", target:"self", op:"add", value:-4},
		]
	},
	"HE-NM-SU-002":{
		name:{ "KOR":"활력 부여", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:하프만", "group:회복", "group:타락"],
		flavorText:{ "KOR":"생명력에는 생사와 직결되는 부분 외에도 힘을 낼 수 있게 만들어주는 활력이 포함되어 있다.<br>부상 입은 아군이 없더라도 치유사는 활력을 부여하여 아군의 힘을 강화하는 역할을 맡을 수 있다.", "ENG":"" },
		hypnoText:{ "KOR":"상대를 위해 음란한 서비스를 제공하는 기술이다.<br>평소 하지 않던 이색적인 유혹일수록 효과가 크다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"excite", target:"self", op:"add", value:-5},
			{trigger:"used", cond:true, type:"corrupt", 
			info:{
				value:3,
				effect:[
					{trigger:"used", cond:true, type:"lewd", op:"add", value:2},
				]
			}},
		]
	},

	"HE-NM-SU-003":{
		name:{ "KOR":"신속 처방", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "결합", "race:엘도리아인", "group:결합", "group:정수"],
		flavorText:{ "KOR":"의술사와 약사는 본래 결합된 직업이었으나, 알비온 의술협회에서 각 분야의 전문성의 필요를 주장하며 분리되기 시작했다.<br>의술사가 진단과 시술을 맡는다면, 약사는 그 진단에 맞춰 정확한 효과의 약을 제조해 처방한다.", "ENG":"" },
		hypnoText:{ "KOR":"자신의 보지를 용기로 사용하여 정액과 체액을 혼합하는 물약 제조법.<br>약사라면 누구나 보지를 쓰는 법을 알아야 한다.", "ENG":"" },
		effect:[
			{trigger:"choice", cond:true, range:{category:"tags", value:"정수", count:2}, type:"combine", target:"self", value:"HE-NM-SU-003-1"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"HE-NM-SU-003-1":{
		parents:"HE-NM-SU-003",
		name:{ "KOR":"정수 결합물", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["결합물"],
		effect:[
		]
	},
	"HE-NM-SU-004":{
		name:{ "KOR":"무한의 오라", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "결합", "race:실바니", "group:결합", "group:정수"],
		flavorText:{ "KOR":"실바니아에서는 생명 그 자체의 순환을 믿으며, 별도의 신을 섬기지 않는다.<br>대신 고인의 영혼을 기리고 사후 신사에 모셔, 이들의 영혼이 자연의 일부로 돌아가기를 기원하는 풍습이 있다.", "ENG":"" },
		hypnoText:{ "KOR":"다 삼키지 못할 정도의 정액을 입 안에 머금는 기술이다.<br>흘러넘쳐 떨어지는 정액들이 당신을 더욱 야하게 만들어준다.", "ENG":"" },
		effect:[
			{trigger:"choice", cond:true, range:{category:"mix", value:"all", count:2}, type:"get", target:"self"},
			{trigger:"used", cond:true, type:"combine", target:"self", info:{target:"derived"}, value:"HE-NM-SU-004-1"},
		]
	},
	"HE-NM-SU-004-1":{
		parents:"HE-NM-SU-004",
		name:{ "KOR":"무한의 결합물", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["결합물"],
		effect:[
		]
	},
	"HE-NM-SU-005":{
		name:{ "KOR":"포션 연금술", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:하프만", "group:타락", "group:결합", "group:정수"],
		flavorText:{ "KOR":"연금술은 다양한 학문에 기반하여 마력의 효과를 물질적 조합을 통해 재현하는 기술이다.<br>그 분야 중 하나는 약재를 조합해 효능을 지닌 물약을 만드는 것이다.", "ENG":"" },
		hypnoText:{ "KOR":"정액과 타액을 잔뜩 섞어 마시는 기술이다.<br>당신은 이 냄새나고 끈적거리는 맛을 매우 좋아한다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"randomCard(tags, 정수)", repeat:3},
			{trigger:"used", cond:true, type:"corrupt", 
			info:{
				value:5,
				effect:[
					{trigger:"used", cond:true, type:"combine", target:"self", info:{target:"derived"}, value:"HE-NM-SU-005-1"},
				]
			}},
		]
	},
	"HE-NM-SU-005-1":{
		parents:"HE-NM-SU-005",
		name:{ "KOR":"포션 결합물", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["결합물"],
		effect:[
		]
	},
	"HE-NM-SU-006":{
		name:{ "KOR":"천상의 가호", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:트라이브", "group:회복"],
		flavorText:{ "KOR":"기도를 통해 신성한 힘을 둘러 보호 받는다.<br>체력과 활력, 그리고 어떤 적이라도 상대할 수 있을 것 같은 자신감을 얻는다.", "ENG":"" },
		hypnoText:{ "KOR":"자신을 범해주는 상대에게 인사하는 기술이다.<br>복종의 자세를 취하며 사용해준 것에 감사를 표해야 한다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"state", target:"self", value:"HE-NM-SU-006-1"},
			{trigger:"used", cond:true, type:"state", target:"self", value:"HE-NM-SU-006-2"},
		]
	},
	"HE-NM-SU-006-1":{
		parents:"HE-NM-SU-006",
		name:{ "KOR":"수복", "ENG":"" }, class:"치유사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		expiration:"active", duration:1,
		effect:[
			{trigger:"turnEnd", cond:true, type:"excite", target:"self", op:"add", value:-5},
		]
	},
	"HE-NM-SU-006-2":{
		parents:"HE-NM-SU-006",
		name:{ "KOR":"가호 보호막", "ENG":"" }, class:"치유사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"always", cond:true, type:"exciteL", target:"self", op:"add", value:5},
		]
	},

	"HE-NM-PS-001":{
		name:{ "KOR":"외상 치료", "ENG":"" }, class:"치유사", type:"체위", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:엘도리아인", "group:회복", "group:타락", "미개선"], related:["HE-NM-PS-001-3","HE-NM-PS-001-2","HE-NM-PS-001-4"],
		flavorText:{ "KOR":"출혈을 멈추고 손상된 조직을 재생시킨다.<br>레이아교의 신성치유술의 특기 분야로, 특히 성녀의 기도는 죽음에 임박한 심각한 외상도 순식간에 회복시키는 기적으로 유명하다.", "ENG":"" },
		hypnoText:{ "KOR":"신체적 외상을 가진 비상환자 발생!<br>당신의 혀로 정성껏 핥아서 치료해야 한다.<br>마지막은... 자지까지♡", "ENG":"" },
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"치료"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"turnEnd", cond:true, type:"get", target:"self", value:"HE-NM-PS-001-3"},
			{trigger:"turnEnd", cond:{v1:"타락", op:">=", v2:4}, condOmit:true, type:"corrupt",
			info:{
				value:4,
				effect:[
					{trigger:"none", cond:true, type:"text", value:{ KOR:"개선된다.", ENG:"" }},
					{trigger:"used", notext:true, cond:true, type:"transform", target:"self",
					info:{
						target:"self",
						value:"HE-NM-PS-001-2",
					}},
				]
			}},
		]
	},
	"HE-NM-PS-001-2":{
		name:{ "KOR":"개선된 외상 치료", "ENG":"" }, class:"치유사", type:"체위", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["개선됨"], related:["HE-NM-PS-001-4"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"개선치료"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"turnEnd", cond:true, type:"get", target:"self", value:"HE-NM-PS-001-4"},
		]
	},
	"HE-NM-PS-001-3":{
		name:{ "KOR":"순간 치유", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		effect:[
			{trigger:"used", cond:true, type:"excite", target:"self", op:"add", value:-2},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1}
		]
	},
	"HE-NM-PS-001-4":{
		name:{ "KOR":"개선된 순간 치유", "ENG":"" }, class:"치유사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		effect:[
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:2},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1}
		]
	},

	"HE-NM-PS-002":{
		name:{ "KOR":"골절 치료", "ENG":"" }, class:"치유사", type:"체위", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:실바니", "group:회복", "group:타락", "group:결합", "미개선"], related:["HE-NM-PS-002-2"],
		flavorText:{ "KOR":"부러진 뼈를 맞추고 골조직의 재생을 돕는다.<br>강제적인 재생 과정에서 뼈가 엇붙으면 돌이키기 힘든 영구적 장애를 초래하기 쉽기 때문에, 알비온 의술협회에선 뼈를 똑바로 맞춘 뒤 자연적인 치유를 기다리는 법을 권장한다.", "ENG":"" },
		hypnoText:{ "KOR":"자지가 곧게 서지 못하는 환자 발생!<br>보지로 천천히 문질러 발기를 돕도록 하자.<br>충분히 발기했다면 삽입으로 이어지는 것도...♡", "ENG":"" },
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"치료"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"combineCard", cond:true, type:"exciteL", target:"self", op:"add", value:1},
			{trigger:"turnEnd", cond:{v1:"타락", op:">=", v2:5}, condOmit:true, type:"corrupt",
			info:{
				value:5,
				effect:[
					{trigger:"none", cond:true, type:"text", value:{ KOR:"개선된다.", ENG:"" }},
					{trigger:"used", notext:true, cond:true, type:"transform", target:"self",
					info:{
						target:"self",
						value:"HE-NM-PS-002-2",
					}},
				]
			}},
		]
	},
	"HE-NM-PS-002-2":{
		name:{ "KOR":"개선된 골절 치료", "ENG":"" }, class:"치유사", type:"체위", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["개선됨"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"개선치료"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"always", cond:true, type:"lewd", op:"add", value:2, repeat:"자신.기록.전체.사용.count(tags, 결합물)"}
		]
	},


	"HE-EX-AT-001":{
		name:{ "KOR":"신성한 폭발", "ENG":"" }, class:"치유사", type:"공격", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "race:엘도리아인", "group:타락", "act:삽입"],
		flavorText:{ "KOR":"성스러운 힘을 한 점으로 모아 사방으로 방출시킨다.<br>사악한 적들은 죄를 씻는 폭발 속에서 흔적도 없이 사라질 것이다.", "ENG":"" },
		hypnoText:{ "KOR":"펑퍼짐한 엉덩이를 내리찍어 뒤에서 박아오는 자지를 품는다.<br>상대에게 멈추지 않는 쾌락의 폭발을 안겨준다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"corrupt", 
			info:{
				value:4,
				effect:[
					{trigger:"used", cond:true, type:"attack", target:"op"},
				]
			}},
			{trigger:"used", cond:true, type:"corrupt", 
			info:{
				value:8,
				effect:[
					{trigger:"used", cond:true, type:"attack", target:"op"},
				]
			}},
		]
	},
	"HE-EX-AT-002":{
		name:{ "KOR":"심장 격동", "ENG":"" }, class:"치유사", type:"공격", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "race:트라이브", "act:삽입"],
		flavorText:{ "KOR":"자신에게 활력을 부여해 힘을 모은다.<br>넘쳐나는 생명력이 파괴력을 증가시켜준다.", "ENG":"" },
		hypnoText:{ "KOR":"서로의 성기를 결합한 채 허리를 흔드는 기술이다.<br>결합부에 자지가 들락날락하는 것이 반복될수록 점점 쾌락이 커져간다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"attack", target:"op", repeat:"specialV10"},
			{trigger:"used", cond:true, type:"specialA19", repeat:2},
		]
	},
	"HE-EX-AT-003":{
		name:{ "KOR":"인공 정수 추출", "ENG":"" }, class:"치유사", type:"공격", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "race:실바니", "group:정수", "act:펠라치오"],
		flavorText:{ "KOR":"자연치유술의 불안정함과 신성치유술의 떨어지는 범용성을 극복하기 위해, 체계적이고 논리적인 지식에 기반한 생명공학 치유법 '의술'이 탄생했다.<br>인공치유술이라고도 불리는 이 치유법은 치유 속도는 느리더라도 후유증 없는 안전한 회복을 제공한다.", "ENG":"" },
		hypnoText:{ "KOR":"목 깊숙한 곳까지 자지를 찔러넣어 빠는 기술이다.<br>상대가 사정하면 그대로 삼켜야 하며, 절대 토해선 안된다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"자기덱.selectCards(tags, 정수, 2)"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"HE-EX-AT-004":{
		name:{ "KOR":"영혼의 속삭임", "ENG":"" }, class:"치유사", type:"공격", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "race:하프만", "group:결합"],
		flavorText:{ "KOR":"치유사는 생명을 살리는 직업인 만큼 역으로 죽음과 가장 가까운 직업이다.<br>사령술과의 경계에 걸쳐 약간의 기술을 공유하고 있지만, 타락하지만 않는다면 치유를 위해 사용하기 나름이다.", "ENG":"" },
		hypnoText:{ "KOR":"상대의 자지와 당신의 보지 간에 이루어지는 대화.<br>결합이 견고해질수록 관계도 깊어진다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"attack", target:"op", repeat:"자신.기록.전체.결합.length"},
			{trigger:"none", cond:true, type:"showValue", value:"자신.기록.전체.결합.length"},
		]
	},

	"HE-EX-SU-001":{
		name:{ "KOR":"회생의 기도", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "race:엘도리아인", "group:회복"],
		flavorText:{ "KOR":"라이트위버 일족에게는 줄곧 강력한 신성력을 지닌 여성이 태어난다.<br>그녀들의 기도는 일반적인 신도들의 배에 해당하는 효과가 있기에, 레이아교는 이들을 모셔 성녀로 삼고 있다.", "ENG":"" },
		hypnoText:{ "KOR":"상대에게 자위하는 모습을 보이는 기술이다.<br>절정의 쾌락을 높여 만족감 높은 섹스를 즐길 수 있게 만든다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"excite", target:"self", op:"add", value:-2},
			{trigger:"used", cond:true, type:"state", target:"self", value:"HE-EX-SU-001-1"}
		]
	},
	"HE-EX-SU-001-1":{
		parents:"HE-EX-SU-001",
		name:{ "KOR":"회생", "ENG":"" }, class:"치유사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true, meet:{v1:"자신.기록.최근.이벤트.절정", op:">", v2:0},
		tags:[],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"turnEnd", cond:{v1:"자신.기록.최근.이벤트.절정", op:">", v2:0}, type:"exciteL", target:"self", op:"multiply", value:2},
		]
	},
	"HE-EX-SU-002":{
		name:{ "KOR":"환영의 오라", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "결합", "race:하프만", "group:타락", "group:결합", "group:정수"],
		flavorText:{ "KOR":"치유사가 사용한다는 힘이 치유의 힘을 가지고 있더라도 항상 선한 것은 아니다.<br>하프만들이 주로 믿는 사교 '선택하는 교단'은, 악신 모르베인을 섬긴다는 특성 상 기도를 통해 사악한 마력을 얻곤 한다.", "ENG":"" },
		hypnoText:{ "KOR":"자신의 보지에 정액을 가득 채우는 기술이다.<br>힘을 주면 분출되는 정액들이 당신을 무척 천박하게 만들어 준다.", "ENG":"" },
		effect:[
			{trigger:"choice", cond:true, range:{category:"mix", value:"all", count:2}, type:"combine", target:"self", value:"HE-EX-SU-002-1"},
			{trigger:"used", cond:true, type:"corrupt", 
			info:{
				value:6,
				effect:[
					{trigger:"used", cond:true, type:"use", target:"self", value:"derived"},
				]
			}},
		]
	},
	"HE-EX-SU-002-1":{
		parents:"HE-EX-SU-002",
		name:{ "KOR":"환영의 결합물", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["결합물"],
		effect:[
		]
	},
	"HE-EX-SU-003":{
		name:{ "KOR":"종합 처방", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "결합", "race:실바니", "group:회복", "group:결합", "group:정수"],
		flavorText:{ "KOR":"복수의 약재를 조합하여 필요한 물약을 제조한다.<br>비슷해보이는 질환이더라도 정확한 증상에 따라 다른 약재를 써야한다.", "ENG":"" },
		hypnoText:{ "KOR":"보지를 벌려 정액과 체액이 섞여 흘러나오는 것을 보여주는 기술이다.<br>두 사람의 사랑의 결합물을 상대에게 정성껏 먹여주도록 하자.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"excite", target:"self", op:"add", value:-3},
			{trigger:"choice", cond:true, range:{category:"tags", value:"정수", count:3}, type:"combine", target:"self", value:"HE-EX-SU-003-1"}
		]
	},
	"HE-EX-SU-003-1":{
		parents:"HE-EX-SU-003",
		name:{ "KOR":"복합 정수 결합물", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["결합물"],
		effect:[
		]
	},
	"HE-EX-SU-004":{
		name:{ "KOR":"응급처치", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true, meet:{v1:"자신.기록.최근.이벤트.흥분.감소", op:">", v2:0},
		tags:["덱빌딩", "race:실바니", "group:회복"],
		flavorText:{ "KOR":"치명적인 부상을 입은 환자가 본격적인 치료를 받기 전까지 무사하도록 신속한 사전 조치를 취한다.<br>적절한 시간 내에 응급처치가 있었느냐에 따라 생존률이 크게 바뀐다.", "ENG":"" },
		hypnoText:{ "KOR":"절정 관리를 통해 갈 것 같아도 가지 못하는 상태를 유지하는 기술이다.<br>몸을 애타게 만들어 절정 시의 쾌락을 극대화한다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"state", target:"self", value:"HE-EX-SU-004-1"},
			{trigger:"used", cond:{v1:"자신.기록.최근.이벤트.흥분.감소", op:">", v2:0}, type:"state", target:"self", value:"HE-EX-SU-004-2"},
		]
	},
	"HE-EX-SU-004-1":{
		parents:"HE-EX-SU-004",
		name:{ "KOR":"응급 치유", "ENG":"" }, class:"치유사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		expiration:"active", duration:1,
		effect:[
			{trigger:"turnEnd", cond:true, type:"exciteL", target:"self", op:"add", value:2},
		]
	},
	"HE-EX-SU-004-2":{
		parents:"HE-EX-SU-004",
		name:{ "KOR":"처치 성공", "ENG":"" }, class:"치유사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"always", cond:true, type:"orgasmBan", target:"self"},
		]
	},

	"HE-EX-PS-001":{
		name:{ "KOR":"중독 치료", "ENG":"" }, class:"치유사", type:"체위", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "race:엘도리아인", "group:타락", "group:결합", "group:정수", "미개선"], related:["HE-EX-PS-001-2"],
		flavorText:{ "KOR":"독에 의해 오염된 혈액을 정화하고, 독소가 체외로 배출되도록 돕는 치유법이다.<br>독의 종류와 체내 흡수 경로를 분석하여 시간 내에 해독제를 만들어 투여해야한다.", "ENG":"" },
		hypnoText:{ "KOR":"정액이 고여 독소가 방출되지 못한 환자 발견!<br>신속하게 입으로 빨아 해독시켜주도록 하자.<br>입이 부족하다면... 보지까지 써서♡", "ENG":"" },
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"치료"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"turnEnd", cond:true, type:"get", target:"self", value:"randomCard(tags, 정수)"},
			{trigger:"turnEnd", cond:{v1:"타락", op:">=", v2:4}, condOmit:true, type:"corrupt",
			info:{
				value:6,
				effect:[
					{trigger:"none", cond:true, type:"text", value:{ KOR:"개선된다.", ENG:"" }},
					{trigger:"used", notext:true, cond:true, type:"transform", target:"self",
					info:{
						target:"self",
						value:"HE-EX-PS-001-2",
					}},
				]
			}},
		]
	},
	"HE-EX-PS-001-2":{
		name:{ "KOR":"개선된 중독 치료", "ENG":"" }, class:"치유사", type:"체위", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["개선됨"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"개선치료"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"turnStart", cond:{v1:"자기덱.count(tags, 정수)", op:">=", v2:2}, condOmit:true, type:"combine", target:"self",  info:{target:"자기덱.selectCards(tags, 정수, 2)"}, value:"HE-NM-SU-003-1"},
		]
	},

	"HE-EX-PS-002":{
		name:{ "KOR":"감염 치료", "ENG":"" }, class:"치유사", type:"체위", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "race:트라이브", "group:타락", "미개선"], related:["HE-EX-PS-002-2"],
		flavorText:{ "KOR":"감염된 부위의 균을 제거하고 염증을 가라앉히는 치유법이다.<br>자연치유술에 기반한 민간요법으로는, 허브와 함께 문제 부위에 높은 밀도의 생명력을 주입하는 것이 효과가 좋다.", "ENG":"" },
		hypnoText:{ "KOR":"촉수 생물을 이용해 독소를 제거하는 치유법을 시행한다.<br>이것은 의료 행위일 뿐, 절대로 음행이 아니다.<br>촉수 섹스... 너무 좋아♡", "ENG":"" },
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"치료"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"turnStart", cond:true, type:"changeCorrupt", op:"add", value:1},
			{trigger:"turnEnd", cond:{v1:"타락", op:">=", v2:8}, condOmit:true, type:"corrupt",
			info:{
				value:8,
				effect:[
					{trigger:"none", cond:true, type:"text", value:{ KOR:"개선된다.", ENG:"" }},
					{trigger:"used", notext:true, cond:true, type:"transform", target:"self",
					info:{
						target:"self",
						value:"HE-EX-PS-002-2",
					}},
				]
			}},
		]
	},
	"HE-EX-PS-002-2":{
		name:{ "KOR":"개선된 감염 치료", "ENG":"" }, class:"치유사", type:"체위", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["개선됨"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"개선치료"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"always", cond:true, type:"lewd", op:"set", value:"타락", division:2},
		]
	},


	"HE-UL-AT-001":{
		name:{ "KOR":"생명력 폭주", "ENG":"" }, class:"치유사", type:"공격", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "race:트라이브", "group:회복", "act:펠라치오"],
		flavorText:{ "KOR":"인간의 몸이 수용할 수 있는 한계가 있기 때문에, 생명력은 결코 많을수록 좋은 것이 아니다.<br>자연치유술을 사용하는 치유사는 이를 이용하여 상대에게 생명력을 부여하는 것으로 오히려 공격을 할 수 있다.<br>넘쳐나는 생명력은 해소되지 못하고 신체를 폭주시켜, 결국 해당 부위를 괴사시킨다.", "ENG":"" },
		hypnoText:{ "KOR":"목구멍을 오나홀로 사용당하며 자지를 처박히는 기술이다.<br>숨이 막혀 기절할 것 같아도 상대가 만족스러운 사정을 할 때까지 멈추는 것이 허락되지 않는다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"생명력폭주"},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:1, repeat:"자신.기록.전체.이벤트.흥분.감소"},
			{trigger:"none", cond:true, type:"showValue", value:"자신.기록.전체.이벤트.흥분.감소"},
		]
	},

	"HE-UL-AT-002":{
		name:{ "KOR":"대규모 정화", "ENG":"" }, class:"치유사", type:"공격", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "race:트라이브", "group:타락", "act:애무"],
		flavorText:{ "KOR":"어느 날 대삼림의 가운데에 신성한 존재가 강림한 뒤, 그를 숲의 현신이라 부르며 숭배하는 이들이 모인 것. 그것이 황금줄기 신앙의 시작이다.<br>자신을 레아라고 불러달라 했던 그 존재가 다녀간 자리에선 지금도 신성력이 가득하여 황금색 나무들이 자라난다.<br>황금줄기 신앙의 수행자들은 그 나무의 가지로 만든 지팡이를 들고, 자신들이 믿는 존재의 뜻을 따라서 세계의 사악한 존재들을 정화하기 위해 떠돌고 있다.", "ENG":"" },
		hypnoText:{ "KOR":"여러 명의 자지에게 둘러싸여 공공육변기가 되는 기술이다.<br>변기로서 의무를 다해 손을 바삐 움직여 자신의 몸에 사정하게 만들어야 한다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"대규모정화"},
			{trigger:"used", cond:true, type:"corrupt",
			info:{
				value:7,
				effect:[
					{trigger:"used", cond:true, type:"orgasm", target:"op"}
				]
			}},
			{trigger:"used", cond:true, type:"corrupt",
			info:{
				value:10,
				effect:[
					{trigger:"used", cond:true, adverb:"추가로", type:"orgasm", target:"op"}
				]
			}},
		]
	},

	"HE-UL-SU-001":{
		name:{ "KOR":"만물의 오라", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "결합", "race:하프만", "group:결합"],
		flavorText:{ "KOR":"연금술은 본래 하프만 빈민지구에서 생겨난 유사 학문이었다.<br>마술적 재능과 여건이 없는 이들이 포기하지 않고 이와 비슷한 효과를 낼 방법을 찾는데서 출발한 이 학문은, 약학, 공학, 생물학, 금속학 등 다양한 분야에 지대한 영향을 끼쳤다.<br>지금도 무구한 가능성을 지니고 있으며, 재능이 없는 마술사가 연금술로 도망친다는 이야기는 옛말이 되었다.", "ENG":"" },
		hypnoText:{ "KOR":"모두의 정액을 받는 것이 역할인 정액 탱크가 되는 기술이다.<br>온 몸에 뿌려진 정액이 당신을 성욕 처리 용도의 오나홀 육변기 취급받게 만들어준다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"만물의오라"},
			{trigger:"choice", cond:true, range:{category:"all", value:"사용가능", count:3}, type:"combine", target:"self", value:"HE-UL-SU-001-1"},
		]
	},
	"HE-UL-SU-001-1":{
		parents:"HE-UL-SU-001",
		name:{ "KOR":"만물의 결합물", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["결합물"],
		effect:[
		]
	},

	"HE-UL-SU-002":{
		name:{ "KOR":"불로불사의 약", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "race:하프만", "group:정수"], related:["HE-IN-999"], keywords:["타락n"],
		flavorText:{ "KOR":"라피스 라줄리 아카데미 연금술 지부에서는 연금술사들이 목표로 할 궁극의 과제로 5대 난제를 제시했다.<br>무한 동력, 시간 역행, 지적생명 창조, 불로불사, 황금 생성. 어느 것이든 실현되었을 경우 세상의 이치를 바꿀 수 있는 것들이다.<br>그 중 많이 도전하는 것은 불로불사로, 수명의 한계를 초월할 수 있다면 나머지 연구도 얼마든지 도전할 수 있을 것이라는 욕심에 과도한 실험으로 스스로의 몸을 망가뜨리는 계기가 되고 만다.", "ENG":"" },
		hypnoText:{ "KOR":"진정한 오나홀이 되기 위해 위험한 약을 마시는 기술이다.<br>쾌락에 뇌가 타버려서 더 이상 인간으로서 살아갈 수 없게 되겠지만, 적어도 당신은 행복할 것이다.", "ENG":"" },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"불로불사의약-1"},
			{trigger:"used", cond:true, type:"lewd", op:"add", value:1},
			{trigger:"used", cond:true, type:"get", target:"self", value:"HE-IN-999"},
		]
	},
	"HE-IN-999":{
		name:{ "KOR":"영원의 정수", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:false,
		tags:["정수"],
		effect:[
			{trigger:"used", cond:true, type:"changeCond", target:"self", value:"corrupted"},
			{trigger:"used", cond:true, type:"line", value:"불로불사의약-2"},
			{trigger:"used", cond:true, type:"attack", target:"op", keepLine:true},
			{trigger:"used", cond:true, adverb:"그리고", type:"get", target:"self", value:"self"}
		]
	},

	"HE-UL-PS-001":{
		name:{ "KOR":"정신 치료", "ENG":"" }, class:"치유사", type:"체위", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "race:실바니", "group:회복", "group:타락", "미개선"], related:["HE-UL-PS-001-2"],
		flavorText:{ "KOR":"알비온 의술협회는 전직 군의관인 실바니 의술사 히에 지에 의해 설립된 범국가 의료기관이다.<br>생명을 살리는 법을 최우선으로 삼는 그녀의 이념에 따라서 체계적인 치유법을 연구해 발표하고, 누구나 이를 익힐 수 있도록 제공하고 있다.<br>현재는 육체적인 부상 외에도 정신적인 질환에 대한 개념까지 확립하여 의료계의 지평을 넓히고 있다.", "ENG":"" },
		hypnoText:{ "KOR":"당신의 마음 속에는 어째선지 아직도 섹스에 대한 거부감이 남아있다.<br>암컷으로써 이러한 정신적 결함은 서둘러 치료해야만 한다!", "ENG":"" },
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"정신치료-1"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"always", cond:true, type:"absorption", target:"self"},
			{trigger:"turnEnd", cond:{v1:"타락", op:">=", v2:5}, condOmit:true, type:"corrupt",
			info:{
				value:5,
				effect:[
					{trigger:"used", cond:true, type:"line", value:"정신치료-2"},
					{trigger:"none", cond:true, type:"text", value:{ KOR:"개선된다.", ENG:"" }},
					{trigger:"used", notext:true, cond:true, type:"transform", target:"self",
					info:{
						target:"self",
						value:"HE-UL-PS-001-2",
					}},
				]
			}},
		]
	},
	"HE-UL-PS-001-2":{
		name:{ "KOR":"개선된 정신 치료", "ENG":"" }, class:"치유사", type:"체위", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["개선됨"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"정신치료-2"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"always", cond:true, type:"specialA10"}
		]
	},

//#######################################################################################################################################################################################

	"BN-EL-001":{
		name:{ "KOR":"만능 카드", "ENG":"" }, class:"중립", type:"만능", isDeck:true, rarity:"없음", race:"엘도리아인", cost:10, owner:1, nochange:true,
		cond:true,
		tags:["보너스", "불가침"],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{"KOR":"카드 하나를 골라 그것으로 교체합니다.", "ENG":""}},
		]
	},


	"BN-SY-001":{
		name:{ "KOR":"공학: 메카릴론", "ENG":"Mekarylon" }, class:"중립", type:"비전", isDeck:true, rarity:"없음", race:"실바니", cost:15, owner:1,
		cond:true,
		tags:["보너스", "불가침", "비전"],
		effect:[
			{trigger:"none", cond:false, type:"text", value:{"KOR":"선택한 직업의 자원을 얻는다.", "ENG":""}},
			{trigger:"used", notext:true, cond:{v1:"커스텀.직업", op:"==", v2:"전사"}, type:"changeLust", op:"add", value:5},
			{trigger:"none", cond:{v1:"커스텀.직업", op:"==", v2:"전사"}, type:"caption", value:{"KOR":"<b>욕망 +5</b>", "ENG":""}},
			{trigger:"used", notext:true, cond:{v1:"커스텀.직업", op:"==", v2:"암살자"}, type:"changeWetness", op:"add", value:5},
			{trigger:"none", cond:{v1:"커스텀.직업", op:"==", v2:"암살자"}, type:"caption", value:{"KOR":"<b>젖음 +5</b>", "ENG":""}},
			{trigger:"used", notext:true, cond:{v1:"커스텀.직업", op:"==", v2:"마술사"}, type:"changeSBlock", op:"add", value:4},
			{trigger:"none", cond:{v1:"커스텀.직업", op:"==", v2:"마술사"}, type:"caption", value:{"KOR":"<b>감각차단 +4</b>", "ENG":""}},
			{trigger:"used", notext:true, cond:{v1:"커스텀.직업", op:"==", v2:"치유사"}, type:"changeCorrupt", op:"add", value:2},
			{trigger:"none", cond:{v1:"커스텀.직업", op:"==", v2:"치유사"}, type:"caption", value:{"KOR":"<b>타락 +2</b>", "ENG":""}},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"BN-SY-002":{
		name:{ "KOR":"마술: 마나크론", "ENG":"Manachron" }, class:"중립", type:"비전", isDeck:true, rarity:"없음", race:"실바니", cost:15, owner:1,
		cond:true,
		tags:["보너스", "불가침", "비전"],
		effect:[
			{trigger:"used", cond:true, type:"useTimes", target:"self", value:1},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"BN-SY-003":{
		name:{ "KOR":"역사: 아르테론", "ENG":"Artheron" }, class:"중립", type:"비전", isDeck:true, rarity:"없음", race:"실바니", cost:15, owner:1,
		cond:true,
		tags:["보너스", "불가침", "비전"],
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"자신.기록.이전.사용.selectCards(all, null, all)"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"BN-SY-004":{
		name:{ "KOR":"점성: 셀레스트론", "ENG":"Celesthron" }, class:"중립", type:"비전", isDeck:true, rarity:"없음", race:"실바니", cost:15, owner:1,
		cond:true,
		tags:["보너스", "불가침", "비전"], related:["tag:초월"],
		effect:[
			{trigger:"used", cond:true, type:"state", target:"self", value:"BN-SY-004-1"}
		]
	},
	"BN-SY-004-1":{
		parents:"BN-SY-004",
		name:{ "KOR":"미래예지", "ENG":"" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", race:"실바니", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["불가침"],
		expiration:"turnEnd", duration:2,
		effect:[
			{trigger:"expired", cond:true, type:"get", target:"self", value:"randomCard(tags, 초월)"}
		]
	},
	"BN-SY-005":{
		name:{ "KOR":"의술: 엘릭사리스", "ENG":"Elixaris" }, class:"중립", type:"비전", isDeck:true, rarity:"없음", race:"실바니", cost:15, owner:1,
		cond:true,
		tags:["보너스", "불가침", "비전"],
		effect:[
			{trigger:"used", cond:true, type:"orgasmL", target:"self", op:"add", value:1},
			{trigger:"used", cond:true, type:"state", target:"self", value:"BN-SY-005-1"},
		]
	},
	"BN-SY-005-1":{
		parents:"BN-SY-005",
		name:{ "KOR":"죽음을 허락치 않는다", "ENG":"" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		expiration:"turnEnd", duration:1,
		tags:[],
		effect:[
			{trigger:"always", cond:true, type:"immune", target:"self"},
		]
	},


	"BN-HA-001":{
		name:{ "KOR":"수제 카드", "ENG":"" }, class:"중립", type:"수제", isDeck:true, rarity:"없음", race:"하프만", cost:0, owner:1,
		cond:true,
		tags:["보너스", "불가침"],
		stack:1,
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{"KOR":"마음대로 효과를 골라 제작할 수 있습니다.", "ENG":""}},
		]
	},
	"BN-HA-001-1":{
		parents:"BN-HA-001",
		name:{ "KOR":"생명력 흡수", "ENG":"" }, class:"치유사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:2,
		effect:[
			{trigger:"always", cond:true, type:"absorption", target:"self"},
		]
	},
	"BN-HA-001-2":{
		parents:"BN-HA-001",
		name:{ "KOR":"수제 결합물", "ENG":"" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["결합물"],
		effect:[
		]
	},


	"BN-TR-001":{
		name:{ "KOR":"불굴의 정신", "ENG":"Unyielding Spirit" }, class:"전사", type:"시련", isDeck:true, rarity:"없음", race:"트라이브", cost:20, owner:1,
		cond:{v1:"자신.기록.전체.버림.count(type, 패널티)", op:">=", v2:6},
		tags:["보너스", "불가침", "시련"],
		effect:[
			{trigger:"used", cond:true, type:"victory", target:"self"},
			{trigger:"none", cond:true, type:"showValue", value:"자신.기록.전체.버림.count(type, 패널티)"},
		]
	},		
	"BN-TR-002":{
		name:{ "KOR":"마지막 임무", "ENG":"" }, class:"암살자", type:"시련", isDeck:true, rarity:"없음", race:"트라이브", cost:20, owner:1,
		cond:{v1:"자신.기록.전체.사용.countType(all)", op:">=", v2:14},
		tags:["보너스", "불가침", "시련"],
		effect:[
			{trigger:"none", cond:true, type:"showValue", value:"자신.기록.전체.사용.countType(all)"},
			{trigger:"used", cond:true, type:"victory", target:"self"},
		]
	},
	"BN-TR-003":{
		name:{ "KOR":"종말의 예언", "ENG":"" }, class:"마술사", type:"시련", isDeck:true, rarity:"없음", race:"트라이브", cost:20, owner:1,
		cond:true,
		tags:["보너스", "불가침", "시련"], related:["BN-TR-003-1", "BN-TR-003-2", "BN-TR-003-3", "BN-TR-003-4"],
		effect:[
			{trigger:"used", cond:true, type:"specialA18"},
			{trigger:"used", cond:true, type:"get", target:"self", value:"BN-TR-003-1",},
		]
	},
	"BN-TR-003-1":{
		name:{ "KOR":"서막: 파멸의 전조", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", race:"트라이브", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["시련", "불가침"], related:["BN-TR-003-2", "BN-TR-003-3", "BN-TR-003-4"], keywords:["생성됨"],
		effect:[
			{trigger:"choice", cond:true, range:{category:"tags", value:"서막조건", count:1}, type:"transform", target:"self",
			info:{
				value:"BN-TR-003-2",
			}},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1}
		]
	},
	"BN-TR-003-2":{
		name:{ "KOR":"중막: 다가오는 재앙", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", race:"트라이브", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["시련", "불가침"], related:["BN-TR-003-3", "BN-TR-003-4"],
		effect:[
			{trigger:"choice", cond:true, range:{category:"tags", value:"중막조건", count:1}, type:"transform", target:"self",
			info:{
				value:"BN-TR-003-3",
			}},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1}
		]
	},
	"BN-TR-003-3":{
		name:{ "KOR":"종막: 최후의 날", "ENG":"" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", race:"트라이브", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["시련", "불가침"], related:["BN-TR-003-4"],
		effect:[
			{trigger:"choice", cond:true, range:{category:"tags", value:"종막조건", count:1}, type:"transform", target:"self",
			info:{
				value:"BN-TR-003-4",
			}},
		]
	},

	"BN-TR-003-4":{
		parents:"BN-TR-003",
		name:{ "KOR":"결말: 운명 극복", "ENG":"" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true, noInherit:true,
		cond:true,
		tags:["시련", "불가침"],
		effect:[
			{trigger:"used", cond:true, type:"victory", target:"self"},
		]
	},

	"BN-TR-004":{
		name:{ "KOR":"생사의 갈림길", "ENG":"" }, class:"치유사", type:"시련", isDeck:true, rarity:"없음", race:"트라이브", cost:20, owner:1,
		cond:true,
		tags:["보너스", "불가침", "시련"],
		effect:[
			{trigger:"used", cond:true, type:"maxRound", value:2},
			{trigger:"used", cond:true, type:"orgasmL", target:"self", op:"add", value:-1},
			{trigger:"used", cond:true, type:"state", target:"self", value:"BN-TR-004-1"}
		]
	},
	"BN-TR-004-1":{
		parents:"BN-TR-004",
		name:{ "KOR":"골든 아워", "ENG":"" }, class:"치유사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["시련", "불가침"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"시간 초과 시 결투에서 승리한다.", "ENG":"" }},
		]
	},

//#######################################################################################################################################################################################

	"PN-001":{
		name:{ "KOR":"패널티: 자위 중독", "ENG":"Penalty: Masturbation Addiction" }, class:"패널티", type:"패널티", isDeck:true, rarity:"없음", cost:-15, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩"],
		effect:[
			{trigger:"turnEnd", inDeck:true, cond:true, type:"line", value:"자위"},
			{trigger:"turnEnd", inDeck:true, cond:true, type:"excite", op:"add", target:"self", value:1},
		]
	},
	"PN-002":{
		name:{ "KOR":"패널티: 아헤가오", "ENG":"Penalty: Ahegao" }, class:"패널티", type:"패널티", isDeck:true, rarity:"없음", cost:-5, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩"],
		effect:[
			{trigger:"always", inDeck:true, cond:true, type:"lewd", op:"add", value:-1},
		]
	},
	"PN-003":{
		name:{ "KOR":"패널티: 발정기", "ENG":"Penalty: In Heat" }, class:"패널티", type:"패널티", isDeck:true, rarity:"없음", cost:-5, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩"],
		effect:[
			{trigger:"always", inDeck:true, cond:true, type:"estrus", op:"add", value:1},
		]
	},
	"PN-004":{
		name:{ "KOR":"패널티: 방뇨", "ENG":"Penalty: Urination" }, class:"패널티", type:"패널티", isDeck:true, rarity:"없음", cost:-5, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩"],
		effect:[
			{trigger:"turnEnd", inDeck:true, cond:true, type:"line", value:"방뇨"},
			{trigger:"turnEnd", inDeck:true, cond:{v1:"상대.흥분", op:">", v2:0}, condOmit:true, type:"excite", target:"op", op:"add", value:-2},
		]
	},
	"PN-005":{
		name:{ "KOR":"패널티: 신음", "ENG":"Penalty: Moaning" }, class:"패널티", type:"패널티", isDeck:true, rarity:"없음", cost:-10, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩"],
		effect:[
			{trigger:"always", inDeck:true, cond:true, type:"exciteL", target:"op", op:"add", value:2},
		]
	},
	"PN-006":{
		name:{ "KOR":"패널티: 시오후키", "ENG":"Penalty: Squirting" }, class:"패널티", type:"패널티", isDeck:true, rarity:"없음", cost:-15, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩"],
		effect:[
			{trigger:"always", inDeck:true, cond:{v1:"자신.기록.이전.이벤트.절정", op:">", v2:0}, type:"penaltyMustUse", target:"self"},
		]
	},
	"PN-007":{
		name:{ "KOR":"패널티: 성감대 개발", "ENG":"Penalty: Erogenous Zone Development" }, class:"패널티", type:"패널티", isDeck:true, rarity:"없음", cost:-15, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩"],
		effect:[
			{trigger:"always", inDeck:true, cond:true, type:"exciteL", target:"self", op:"add", value:-1},
		]
	},
	"PN-008":{
		name:{ "KOR":"패널티: 마조히즘", "ENG":"Penalty: Masochism" }, class:"패널티", type:"패널티", isDeck:true, rarity:"없음", cost:-10, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩"],
		effect:[
			{trigger:"always", inDeck:true, cond:true, type:"orgasmL", target:"self", op:"add", value:-1},
		]
	},
	"PN-009":{
		name:{ "KOR":"패널티: 욕구불만", "ENG":"Penalty: Sexual Frustration" }, class:"패널티", type:"패널티", isDeck:true, rarity:"없음", cost:-5, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩"],
		effect:[
			{trigger:"turnEnd", inDeck:true, cond:{v1:"라운드", op:">=", v2:6}, type:"defeat", target:"self"},
		]
	},
	"PN-010":{
		name:{ "KOR":"패널티: 패배 선언", "ENG":"Penalty: Surrender" }, class:"패널티", type:"패널티", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩"],
		effect:[
			{trigger:"used", cond:true, type:"defeat", target:"self"},
		]
	},


//#######################################################################################################################################################################################

	"B1-PA-001":{
		name:{ "KOR":"발정 효과의 정액", "ENG":"Estrus-effect Semen" }, class:"고블린즈", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "노말전용"], related:["B1-PN-001"],
		expiration:"always", duration:Infinity,
		effect:[
			//{trigger:"turnEnd", cond:true, type:"line", value:"고블린정액-1"},
			{trigger:"turnEnd", cond:true, type:"get", target:"op", value:"B1-PN-001"},
		]
	},
	"B1-PN-001":{
		name:{ "KOR":"고블린 정액", "ENG":"Goblin Semen" }, class:"고블린즈", type:"패널티", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["챔피언토큰", "노말전용"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"고블린정액-2"},
			{trigger:"used", cond:true, type:"estrus", op:"add", value:1},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},

	"B1-UC-001":{
		name:{ "KOR":"옷 찢기", "ENG":"Clothes Ripping" }, class:"고블린즈", type:"탈의", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "노말전용"], related:["패널티"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"옷찢기"},
			{trigger:"used", cond:true, type:"clothes", value:"uncloth"},
			{trigger:"used", cond:true, type:"get", target:"op", value:"randomCard(type, 패널티)"},
		]
	},
	"B1-AT-001":{
		name:{ "KOR":"가슴 쥐어짜기", "ENG":"Breast Squeezing" }, class:"고블린즈", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"], related:["B1-PN-001"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"가슴쥐어짜기"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:{v1:"덱.count(id, B1-PN-001)", op:">", v2:0}, adverb:"추가로", type:"attack", target:"op"},
		]
	},
	"B1-AT-002":{
		name:{ "KOR":"동시 삽입", "ENG":"Double Penetration" }, class:"고블린즈", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "노말전용"],
		effect:[
			{trigger:"used", cond:{v1:"덱.count(type, 패널티)", op:">", v2:0}, type:"line", value:"고블린삽입"},
			{trigger:"used", cond:true, type:"attack", repeat:"덱.count(type, 패널티)", target:"op"},
		]
	},
	"B1-AT-003":{
		name:{ "KOR":"딥스롯", "ENG":"Deepthroat" }, class:"고블린즈", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"딥스롯"},
			{trigger:"used", cond:true, type:"state", target:"op", value:"B1-AT-003-1"},
			{trigger:"used", cond:{v1:"음란", op:"<", v2:"발정"}, type:"attack", target:"op"},
		]
	},
	"B1-AT-003-1":{
		parents:"B1-AT-003",
		name:{ "KOR":"호흡 곤란", "ENG":"Breathlessness" }, class:"고블린즈", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:2,
		effect:[
			{trigger:"always", cond:true, type:"lewd", op:"add", value:-2},
		]
	},
	"B1-AT-004":{
		name:{ "KOR":"무책임한 질내사정", "ENG":"Irresponsible Creampie" }, class:"고블린즈", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"고블린삽입"},
			{trigger:"used", cond:true, type:"estrus", op:"add", value:"덱.count(type, 패널티)"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"B1-SU-001":{
		name:{ "KOR":"머리채 잡기", "ENG":"Hair Pulling" }, class:"고블린즈", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"], related:["B1-PN-001"],
		effect:[
			{trigger:"used", cond:true, type:"estrus", op:"add", value:2},
			{trigger:"used", cond:true, type:"get", target:"op", value:"B1-PN-001", repeat:2},
		]
	},
	"B1-SU-002":{
		name:{ "KOR":"탑승", "ENG":"Riding" }, class:"고블린즈", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:{v1:"덱.count(type, 패널티)", op:">=", v2:3}, type:"line", value:"탑승"},
			{trigger:"used", cond:{v1:"덱.count(type, 패널티)", op:">=", v2:3}, type:"orgasm", target:"op"},
		]
	},

	"B1-PA-001+":{
		parents:"B1-PA-001",
		name:{ "KOR":"발정 효과의 정액+", "ENG":"Estrus-effect Semen+" }, class:"고블린즈", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "하드전용"], related:["B1-PN-001"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"turnEnd", cond:true, type:"get", target:"op", value:"B1-PN-001", repeat:2},
		]
	},

	"B1-UC-001+":{
		parents:"B1-UC-001",
		name:{ "KOR":"옷 찢기+", "ENG":"Clothes Ripping+" }, class:"고블린즈", type:"탈의", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "하드전용"], related:["패널티"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"옷찢기"},
			{trigger:"used", cond:true, type:"clothes", value:"uncloth"},
			{trigger:"used", cond:true, type:"get", target:"op", repeat:2, value:"randomCard(type, 패널티)"},
		]
	},
	"B1-AT-002+":{
		parents:"B1-AT-002",
		name:{ "KOR":"동시 삽입+", "ENG":"Double Penetration+" }, class:"고블린즈", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "하드전용"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"고블린삽입"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"attack", adverb:"추가로", repeat:"상대덱.count(type, 패널티)", target:"op"},
		]
	},

	"B1-AT-005":{
		name:{ "KOR":"갱뱅", "ENG":"Gangbang" }, class:"고블린즈", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "클라이맥스"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"고블린삽입"},
			{trigger:"used", cond:true, type:"attack", repeat:"자신.남은절정", target:"op"},
		]
	},

	//

	"B2-PA-001":{
		name:{ "KOR":"최면세뇌", "ENG":"Prohibition" }, class:"마을사람", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "노말전용"], related:["B2-PA-001-1", "B2-PA-001-2"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"gameStart", cond:true, type:"line", value:"최면석판"},
			{trigger:"gameStart", cond:true, type:"state", target:"op", byname:true, value:"B2-PA-001-1"},
		]
	},
	"B2-PA-001-1":{
		//parents:"B2-PA-001",
		name:{ "KOR":"공격 금지", "ENG":"Attack Prohibition" }, class:"마을사람", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["챔피언토큰", "노말전용"], related:["B2-PA-001-2"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"useAttack", cond:true, type:"estrus", op:"add", value:2},
			{trigger:"turnEnd", cond:true, type:"transform", target:"self",
			info:{
				target:"self",
				value:"B2-PA-001-2",
			}},
		]
	},
	"B2-PA-001-2":{
		//parents:"B2-PA-001",
		name:{ "KOR":"방어 금지", "ENG":"Defense Prohibition" }, class:"마을사람", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["챔피언토큰", "노말전용"], related:["B2-PA-001-1"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"useSupport", cond:true, type:"estrus", op:"add", value:2},
			{trigger:"turnEnd", cond:true, type:"transform", target:"self",
			info:{
				target:"self",
				value:"B2-PA-001-1",
			}},
		]
	},
	"B2-PN-001":{
		name:{ "KOR":"네, 주인님", "ENG":"Yes, Master" }, class:"마을사람", type:"패널티", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언토큰", "무조건소모", "노말전용"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"네주인님"},
			{trigger:"used", cond:true, type:"estrus", op:"add", value:1},
			{trigger:"used", cond:true, type:"get", adverb:"그리고", target:"self", value:"original"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},

	"B2-UC-001":{
		name:{ "KOR":"벗어라", "ENG":"Strip, Now" }, class:"마을사람", type:"탈의", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "노말전용"], related:["B2-PN-001"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"벗어라"},
			{trigger:"used", cond:true, type:"clothes", value:"uncloth"},
			{trigger:"used", cond:true, type:"transform", target:"op",
			info:{
				target:"opDeck.selectCards(all, 패널티제외, 2)",
				value:"B2-PN-001",
			}},
		]
	},
	"B2-AT-001":{
		name:{ "KOR":"자위해라", "ENG":"Masturbate, Now" }, class:"마을사람", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "노말전용"], related:["B2-PN-001"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"최면명령"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"transform", target:"op",
			info:{
				target:"opDeck.selectCards(type, 공격, 1)",
				value:"B2-PN-001",
			}},
		]
	},
	"B2-AT-002":{
		name:{ "KOR":"실금해라", "ENG":"Wet Yourself, Now" }, class:"마을사람", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "노말전용"], related:["B2-PN-001"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"최면명령"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"transform", target:"op",
			info:{
				target:"opDeck.selectCards(type, 보조, 1)",
				value:"B2-PN-001",
			}},
		]
	},
	"B2-AT-004":{
		name:{ "KOR":"절정해라", "ENG":"Orgasm, Now" }, class:"마을사람", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"절정해라"},
			{trigger:"used", cond:{v1:"발정", op:">=", v2:8}, type:"orgasm", target:"op"},
		]
	},
	"B2-SU-001":{
		name:{ "KOR":"네 발로 기어라", "ENG":"Crawl on All Fours" }, class:"마을사람", type:"체위", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"네발로기어라"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"turnEnd", cond:true, type:"estrus", op:"add", value:1},
		]
	},
	"B2-SU-002":{
		name:{ "KOR":"움직이지 마라", "ENG":"Stay Still" }, class:"마을사람", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"움직이지마라"},
			{trigger:"used", cond:true, type:"changeCond", target:"op", value:"blank"},
			{trigger:"used", cond:true, type:"changeCond", target:"op", value:"unconscious", special:true},
			{trigger:"used", cond:true, type:"state", target:"op", value:"B2-SU-002-1"},
		]
	},
	"B2-SU-002-1":{
		parents:"B2-SU-002",
		name:{ "KOR":"행동 불가", "ENG":"Action Impossible" }, class:"마을사람", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:2,
		effect:[
			{trigger:"always", cond:true, type:"actBan", target:"self"},
			{trigger:"expired", cond:true, type:"changeCond", target:"self", value:"original", essential:true},
			{trigger:"expired", cond:true, type:"changeCond", target:"self", value:"null", special:true},
		]
	},
	"B2-SU-004":{
		name:{ "KOR":"인지 저해", "ENG":"Moral Degeneration" }, class:"마을사람", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"인지저해"},
			{trigger:"used", cond:true, type:"discard", target:"op", info:{target:"opDeck.selectCards(type, 패널티, all)"}},
			{trigger:"used", cond:true, type:"estrus", op:"add", value:"상대.기록.이번.버림.count(type, 패널티)"},
		]
	},

	"B2-PA-001+":{
		parents:"B2-PA-001",
		name:{ "KOR":"최면세뇌+", "ENG":"Prohibition+" }, class:"마을사람", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "하드전용"], related:["B2-PA-001-1+", "B2-PA-001-2+"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"gameStart", cond:true, type:"line", value:"최면석판"},
			{trigger:"gameStart", cond:true, type:"state", target:"op", byname:true, value:"B2-PA-001-1+"},
			{trigger:"turnEnd", cond:{v1:"상대.기록.이번.사용.length", op:"==", v2:0}, type:"estrus", op:"add", value:2},
		]
	},
	"B2-PA-001-1+":{
		parents:"B2-PA-001-1",
		name:{ "KOR":"공격 금지+", "ENG":"Attack Prohibition+" }, class:"마을사람", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["챔피언토큰", "하드전용"], related:["B2-PA-001-2+"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"useAttack", cond:true, type:"orgasm", target:"self"},
			{trigger:"turnEnd", cond:true, type:"transform", target:"self",
			info:{
				target:"self",
				value:"B2-PA-001-2+",
			}},
		]
	},
	"B2-PA-001-2+":{
		parents:"B2-PA-001-2",
		name:{ "KOR":"방어 금지+", "ENG":"Defense Prohibition+" }, class:"마을사람", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["챔피언토큰", "하드전용"], related:["B2-PA-001-1+"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"useSupport", cond:true, type:"orgasm", target:"self"},
			{trigger:"turnEnd", cond:true, type:"transform", target:"self",
			info:{
				target:"self",
				value:"B2-PA-001-1+",
			}},
		]
	},

	"B2-UC-001+":{
		parents:"B2-UC-001",
		name:{ "KOR":"벗어라+", "ENG":"Strip, Now+" }, class:"마을사람", type:"탈의", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "하드전용"], related:["B2-PN-001"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"벗어라"},
			{trigger:"used", cond:true, type:"clothes", value:"uncloth"},
			{trigger:"used", cond:true, type:"transform", target:"op",
			info:{
				target:"opDeck.selectCards(all, 패널티제외, 3)",
				value:"B2-PN-001",
			}},
		]
	},
	"B2-AT-001+":{
		parents:"B2-AT-001",
		name:{ "KOR":"자위해라+", "ENG":"Masturbate, Now+" }, class:"마을사람", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "하드전용"], related:["B2-PN-001"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"최면명령"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"transform", target:"op",
			info:{
				target:"opDeck.selectCards(type, 공격, 2)",
				value:"B2-PN-001",
			}},
		]
	},
	"B2-AT-002+":{
		parents:"B2-AT-002",
		name:{ "KOR":"실금해라+", "ENG":"Wet Yourself, Now+" }, class:"마을사람", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "하드전용"], related:["B2-PN-001"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"최면명령"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"transform", target:"op",
			info:{
				target:"opDeck.selectCards(type, 보조, 2)",
				value:"B2-PN-001",
			}},
		]
	},

	"B2-AT-003":{
		name:{ "KOR":"감도 높이기", "ENG":"Sensitivity Increase" }, class:"마을사람", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "클라이맥스"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"감도높이기"},
			{trigger:"used", cond:true, type:"estrus", op:"multiply", value:2},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},

	//


	"B3-PA-001":{
		name:{ "KOR":"수 많은 촉수", "ENG":"Many Tentacles" }, class:"촉수슬라임", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "노말전용"], related:["B3-PA-001-1"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"turnEnd", cond:true, type:"get", target:"self", byname:true, value:"B3-PA-001-1"},
		]
	},
	"B3-PA-001-1":{
		name:{ "KOR":"촉수 삽입", "ENG":"Tentacle Insertion" }, class:"촉수슬라임", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언토큰", "노말전용"],
		effect:[
			{trigger:"used", cond:true, type:"estrus", op:"add", value:1},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},

	"B3-UC-001":{
		name:{ "KOR":"옷을 녹이는 점액", "ENG":"Clothes Dissolving Slime" }, class:"촉수슬라임", type:"탈의", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"옷을녹이는점액"},
			{trigger:"used", cond:true, type:"clothes", value:"uncloth"},
			{trigger:"used", cond:true, type:"lewd", op:"set", value:1},
		]
	},
	"B3-AT-001":{
		name:{ "KOR":"내부 휘젓기", "ENG":"Internal Stirring" }, class:"촉수슬라임", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"촉수공격"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:{v1:"음란", op:"<=", v2:2}, adverb:"추가로", type:"attack", target:"op"},
		]
	},
	"B3-AT-003":{
		name:{ "KOR":"목구멍 침입", "ENG":"Throat Invasion" }, class:"촉수슬라임", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"촉수공격"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"lewd", op:"add", value:-1},
			{trigger:"used", cond:true, type:"excite", target:"self", op:"add", value:-2},
		]
	},
	"B3-AT-004":{
		name:{ "KOR":"꿈틀거리는 촉수", "ENG":"Wriggling Tentacles" }, class:"촉수슬라임", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"], related:["B3-PA-001-1"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"촉수공격"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"get", target:"self", value:"B3-PA-001-1"},
		]
	},
	"B3-SU-001":{
		name:{ "KOR":"구속 촉수", "ENG":"Restraining Tentacles" }, class:"촉수슬라임", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"구속촉수"},
			{trigger:"used", cond:true, type:"lewd", op:"add", value:-3},
			{trigger:"used", cond:true, type:"excite", target:"self", op:"add", value:-2},
		]
	},
	"B3-SU-002":{
		name:{ "KOR":"타액 섭취", "ENG":"Saliva Consumption" }, class:"촉수슬라임", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "노말전용"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"타액섭취"},
			{trigger:"used", cond:true, type:"excite", target:"self", op:"add", value:-10},
		]
	},
	"B3-SU-003":{
		name:{ "KOR":"보호점액 분비", "ENG":"Protective Slime Secretion" }, class:"촉수슬라임", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"보호점액분비"},
			{trigger:"used", cond:true, type:"state", target:"self", value:"B3-SU-003-1"},
		]
	},
	"B3-SU-003-1":{
		parents:"B3-SU-003",
		name:{ "KOR":"보호점액", "ENG":"Protective Slime" }, class:"촉수슬라임", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:2,
		effect:[
			{trigger:"always", cond:true, type:"immune", target:"self"},
		]
	},

	"B3-PA-001+":{
		parents:"B3-PA-001",
		name:{ "KOR":"수 많은 촉수+", "ENG":"Many Tentacles+" }, class:"촉수슬라임", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "하드전용"], related:["B3-PA-001-1+"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"turnEnd", cond:true, type:"get", target:"self", byname:true, value:"B3-PA-001-1+"},
			{trigger:"always", cond:true, type:"insensitive", target:"self"},
		]
	},
	"B3-PA-001-1+":{
		parents:"B3-PA-001-1",
		name:{ "KOR":"촉수 삽입+", "ENG":"Tentacle Insertion+" }, class:"촉수슬라임", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언토큰", "하드전용"],
		effect:[
			{trigger:"used", cond:true, type:"estrus", op:"add", value:1},
			{trigger:"used", cond:true, type:"excite", target:"self", op:"add", value:-10},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},

	"B3-AT-001+":{
		name:{ "KOR":"내부 휘젓기+", "ENG":"Internal Stirring" }, class:"촉수슬라임", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		parents:"B3-AT-001",
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"촉수공격"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:{v1:"음란", op:"<=", v2:4}, adverb:"추가로", type:"attack", target:"op"},
		]
	},
	"B3-SU-002+":{
		parents:"B3-SU-002",
		name:{ "KOR":"타액 섭취+", "ENG":"Saliva Consumption+" }, class:"촉수슬라임", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "하드전용"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"타액섭취"},
			{trigger:"used", cond:true, type:"excite", target:"self", op:"set", value:0},
		]
	},

	"B3-AT-002":{
		name:{ "KOR":"점액 사정", "ENG":"Slime Ejaculation" }, class:"촉수슬라임", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "클라이맥스"], related:["B3-PA-001-1"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"촉수공격"},
			{trigger:"used", cond:true, type:"state", target:"self", value:"B3-SU-003-1"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},

	//

	"B4-PA-001":{
		name:{ "KOR":"망할 꼬맹이", "ENG":"" }, class:"악동", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "노말전용"],
		expiration:"always", duration:Infinity, stack:1,
		effect:[
			{trigger:"turnStart", cond:true, type:"estrus", op:"set", value:"stack"},
		]
	},
	"B4-UC-001":{
		name:{ "KOR":"짓궂은 장난", "ENG":"" }, class:"악동", type:"탈의", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"], related:["B4-PA-001"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"짓궂은장난"},
			{trigger:"used", cond:true, type:"clothes", value:"uncloth"},
			{trigger:"used", cond:{v1:"상대.기록.이번.사용.length", op:">", v2:0}, type:"stack", info:{target:"id:B4-PA-001"}, op:"add", value:1},
		]
	},
	"B4-AT-001":{
		name:{ "KOR":"가슴 만지고 싶어", "ENG":"" }, class:"악동", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"가슴만지고싶어"},
			{trigger:"used", cond:true, type:"attack", target:"op", repeat:3},
		]
	},
	"B4-AT-002":{
		name:{ "KOR":"안아줘", "ENG":"" }, class:"악동", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"안아줘"},
			{trigger:"used", cond:true, type:"attack", target:"op", repeat:"음란"},
		]
	},
	"B4-AT-004":{
		name:{ "KOR":"누나는 장난감이야", "ENG":"" }, class:"악동", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "노말전용"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"누나는장난감이야"},
			{trigger:"used", cond:true, type:"attack", target:"op", repeat:"발정"},
		]
	},
	"B4-SU-001":{
		name:{ "KOR":"이제 누나가 술래야", "ENG":"" }, class:"악동", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:{v1:"자신.기록.이전.이벤트.절정", op:">", v2:0},
		tags:["챔피언덱"], related:["B4-PA-001"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"이제누나가술래야"},
			{trigger:"used", cond:true, type:"stack", info:{target:"id:B4-PA-001"}, op:"add", value:1, keepLine:true},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1}
		]
	},
	"B4-SU-002":{
		name:{ "KOR":"지면 벌칙이야", "ENG":"" }, class:"악동", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:{v1:"상대.기록.이전.이벤트.절정", op:">", v2:0},
		tags:["챔피언덱"], related:["B4-PA-001"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"지면벌칙이야"},
			{trigger:"used", cond:true, type:"stack", info:{target:"id:B4-PA-001"}, op:"add", value:1, keepLine:true},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1}
		]
	},
	"B4-SU-003":{
		name:{ "KOR":"약올리기", "ENG":"" }, class:"악동", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:{v1:"상대.기록.이전.사용.length", op:">=", v2:2},
		tags:["챔피언덱", "노말전용"], related:["B4-PA-001"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"약올리기"},
			{trigger:"used", cond:true, type:"stack", info:{target:"id:B4-PA-001"}, op:"add", value:1, keepLine:true},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1}
		]
	},

	"B4-PA-001+":{
		parents:"B4-PA-001",
		name:{ "KOR":"망할 꼬맹이+", "ENG":"" }, class:"악동", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "노말전용"],
		expiration:"always", duration:Infinity, stack:0,
		effect:[
			{trigger:"turnStart", cond:true, type:"estrus", op:"add", value:"stack"},
		]
	},
	"B4-UC-001+":{
		parents:"B4-UC-001",
		name:{ "KOR":"짓궂은 장난+", "ENG":"" }, class:"악동", type:"탈의", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"], related:["B4-PA-001+"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"짓궂은장난"},
			{trigger:"used", cond:true, type:"clothes", value:"uncloth"},
			{trigger:"used", cond:true, type:"stack", info:{target:"id:B4-PA-001+"}, op:"add", value:1},
		]
	},
	"B4-AT-004+":{
		parents:"B4-AT-004",
		name:{ "KOR":"누나는 장난감이야+", "ENG":"" }, class:"악동", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "하드전용"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"누나는장난감이야"},
			{trigger:"used", cond:true, type:"attack", target:"op", repeat:"실제발정"},
		]
	},
	"B4-SU-001+":{
		parents:"B4-SU-001",
		name:{ "KOR":"이제 누나가 술래야+", "ENG":"" }, class:"악동", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:{v1:"자신.기록.이전.이벤트.절정", op:">", v2:0},
		tags:["챔피언덱"], related:["B4-PA-001+"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"이제누나가술래야"},
			{trigger:"used", cond:true, type:"stack", info:{target:"id:B4-PA-001+"}, op:"add", value:1, keepLine:true},
			{trigger:"used", cond:true, type:"get", target:"self", value:"self", adverb:"그리고", keepLine:true},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1}
		]
	},
	"B4-SU-002+":{
		parents:"B4-SU-002",
		name:{ "KOR":"지면 벌칙이야+", "ENG":"" }, class:"악동", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:{v1:"상대.기록.이전.이벤트.절정", op:">", v2:0},
		tags:["챔피언덱"], related:["B4-PA-001+"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"지면벌칙이야"},
			{trigger:"used", cond:true, type:"stack", info:{target:"id:B4-PA-001+"}, op:"add", value:1, keepLine:true},
			{trigger:"used", cond:true, type:"get", target:"self", value:"self", adverb:"그리고", keepLine:true},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1}
		]
	},
	"B4-SU-003+":{
		parents:"B4-SU-003",
		name:{ "KOR":"약올리기+", "ENG":"" }, class:"악동", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:{v1:"상대.기록.이전.사용.length", op:">=", v2:2},
		tags:["챔피언덱", "하드전용"], related:["B4-PA-001+"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"약올리기"},
			{trigger:"used", cond:true, type:"stack", info:{target:"id:B4-PA-001+"}, op:"add", value:1, keepLine:true},
			{trigger:"used", cond:true, type:"get", target:"self", value:"self", adverb:"그리고", keepLine:true},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1}
		]
	},

	"B4-AT-003":{
		name:{ "KOR":"놀아줘", "ENG":"" }, class:"악동", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "클라이맥스"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"놀아줘"},
			{trigger:"used", cond:true, type:"attack", target:"op", repeat:"라운드"},
		]
	},

	//

	"B5-PA-001":{
		name:{ "KOR":"거근 발기", "ENG":"" }, class:"타우로스", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "노말전용"],
		expiration:"always", duration:Infinity, stack:1,
		effect:[
			{trigger:"turnEnd", cond:true, type:"estrus", op:"add", value:2},
			{trigger:"always", cond:{v1:"자신.기록.이번.이벤트.절정", op:">", v2:0}, type:"enemyDisable"},
		]
	},
	"B5-UC-001":{
		name:{ "KOR":"방어구 파괴", "ENG":"" }, class:"타우로스", type:"탈의", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"방어구파괴"},
			{trigger:"used", cond:true, type:"clothes", value:"uncloth"},
			{trigger:"used", cond:"체위", type:"posture", value:"remove"},
		]
	},
	"B5-AT-001":{
		name:{ "KOR":"성욕 처리", "ENG":"" }, class:"타우로스", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"타우로스울음"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"attack", target:"self"},
		]
	},
	"B5-AT-002":{
		name:{ "KOR":"들박", "ENG":"" }, class:"타우로스", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"타우로스울음"},
			{trigger:"used", cond:true, type:"estrusAndLewd", op:"add", value:2},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"B5-SU-001":{
		name:{ "KOR":"구애", "ENG":"" }, class:"타우로스", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"구애"},
			{trigger:"used", cond:true, type:"estrusAndLewd", op:"add", value:3},
		]
	},
	/*"B5-PN-001":{
		name:{ "KOR":"휴식", "ENG":"" }, class:"타우로스", type:"패널티", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"always", inDeck:true, cond:{v1:"자신.기록.이전.이벤트.절정", op:">", v2:0}, type:"penaltyMustUse", target:"self"},
		]
	},*/

	"B5-PA-001+":{
		parents:"B5-PA-001",
		name:{ "KOR":"거근 발기+", "ENG":"" }, class:"타우로스", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "노말전용"],
		expiration:"always", duration:Infinity, stack:1,
		effect:[
			{trigger:"turnEnd", cond:true, type:"estrus", op:"add", value:2},
		]
	},
	"B5-UC-001+":{
		parents:"B5-UC-001",
		name:{ "KOR":"방어구 파괴+", "ENG":"" }, class:"타우로스", type:"탈의", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"방어구파괴"},
			{trigger:"used", cond:true, type:"clothes", value:"uncloth"},
			{trigger:"used", cond:{v1:"체위", op:"==", v2:false}, type:"estrus", op:"add", value:4},
			{trigger:"used", cond:"체위", type:"posture", value:"remove"},
		]
	},

	"B5-AT-003":{
		name:{ "KOR":"교배 프레스", "ENG":"" }, class:"타우로스", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "클라이맥스"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"교배프레스"},
			{trigger:"used", cond:true, type:"attack", target:"op", repeat:2},
		]
	},

	//

	"B6-PA-001":{
		name:{ "KOR":"증식", "ENG":"" }, class:"버섯남자", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "노말전용"],
		expiration:"always", duration:Infinity, stack:1,
		effect:[
			{trigger:"always", cond:{v1:"라운드", op:">=", v2:2}, type:"maxUse", target:"self", value:1},
			//{trigger:"turnEnd", cond:true, type:"bound", info:{target:"상대덱.selectCards(all, 포자제외, 1)"}, target:"op", value:"randomCard(tags, 포자)"},
		]
	},
	"B6-PA-001-1":{
		name:{ "KOR":"최음 포자", "ENG":"" }, class:"버섯남자", type:"패널티", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["포자"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"none", cond:true, type:"text", value:{"KOR":"결속된 카드가 사라지면 버려진다.", "ENG":""}},
			{trigger:"turnEnd", inDeck:true, cond:true, type:"estrus", op:"add", value:"specialV08"},
		]
	},
	"B6-PA-001-2":{
		name:{ "KOR":"마비 포자", "ENG":"" }, class:"버섯남자", type:"패널티", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["포자"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"none", cond:true, type:"text", value:{"KOR":"결속된 카드가 사라지면 버려진다.", "ENG":""}},
			{trigger:"always", inDeck:true, cond:true, type:"lewd", op:"subtract", value:"specialV08"},
		]
	},
	"B6-PA-001-3":{
		name:{ "KOR":"흡수 포자", "ENG":"" }, class:"버섯남자", type:"패널티", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["포자"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"none", cond:true, type:"text", value:{"KOR":"결속된 카드가 사라지면 버려진다.", "ENG":""}},
			{trigger:"turnEnd", inDeck:true, cond:true, type:"excite", target:"self", op:"add", value:2, repeat:"specialV08"},
		]
	},
	"B6-PA-001-4":{
		name:{ "KOR":"촉진 포자", "ENG":"" }, class:"버섯남자", type:"패널티", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true, priority:1,
		cond:true,
		tags:["포자"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"none", cond:true, type:"text", value:{"KOR":"결속된 카드가 사라지면 버려진다.", "ENG":""}},
			{trigger:"always", inDeck:true, cond:true, type:"specialV08", op:"add", value:"specialV08-1"},
		]
	},

	"B6-ST-001":{
		name:{ "KOR":"포자 감염", "ENG":"" }, class:"버섯남자", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true, related:["tag:포자"],
		expiration:"active", duration:1,
		tags:["챔피언덱"],
		effect:[
			{trigger:"turnStart", cond:true, type:"bound", info:{target:"자기덱.selectCards(all, 포자제외, 1)"}, target:"self", value:"randomCard(tags, 포자)"},
		]
	},

	"B6-UC-001":{
		name:{ "KOR":"부식즙", "ENG":"" }, class:"버섯남자", type:"탈의", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true, related:["B6-ST-001", "tag:포자"],
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"부식즙"},
			{trigger:"used", cond:true, type:"clothes", value:"uncloth"},
			{trigger:"used", cond:true, type:"state", target:"op", value:"B6-ST-001", byname:true, repeat:2},
		]
	},
	"B6-AT-001":{
		name:{ "KOR":"포자정액 번식", "ENG":"" }, class:"버섯남자", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"], related:["B6-ST-001", "tag:포자"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"번식"},
			{trigger:"used", cond:true, type:"state", target:"op", value:"B6-ST-001", byname:true},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:1},
		]
	},
	"B6-AT-002":{
		name:{ "KOR":"양분 흡수", "ENG":"" }, class:"버섯남자", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"], related:["tag:포자"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"양분흡수"},
			{trigger:"used", cond:true, type:"attack", target:"op", repeat:"상대덱.count(tags, 포자)"},
			{trigger:"used", cond:true, type:"get", target:"self", value:"B6-AT-002"},
		]
	},
	/*"B6-SU-001":{
		name:{ "KOR":"기생 조종", "ENG":"" }, class:"버섯남자", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"], related:["tag:포자"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"기생조종"},
			{trigger:"used", cond:{v1:"상대덱.count(tags, 포자)", op:">=", v2:3}, type:"orgasm", target:"op"},
		]
	},
	"B6-SU-001-1":{
		parents:"B6-SU-001",
		name:{ "KOR":"조종당함", "ENG":"" }, class:"버섯남자", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:2,
		effect:[
			{trigger:"always", cond:true, type:"boundMustUse", target:"self"}
		]
	},*/
	"B6-SU-002":{
		name:{ "KOR":"영역 확장", "ENG":"" }, class:"버섯남자", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"], related:["B6-ST-001", "tag:포자"],
		effect:[
			{trigger:"used", cond:true, type:"state", target:"op", value:"B6-ST-001", byname:true},
			{trigger:"used", cond:true, type:"specialV08", value:1}
		]
	},
	"B6-SU-003":{
		name:{ "KOR":"정신 동기화", "ENG":"" }, class:"버섯남자", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"], related:["B6-SU-003-2"],
		effect:[
			{trigger:"used", cond:true, type:"state", target:"player", value:"B6-SU-003-1"}
		]
	},
	"B6-SU-003-1":{
		parents:"B6-SU-003",
		name:{ "KOR":"버섯 환각", "ENG":"" }, class:"버섯남자", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:2,
		effect:[
			{trigger:"none", cond:true, type:"text", value:{"KOR":"도전자의 모든 카드가 <b>[무리를 위하여]</b>로 보인다.", "ENG":""}}
		]
	},
	"B6-SU-003-2":{
		name:{ "KOR":"무리를 위하여", "ENG":"" }, class:"버섯남자", type:"???", rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{"KOR":"무리의 번식을 위하여 몸을 바쳐라.", "ENG":""}}
		]
	},

	"B6-PA-001+":{
		parents:"B6-PA-001",
		name:{ "KOR":"증식+", "ENG":"" }, class:"버섯남자", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "하드전용"], related:["B6-ST-001", "tag:포자"],
		expiration:"always", duration:Infinity, stack:1,
		effect:[
			{trigger:"always", cond:{v1:"라운드", op:">=", v2:2}, type:"maxUse", target:"self", value:1},
			{trigger:"turnEnd", cond:true, type:"state", target:"op", value:"B6-ST-001", byname:true},
		]
	},
	"B6-UC-001+":{
		parents:"B6-UC-001",
		name:{ "KOR":"부식즙+", "ENG":"" }, class:"버섯남자", type:"탈의", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true, related:["B6-ST-001", "tag:포자"],
		tags:["챔피언덱", "하드전용"],
		effect:[
			{trigger:"used", cond:true, type:"clothes", value:"uncloth"},
			{trigger:"used", cond:true, type:"state", target:"op", value:"B6-ST-001", byname:true, repeat:3},
		]
	},
	"B6-AT-001+":{
		parents:"B6-AT-001",
		name:{ "KOR":"포자정액 번식+", "ENG":"" }, class:"버섯남자", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "하드전용"], related:["B6-ST-001", "tag:포자"],
		effect:[
			{trigger:"used", cond:true, type:"state", target:"op", value:"B6-ST-001", byname:true, repeat:2},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:1},
		]
	},

	"B6-AT-003":{
		name:{ "KOR":"씨 뿌리기", "ENG":"" }, class:"버섯남자", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "클라이맥스"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"씨뿌리기"},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:2},
			{trigger:"used", cond:true, type:"get", target:"self", value:"B6-AT-001", repeat:3},
		]
	},
	"B6-AT-003+":{
		parents:"B6-AT-003",
		name:{ "KOR":"씨 뿌리기+", "ENG":"" }, class:"버섯남자", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "클라이맥스"], related:["B6-AT-001+"],
		effect:[
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:2},
			{trigger:"used", cond:true, type:"get", target:"self", value:"B6-AT-001+", repeat:3},
		]
	},

	//

	"B7-PA-001":{
		name:{ "KOR":"픽업 아티스트", "ENG":"" }, class:"금발양아치", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "노말전용"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"none", cond:true, type:"text", value:{"KOR":"낸 카드를 도전자가 미리 확인할 수 없다.", "ENG":""}},
			{trigger:"none", cond:true, type:"caption", value:{"KOR":"타입은 확인 가능하다.", "ENG":""}},
		]
	},
	"B7-PA-001-1":{
		parents:"B7-PA-001",
		name:{ "KOR":"행동불명", "ENG":"" }, class:"금발양아치", type:"-", rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:[],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{"KOR":"의중을 읽을 수가 없다.", "ENG":""}}
		]
	},
	"B7-UC-001":{
		name:{ "KOR":"능숙하게 벗기기", "ENG":"" }, class:"금발양아치", type:"탈의", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "금발양아치탈의"], related:["tag:금발양아치탈의"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"능숙하게벗기기"},
			{trigger:"used", cond:true, type:"clothes", value:"uncloth"},
			{trigger:"used", cond:true, type:"exciteL", target:"op", op:"add", value:-1}
		]
	},
	"B7-AT-001":{
		name:{ "KOR":"깊게 박아넣기", "ENG":"" }, class:"금발양아치", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "금발양아치공격"], related:["tag:금발양아치공격"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"깊게박아넣기"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:{v1:"상대.기록.이번.이벤트.자극함", op:">", v2:0}, adverb:"추가로", type:"attack", target:"op"},
		]
	},
	"B7-AT-002":{
		name:{ "KOR":"부드럽게 몸을 섞기", "ENG":"" }, class:"금발양아치", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "금발양아치공격"], related:["tag:금발양아치공격"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"부드럽게몸을섞기"},
			{trigger:"used", cond:"체위", type:"estrus", op:"add", value:2},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"B7-AT-003":{
		name:{ "KOR":"강제로 거칠게", "ENG":"" }, class:"금발양아치", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "금발양아치공격"], related:["tag:금발양아치공격"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"강제로거칠게"},
			{trigger:"used", cond:true, type:"attack", target:"op", repeat:"상대.기록.이번.사용.length"},
		]
	},
	"B7-AT-004":{
		name:{ "KOR":"가득 채워주기", "ENG":"" }, class:"금발양아치", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "금발양아치공격"], related:["tag:금발양아치공격"],
		effect:[
			{trigger:"used", cond:{v1:"자신.기록.이번.이벤트.절정", op:">", v2:0}, type:"estrus", op:"add", value:3},
			{trigger:"used", cond:true, type:"line", value:"가득채워주기"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	/*"B7-SU-001":{
		name:{ "KOR":"섞여드는 키스", "ENG":"" }, class:"금발양아치", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "금발양아치보조"], related:["tag:금발양아치보조"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"섞여드는키스"},
			{trigger:"used", cond:true, type:"lewd", op:"add", value:-2},
			{trigger:"used", cond:{v1:"자신.기록.이번.이벤트.흥분.증가", op:"==", v2:0}, type:"estrus", op:"add", value:2},
		]
	},*/
	"B7-SU-002":{
		name:{ "KOR":"스스럼없는 스킨십", "ENG":"" }, class:"금발양아치", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "금발양아치보조"], related:["tag:금발양아치보조"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"스스럼없는스킨십"},
			{trigger:"used", cond:true, type:"estrus", op:"add", value:"specialV06", maxValue:"5"},
		]
	},
	"B7-SU-003":{
		name:{ "KOR":"다리 벌리기", "ENG":"" }, class:"금발양아치", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "금발양아치보조"], related:["tag:금발양아치보조"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"다리벌리기"},
			{trigger:"used", cond:true, type:"estrus", op:"add", value:2},
			{trigger:"used", cond:{v1:"상대.기록.이번.이벤트.자극함", op:"==", v2:0}, adverb:"추가로", type:"estrus", op:"add", value:2},
		]
	},
	/*"B7-SU-004":{
		name:{ "KOR":"핥고 빨기", "ENG":"" }, class:"금발양아치", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "금발양아치보조"], related:["tag:금발양아치보조"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"핥고빨기"},
			{trigger:"used", cond:{v1:"발정", op:">", v2:1}, condOmit:true, type:"estrus", op:"add", value:2},
			{trigger:"used", cond:{v1:"발정", op:"<=", v2:1}, adverb:"대신", type:"estrus", op:"add", value:5},
		]
	},*/

	"B7-PA-001+":{
		parents:"B7-PA-001",
		name:{ "KOR":"픽업 아티스트+", "ENG":"" }, class:"금발양아치", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "하드전용"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"none", cond:true, type:"text", value:{"KOR":"도전자의 행동이 끝난 뒤, 치명적인 것을 골라서 낸다.", "ENG":""}}
		]
	},
	"B7-PA-001-1+":{
		parents:"B7-PA-001",
		name:{ "KOR":"행동불명+", "ENG":"" }, class:"금발양아치", type:"???", rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:[], related:["tag:금발양아치"],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{"KOR":"낼 카드가 아직 정해지지 않았다.", "ENG":""}}
		]
	},

	"B7-AT-005":{
		name:{ "KOR":"쾌락을 새겨주기", "ENG":"" }, class:"금발양아치", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "금발양아치클라이맥스", "클라이맥스"], related:["tag:금발양아치클라이맥스"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"쾌락을새겨주기"},
			{trigger:"used", cond:true, type:"orgasm", target:"op"},
		]
	},

	//

	"B8-PA-001":{
		name:{ "KOR":"굴복 조교", "ENG":"" }, class:"조교사", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "노말전용"], related:["tag:규율", "B8-PA-001-1"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"turnStart", cond:true, type:"state", target:"op", value:"randomCard(tags, 규율)"},
			{trigger:"none", cond:true, type:"caption", value:{"KOR":"규율에 승복하면 <b>[굴복의 증표]</b>를 받는다.", "ENG":""}}
		]
	},
	"B8-PA-001-1":{
		name:{ "KOR":"굴복의 증표", "ENG":"" }, class:"조교사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:[],
		expiration:"always", duration:Infinity,
		effect:[
			//{trigger:"none", cond:true, type:"text", value:{"KOR":"<b>[굴복의 증표]</b>가 4장 모이면 패배한다.", "ENG":""}},
			{trigger:"get", cond:{v1:"자신.상태.count(id, B8-PA-001-1)", op:">=", v2:4}, type:"defeat", target:"self"},
		]
	},


	"B8-PA-001-2":{
		name:{ "KOR":"반항하지 말 것", "ENG":"" }, class:"조교사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["규율"], related:["B8-PA-001-1"],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"turnEnd", cond:{v1:"자신.기록.이번.사용.count(type, 공격)", op:"==", v2:0}, type:"state", target:"self", value:"B8-PA-001-1", byname:true},
			{trigger:"turnEnd", cond:{v1:"자신.기록.이번.사용.count(type, 공격)", op:"!=", v2:0}, type:"shake"},
		]
	},
	"B8-PA-001-3":{
		name:{ "KOR":"판단하지 말 것", "ENG":"" }, class:"조교사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["규율"], related:["B8-PA-001-1"],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"turnEnd", cond:{v1:"자신.기록.이번.사용.length", op:"==", v2:1}, type:"state", target:"self", value:"B8-PA-001-1", byname:true},
			{trigger:"turnEnd", cond:{v1:"자신.기록.이번.사용.length", op:"!=", v2:1}, type:"shake"},
		]
	},
	"B8-PA-001-4":{
		name:{ "KOR":"고통을 몸에 새길 것", "ENG":"" }, class:"조교사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["규율"], related:["B8-PA-001-1"],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"turnEnd", cond:{v1:"자기덱.count(type, 패널티)", op:">", v2:0}, type:"state", target:"self", value:"B8-PA-001-1", byname:true},
			{trigger:"turnEnd", cond:{v1:"자기덱.count(type, 패널티)", op:"==", v2:0}, type:"shake"},
		]
	},
	"B8-PA-001-5":{
		name:{ "KOR":"명령에 순종적일 것", "ENG":"" }, class:"조교사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["규율"], related:["B8-PA-001-1"],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"turnEnd", cond:{v1:"음란", op:"<=", v2:3}, type:"state", target:"self", value:"B8-PA-001-1", byname:true},
			{trigger:"turnEnd", cond:{v1:"음란", op:">", v2:3}, type:"shake"},
		]
	},
	"B8-PA-001-6":{
		name:{ "KOR":"자신의 위치를 알 것", "ENG":"" }, class:"조교사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["규율"], related:["B8-PA-001-1"],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"turnEnd", cond:{v1:"자신.흥분", op:">", v2:0}, type:"state", target:"self", value:"B8-PA-001-1", byname:true},
			{trigger:"turnEnd", cond:{v1:"자신.흥분", op:"==", v2:0}, type:"shake"},
		]
	},

	"B8-UC-001":{
		name:{ "KOR":"복장 교정", "ENG":"" }, class:"조교사", type:"탈의", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"], related:["B8-UC-001-1"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"복장교정"},
			{trigger:"used", cond:true, type:"clothes", value:"uncloth"},
			{trigger:"used", cond:true, type:"estrus", op:"add", value:2},
			{trigger:"used", cond:true, type:"get", target:"op", value:"B8-UC-001-1"},
		]
	},
	"B8-UC-001-1":{
		name:{ "KOR":"필사적인 저항", "ENG":"" }, class:"조교사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["챔피언덱"], related:["B8-PA-001-1"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"필사적인저항"},
			{trigger:"used", cond:true, type:"remove", target:"self", info:{target:"자신.상태.selectCards(id, B8-PA-001-1, 2)"}},
		]
	},

	"B8-AT-001":{
		name:{ "KOR":"쾌락 조교", "ENG":"" }, class:"조교사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"쾌락조교"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:{v1:"상대.흥분", op:"==", v2:0}, adverb:"추가로", type:"attack", target:"op"},
		]
	},
	"B8-AT-002":{
		name:{ "KOR":"약물 조교", "ENG":"" }, class:"조교사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"], related:["tag:약물"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"약물조교"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"state", target:"op", value:"randomCard(tags, 약물)"},
		]
	},
	"B8-AT-003":{
		name:{ "KOR":"고문 조교", "ENG":"" }, class:"조교사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "노말전용"], related:["패널티"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"고문조교"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"state", target:"op", value:"B8-AT-003-1"},
		]
	},
	"B8-AT-003-1":{
		parents:"B8-AT-003",
		name:{ "KOR":"고문 후유증", "ENG":"" }, class:"조교사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:[], related:["패널티"],
		expiration:"active", duration:1,
		effect:[
			{trigger:"turnStart", cond:true, type:"get", target:"self", value:"randomCard(type, 패널티)"},
		]
	},
	"B8-SU-001":{
		name:{ "KOR":"희망 고문", "ENG":"" }, class:"조교사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"], related:["B8-PA-001-1"],
		effect:[
			{trigger:"used", cond:true, type:"excite", target:"self", op:"add", value:-5},
			{trigger:"used", cond:{v1:"자신.기록.이번.이벤트.흥분.감소", op:">", v2:0}, type:"state", target:"op", value:"B8-PA-001-1", byname:true},
		]
	},
	"B8-SU-002":{
		name:{ "KOR":"성감대 조교", "ENG":"" }, class:"조교사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"], related:["B8-PA-001-1"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"성감대조교"},
			{trigger:"used", cond:true, type:"estrus", op:"add", value:2},
			{trigger:"used", cond:true, type:"state", target:"self", value:"B8-SU-002-1"},
		]
	},
	"B8-SU-002-1":{
		parents:"B8-SU-002",
		name:{ "KOR":"개발 완료", "ENG":"" }, class:"조교사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:3,
		effect:[
			{trigger:"expired", cond:true, type:"state", target:"op", value:"B8-PA-001-1", byname:true}
		]
	},
	"B8-SU-003":{
		name:{ "KOR":"채찍질", "ENG":"" }, class:"조교사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"], related:["B8-PA-001-1"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"채찍질"},
			{trigger:"used", cond:{v1:"발정", op:"<=", v2:2}, type:"state", target:"op", value:"B8-PA-001-1", byname:true},
			{trigger:"used", cond:true, type:"estrus", op:"add", value:3},
		]
	},

	"B8-PA-001+":{
		parents:"B8-PA-001",
		name:{ "KOR":"굴복 조교+", "ENG":"" }, class:"조교사", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "하드전용"], related:["tag:규율", "B8-PA-001-1"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"turnStart", cond:true, type:"state", target:"op", value:"randomCard(tags, 규율)", repeat:2},
			{trigger:"none", cond:true, type:"caption", value:{"KOR":"규율에 승복하면 <b>[굴복의 증표]</b>를 받는다.", "ENG":""}}
		]
	},
	"B8-UC-001+":{
		parents:"B8-UC-001",
		name:{ "KOR":"복장 교정+", "ENG":"" }, class:"조교사", type:"탈의", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "하드전용"], related:["B8-UC-001-1"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"복장교정"},
			{trigger:"used", cond:true, type:"clothes", value:"uncloth"},
			{trigger:"used", cond:true, type:"estrus", op:"add", value:2},
		]
	},
	"B8-AT-002+":{
		parents:"B8-AT-002",
		name:{ "KOR":"약물 조교+", "ENG":"" }, class:"조교사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "하드전용"], related:["tag:약물", "B8-PA-001-1"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"약물조교"},
			{trigger:"used", cond:true, type:"state", target:"op", value:"randomCard(tags, 약물)", repeat:"상대.상태.count(id, B8-PA-001-1)"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"B8-AT-003+":{
		parents:"B8-AT-003",
		name:{ "KOR":"고문 조교+", "ENG":"" }, class:"조교사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "하드전용"], related:["패널티"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"고문조교"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"state", target:"op", value:"B8-AT-003-1+"},
		]
	},
	"B8-AT-003-1+":{
		parents:"B8-AT-003",
		name:{ "KOR":"고문 후유증", "ENG":"" }, class:"조교사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:[], related:["패널티"],
		expiration:"active", duration:2,
		effect:[
			{trigger:"turnStart", cond:true, type:"get", target:"self", value:"randomCard(type, 패널티)"},
		]
	},
	"B8-SU-002+":{
		parents:"B8-SU-002",
		name:{ "KOR":"성감대 조교+", "ENG":"" }, class:"조교사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "하드전용"], related:["B8-PA-001-1"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"성감대조교"},
			{trigger:"used", cond:true, type:"estrus", op:"add", value:2},
			{trigger:"used", cond:true, type:"state", target:"op", value:"B8-PA-001-1", byname:true},
		]
	},

	"B8-AT-004":{
		name:{ "KOR":"징벌", "ENG":"" }, class:"조교사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "클라이맥스"], related:["B8-PA-001-1"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"징벌"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"state", target:"op", value:"B8-PA-001-1", byname:true}
		]
	},

	//

	"BC-UC-001":{
		name:{ "KOR":"방황", "ENG":"" }, class:"중립", type:"탈의", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "챌린지전용"],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"첫 라운드는 휴식한다.", "ENG":"" }},
		]
	},
	"BC-AT-001":{
		name:{ "KOR":"발버둥", "ENG":"" }, class:"중립", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "챌린지전용", "클라이맥스"],
		effect:[
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},

	"BC1-PA-001":{
		name:{ "KOR":"고블린 소굴", "ENG":"" }, class:"고블린즈", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "챌린지전용"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"turnEnd", cond:true, type:"orgasmL", target:"self", op:"add", value:"자신.남은절정"},
		]
	},

	"BC2-PA-001":{
		name:{ "KOR":"시간낭비", "ENG":"" }, class:"마을사람", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "챌린지전용"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"turnStart", cond:true, type:"maxRound", value:-5},
		]
	},

	"BC3-PA-001":{
		name:{ "KOR":"초재생", "ENG":"" }, class:"촉수슬라임", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "챌린지전용"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"turnStart", cond:true, type:"excite", target:"self", op:"set", value:0},
		]
	},

	"BC5-PA-001":{
		name:{ "KOR":"자멸", "ENG":"" }, class:"타우로스", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "챌린지전용"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"always", cond:true, type:"orgasmBan", target:"self"},
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"시간 초과 시 결투에서 패배한다.", "ENG":"" }},
		]
	},
	"BC5-AT-001":{
		parents:"B5-AT-003",
		name:{ "KOR":"폭주 섹스", "ENG":"" }, class:"타우로스", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "챌린지전용", "클라이맥스"],
		effect:[
			{trigger:"used", cond:true, type:"estrus", op:"add", value:2},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},

	"BC6-PA-001":{
		name:{ "KOR":"무차별 증식", "ENG":"" }, class:"버섯남자", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "챌린지전용"], related:["BC6-PA-001-1"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"turnStart", cond:true, type:"bound", info:{target:"상대덱.selectCards(all, 포자제외, 1)"}, target:"op", value:"BC6-PA-001-1"},
		]
	},
	"BC6-PA-001-1":{
		name:{ "KOR":"치명 포자", "ENG":"" }, class:"버섯남자", type:"패널티", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:[],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"turnEnd", inDeck:true, cond:true, type:"defeat"},
		]
	},

	"BC8-PA-001":{
		name:{ "KOR":"절정 금지", "ENG":"" }, class:"조교사", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "챌린지전용"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"always", cond:true, type:"suppression", target:"self"},
		]
	},
	"BC8-UC-001":{
		name:{ "KOR":"방황", "ENG":"" }, class:"중립", type:"탈의", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "챌린지전용"],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"첫 라운드는 휴식한다.", "ENG":"" }},
		]
	},
	"BC8-AT-001":{
		name:{ "KOR":"발버둥", "ENG":"" }, class:"중립", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "챌린지전용", "클라이맥스"],
		effect:[
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
}

const cardSave = {};

Object.keys(cardDB).forEach(id => {
	cardDB[id].id = id;
	cardDB[id].name.KOR = cardDB[id].name.KOR.replace(/ /g, '&nbsp;');
	if(cardDB[id].tags.includes("시전")) {
		cardDB[id].effect.push({trigger:"selected", keepLine:true, cond:true, type:"maxUse", target:"self", value:1})
	}
	if(cardDB[id].related) {
		let keywordIds = [];
		cardDB[id].related.filter(related => related.includes("-")).forEach(relatedId => {
			keywordIds.push(`id:${relatedId}`);
		});
		cardDB[id].keywords = cardDB[id].keywords?[...keywordIds, ...cardDB[id].keywords]:keywordIds;
	}

	if((cardDB[id].type == "특성" && id != "DA-NT-ALL-000") || cardDB[id].tags.includes("덱빌딩") || cardDB[id].tags.includes("기본제조") || (cardDB[id].tags.includes("기본마술") && cardDB[id].tags.includes("즉발 마술")) || cardDB[id].tags.includes("기본정수") || cardDB[id].tags.includes("보너스")) {
		cardSave[id] = { normal:{ select:0, win:0, clearList:{} }, hard:{ select:0, win:0, clearList:{} }, challenge:{} };
		if(cardDB[id].type == "시련") {
			cardSave[id].normal.success = 0;
			cardSave[id].hard.success = 0;
		}
	}
});

function generateCardExcel() {
    // 데이터 필터링
    const filteredCards = Object.entries(cardDB).filter(([id, card]) => (
        (card.tags && card.tags.includes("덱빌딩")) || 
        (card.type === "특성" && card.owner !== 0)
    ));

    // 엑셀 데이터 준비
    const excelData = [];
    let previousClass = "";

    filteredCards.forEach(([id, card]) => {
        if (card.class !== previousClass) {
            if (previousClass !== "") {
                excelData.push({ name: "", class: "", balance: "", mechanism: "", others: "" }); // 공백 행 추가
            }
            previousClass = card.class;
        }

        excelData.push({
            name: card.name[language]?.replace(/&nbsp;/g, " ") || "", // &nbsp;를 공백으로 치환
            class: card.class || "",
            balance: "", // 드롭다운 비워둠
            mechanism: "", // 체크박스 비워둠
            others: "" // 체크박스 비워둠
        });
    });

    // 엑셀 파일 생성
    const workbook = XLSX.utils.book_new();
    const worksheetData = [
        ["이름", "클래스", "밸런스", "매커니즘", "기타"],
        ...excelData.map(card => [card.name, card.class, card.balance, card.mechanism, card.others])
    ];
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Cards");

    // 파일 다운로드
    XLSX.writeFile(workbook, "card_data.xlsx");
}
