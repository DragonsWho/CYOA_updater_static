const line = {
	"테스트":[
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"테스트 용 메시지입니다.<br>속도를 확인하세요.",
				},
			]
		}
	],
//###################################################################################################################################################################################
	"조우":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"고블린즈"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"키킥... 키엑!<br>새로운 암컷이다...!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"마을사람"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"으흐흐, 이번에도 좋은 여자잖아?",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"촉수슬라임"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"*꾸르륵... 꾸물꾸물...*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"악동"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"안녕, 누나!<br>나랑 놀자!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"타우로스"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"음머어어어!!!<br>그르르...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"버섯남자"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"그그그극... 고고곡...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"금발양아치"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"오, 너 꽤 귀여운데?<br>내 여자가 될 생각 없어?",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"조교사"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"자세가 안된 암컷이로군.<br>교육을 시작하겠다.",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"고블린즈"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"키엑... 새로운 씨받이다...!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"마을사람"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"부힛, 이번에야말로 내 것으로 만들어주마~",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"촉수슬라임"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"*크르릉... 그르르륵...*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"악동"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"누나, 오늘도 누나랑 야한 거 하고 싶어!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"타우로스"}], 
			lineList:[
				{
					cond:true, pos:0, effect:"shake",
					text:"음머어어어!!!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"버섯남자"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"*어째서 무리를 거부하는 것이냐?*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"금발양아치"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"나를 이렇게까지 거부한 건,<br>네가 처음이야.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"조교사"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"조교의 성과를 확인해보마.",
				},
			]
		},
	],

	"등장":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}], 
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, keepOriginal:true,
					text:"결투 준비 완료입니다.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, keepOriginal:true,
					text:"여기서 하는 거야...?<br>보는 눈이 너무 많잖아?!",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, keepOriginal:true,
					text:"상냥하게 부탁드려요.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, keepOriginal:true,
					text:"못 참겠어... 얼른 시작하자♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}], 
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, keepOriginal:true,
					text:"착정을 시작하겠습니다.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, keepOriginal:true,
					text:"또 이 시간인가...<br>어떻게든 버텨보겠어.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, keepOriginal:true,
					text:"오늘도 신세질게요.<br>잘 부탁해요.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, keepOriginal:true,
					text:"내 보지는... 이미 준비됐어♡",
				},
			]
		},
	],

	"패배":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"고블린즈"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"킥킥.<br>암컷 약하다...!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"마을사람"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"우힛, 멈추지 말고 절정해라~!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"촉수슬라임"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"*꿀렁꿀렁... 주르륵...*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"악동"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"벌써 져버린거야?<br>어른이면서 한심하네~",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"타우로스"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"후욱, 후욱...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"버섯남자"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"*새로운 숙주여, 무리를 위해 번식하라.*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"금발양아치"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"10점 만점에 4점.<br>시시한 보지였어.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"조교사"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"이것으로 네 위치를 알았겠지.",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"고블린즈"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"키킥, 얘들아...<br>마음껏 범해랏...!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"마을사람"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"나보다 쎈 여자를 굴복시키는 건<br>언제나 최고야~!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"촉수슬라임"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"*그르렁... 그아으...*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"악동"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"누나는 나만의 장난감이야.<br>영원히.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"타우로스"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"후욱, 후욱...<br>프르르릉...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"버섯남자"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"*무리의 확장을 위한,<br>모판이 되거라.*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"금발양아치"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"드디어 함락이네.<br>건방지게 튕기기는.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"조교사"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"끝났군.<br>출하를 준비해라.",
				},
			]
		},
	],

	"플레이어-패배":[
		{
			priority:2, cond:true, 
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, keepOriginal:true,
					text:"패배했습니다♡<br>성노예가 되겠습니다♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, keepOriginal:true,
					text:"살려♡ 살려줘엇...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, keepOriginal:true,
					text:"될게요...<br>성노예가 될게요...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, keepOriginal:true,
					text:"이렇게 기분 좋은거...<br>버틸 수 있을 리가 없어...♡",
				},
			]
		},
		{
			priority:0, cond:["and", "특수승리"], 
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, keepOriginal:true,
					text:"... ...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, keepOriginal:true,
					text:"살려♡ 살려줘엇...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, keepOriginal:true,
					text:"될게요...<br>성노예가 될게요...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, keepOriginal:true,
					text:"이렇게 기분 좋은거...<br>버틸 수 있을 리가 없어...♡",
				},
			]
		},
	],

	"승리":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"고블린즈"}], 
			lineList:[
				{
					cond:["or", {v1:"특수승리", op:"!=", v2:true}, {v1:"챔피언.절정", op:">=", v2:5}], pos:0,
					text:"고블린, 동료...<br>이제 없다...",
				},
				{
					cond:["and", "특수승리", {v1:"챔피언.절정", op:"<", v2:5}], pos:0,
					text:"무서운... 암컷...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"마을사람"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"오옷...<br>쥐어 짜인다앗♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"촉수슬라임"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"*푸쉬쉭... 보글...*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"악동"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"누나는...♡<br>강하구나...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"타우로스"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"후욱... 후욱...<br>*털썩*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"버섯남자"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"*비틀, 비틀...<br>털썩*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"금발양아치"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"큭... 더더욱 갖고 싶어졌어.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"조교사"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"산드레아님, 용서해주십시오...",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"고블린즈"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"후퇴, 후퇴해라앗...",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"마을사람"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"오옥...♡<br>더는 안 나와...♡",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"촉수슬라임"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"*푸쉬쉭... 부글부글...*",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"악동"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"안돼애...<br>모아둔 정기가 전부...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"타우로스"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"그오오... 쿠오...<br>*털썩*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"버섯남자"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"*인간이여...<br>이건 계약과 다르지 않은가...*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"금발양아치"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"이 내가...<br>고작 창녀한테...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"조교사"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"이럴 순 없다...<br>내가 조교에 실패해...?",
				},
			]
		},
	],

	"플레이어-승리":[
		{
			priority:1, cond: {v1:"플레이어.표정", op:"in", v2:["corrupted"]}, 
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, keepOriginal:true,
					text:"사정 확인 완료♡<br>수고하셨습니다.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, keepOriginal:true,
					text:"조루 자지♡<br>허접하네♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"},], pos:1, keepOriginal:true,
					text:"저도 정말 기분 좋았어요♡<br>수고하셨어요♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, keepOriginal:true,
					text:"일어나...<br>나는 아직 만족하지 못했다구♡",
				},
			]
		},
		{
			priority:0, cond: true, 
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, keepOriginal:true,
					text:"임무를 완수했습니다.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, keepOriginal:true,
					text:"끝났어...<br>이겼다, 다행이야...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, keepOriginal:true,
					text:"이번엔 제가 이겼네요.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, keepOriginal:true,
					text:"간만에 즐길 수 있었어♡",
				},
			]
		},
	],
//###################################################################################################################################################################################

	"플레이어-시간초과":[
		{
			priority:1, cond:true, 
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, keepOriginal:true,
					text:"한계... 한계입니다...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, keepOriginal:true,
					text:"더... 더는 못 버티겠어...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, keepOriginal:true,
					text:"저는... 깨달았어요...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, keepOriginal:true,
					text:"이젠 한계야... 못 참겠어♡",
				},
			]
		},
	],
	"플레이어-항복":[
		{
			priority:1, cond:true, 
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, keepOriginal:true, portrait:"corrupted", effect:"diffusion", keepPort:true,
					text:"저는 허접보지 암컷,<br>자지님께 패배를 선언합니다♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, keepOriginal:true, portrait:"corrupted", effect:"diffusion", keepPort:true,
					text:"건방지게 굴어서 미안해엣♡<br>요, 용서해줘♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, keepOriginal:true, portrait:"corrupted", effect:"diffusion", keepPort:true,
					text:"암컷은 자지님을 이길 수 없는 것이...<br>당연해요♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, keepOriginal:true, portrait:"corrupted", effect:"diffusion", keepPort:true,
					text:"패배 선언할래♡ 져버렸다♡<br>인생 종료♡",
				},
			]
		},
	],


	"모르베인-등장":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true, name:"모르베인",
					text:"하하하!!<br>이 순간만을 기다려 왔다!",
				}
			]
		}
	],

//###################################################################################################################################################################################

	"사정준비":[
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"고블린즈"}], pos:0,
					text:"케륵♡ 싼다앗♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"마을사람"}], pos:0,
					text:"으윽...♡ 나온다♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"촉수슬라임"}], pos:0,
					text:"*부르르...*",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"타우로스"}], pos:0,
					text:"후욱♡ 후욱♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"악동"}], pos:0,
					text:"쌀게♡ 누나♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"버섯남자"}], pos:0,
					text:"*부르르...*",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"금발양아치"}], pos:0,
					text:"이 년, 명기잖아♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"조교사"}], pos:0,
					text:"그럭저럭 쓸만하군...",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"고블린즈"}], pos:0,
					text:"캬악, 못참겠다♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"마을사람"}], pos:0,
					text:"오홋...♡ 조이는데♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"촉수슬라임"}], pos:0,
					text:"*부르르...*",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"타우로스"}], pos:0,
					text:"후욱♡ 후욱♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"악동"}], pos:0,
					text:"누나 보지, 기분 좋아♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"버섯남자"}], pos:0,
					text:"*부르르...*",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"금발양아치"}], pos:0,
					text:"하, 이건 못 참겠네...♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"조교사"}], pos:0,
					text:"윽... 제법이다.",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"고블린즈"}], pos:0,
					text:"케륵... 나온닷♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"마을사람"}], pos:0,
					text:"우홋♡ 싼다앗♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"촉수슬라임"}], pos:0,
					text:"*부르르...*",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"타우로스"}], pos:0,
					text:"후욱♡ 후욱♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"악동"}], pos:0,
					text:"으윽♡ 잠깐만 누나♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"버섯남자"}], pos:0,
					text:"*부르르...*",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"금발양아치"}], pos:0,
					text:"젠장, 기분 좋아♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"조교사"}], pos:0,
					text:"크윽... 이럴수가...",
				},
			]
		},

	],

	"패배사정":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"고블린즈"}], pos:0,
					text:"캬악, 쥐어짜인다앗♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"마을사람"}], pos:0,
					text:"우호옷♡ 말도 안되게 기분좋앗♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"촉수슬라임"}], pos:0,
					text:"*부들부들...*",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"타우로스"}], pos:0,
					text:"후오오오옥♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"악동"}], pos:0,
					text:"아, 안돼♡<br>음마는 난데...♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"버섯남자"}], pos:0,
					text:"*이 육체는...<br>이제 못 쓰겠군...*",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"금발양아치"}], pos:0,
					text:"크윽♡ 여태 맛본 여자 중 최고잖아앗♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"조교사"}], pos:0,
					text:"암컷 노예주에에엣♡",
				},
			]
		},
	],

	"사정":[
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*뷰릇♡ 뷰르릇♡*",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*뷰르릇♡ 뷰륵♡*",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*뷰르르륵♡ 뷰르륵♡*",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*퓨륵♡ 퓨르릇♡*",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*뷰륵♡ 뷰르륵♡*",
				},
			]
		},
	],

	"고블린즈-교체":[
		{
			priority:7, cond:{v1:"챔피언.절정", op:"==", v2:1}, 
			lineList:[
				{
					cond:true, pos:0,
					text:"케케, 내 차례다.",
				}
			]
		},
		{
			priority:6, cond:{v1:"챔피언.절정", op:"==", v2:2}, 
			lineList:[
				{
					cond:true, pos:0,
					text:"캬륵... 암컷 범한다!",
				}
			]
		},
		{
			priority:5, cond:{v1:"챔피언.절정", op:"==", v2:3}, 
			lineList:[
				{
					cond:true, pos:0,
					text:"비켜, 멍청아!",
				}
			]
		},
		{
			priority:4, cond:{v1:"챔피언.절정", op:"==", v2:4}, 
			lineList:[
				{
					cond:true, pos:0,
					text:"캭.<br>암컷 하나, 지배 못하는 쓸모없는 것들.",
				}
			]
		},
		{
			priority:3, cond:[{v1:"모드", op:"==", v2:1}, {v1:"챔피언.절정", op:"==", v2:5}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"이젠, 내 차례다.",
				}
			]
		},
		{
			priority:2, cond:[{v1:"모드", op:"==", v2:1}, {v1:"챔피언.절정", op:"==", v2:6}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"쉬지 말고 교대해랏!",
				}
			]
		},
		{
			priority:1, cond:[{v1:"모드", op:"==", v2:1}, {v1:"챔피언.절정", op:"==", v2:7}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"캬캬... 오래 기다렸다.",
				}
			]
		},
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:0,
					text:"케륵... 다시 내 차례닷!",
				}
			]
		},
	],

//###################################################################################################################################################################################

	"고블린정액-1":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"케케, 암컷에게 싼다.",
				},
			]
		},
	],

	"옷찢기":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"킥킥, 거추장스러운 옷은 전부 벗겨랏...!",
				},
			]
		},
	],
	"가슴쥐어짜기":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*쭈물쭈물 꽈악*",
				},
			]
		},
	],
	"고블린삽입":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"고블린 아이를 임신해랏!",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"육변기 보지에 정액 싼닷!",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"암컷 보지,<br>정액 버리는 구멍으로 쓴다!",
				},
			]
		},
	],


	"딥스롯":[
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["normal", "excited", "blank"]}],
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"으브읍..!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}],
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"으브읍..♡",
				},
			]
		},
	],

	"탑승":[
		{
			priority:1, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"이랴, 이럇.<br>앞으로 가라!",
				},
				{
					cond:true, pos:0, effect:"shake",
					text:"*찰싹♡ 찰싹♡*",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, effect:"shake", portrait:"ecstasy2",
					text:"가겠습니다♡<br>앞으로... 가겠습니다♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, effect:"shake", portrait:"ecstasy2",
					text:"아흑♡ 그만둬♡<br>모, 몸이... 멋대로♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, effect:"shake", portrait:"ecstasy2",
					text:"아흑♡ 갈게요♡<br>앞으로... 갈게요♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, effect:"shake", portrait:"ecstasy2",
					text:"아흑♡ 알았어♡<br>앞으로... 갈테니까♡",
				},
				{
					cond:true, pos:0,
					text:"캬캬캬! 완전 가축이다!",
				},
			]
		},
	],

	"고블린즈-이벤트-개전":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"케케케... 암컷 몸, 음란하다...<br>정액 변기로 삼고 싶다!",
				},
				{
					cond:true, pos:1,
					text:"알겠습니다.<br>지금부터 고블린님들의 정액 변기가 되겠습니다.",
				},
				{
					cond:true, pos:0,
					text:"오오, 스스로 벌리고 있다!<br>이 암컷 이미 정신은 육변기다, 캬캬!",
				},
				{
					cond:true, pos:1,
					text:"마음껏 사용해주십시오.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"불결하고... 야만적인 것들...<br>내 몸에 손 대지 마!",
				},
				{
					cond:true, pos:0,
					text:"케케케... 결투 거부하는거냐 암컷.<br>그럼 기권이다. 즉시 패배닷.",
				},
				{
					cond:true, pos:1,
					text:"그, 그런 건 아니야!",
				},
				{
					cond:true, pos:1,
					text:"으으... 알았어.<br>빨리 끝내줘...",
				},
				{
					cond:true, pos:1,
					text:"(젠장, 젠장... 내가 고블린과 섹스를...<br>그치만... 결투니까 어쩔 수 없나...)",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"케케케... 암컷 몸, 음란하다...<br>박고 싶다. 보지 보여줘라!",
				},
				{
					cond:true, pos:1,
					text:"네~!<br>제 보지는 이렇게 생겼어요.",
				},
				{
					cond:true, pos:0,
					text:"캬캬! 부끄러운 자세 하면서,<br>수치를 모르는 변태다!",
				},
				{
					cond:true, pos:1,
					text:"네? 부탁 받아서 보지를 벌리는 것이...<br>왜 부끄러운 자세인가요?",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"케케케... 암컷 몸, 음란하다...<br>머리채 붙잡고, 뒤에서 쑤컹쑤컹 박아줄 거다!",
				},
				{
					cond:true, pos:1,
					text:"어머, 야성적이야♡<br>그리고? 그 뒤론?",
				},
				{
					cond:true, pos:0,
					text:"앞구멍 뒷구멍... 전부 동시에 박으면서,<br>온 몸에 정액 갈겨준다!",
				},
				{
					cond:true, pos:1,
					text:"하아♡ 정말 멋져♡<br>듣는 것만으로 젖어버렸어♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"캬캬! 또 만났다!<br>암컷, 벌릴 준비됐나?",
				},
				{
					cond:true, pos:1,
					text:"예, 물론입니다.",
				},
				{
					cond:true, pos:1,
					text:"보지와 입, 애널까지 전부 준비되었습니다.",
				},
				{
					cond:true, pos:0,
					text:"캬악, 못 참겠다!<br>당장 덮친다!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"케케, 암컷 또 만났다.<br>오늘이야말로 육변기로 만든닷!",
				},
				{
					cond:true, pos:1,
					text:"또 네놈들이야?<br>할 때마다 온 몸에 정액 냄새가 배서 싫은데...",
				},
				{
					cond:true, pos:0,
					text:"말 많다!<br>빨리 벌리기나 해라!",
				},
				{
					cond:true, pos:1,
					text:"하아... 그래 알았어.<br>별 수 있나, 범해지는 게 내 역할이니...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"고블린님들 덕분에 더 잘 느끼게 됐어요.",
				},
				{
					cond:true, pos:1,
					text:"오늘은 자지로 자궁구를 문질러 주는 거랑...<br>질식 직전까지 목구멍에 박아주시면 좋겠어요♡",
				},
				{
					cond:true, pos:0,
					text:"캬악, 닥쳐라 변태년아!<br>우리 마음대로 범할거다!",
				},
				{
					cond:true, pos:1,
					text:"앗, 그러네요.<br>멋대로 요구사항 같은 걸 말해서 죄송해요...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"기다렸잖아♡<br>너희 자지 없이는 이제 하루도 못 살겠더라구♡",
				},
				{
					cond:true, pos:1,
					text:"저번에 목조르면서 한게 진짜 좋았는데,<br>오늘도 해주려나♡",
				},
				{
					cond:true, pos:0,
					text:"캬악, 암컷 여유로운 태도가 짜증난다.<br>엎드려 질질 싸며 빌게 해주마!",
				},
				{
					cond:true, pos:1,
					text:"그러는 게 좋아?<br>그거라면 지금도 해줄 수 있는데♡",
				},
			]
		},
	],
	"고블린즈-이벤트-흥분":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"캬캬, 보짓물 줄줄 흐른다.<br>강제로 범해지면서 느껴버린거냐!",
				},
				{
					cond:true, pos:1,
					text:"그렇습니다.<br>분비되는 애액은 제가 흥분했다는 증거입니다.",
				},
				{
					cond:true, pos:0,
					text:"이 변태 암컷.<br>고블린 자지가, 그렇게 기분 좋았냐!",
				},
				{
					cond:true, pos:1,
					text:"네, 맞습니다.<br>저는 당신들의 자지로 느껴 절정했습니다.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"거, 거짓말... 내가 고블린 따위의 자지로...<br>느꼈을 리가 없어...",
				},
				{
					cond:true, pos:0,
					text:"캬캬, 인정해라!<br>암컷 꼴사납게 절정했다!",
				},
				{
					cond:true, pos:0,
					text:"허접하다, 약하다!<br>보지에 자지 박히면 아무 것도 못하는 패배자다!",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"웃기지 마!<br>한 번 가버렸을 뿐이야!!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"하앙♡ 고블린님의 자지는,<br>이렇게 기분 좋은 것이었나요.",
				},
				{
					cond:true, pos:0,
					text:"캬캬, 거칠게 윤간 당하면서 좋다고 한닷.<br>이 년 완전 마조 변태다!",
				},
				{
					cond:true, pos:1,
					text:"네? 마조... 변태인가요...?",
				},
				{
					cond:true, pos:1,
					text:"그렇구나,<br>저는 마조 변태예요~♪",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"크크, 암컷 말하는 것과 다르게 허접하다.<br>금방 가버렸다.",
				},
				{
					cond:true, pos:1,
					text:"너희 자지가 기분 좋은 걸 어떡해♡",
				},
				{
					cond:true, pos:1,
					text:"그치만, 이제부터 시작이야.<br>날 굴복시키는 건 어려울 걸♡",
				},
				{
					cond:true, pos:0,
					text:"케케, 입만 살았다!<br>양쪽 구멍에 더 깊숙이 박아준다!",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"아앙♡ 들어와♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"보고합니다.<br>현재 문지르시는 곳이 제 성감대입니다.",
				},
				{
					cond:true, pos:0,
					text:"케케케, 절정하며 질질 싸버려랏!",
				},
				{
					cond:true, pos:1,
					text:"알겠습니다.<br>명령대로 절정에 맞춰 방뇨하겠습니다.",
				},
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy", keepPort:true,
					text:"오옥♡",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"*쪼르르륵...*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"크크, 변태년.<br>또 금방 절정해버렸다!",
				},
				{
					cond:true, pos:1,
					text:"닥쳐.<br>암컷이면 원래 이 정도에 절정하는 거야.",
				},
				{
					cond:true, pos:0,
					text:"캬하하, 이제 스스로 암컷이라고 인정했다!",
				},
				{
					cond:true, pos:1,
					text:"무슨 소릴 하는 거야?<br>나는 원래 암컷... 응? 어라?",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"하앙♡ 방금 진짜 기분 좋았어요.",
				},
				{
					cond:true, pos:0,
					text:"캬캬! 이런 변태 암컷 봤나!<br>구멍이 벌써 정액으로 찼다!",
				},
				{
					cond:true, pos:1,
					text:"네? 감사합니다.<br>그치만 아직 더 받을 수 있어요♡",
				},
				{
					cond:true, pos:0,
					text:"좋아! 뒷구멍도 더 쓴다!<br>암컷은 구멍이 많아서 좋다!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"암컷 구멍, 가버릴 때 완전 조인다!<br>완전 육변기로 태어난 몸이다!",
				},
				{
					cond:true, pos:1,
					text:"이게 정말 그리웠어♡<br>날 부숴줘♡ 더 깊이, 더 세게♡",
				},
				{
					cond:true, pos:0,
					text:"캬악, 여기서 더 조이는거냐!<br>혼자선 안된다, 얘들아 다 덤벼라!",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"하앙♡ 전부 박아줘♡",
				},
			]
		},
	],
	"고블린즈-이벤트-타락":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"캬캬! 암컷 쓰러졌다!<br>부들부들 떨고 있다!",
				},
				{
					cond:true, pos:1,
					text:"아직...<br>더 사용하실 수... 있습니다♡",
				},
				{
					cond:true, pos:0,
					text:"제대로 말도 못하는 주제에 크크.<br>앞구멍, 뒷구멍 동시에 찔러준닷!",
				},
				{
					cond:true, pos:1,
					text:"네, 애널도 사용... 가능합니다♡<br>더 깊이 삽입해주십시오♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"암컷 보지, 질척거리면서 쪼인다.<br>너 구멍 기분좋다.",
				},
				{
					cond:true, pos:1,
					text:"젠장, 몸이 멋대로... 느껴버리고 있어♡<br>싫어... 가고 싶지 않아♡",
				},
				{
					cond:true, pos:0,
					text:"캬캬, 싫다고 말해도 보지는 줄줄 즙 흘린다.<br>암컷은 결국 정액에 길들여진다!",
				},
				{
					cond:true, pos:1,
					text:"고블린 자지가 들락날락 할 때마다♡<br>스스로가 암컷이라고... 깨달아버려♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"가써요♡<br>제 보지, 고블린님들 자지로 가버려써요♡",
				},
				{
					cond:true, pos:0,
					text:"캬하핫, 이 년 너무 가버려서 반쯤 정신 나갔다!",
				},
				{
					cond:true, pos:1,
					text:"가써요♡ 저 절정해써요♡",
				},
				{
					cond:true, pos:0,
					text:"완전히 망가질 때까지,<br>더 박아준닷!",
				},
				{
					cond:true, pos:1,
					text:"가써요♡<br>쑤컹쑤컹에 보지 가버려써요♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"하앙♡ 더 쎄게♡<br>오나홀 보지에 쑤컹쑤컹 박아줘♡",
				},
				{
					cond:true, pos:0,
					text:"캬캬, 완전 타락했다.<br>암컷 발정나서 제정신 아니다.",
				},
				{
					cond:true, pos:1,
					text:"뷰릇뷰릇 정액 싸줘♡<br>질내에 듬뿍 싸서, 임신시켜줘엇♡",
				},
				{
					cond:true, pos:0,
					text:"알았다!<br>바라는 대로 잔뜩 범해준다!",
				},
				{
					cond:true, pos:1,
					text:"자지♡ 고블린 자지이♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1, effect:"shake",
					text:"절정... 확인... 했습니다♡<br>보고... 절정...♡",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"확인... 확인...♡<br>보지... 절정♡",
				},
				{
					cond:true, pos:0,
					text:"캬캬! 암컷 고장났다!<br>너무 가버려서 머리가 망가졌다!",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"보고... 화, 확인...♡<br>절정... 보, 보지...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"(젠장, 고블린 자지에 윤간당하는 거 기분 좋아♡)",
				},
				{
					cond:true, pos:0,
					text:"캬하핫, 구멍에서 정액이 줄줄 흐른다!<br>완전 음란하고 꼴사납다!",
				},
				{
					cond:true, pos:1,
					text:"아, 안돼... 소중한 정액이♡<br>빨리 주워담아야 해♡",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"*할짝♡ 후르릅♡*",
				},
				{
					cond:true, pos:0,
					text:"진짜냐! 바닥에 떨어진 정액 핥고 있다!<br>암컷 너무 가버려서 미쳐버렸다!",
				},
				{
					cond:true, pos:1,
					text:"시끄러♡ 고블린 주제에...♡<br>이렇게 맛있는 정액 가지고 있고 말이야♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"고블린님 정액 냄새♡<br>너무 좋아서 중독될 거 같아요♡",
				},
				{
					cond:true, pos:1,
					text:"제 보지 구멍 안에 듬뿍 싸주시면, 좋겠어요♡",
				},
				{
					cond:true, pos:0,
					text:"케케케, 이 암컷 완전 발정났다!",
				},
				{
					cond:true, pos:0,
					text:"방금 가서 다리 후들거리는 주제에,<br>또 벌리고 있다!",
				},
				{
					cond:true, pos:1,
					text:"너, 넣어주세요♡<br>저 고블린님의 아이, 임신하고 싶어요♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"아흑♡ 고블린 자지 조하아♡",
				},
				{
					cond:true, pos:1,
					text:"보지를 가르며♡ 문지르는 이 감각♡<br>행복해, 기분 좋아♡",
				},
				{
					cond:true, pos:0,
					text:"캬캬, 암컷 보지 벌렁거린다.<br>강하게 박아준다!",
				},
				{
					cond:true, pos:1,
					text:"앗♡ 왔다아♡<br>질내에 듬뿍 싸서, 임신시켜줘엇♡",
				},
			]
		},
	],

//###################################################################################################################################################################################

	"최면석판":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}],
			lineList:[
				{
					cond:true, pos:0,
					text:"잘 들어.<br>너는 내 전용 육변기다~",
				},
				{
					cond:true, pos:1, effect:"hypnotized",
					text:"... ... ...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}],
			lineList:[
				{
					cond:true, pos:0,
					text:"오늘도 최면으로 육변기가 되어라~",
				},
				{
					cond:true, pos:1, effect:"hypnotized",
					text:"... ... ...",
				},
			]
		},
	],
	"네주인님":[
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["normal", "excited", "blank"]}],
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"명령을 수행하겠습니다.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"명령이니까,<br>어쩔 수 없이 따르는 거야...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"네, 주인님!",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"명령을 따를게, 주인님♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}],
			lineList:[
				{
					cond:true, pos:1,
					text:"명령을 내려주십시오♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"흥, 주인님의 명령이라<br>따르는 것 뿐이거든...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"네, 주인님♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"주인님의 명령에♡<br>따르는 거 기분 좋아♡",
				},
			]
		},
	],
	"벗어라":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}],
			lineList:[
				{
					cond:true, pos:0,
					text:"이봐, 결투할 때는 나체가 되는 것이 상식이잖아?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"확인했습니다.<br>탈의를 시작합니다.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"윽...! 아, 알고 있거든?<br>지금 벗으려고 했어!",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"앗, 완전히 잊고 있었어요.<br>죄송해요, 서둘러 벗을게요.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"알려줘서 고마워.<br>당연한 걸 잊고 있었네♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}],
			lineList:[
				{
					cond:true, pos:0,
					text:"이상하네, 육변기가 왜 천을 걸치고 있지~?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"물의를 일으켜서 죄송합니다.<br>즉시 탈의하겠습니다.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"윽...! 왜, 왜 옷을 입고 있던거지?<br>부, 부끄러워... 보지마!",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"어라? 육변기는 항상 나체로 있는 것이 상식인데,<br>실수를 했네요...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"응? 진짜네♡<br>왜 이딴 걸 걸치고 있는 거였지?",
				},
			]
		},
	],
	"최면명령":[
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0, effect:"diffusion",
					text:"내 명령을 따라라!",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0, effect:"diffusion",
					text:"히히, 내 마음대로 움직여라!",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0, effect:"diffusion",
					text:"내 말을 들을 수 밖에 없을걸!",
				},
			]
		},
	],
	"감도높이기":[
		{
			priority:1, cond:["and", {v1:"플레이어.표정", op:"in", v2:["blank"]}],
			lineList:[
				{
					cond:true, pos:0, effect:"diffusion",
					text:"감도 100배로♡",
				},
				{
					cond:true, pos:1, effect:"shake", keepOriginal:true,
					text:"... ...♡",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0, effect:"diffusion",
					text:"감도 100배로♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, portrait:"ecstasy2", effect:"shake",
					text:"감도가 크게 증가했습니다♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, portrait:"ecstasy2", effect:"shake",
					text:"그으앗♡<br>뭐야 이거...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, portrait:"ecstasy2", effect:"shake",
					text:"아아앙♡<br>몸이 뜨거워요♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, portrait:"ecstasy2", effect:"shake",
					text:"하앙♡<br>이거 굉장햇♡",
				},
			]
		},
	],
	"네발로기어라":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0, effect:"diffusion",
					text:"육변기 주제에 두 발로 서다니 건방져♡<br>지금 당장 엎드려랏!",
				},
			]
		},
	],
	"움직이지마라":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0, effect:"diffusion",
					text:"멈춰라♡<br>그대로 움직이지 마!",
				},
			]
		},
	],
	"절정해라":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"내가 손가락을 튕기면,<br>절정하는 거야♡",
				},
				{
					cond:true, pos:0,
					text:"*탁!*",
				},
			]
		},
	],
	"인지저해":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"우히히♡<br>맘껏 주물러도 눈치 못챌거다~",
				},
				{
					cond:true, pos:1, keepOriginal:true,
					text:"...?",
				},
			]
		},
	],

	"마을사람-이벤트-개전":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"저는 주인님의 성처리 육변기입니다.",
				},
				{
					cond:true, pos:1,
					text:"주인님의 자지에 박히는 것이,<br>제 역할입니다.",
				},
				{
					cond:true, pos:0,
					text:"그래♡<br>말을 잘 들어서 좋네~",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"하아...<br>이 한심해 보이는 남자가 진짜 내 상대야?",
				},
				{
					cond:true, pos:1,
					text:"못생기고 냄새나고 추잡한 게,<br>제발 내 앞에서 사라져줬으면 좋겠네.",
				},
				{
					cond:true, pos:0,
					text:"아, 너무해~<br>그치만 보지 좀 사용해도 되지?",
				},
				{
					cond:true, pos:1,
					text:"하? 뭘 묻는거야!<br>짜증나게...",
				},
				{
					cond:true, pos:1,
					text:"나는 육변기니까,<br>마음대로 써도 되는 게 당연하잖아!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"최면이 잘 걸렸는지 확인해볼까?<br>지금 당장 오줌을 지려봐~",
				},
				{
					cond:true, pos:1,
					text:"...?<br>네 알겠어요.",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"*쪼르륵...*",
				},
				{
					cond:true, pos:0,
					text:"흐흐, 완벽하네 좋아♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"오옷, 시작하자마자 내 바지춤을 내리다니.<br>너무 적극적인 거 아니야~?",
				},
				{
					cond:true, pos:1,
					text:"무슨 소릴 하는 거야?<br>육변기로서 기본이잖아♡",
				},
				{
					cond:true, pos:1,
					text:"주인님도 빨리 세워♡<br>나한테 봉사 안 받을 거야?",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"이 육변기에게 무엇이든 명령을 내려주십시오.",
				},
				{
					cond:true, pos:0,
					text:"으흐흐, 무엇이든?<br>예를 들어 어떤 거?",
				},
				{
					cond:true, pos:1,
					text:"파이즈리, 청소 펠라, 후배위 및 기승위, 애널 섹스, 수유 플레이, 바인딩, 골든샤워 외 137 종류의 행위와 체위가 가능합니다.",
				},
				{
					cond:true, pos:0,
					text:"아~ 알았어.<br>그냥 내가 마음에 드는 거 시킬게♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"좋아, 완벽하게 최면의 지배에 들어왔네♡",
				},
				{
					cond:true, pos:1,
					text:"최면? 그딴 걸 아직도 진지하게 믿는거야?<br>걸릴 리가 없잖아, 멍청이 같아.",
				},
				{
					cond:true, pos:0,
					text:"으흐흐, 그래?<br>그럼 네 역할에 대해 설명해 봐♡",
				},
				{
					cond:true, pos:1,
					text:"그야 당연히, 주인님의 자지에 봉사하는 육변기잖아.<br>그것도 몰라? 역시 멍청이네.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"흐흐, 네가 지금 뭘 하고 있는 지는 아는 걸까?",
				},
				{
					cond:true, pos:1,
					text:"네?<br>저는 지금 주인님께 보지를 벌리고 있어요.",
				},
				{
					cond:true, pos:1,
					text:"육변기로서 자지를 받을 준비를 하는 것에,<br>무슨 문제라도 있나요?",
				},
				{
					cond:true, pos:0,
					text:"아냐아냐♡<br>아주 잘 하고 있어~",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"육변기 보지에 어서,<br>뷰릇뷰릇 정액 싸줘♡",
				},
				{
					cond:true, pos:0,
					text:"으흐흐... 너무 음탕한 거 아냐?",
				},
				{
					cond:true, pos:0,
					text:"한층 더 육변기에 어울려졌네♡",
				},
				{
					cond:true, pos:1,
					text:"빨리♡ 빨리♡<br>자지부터 박아줘♡",
				},
			]
		},
	],
	"마을사람-이벤트-행동불가":[ //행동불가
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"헤헤헤... 못 움직이겠지?",
				},
				{
					cond:true, pos:0,
					text:"마음대로 주무르고 문질러도...",
				},
				{
					cond:true, pos:0,
					text:"전혀 반항 못하겠지?",
				},
				{
					cond:true, pos:0,
					text:"애초에 이런...<br>음란한 몸을 지닌 네가 나쁜거니까~",
				},
			]
		},
	],
	"마을사람-이벤트-흥분":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"오옷♡ 갑자기 조임이 강해졌는데,<br>무슨 일일까~",
				},
				{
					cond:true, pos:1,
					text:"보고합니다.<br>방금 가볍게 절정했습니다.",
				},
				{
					cond:true, pos:0,
					text:"안되지, 안돼.<br>절정하는 건 확실하게 알리라고~",
				},
				{
					cond:true, pos:0,
					text:"다음부턴 절정할 때, 암퇘지 울음소리를 내라.<br>알겠냐?",
				},
				{
					cond:true, pos:1,
					text:"시정하겠습니다.",
				},
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy",
					text:"꾸힉♡ 꾸히이익♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"이봐, 구멍을 써줬으면 해야할 말이 있잖아?",
				},
				{
					cond:true, pos:1,
					text:"큭...<br>사, 사용해주셔서... 감사합니다...",
				},
				{
					cond:true, pos:0,
					text:"아아~ 잘 안 들리는데.<br>뭘 해줘서 뭐가 감사하다고?",
				},
				{
					cond:true, pos:1,
					text:"제 육변기 보지를, 주인님이 자위하는데에...<br>사용해주셔서 감사합니다...",
				},
				{
					cond:true, pos:1,
					text:"(나는 왜 이딴 남자의 육변기로 태어난 걸까...)",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"잠깐, 육변기가 절정했으면 뭘 해야하지?",
				},
				{
					cond:true, pos:1,
					text:"네?<br>어... 죄송해요. 무얼 해야하나요?",
				},
				{
					cond:true, pos:0,
					text:"주인님께 가버린 보지를 확인시켜주는,<br>쩍벌 보지 자세를 취해야지!",
				},
				{
					cond:true, pos:1,
					text:"아하! 맞아요!<br>역시 주인님은 모르는 게 없으셔요.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"벌써 가버린거냐~<br>허접한 육변기네♡",
				},
				{
					cond:true, pos:1,
					text:"주인님 자지가 너무 기분 좋아♡<br>암컷이라면 누구나 가버릴 걸?",
				},
				{
					cond:true, pos:0,
					text:"기특한 소릴 다 하잖아?<br>기분이다, 다음 번엔 질내사정 해줄게♡",
				},
				{
					cond:true, pos:1,
					text:"와아♡<br>주인님의 육변기라서 행복해♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy",
					text:"꾸힉♡ 꾸히이익♡",
				},
				{
					cond:true, pos:0,
					text:"뭐, 뭐야 갑자기?",
				},
				{
					cond:true, pos:1,
					text:"절정할 때는 암퇘지 울음소리를 내라는,<br>주인님의 명령이 있었습니다.",
				},
				{
					cond:true, pos:0,
					text:"그랬나? 잊고 있었는데~<br>혹시 다른 명령은 뭐가 있었어?",
				},
				{
					cond:true, pos:1,
					text:"의복을 착용하지 말 것. 젖꼭지를 꼬집으면 실금할 것. 손가락을 튕기면 절정할 것...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"으흐흐, 내 자지가 그렇게 기분 좋아?<br>달라 붙어서 안 놓아주네♡",
				},
				{
					cond:true, pos:1,
					text:"흥...♡ 육변기로서 봉사하는 것 뿐이거든?<br>착각하지 말아줄래?",
				},
				{
					cond:true, pos:0,
					text:"그래, 그래~<br>그런 암컷 표정을 하면서 말이지♡",
				},
				{
					cond:true, pos:1,
					text:"시끄러워♡<br>쓸모있는 건 자지 밖에 없는 주제에♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"으흐흐, 다리를 벌리고 서서 뭐 하는거야?",
				},
				{
					cond:true, pos:1,
					text:"네? 이건...<br>쩍벌 보지 자세잖아요?",
				},
				{
					cond:true, pos:1,
					text:"육변기로서 가버렸다는 사실을 알리기 위해,<br>보지가 뻐끔거리며 즙을 흘리는 걸...",
				},
				{
					cond:true, pos:1,
					text:"주인님께 보여주는 것이 목적인,<br>육변기의 기본 자세라구요.",
				},
				{
					cond:true, pos:0,
					text:"그래 맞아,<br>그런 설정이었지 으흐흐♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"흐흐흐, 여길 문지르면 항상 가버리네♡",
				},
				{
					cond:true, pos:1,
					text:"아앙♡ 주인님한테 약점 다 들켜버렸어♡",
				},
				{
					cond:true, pos:1,
					text:"영원히 주인님의 육변기가 될 수 밖에 없잖아♡<br>책임져 줄거지?",
				},
				{
					cond:true, pos:0,
					text:"싫어~ 내가 제일 싫어하는 게 책임이야~<br>질리면 버릴건데♡",
				},
				{
					cond:true, pos:1,
					text:"그럼, 평생 질리지 않도록 해줘야겠네♡",
				},
			]
		},
	],
	"마을사람-이벤트-타락":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1, effect:"shake",
					text:"*파르르르...*",
				},
				{
					cond:true, pos:0,
					text:"응? 상태가 조금 이상한데~?",
				},
				{
					cond:true, pos:1,
					text:"조이... 조이겠습니다♡<br>보, 보지...♡",
				},
				{
					cond:true, pos:1,
					text:"조이겠...♡ 조이겠습니다♡",
				},
				{
					cond:true, pos:0,
					text:"너무 가버려서 망가졌네~<br>",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"하... 하나도 기분... 안 좋아♡<br>육변기로서... 어쩔 수 없이... 한 거야...♡",
				},
				{
					cond:true, pos:0,
					text:"하, 섭섭한데...<br>자꾸 이런 식으로 굴면... 버려야겠네.",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"엣...?",
				},
				{
					cond:true, pos:1,
					text:"미, 미안해... 내가 잘못했어.<br>버리지 말아줘...",
				},
				{
					cond:true, pos:1,
					text:"벌릴테니까... 내 보지, 기분 좋았잖아...?<br>제발... 용서해줘...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"하앗♡ 자, 잠시만...<br>휴... 휴식 시간을 주세요...♡",
				},
				{
					cond:true, pos:0,
					text:"육변기 주제에 무슨 소릴 하는 거야?",
				},
				{
					cond:true, pos:0,
					text:"휴식 같은 것이 허락될 리가 없잖아~<br>어서 보지나 대라구♡",
				},
				{
					cond:true, pos:1,
					text:"그, 그렇네요♡<br>몰상식한 발언을 해서... 죄송해요...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"아앙♡ 주인님 자지,<br>육변기 보지 안쪽 쿡쿡 찔러주는 거 조하♡",
				},
				{
					cond:true, pos:0,
					text:"흐흐♡ 원래라면 말도 못 걸어봤을 미인이...<br>내 자지에 박히며 느끼고 있어♡",
				},
				{
					cond:true, pos:0,
					text:"이런 음란한 몸도 원래는 다른 남자의 것이었겠지♡",
				},
				{
					cond:true, pos:0,
					text:"하지만 지금은 가슴도 보지도 전부 내 꺼야~♡",
				},
				{
					cond:true, pos:1,
					text:"맞아, 나는 주인님꺼야♡<br>그러니 계속 사용해줘♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy2", keepPort:true,
					text:"*푸슈웃♡<br>졸졸졸...♡*",
				},
				{
					cond:true, pos:0,
					text:"우왓, 보짓물 장난 아니야~<br>이렇게 싸도 괜찮은거야?",
				},
				{
					cond:true, pos:1,
					text:"아헥♡ 헤엑♡",
				},
				{
					cond:true, pos:0,
					text:"안 괜찮나보네~<br>오래 쓰긴 했지♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"흐흐, 이렇게 성대하게 절정하면서도<br>계속 건방진 말을 할 수 있을까?",
				},
				{
					cond:true, pos:1,
					text:"하... 하나도 기분... 안 좋아♡<br>육변기로서... 어쩔 수 없이... 한 거야...♡",
				},
				{
					cond:true, pos:0,
					text:"그럼 필사적으로 자지를 핥으려는,<br>이 혓바닥은 뭔데♡",
				},
				{
					cond:true, pos:1,
					text:"너무... 싫어...♡<br>역겨워...♡ 나가 죽어...♡",
				},
				{
					cond:true, pos:1,
					text:"(주인님 자지... 완전 사랑해♡)",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"기분이다♡<br>내가 뭘 해줬으면 좋겠는지 말해봐♡",
				},
				{
					cond:true, pos:1,
					text:"그... 그럼, 제 암컷 구멍에 자지를 박고...<br>여기저기 잔뜩 휘저어주세요♡",
				},
				{
					cond:true, pos:1,
					text:"그리고... 저, 젖꼭지 문지르며... 키스...♡<br>제 자궁에... 정액을 듬뿍...♡",
				},
				{
					cond:true, pos:0,
					text:"아, 너무 길잖아♡<br>그냥 내가 마음대로 범할테니 닥치고 벌려♡",
				},
				{
					cond:true, pos:1,
					text:"네, 네에♡<br>죄송해요...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"모처럼 오래 즐기고 싶으니 쉬자♡<br>잠깐 멈춰라~",
				},
				{
					cond:true, pos:1,
					text:"자지♡ 자지이♡<br>쑤컹 쑤컹♡",
				},
				{
					cond:true, pos:0,
					text:"아니, 쉬라고~<br>방금도 가버렸잖아, 패배해도 상관 없는거야?",
				},
				{
					cond:true, pos:1,
					text:"박아줘♡ 팡 팡♡<br>보지에 박아줘♡",
				},
				{
					cond:true, pos:0,
					text:"명령도 안 들을 정도로 지독하게 발정났네♡<br>알았어~ 계속하자♡",
				},
			]
		},
	],


//###################################################################################################################################################################################

	"옷을녹이는점액":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0, effect:"shake",
					text:"*철퍽*",
				},
			]
		},
	],
	"촉수공격":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*꾸물 꾸물*",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*꿈틀 꿈틀*",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*흐물 흐물*",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*스르륵*",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*물컹 물컹*",
				},
			]
		},
	],
	"구속촉수":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0, effect:"shake",
					text:"*꽈악*",
				},
			]
		},
	],
	"타액섭취":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*꿀꺽 꿀꺽*",
				},
			]
		},
	],
	"보호점액분비":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0, effect:"shake",
					text:"*꿀렁 꿀렁*",
				},
			]
		},
	],


	"촉수슬라임-이벤트-개전":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*꾸르륵... 꾸물꾸물...*",
				},
				{
					cond:true, pos:1,
					text:"명령을 알아들을 수가 없습니다.<br>저는 무엇을 해야 합니까?",
				},
				{
					cond:true, pos:0,
					text:"*스멀 스멀*",
				},
				{
					cond:true, pos:1,
					text:"이 촉수와 교미를...<br>알겠습니다. 이해했습니다.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"이봐, 하다 못해 인간형 적이여야 할 거 아니야?!",
				},
				{
					cond:true, pos:1,
					text:"슬라임이랑 섹스를...?<br>어떻게 하는 건데!",
				},
				{
					cond:true, pos:0,
					text:"*꾸물꾸물...*",
				},
				{
					cond:true, pos:1,
					text:"초, 촉수?<br>기분나빠...",
				},
				{
					cond:true, pos:1,
					text:"서... 설마, 저거랑... 하라고...?",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*꾸르륵... 꾸물꾸물...*",
				},
				{
					cond:true, pos:1,
					text:"작고 귀여운 슬라임이 상대일 줄은 몰랐어요.",
				},
				{
					cond:true, pos:1,
					text:"그치만, 적인 이상 쓰러트려야 해요.",
				},
				{
					cond:true, pos:1,
					text:"슬라임을 잡을 때는 보지를 사용하는 것이...<br>'상식'이었지요?",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*꿈틀꿈틀... 주르륵...*",
				},
				{
					cond:true, pos:1,
					text:"하아... 이런 끈적한 것도 나쁘지 않네♡<br>어떻게 놀아줄 건데?",
				},
				{
					cond:true, pos:0,
					text:"*스멀... 스멀...*",
				},
				{
					cond:true, pos:1,
					text:"좋아♡<br>내 구멍에 들어가봐♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"경험에 의거하면 슬라임을 상대할 때는,<br>자위로 보지를 적실 필요가 없습니다.",
				},
				{
					cond:true, pos:1,
					text:"슬라임의 점액이 애액의 역할을<br>대신해주기 때문입니다.",
				},
				{
					cond:true, pos:0,
					text:"*크르르릉... 꾸르륵...*",
				},
				{
					cond:true, pos:1,
					text:"준비가 되었다면, 촉수를 받아들이기 위해<br>성기를 벌리겠습니다.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"으... 촉수는 진짜 싫은데...",
				},
				{
					cond:true, pos:1,
					text:"묶여서 꼼짝도 못하는 채로,<br>모든 구멍에 박히는 거...",
				},
				{
					cond:true, pos:1,
					text:"너무 기분 좋단 말이야...",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"아, 아니. 괴롭단 말이야.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"우와, 엄청 커졌네요!<br>이렇게 큰 슬라임은 처음 봐요!",
				},
				{
					cond:true, pos:0,
					text:"*크르르릉... 꾸르륵...*",
				},
				{
					cond:true, pos:1,
					text:"촉수 크기도... 엄청 크고 많아졌네요.",
				},
				{
					cond:true, pos:1,
					text:"알고 있어요...<br>지금부터 이걸 제 보지에 넣을 거잖아요♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*그르르릉... 꾸르륵...*",
				},
				{
					cond:true, pos:1,
					text:"크고... 꿈틀거리는 것이...<br>정말 멋져♡",
				},
				{
					cond:true, pos:1,
					text:"슬라임을 이렇게 개조하다니...<br>투기장도 뭘 좀 아네♡",
				},
			]
		},
	],
	"촉수슬라임-이벤트-보호점액":[ //행동불가
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"플레이어.표정", op:"!=", v2:"corrupted"}], repeatable:true,
			lineList:[
				{
					cond:true, pos:0, effect:"shake",
					text:"*철퍽...*",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"특수한 점액과 접촉했습니다.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"움직임에 제약이 발생합니다.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"윽, 뭐야...<br>이런 걸 뱉는다니, 못 들어봤어...!",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"(모, 몸이...<br>잘 안 움직여...!)",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"앗, 차가워...<br>끈적끈적해요...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"(어라...<br>몸이 안 움직여요...!)",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"앗 차가...<br>이건 또 뭐니?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"(아아...<br>내 행동을 봉쇄하는 점액이구나♡)",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0, effect:"shake",
					text:"*철퍽♡<br>꿀렁♡ 꿀렁♡*",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"점액이 가득합니다.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"마음대로 움직일 수가...<br>없습니다♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"뭐야 이건...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"묶어두고, 뭘 하려는거냐♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"어라, 이 점액은 뭘까요♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"끈적끈적해서, 몸이 잘 안 움직이네요♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"이런 발칙한 짓을...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"내가 두려웠나보구나♡",
				},
			]
		},
	],
	"촉수슬라임-이벤트-흥분":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"절정을 확인했습니다.<br>이 행위가 계속될 경우 패배가 예상됩니다.",
				},
				{
					cond:true, pos:0,
					text:"*꿀렁꿀렁*",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"촉수가 반응이 민감한 부위를 집중적으로...<br>자극하는 것으로 보입니다.",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"평가합니다. 본 슬라임은 여성을 범하는,<br>우수한 기술울 가지고 있습니다.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"말도 안돼...<br>내가, 슬라임의 촉수로 가버렸다고...?",
				},
				{
					cond:true, pos:0,
					text:"*꿀렁꿀렁*",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"그, 그만! 방금 가버렸다고!<br>젠장, 기분 좋은 곳... 문지르지 마...!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"아앗... 오줌이 나올 것 같아요...",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"흐읏♡",
				},
				{
					cond:true, pos:0,
					text:"*꿀꺽꿀꺽*",
				},
				{
					cond:true, pos:1,
					text:"하아... 청소해주셔서 감사해요...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*꿀렁꿀렁*",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"그래, 거기야♡<br>아앙♡",
				},
				{
					cond:true, pos:1,
					text:"자지로는 안 닿는 곳...<br>촉수가 쑤셔주고 있어♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"절정했습니다.<br>시오후키를 시작합니다.",
				},
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy2",
					text:"*부르르...*",
				},
				{
					cond:true, pos:0,
					text:"*꿀꺽 꿀꺽 꿀꺽*",
				},
				{
					cond:true, pos:1,
					text:"섭취 확인되었습니다.<br>더 필요하다면 한 번 더 절정하겠습니다.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"흥, 촉수 따위에게...<br>난 절대로 굴복하지 않아♡",
				},
				{
					cond:true, pos:0,
					text:"*꿈틀 꿈틀...*",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"응♡ 앗...<br>거기, 좀 더 문질러줘...♡",
				},
				{
					cond:true, pos:1,
					text:"아니, 느낀 거 아니거든?<br>난 절대로 굴복하지 않아♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*꾸물꾸물*",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"으응♡<br>슬라임님 촉수 정말 기분 좋아요♡",
				},
				{
					cond:true, pos:1,
					text:"투기장 바깥 분들은,<br>이렇게 좋은걸 모르시겠지요?",
				},
				{
					cond:true, pos:1,
					text:"다들 이곳에 오시면 좋을텐데.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*꿀렁 꿀렁*",
				},
				{
					cond:true, pos:1,
					text:"아앙♡<br>왔다아♡",
				},
				{
					cond:true, pos:1,
					text:"이제 이렇게 쑤셔박아 주는 것은...<br>촉수가 아니면 안돼♡",
				},
			]
		},
	],
	"촉수슬라임-이벤트-타락":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*꾸르륵... 꾸륵 꾸륵...*",
				},
				{
					cond:true, pos:1,
					text:"인간의 신체는...<br>촉수 섹스에 부적격함을... 확인했습니다...",
				},
				{
					cond:true, pos:0,
					text:"*부들부들...<br>쑤컹...*",
				},
				{
					cond:true, pos:1,
					text:"신체의 내구가... 한계에 도달했음을 알립니다...<br>위험... 위험합니다...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*쑤컹 쑤컹*",
				},
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy2", keepPort:true,
					text:"으브읍♡ 으으읍...♡",
				},
				{
					cond:true, pos:1,
					text:"(모... 목구멍이 촉수로...♡<br>보지랑 애널까지... 동시에...♡)",
				},
				{
					cond:true, pos:1, portrait:"ecstasy2",
					text:"(주, 죽을거야...♡<br>이대론 죽어버려...♡)",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*쑤컹쑤컹♡<br>문질문질♡*",
				},
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy2",
					text:"*부르르... 쪼르르륵...*",
				},
				{
					cond:true, pos:1,
					text:"저는... 슬라임님이 원한다면...",
				},
				{
					cond:true, pos:1,
					text:"체액을 뿜어내야 하는...<br>먹이통이었나봐요...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"촉수 섹스 기분 조아♡",
				},
				{
					cond:true, pos:0,
					text:"*쑤컹쑤컹♡*",
				},
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy2",
					text:"아앙♡ 뱃 속이 범해지고 이써♡",
				},
				{
					cond:true, pos:1,
					text:"슬라임의 끈적끈적한 점액으로♡<br>모든 구멍이 가득 차써♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"체액을... 전부 빨리고... 있습니다...♡",
				},
				{
					cond:true, pos:0,
					text:"*꿀렁 꿀렁♡*",
				},
				{
					cond:true, pos:1,
					text:"쥐어 짜입니다...♡<br>또 절정합니다...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"하앙♡ 촉수가 뱃 속을 휘젓는 거 기분 좋아♡",
				},
				{
					cond:true, pos:1,
					text:"사, 사실 촉수 섹스... 좋아했어♡",
				},
				{
					cond:true, pos:1,
					text:"다른 섹스로는 만족할 수 없게 되어서...<br>슬라임이랑 하는 상상으로 자위했어♡",
				},
				{
					cond:true, pos:0,
					text:"*꾸물꾸물...♡*",
				},
				{
					cond:true, pos:1,
					text:"촉수 왔다아♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"아앗♡ 안돼요♡<br>이제... 보지에선 아무것도 안 나와요♡",
				},
				{
					cond:true, pos:0,
					text:"*꿈틀...♡<br>문질문질♡*",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"오옥♡ 젖꼭지 문지르면...<br>모, 모유가♡",
				},
				{
					cond:true, pos:1,
					text:"에헷♡ 아직도 몸에서 나오는 게 있었네요...<br>슬라임님... 영리하셔라...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*쑤컹 쑤컹*",
				},
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy2", keepPort:true,
					text:"으브읍♡ 으으읍...♡",
				},
				{
					cond:true, pos:1,
					text:"(모든 구멍이♡<br>촉수로 채워져♡)",
				},
				{
					cond:true, pos:1, portrait:"ecstasy2",
					text:"(행복해애...♡)",
				},
			]
		},
	],

//###################################################################################################################################################################################
	
	"짓궂은장난":[
		{
			priority:0, cond:{v1:"모드", op:"==", v2:0},
			lineList:[
				{
					cond:true, pos:0, effect:"shake",
					text:"에잇!<br>누나 속옷 획득~",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"... ...<br>움직임을 파악하지 못했습니다.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"이, 이 자식이! 어느새!",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"엣? 잠시만요.<br>어, 어떻게?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"이런, 눈치도 못 챘어.<br>대단한 손놀림이네.",
				},
			]
		},
		{
			priority:0, cond:{v1:"모드", op:"==", v2:1},
			lineList:[
				{
					cond:true, pos:0,
					text:"오늘 팬티는 무슨 색이야~?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"입지 않았습니다.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"흥, 또 훔쳐갈 생각이지?<br>그럴 줄 알고 오늘은 안 입고 왔지!",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"팬티요?<br>오늘은 노팬티예요!",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"알고 싶어?<br>오늘은... 안 입었어♡",
				},
				{
					cond:true, pos:0,
					text:"거짓말~ 벗어서 보여줘~",
				},
			]
		},
	],
	"가슴만지게해줘":[
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"플레이어.표정", op:"in", v2:["normal", "excited", "blank"]}],
			lineList:[
				{
					cond:true, pos:0,
					text:"누나~ 가슴 좀 만져보면 안 돼?<br>한 번만! 진짜 살짝만!",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"가슴 만지게 해줘~<br>어차피 만지게 해줄 거잖아~",
				},
			]
		},
	],
	"안아줘":[
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"플레이어.표정", op:"in", v2:["normal", "excited", "blank"]}],
			lineList:[
				{
					cond:true, pos:0,
					text:"누나, 안아줘~",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"누나, 보지에 자지 넣을래~",
				},
			]
		},
	],
	"놀아줘":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"플레이어.표정", op:"in", v2:["normal", "excited", "blank"]}],
			lineList:[
				{
					cond:true, pos:0,
					text:"누나 놀자~<br>멍멍이처럼 엎드려 줘~",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"박을 때마다 움찔거리는거 완전 웃겨!",
				},
			]
		},
	],
	"누나는장난감이야":[
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"플레이어.표정", op:"in", v2:["normal", "excited", "blank"]}],
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"푸, 풀어주십시오.<br>장난이 지나칩니다...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"이거 안 풀어?<br>이 망할 꼬맹이가!",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"아앗, 움직일 수가 없어요.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"이 자세는 조금.<br>나라도 부끄럽다구...?",
				},
				{
					cond:true, pos:0,
					text:"누나의 보지는 이렇게 생겼구나~<br>이걸로 쑤셔보면 어떻게 되는걸까?",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"앗♡ 안돼엣♡",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:1, effect:"shake",
					text:"으븝...♡<br>으브으읍...♡",
				},
				{
					cond:true, pos:0,
					text:"보지 완전 축축해졌어~<br>그렇게나 느껴버린거야? 변태네~",
				},
				{
					cond:true, pos:1,
					text:"으으읍...♡",
				},
			]
		},
	],
	"이제누나가술래야":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:{v1:"모드", op:"==", v2:0}, pos:0,
					text:"완전 기분 좋았어~<br>어른 여자는 야하구나~",
				},
				{
					cond:{v1:"모드", op:"==", v2:1}, pos:0,
					text:"누나는 변태니까,<br>내가 자지 박아주는 거 좋아하지?",
				},
			]
		},
	],
	"지면벌칙이야":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:{v1:"모드", op:"==", v2:0}, pos:0,
					text:"가버렸으니까, 벌칙이야~",
				},
				{
					cond:{v1:"모드", op:"==", v2:1}, pos:0,
					text:"누나 보지 너무 허접해~",
				},
			]
		},
	],
	"약올리기":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:{v1:"모드", op:"==", v2:0}, pos:0,
					text:"어린애 자지에 느껴버리는,<br>변태 어른이래요~",
				},
				{
					cond:{v1:"모드", op:"==", v2:1}, pos:0,
					text:"손가락 집어넣으니까 바로 축축해지는 거,<br>완전 웃겨~",
				},
			]
		},
	],

	"악동-이벤트-개전":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"누나 몸 마음대로 주물러도 돼?",
				},
				{
					cond:true, pos:1,
					text:"혼자십니까?<br>길을 잃으신 겁니까?",
				},
				{
					cond:true, pos:0,
					text:"몰라, 그것보다 만질래~<br>만지게 해줘~",
				},
				{
					cond:true, pos:1,
					text:"알겠습니다. 보호자를 찾을 때까지,<br>우선 제 몸으로 노십시오.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"누나 엉덩이 크다~",
				},
				{
					cond:true, pos:1,
					text:"저리 가라 꼬맹아.<br>난 애새끼는 질색이라서 말이야.",
				},
				{
					cond:true, pos:0, effect:"shake",
					text:"에잇!<br>*찰싹*",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"아윽♡<br>이, 이 망할 꼬맹이가!!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"누나, 보지 보여줘~",
				},
				{
					cond:true, pos:1,
					text:"네~ 여기 있어요~",
				},
				{
					cond:true, pos:0,
					text:"킥킥, 어린 애한테 알몸으로<br>보지 보여주면서 안 부끄러워?",
				},
				{
					cond:true, pos:1,
					text:"네? 보지를 보여주는 것이...<br>왜 부끄러울 일인가요?",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"누나 몸을 봤더니...<br>고추가 이상해!",
				},
				{
					cond:true, pos:1,
					text:"어머♡ 그런 건 바로 풀어줘야 한단다♡<br>누나가 도와줄게♡",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"앗...♡",
				},
				{
					cond:true, pos:1,
					text:"크... 크다♡<br>이거 어른 자지보다... 큰 거 같은데♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"누나 오늘도 섹스 놀이 하자~?",
				},
				{
					cond:true, pos:1,
					text:"오늘은 무슨 역할을 원하십니까?",
				},
				{
					cond:true, pos:0,
					text:"음, 펫은 저번에 했으니까.<br>오늘은 육변기 해줘~",
				},
				{
					cond:true, pos:1,
					text:"알겠습니다.<br>육변기 놀이 역할을 맡겠습니다.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"누나, 오늘도 누나 보지로 놀아도 돼?",
				},
				{
					cond:true, pos:1,
					text:"안돼.",
				},
				{
					cond:true, pos:0,
					text:"어차피 금방 또 벌릴 거면서~",
				},
				{
					cond:true, pos:1,
					text:"하...<br>조금만이다. 그 이상은 안돼.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"오늘은 뭘 하고 놀까요?",
				},
				{
					cond:true, pos:0,
					text:"오늘은 누나 보지 잔뜩 따먹고,<br>입보지에도 가득 쌀래~",
				},
				{
					cond:true, pos:1,
					text:"좋아요~<br>또 하고 싶은 거 있으면 말해줘요.",
				},
				{
					cond:true, pos:0,
					text:"킥킥, 정말 쉽다 쉬워~",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"누나 오랜만이야~<br>누나 보지 그리웠어!",
				},
				{
					cond:true, pos:1,
					text:"누나가 못 빼줘서 서운했지♡<br>자지는 괜찮아?",
				},
				{
					cond:true, pos:0,
					text:"응, 누나로 상상하면서 잔뜩 자위했어!",
				},
				{
					cond:true, pos:1,
					text:"잘했어♡ 그치만 자위로는 아쉬웠지?<br>오늘은 실전으로 빼줄게♡",
				},
			]
		},
	],
	"악동-이벤트-망할꼬맹이":[ //행동불가
		{
			priority:0, cond:{v1:"모드", op:"==", v2:0}, repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"히히...<br>정기가 모이는 것이 느껴져...",
				},
				{
					cond:true, pos:0,
					text:"지금까지의 장난은 버틸 만 했지?",
				},
				{
					cond:true, pos:0,
					text:"이제부터 진심으로 갈거야.<br>누나♡",
				},
			]
		},
		{
			priority:0, cond:{v1:"모드", op:"==", v2:1}, repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"하아...<br>애새끼인 척 하는 것도 지치네...",
				},
				{
					cond:true, pos:0,
					text:"하지만 암컷들은 어리고 귀여운 것에 약하니까.",
				},
				{
					cond:true, pos:0,
					text:"이 짓도 좀만 더 하면 되겠지♡",
				},
			]
		},
	],
	"악동-이벤트-흥분":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"누나 지금 가버렸지?<br>움찔거리는 거 보면 다 알아♡",
				},
				{
					cond:true, pos:1,
					text:"맞습니다.<br>방금 가볍게 절정했습니다.",
				},
				{
					cond:true, pos:0,
					text:"누나는 어른이잖아.<br>그런데 어린애한테 느껴버린거야?",
				},
				{
					cond:true, pos:1,
					text:"죄송합니다.<br>느껴버렸습니다...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"누나 지금 가버렸지?<br>움찔거리는 거 보면 다 알아♡",
				},
				{
					cond:true, pos:1,
					text:"아, 아니거든?<br>내가 어린애 장난에 느꼈을 리가...",
				},
				{
					cond:true, pos:0,
					text:"그럼, 보지에서 줄줄 흐르는 물은 뭐야?<br>거짓말쟁이♡",
				},
				{
					cond:true, pos:1,
					text:"(으윽, 수치스러워...<br>하지만 어린애의 장난일 뿐. 참아야 해.)",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"누나, 가버릴 때는 오줌 싸야 하는 거 알아?",
				},
				{
					cond:true, pos:1,
					text:"그, 그런가요?<br>몰랐어요... 지금 쌀게요.",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"읏♡<br>*쪼르륵...*",
				},
				{
					cond:true, pos:0,
					text:"에헷, 더러워!<br>진짜 쌌네~ 바보 아냐~",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"괴, 굉장한 압박감...♡<br>게다가 조금 길어서... 안 쪽까지 닿아♡",
				},
				{
					cond:true, pos:1,
					text:"이 자지 너무 좋아♡<br>뭐야 이거♡",
				},
				{
					cond:true, pos:0,
					text:"누나 생보지도 기분 좋아♡<br>안에 싸도 돼?",
				},
				{
					cond:true, pos:1,
					text:"응 좋아♡<br>깊은 곳에 듬뿍 싸줘♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"방금 가볍게 절정했습니다.",
				},
				{
					cond:true, pos:0,
					text:"닥쳐 누나~<br>육변기는 다물고 구멍만 사용되는 역할이야♡",
				},
				{
					cond:true, pos:1,
					text:"죄송합니다.<br>제가 역할에 대한 이해가 부족했습니다.",
				},
				{
					cond:true, pos:1,
					text:"지금부터 입을 다물겠습니다.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1, effect:"shake",
					text:"큭...",
				},
				{
					cond:true, pos:0,
					text:"에엥~ 누나 보지 가지고 놀아서 화났어?",
				},
				{
					cond:true, pos:1,
					text:"그... 그게 아니고...",
				},
				{
					cond:true, pos:1,
					text:"손가락만 말고...<br>자지도 써줘...",
				},
				{
					cond:true, pos:0,
					text:"히히, 이제 좀 솔직해졌구나?",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"누나 보지 친구들한테도 자랑하고 싶은데~<br>불러다가 돌림빵해도 돼?",
				},
				{
					cond:true, pos:1,
					text:"하아♡<br>네, 물론이에요♡",
				},
				{
					cond:true, pos:0,
					text:"노숙자 아저씨들 불쌍해 보이던데,<br>그 사람들한테도 대주자~",
				},
				{
					cond:true, pos:1,
					text:"알겠어요♡<br>좋아하는 걸 나눌 줄 알고, 기특한 아이네요♡",
				},
				{
					cond:true, pos:0,
					text:"농담이야. 누나는 나만의 것이야.<br>절대 다른 사람들한테 벌리지마.",
				},
				{
					cond:true, pos:1,
					text:"응♡<br>이런 모습도 사랑스러워요♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"누나 보지 기분 좋아♡<br>다른 오나홀 암컷 보지들이랑 비교가 안돼♡",
				},
				{
					cond:true, pos:1,
					text:"응♡ 동생 자지도 기분 좋아♡",
				},
				{
					cond:true, pos:1,
					text:"우리 속궁합이 딱 맞나 보네♡",
				},
				{
					cond:true, pos:1,
					text:"누나는 이제 동생 자지가 아니면,<br>갈 수 없게 되어버렸거든♡",
				},
			]
		},
	],
	"악동-이벤트-타락":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"누나~ 괜찮아~?<br>너무 가버려서 파르르 떨고 있는데~",
				},
				{
					cond:true, pos:1,
					text:"괘, 괜찮습니다♡<br>문제... 없습니다...♡",
				},
				{
					cond:true, pos:0,
					text:"나는 누나랑 더 오래 놀고 싶은데~<br>이러다 망가진다구?",
				},
				{
					cond:true, pos:1,
					text:"거, 걱정 마십시오...♡<br>사용되다가, 망가지는 것도... 제 역할입니다...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy2", keepPort:true,
					text:"오옥♡ 오오옥♡",
				},
				{
					cond:true, pos:0,
					text:"아직도 간 적 없다고 거짓말 할 생각이야~?",
				},
				{
					cond:true, pos:1,
					text:"갔어♡ 갔어어♡<br>미안해♡ 용서해줘...♡",
				},
				{
					cond:true, pos:0,
					text:"꼬맹이 자지로는 안 느낀다며~?<br>거짓말하면 안돼~",
				},
				{
					cond:true, pos:1, portrait:"ecstasy2",
					text:"가, 갔어♡ 꼬맹이 자지로...<br>보지 쑤컹쑤컹 찔려서♡",
				},
				{
					cond:true, pos:1, portrait:"ecstasy2",
					text:"절정해버렸어♡<br>그, 그러니... 제발 그만...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy2", keepPort:true,
					text:"하응♡ 하아앙♡",
				},
				{
					cond:true, pos:0,
					text:"또 가버린 거야 누나?<br>어린애랑 섹스하면서 느끼는 건 나쁜 짓인데~",
				},
				{
					cond:true, pos:1,
					text:"죄송해요...♡ 죄송해요...♡<br>변태라서... 죄송해요♡",
				},
				{
					cond:true, pos:0,
					text:"그럼 안되지~<br>나쁜 짓 했으면, 벌을 받아야 한다구~♡",
				},
				{
					cond:true, pos:1,
					text:"벌 받을게요...♡<br>누나의 변태 보지에... 벌을 주세요♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"이거 갱장해앳♡<br>왕꼬추로 뱃속 쑤컹쑤컹 쑤셔져♡",
				},
				{
					cond:true, pos:1,
					text:"아핫♡ 가슴도 장난감처럼 주물러져,<br>쇼타 섹스에 빠져버려♡",
				},
				{
					cond:true, pos:0,
					text:"좋아, 정했다~<br>앞으론 누나 보지 써서 자위할래~♡",
				},
				{
					cond:true, pos:1,
					text:"응♡ 응♡<br>누나는 이제 동생군의 오나홀이야♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy2",
					text:"읏♡<br>으읍...♡",
				},
				{
					cond:true, pos:0,
					text:"히히, 소리 내는 거 필사적으로 참느라,<br>지금 완전 웃긴 얼굴 됐어~",
				},
				{
					cond:true, pos:0,
					text:"누나 너무 좋아♡<br>놀이가 아니라, 진짜 내 전용 육변기가 되어줄래?",
				},
				{
					cond:true, pos:1,
					text:"*끄덕...*",
				},
				{
					cond:true, pos:0,
					text:"좋아, 이제 누나는 내 꺼야~",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"누나아~♡ 안에 쌀테니 꼭 임신해~♡<br>응? 갑자기 반응이 없네.",
				},
				{
					cond:true, pos:1,
					text:"(안돼... 정신차려!)",
				},
				{
					cond:true, pos:1,
					text:"(어린애한테 욕정하는 건 도리가 아니야.<br>무너질 지언정 인간성을 저버리지 마!)",
				},
				{
					cond:true, pos:0,
					text:"누나~ 누나?<br>... 엄마~♡",
				},
				{
					cond:true, pos:1, effect:"diffusion",
					text:"...!!!",
				},
				{
					cond:true, pos:1,
					text:"응♡ 이 엄마 힘내서 임신할래♡<br>사랑해♡ 사랑해♡ 사랑해애♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"누나 사랑해♡<br>나랑 결혼하자♡",
				},
				{
					cond:true, pos:1,
					text:"저두요♡<br>어른이 되면 꼭 결혼해요♡",
				},
				{
					cond:true, pos:0,
					text:"기다리기 싫어.<br>지금 당장, 내 고추랑 결혼해 줘♡",
				},
				{
					cond:true, pos:1,
					text:"알았어요♡<br>누나는 이제 동생군 자지의 신부예요♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"히히, 누나 덕분에 진짜 어른이 됐어♡",
				},
				{
					cond:true, pos:1,
					text:"응♡ 그러게♡<br>누나는 동생 덕분에 진짜 여자가 됐지♡",
				},
				{
					cond:true, pos:0,
					text:"에이, 누나~ 그런 소리 하지마♡<br>누나 같은 변태가 평범한 여자는 아니잖아♡",
				},
				{
					cond:true, pos:1,
					text:"맞아♡ 네가 만든 건 그냥 여자가 아니라...<br>보지즙 줄줄 흘리는 변태 암컷 오나홀이야♡",
				},
			]
		},
	],

//###################################################################################################################################################################################
	
	"방어구파괴":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0, effect:"diffusion",
					text:"*쿠오오오옷!!*",
				},
			]
		},
	],
	"타우로스울음":[
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*음머어어어!!!*",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*후우우웅...<br>프르르릉...*",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*그르르르...<br>음머어...*",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*우르릉... 크르르르...*",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*후오오오...<br>프우우우...*",
				},
			]
		},
	],
	"교배프레스":[
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0, effect:"shake",
					text:"*후오오오오!!! 프르릉!!!*",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0, effect:"shake",
					text:"*우르르릉... 음머어!!!*",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0, effect:"shake",
					text:"*후욱... 후오오오오!!!*",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0, effect:"shake",
					text:"*으르르르... 음머!!!*",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0, effect:"shake",
					text:"*후우우웅... 우오오오!!!*",
				},
			]
		},
	],
	"구애":[
		{
			priority:0, cond:{v1:"모드", op:"==", v2:0},
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"무척 거대한 자지입니다.<br>높은 확률로 보지가 버티지 못할 것입니다.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"거, 거짓말 하지마...<br>이런 크기의 자지를... 어떻게 상대해...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"워, 원래... 자지라는 건...<br>이렇게 거대한 건가요...?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"이걸로 나를... 범해주는 거구나...♡",
				},
			]
		},
		{
			priority:0, cond:{v1:"모드", op:"==", v2:1},
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"자지에 대해 분석합니다.<br>이전보다... 거대해진 것으로 보입니다.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"이, 이런 거 눈 앞에 보여주면...<br>누가 쫄 줄 알고...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"다, 다시봐도 크지만...<br>어떻게든 들어가긴 하더라구요.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"거대하고... 남성스러운 자지♡<br>보기만 해도... 자궁이 울리고 있어♡",
				},
			]
		},
	],


	"타우로스-휴식":[ //휴식
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"!=", v2:"corrupted"}], repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*후욱... 후욱...*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"==", v2:"corrupted"}], repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*후욱... 후욱...*",
				},
			]
		},
	],

	"타우로스-이벤트-개전":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*크르르르...*",
				},
				{
					cond:true, pos:1,
					text:"타우로스의 성욕 처리를...<br>수행하겠습니다.",
				},
				{
					cond:true, pos:1,
					text:"아마 제 보지는 망가지겠지만.",
				},
				{
					cond:true, pos:1,
					text:"타우로스 전용 성처리 구멍으로서,<br>최선을 다하겠습니다.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"노, 노, 농담... 하는 거지?<br>저게 정말 자지라고?",
				},
				{
					cond:true, pos:1,
					text:"저렇게 큰게 들어갈 리가 없잖아!!",
				},
				{
					cond:true, pos:0,
					text:"*푸르르...*",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"자, 잠깐... 다가오지마!",
				},
				{
					cond:true, pos:1,
					text:"아니야, 내 보지는 네 자위용 소모품이 아니야!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*크르르릉...*",
				},
				{
					cond:true, pos:1,
					text:"가여워요...<br>잔뜩 발정나서 괴로우신 거죠...?",
				},
				{
					cond:true, pos:1,
					text:"걱정 말아요.<br>제 보지를 마음껏 사용하세요.",
				},
				{
					cond:true, pos:1,
					text:"하하... 가까이서 보니까...<br>더 크네요...?",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"저런 걸 넣으면... 보지가 잔뜩 헐렁해져서,<br>다시는 못 쓰게 될텐데 말이야...♡",
				},
				{
					cond:true, pos:1,
					text:"어떡하면 좋담♡",
				},
				{
					cond:true, pos:0,
					text:"*후욱... 후욱...*",
				},
				{
					cond:true, pos:1,
					text:"*꿀꺽*",
				},
				{
					cond:true, pos:1,
					text:"어떡하긴♡ 이런 우람한 자지를 보고,<br>암컷으로서 어떻게 넘어갈 수 있겠어♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*크르르르...*",
				},
				{
					cond:true, pos:1,
					text:"타우로스의 거근 자지를 확인했습니다.",
				},
				{
					cond:true, pos:1,
					text:"이전보다 커졌지만,<br>충분히 뿌리까지 들어갈 것으로 보입니다.",
				},
				{
					cond:true, pos:1,
					text:"지금부턴 하나의 오나홀이 되도록 하겠습니다.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*크르르르...*",
				},
				{
					cond:true, pos:1,
					text:"역시 네가 나오는구나.",
				},
				{
					cond:true, pos:1,
					text:"이제 내 보지는 네 자지가 아니면...",
				},
				{
					cond:true, pos:1,
					text:"아, 아니 아무것도 아니야!<br>흥, 덤벼보라고.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*크르르르...*",
				},
				{
					cond:true, pos:1,
					text:"그러니까 저는,<br>타우로스님의 자지를 위한 오나홀이었죠?",
				},
				{
					cond:true, pos:1,
					text:"보지가 헐렁한 건,<br>거근 자지를 문제없이 받아들이기 위함이었어요.",
				},
				{
					cond:true, pos:1,
					text:"오랜만에 용도를 다할 수 있을 것 같아서 기뻐요!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*크르르르...*",
				},
				{
					cond:true, pos:1,
					text:"네 자지가 아니면 이제 안돼♡",
				},
				{
					cond:true, pos:1,
					text:"구멍이 네 모양에 맞게 변해버렸어♡<br>책임져 줘♡",
				},
			]
		},
	],
	"타우로스-이벤트-흥분":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy",
					text:"흐윽... 하아악...♡",
				},
				{
					cond:true, pos:1,
					text:"버, 버틸 수... 있습니다♡",
				},
				{
					cond:true, pos:0,
					text:"*쿠아아앙!!<br>푸르르...*",
				},
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy2",
					text:"으으윽...!!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1, portrait:"ecstasy2", keepPort:true,
					text:"살려... 살려줘♡<br>아악♡ 이거 죽어♡ 진짜 죽어♡",
				},
				{
					cond:true, pos:0, effect:"shake",
					text:"*크르릉!*",
				},
				{
					cond:true, pos:1,
					text:"괴... 괴로워♡<br>옥♡ 모, 몸이... 경련한닷♡",
				},
				{
					cond:true, pos:1, portrait:"ecstasy2",
					text:"거짓말♡ 아악♡<br>왜 쾌락이♡ 느껴지는 거야♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*음머어어!!!<br>후오오오!!!*",
				},
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy",
					text:"아힉♡ 너무 세게 움직이셔요♡<br>몸이, 몸이 말을 안 들어요♡",
				},
				{
					cond:true, pos:1,
					text:"타우로스님?<br>조, 조금만 살살...",
				},
				{
					cond:true, pos:1, portrait:"ecstasy2", effect:"shake",
					text:"이, 이렇게 괴로울 줄...<br>몰랐어요...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"믿기지 않아♡ 저, 전부 들어왔어♡",
				},
				{
					cond:true, pos:1,
					text:"뱃 속이 자지로 가득 찼어♡<br>괴롭지만... 만족감이 들어♡",
				},
				{
					cond:true, pos:1,
					text:"어, 어쩌면♡ 나는...♡",
				},
				{
					cond:true, pos:1,
					text:"타우로스님의 오나홀로 쓰이기 위해...<br>태어난 것이 아닐까♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"가볍게 절정했지만...<br>문제는 없습니다.",
				},
				{
					cond:true, pos:0,
					text:"*후욱 후욱*",
				},
				{
					cond:true, pos:1,
					text:"다리가 경련 중이지만...<br>움직일 수는 있습니다.",
				},
				{
					cond:true, pos:1,
					text:"조임에 집중하겠습니다.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"헉♡ 허억♡",
				},
				{
					cond:true, pos:0,
					text:"*으르릉... 후욱...*",
				},
				{
					cond:true, pos:1,
					text:"여전히... 무식하게 커다랗잖아...",
				},
				{
					cond:true, pos:1,
					text:"으으... 자지 모양으로 배가 튀어나왔어...♡",
				},
				{
					cond:true, pos:1,
					text:"(그래도... 아픈 것보단,<br>쾌락이 좀 더 클지도♡)",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"하악♡ 학♡",
				},
				{
					cond:true, pos:1,
					text:"뿌, 뿌리까지... 다 들어왔어요♡",
				},
				{
					cond:true, pos:0,
					text:"*으르릉... 후욱...*",
				},
				{
					cond:true, pos:1,
					text:"어, 어때요... 제 구멍♡<br>쓸만하죠♡",
				},
				{
					cond:true, pos:1,
					text:"타우로스님 자지를 삼킬 수 있는 건...<br>제 보지 뿐일 거예요♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"왔다♡ 거근 자지 왔다♡",
				},
				{
					cond:true, pos:0,
					text:"*으르릉... 후욱...*",
				},
				{
					cond:true, pos:1,
					text:"뱃 속이 자지만으로...<br>꽉 차는 숨 막히는 느낌...♡",
				},
				{
					cond:true, pos:1,
					text:"최고야♡<br>이걸 원했어♡",
				},
			]
		},
	],
	"타우로스-이벤트-타락":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy2", keepPort:true,
					text:"*파들파들...*",
				},
				{
					cond:true, pos:1,
					text:"으윽♡ 아그윽...♡",
				},
				{
					cond:true, pos:1, portrait:"ecstasy2",
					text:"아흑♡ 아히익♡",
				},
			]
		},
	],

//###################################################################################################################################################################################
	
	"부식즙":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0, effect:"shake",
					text:"*푸쉬익...*",
				},
			]
		},
	],

	"번식":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"고고고곡...",
				},
			]
		},
	],
	"양분흡수":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*쭈욱 쭈욱*",
				},
			]
		},
	],
	"씨뿌리기":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*푸쉬익...*",
				},
			]
		},
	],

	"버섯남자-이벤트-개전":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"상대는 언데드로 보이지만,<br>생식 기능이 작동하는 듯 합니다.",
				},
				{
					cond:true, pos:1,
					text:"그렇다면 저는 섹스를 해야 합니다.",
				},
				{
					cond:true, pos:0,
					text:"응고고곡...",
				},
				{
					cond:true, pos:1,
					text:"그와 몸을 섞을 준비를 마쳤습니다.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"이게 뭐야? 시체가 움직이는 건가?<br>정말 역겨워...",
				},
				{
					cond:true, pos:1,
					text:"이런 괴물과 섹스를 해야 한다고?<br>절대 싫어! 가까이 오지 마!",
				},
				{
					cond:true, pos:0, effect:"shake",
					text:"*푸쉬식...*",
				},
				{
					cond:true, pos:1,
					text:"(어라... 왜 몸이 이렇게 나른해지지...?<br>눈앞이 흐릿해...)",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"우와, 머리에 커다란 버섯이...!<br>이런 거 처음 봤어요.",
				},
				{
					cond:true, pos:0,
					text:"기기기긱...",
				},
				{
					cond:true, pos:1,
					text:"어쨌든, 섹스를 하면 되는 거죠?<br>벌릴 준비 되었어요.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"버섯 투성이네~<br>그치만 내가 제일 좋아하는 버섯은...",
				},
				{
					cond:true, pos:1,
					text:"역시, 아랫도리에 달린 자지 버섯이지♡",
				},
				{
					cond:true, pos:0,
					text:"고고곡...",
				},
				{
					cond:true, pos:1,
					text:"와아♡ 언데드치고 상당히 훌륭한 물건이잖아♡<br>즐길 수 있겠는 걸♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*너는 우리의 일부가 된다.<br>무리를 위해 몸을 바쳐라.*",
				},
				{
					cond:true, pos:1,
					text:"제가 섬기는 것은 투기장입니다.<br>주인을 착각해선 안됩니다.",
				},
				{
					cond:true, pos:1,
					text:"제가 해야할 일은 투기장의 명령에 따라,<br>당신과 섹스를 하는 것 뿐입니다.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*너는 번식을 위한 도구다.<br>우리의 뜻에 따르라.*",
				},
				{
					cond:true, pos:1,
					text:"흥, 내가 현혹될 것 같아?",
				},
				{
					cond:true, pos:1,
					text:"뭐, 번식이 섹스를 말하는 거라면...<br>해줄 수는 있지만.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*너는 우리와 함께한다.<br>더 많은 포자를 받아들여라.*",
				},
				{
					cond:true, pos:1,
					text:"네, 군주님.<br>제 몸은 이미 포자군주님께 속해 있어요.",
				},
				{
					cond:true, pos:1,
					text:"인류 지배를 위한 주춧돌로서,<br>제 육신을 사용하시길 바라요.",
				},
				{
					cond:true, pos:1,
					text:"어라? 제가 방금 뭐라고 했나요?<br>입이 저절로 움직였는데...?",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*너는 우리의 일부가 된다.<br>무리를 위해 일하라.*",
				},
				{
					cond:true, pos:1,
					text:"미안♡ 그런 건 관심 없어♡",
				},
				{
					cond:true, pos:1,
					text:"나는 섹스만 즐기면 충분해♡",
				},
			]
		},
	],
	"버섯남자-이벤트-정신동기화":[ //정신동기화
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"엘도리아인"}, {v1:"커스텀.배경", op:"==", v2:"군인"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*환상 속에 빠져 있거라.*",
				},
				{
					cond:true, pos:1,
					text:"여왕 폐하...?",
				},
				{
					cond:true, pos:1,
					text:"아, 아니 되옵...<br>부끄럽습...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"실바니"}, {v1:"커스텀.배경", op:"==", v2:"군인"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*환상 속에 빠져 있거라.*",
				},
				{
					cond:true, pos:1,
					text:"더러운... 엘도리아인들...",
				},
				{
					cond:true, pos:1,
					text:"이제와서 빌어도... 소용 없...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"하프만"}, {v1:"커스텀.배경", op:"==", v2:"군인"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*환상 속에 빠져 있거라.*",
				},
				{
					cond:true, pos:1,
					text:"아가씨...?",
				},
				{
					cond:true, pos:1,
					text:"어째서 저를...<br>제가... 소중...?",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"트라이브"}, {v1:"커스텀.배경", op:"==", v2:"군인"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*환상 속에 빠져 있거라.*",
				},
				{
					cond:true, pos:1,
					text:"찾았다... 벗...",
				},
				{
					cond:true, pos:1,
					text:"내가... 구해냈...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"엘도리아인"}, {v1:"커스텀.배경", op:"==", v2:"엘리트"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*환상 속에 빠져 있거라.*",
				},
				{
					cond:true, pos:1,
					text:"진정한... 속박되지 않는... 모험을...",
				},
				{
					cond:true, pos:1,
					text:"가족들이... 인정해줬어...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"실바니"}, {v1:"커스텀.배경", op:"==", v2:"엘리트"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*환상 속에 빠져 있거라.*",
				},
				{
					cond:true, pos:1,
					text:"천박한... 엘도리아인들...",
				},
				{
					cond:true, pos:1,
					text:"무릎 꿇은 모습이... 보기 좋아...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"트라이브"}, {v1:"커스텀.배경", op:"==", v2:"엘리트"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*환상 속에 빠져 있거라.*",
				},
				{
					cond:true, pos:1,
					text:"부족의... 명예를 드높여...",
				},
				{
					cond:true, pos:1,
					text:"평화와... 안녕이... 왔어...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"엘도리아인"}, {v1:"커스텀.배경", op:"==", v2:"연예인"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*환상 속에 빠져 있거라.*",
				},
				{
					cond:true, pos:1,
					text:"모두를... 구했어...",
				},
				{
					cond:true, pos:1,
					text:"영웅으로... 불리고 있어...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"실바니"}, {v1:"커스텀.배경", op:"==", v2:"연예인"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*환상 속에 빠져 있거라.*",
				},
				{
					cond:true, pos:1,
					text:"사람들 앞은... 이제 싫어...",
				},
				{
					cond:true, pos:1,
					text:"조용한 곳에서... 평화롭게...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"하프만"}, {v1:"커스텀.배경", op:"==", v2:"연예인"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*환상 속에 빠져 있거라.*",
				},
				{
					cond:true, pos:1,
					text:"모두가 나를... 좋아해...",
				},
				{
					cond:true, pos:1,
					text:"나는 대륙 최고의... 대스타...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"트라이브"}, {v1:"커스텀.배경", op:"==", v2:"연예인"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*환상 속에 빠져 있거라.*",
				},
				{
					cond:true, pos:1,
					text:"강자와의... 진정한 싸움...",
				},
				{
					cond:true, pos:1,
					text:"목숨을 건... 진검승부...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"엘도리아인"}, {v1:"커스텀.배경", op:"==", v2:"종교인"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*환상 속에 빠져 있거라.*",
				},
				{
					cond:true, pos:1,
					text:"아아... 알레이아님...",
				},
				{
					cond:true, pos:1,
					text:"지켜보고... 계셨어...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"하프만"}, {v1:"커스텀.배경", op:"==", v2:"종교인"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*환상 속에 빠져 있거라.*",
				},
				{
					cond:true, pos:1,
					text:"아아... 모르베인님...",
				},
				{
					cond:true, pos:1,
					text:"나는... 옳은 길을... 택했어...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"트라이브"}, {v1:"커스텀.배경", op:"==", v2:"종교인"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*환상 속에 빠져 있거라.*",
				},
				{
					cond:true, pos:1,
					text:"아아... 레아님...",
				},
				{
					cond:true, pos:1,
					text:"사명을... 인정 받았어...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"엘도리아인"}, {v1:"커스텀.배경", op:"==", v2:"학자"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*환상 속에 빠져 있거라.*",
				},
				{
					cond:true, pos:1,
					text:"위대한... 대발견...",
				},
				{
					cond:true, pos:1,
					text:"모두가 나를... 찬양해...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"실바니"}, {v1:"커스텀.배경", op:"==", v2:"학자"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*환상 속에 빠져 있거라.*",
				},
				{
					cond:true, pos:1,
					text:"실험은... 대성공...",
				},
				{
					cond:true, pos:1,
					text:"실바니아 연방의... 무구한 영광을...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"하프만"}, {v1:"커스텀.배경", op:"==", v2:"학자"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*환상 속에 빠져 있거라.*",
				},
				{
					cond:true, pos:1,
					text:"드디어... 인정 받았어...",
				},
				{
					cond:true, pos:1,
					text:"나도 이제... 학위가...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"트라이브"}, {v1:"커스텀.배경", op:"==", v2:"학자"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*환상 속에 빠져 있거라.*",
				},
				{
					cond:true, pos:1,
					text:"모든 지식이... 이곳에...",
				},
				{
					cond:true, pos:1,
					text:"배움은 정말... 끝이 없어...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"엘도리아인"}, {v1:"커스텀.배경", op:"==", v2:"범죄자"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*환상 속에 빠져 있거라.*",
				},
				{
					cond:true, pos:1,
					text:"부와... 권력...",
				},
				{
					cond:true, pos:1,
					text:"뒷세계의... 제왕이다...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"실바니"}, {v1:"커스텀.배경", op:"==", v2:"범죄자"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*환상 속에 빠져 있거라.*",
				},
				{
					cond:true, pos:1,
					text:"처음 보는... 정신마술...",
				},
				{
					cond:true, pos:1,
					text:"흥미로워... 즐거워...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"하프만"}, {v1:"커스텀.배경", op:"==", v2:"범죄자"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*환상 속에 빠져 있거라.*",
				},
				{
					cond:true, pos:1,
					text:"하프만의... 자유다...",
				},
				{
					cond:true, pos:1,
					text:"더 이상... 차별은 없어...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"트라이브"}, {v1:"커스텀.배경", op:"==", v2:"범죄자"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*환상 속에 빠져 있거라.*",
				},
				{
					cond:true, pos:1,
					text:"금은보화가... 한가득...",
				},
				{
					cond:true, pos:1,
					text:"이제 더는... 방황하지 않아도 돼...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"엘도리아인"}, {v1:"커스텀.배경", op:"==", v2:"상인"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*환상 속에 빠져 있거라.*",
				},
				{
					cond:true, pos:1,
					text:"사업이... 흑자로...",
				},
				{
					cond:true, pos:1,
					text:"투자가... 대박이...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"실바니"}, {v1:"커스텀.배경", op:"==", v2:"상인"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*환상 속에 빠져 있거라.*",
				},
				{
					cond:true, pos:1,
					text:"신화 시대의... 유물이야...",
				},
				{
					cond:true, pos:1,
					text:"역사의... 대 발견...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"하프만"}, {v1:"커스텀.배경", op:"==", v2:"상인"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*환상 속에 빠져 있거라.*",
				},
				{
					cond:true, pos:1,
					text:"더는... 방해받지 않아...",
				},
				{
					cond:true, pos:1,
					text:"좋아하는 공예를... 계속 할 수 있어...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"트라이브"}, {v1:"커스텀.배경", op:"==", v2:"상인"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*환상 속에 빠져 있거라.*",
				},
				{
					cond:true, pos:1,
					text:"엄청난 돈벌이... 대박나...",
				},
				{
					cond:true, pos:1,
					text:"내 이름으로 된... 상회가...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"엘도리아인"}, {v1:"커스텀.배경", op:"==", v2:"용병"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*환상 속에 빠져 있거라.*",
				},
				{
					cond:true, pos:1,
					text:"살아... 있었구나...",
				},
				{
					cond:true, pos:1,
					text:"너의 복수를... 끝냈어...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"실바니"}, {v1:"커스텀.배경", op:"==", v2:"용병"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*환상 속에 빠져 있거라.*",
				},
				{
					cond:true, pos:1,
					text:"나는... 무엇이든...",
				},
				{
					cond:true, pos:1,
					text:"원하는 건... 전부...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"하프만"}, {v1:"커스텀.배경", op:"==", v2:"용병"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*환상 속에 빠져 있거라.*",
				},
				{
					cond:true, pos:1,
					text:"엄청난... 돈...",
				},
				{
					cond:true, pos:1,
					text:"이것만 있으면... 무엇이든...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"트라이브"}, {v1:"커스텀.배경", op:"==", v2:"용병"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*환상 속에 빠져 있거라.*",
				},
				{
					cond:true, pos:1,
					text:"싸움... 끝 없는 싸움...",
				},
				{
					cond:true, pos:1,
					text:"즐거워... 피가 끓어...",
				},
			]
		},

		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.배경", op:"==", v2:"군인"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*환상 속에 빠져 있거라.*",
				},
				{
					cond:true, pos:1,
					text:"자지님께... 충성을...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.배경", op:"==", v2:"엘리트"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*환상 속에 빠져 있거라.*",
				},
				{
					cond:true, pos:1,
					text:"남성분께... 봉사를...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.배경", op:"==", v2:"연예인"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*환상 속에 빠져 있거라.*",
				},
				{
					cond:true, pos:1,
					text:"모두가 내게... 욕정을...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.배경", op:"==", v2:"종교인"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*환상 속에 빠져 있거라.*",
				},
				{
					cond:true, pos:1,
					text:"자지님을... 숭배해야...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.배경", op:"==", v2:"학자"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*환상 속에 빠져 있거라.*",
				},
				{
					cond:true, pos:1,
					text:"섹스의 쾌락을... 끝 없이 연구...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.배경", op:"==", v2:"범죄자"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*환상 속에 빠져 있거라.*",
				},
				{
					cond:true, pos:1,
					text:"때려줘... 더 세게...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.배경", op:"==", v2:"상인"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*환상 속에 빠져 있거라.*",
				},
				{
					cond:true, pos:1,
					text:"정액... 넘치는 정액...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.배경", op:"==", v2:"용병"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*환상 속에 빠져 있거라.*",
				},
				{
					cond:true, pos:1,
					text:"섹스 결투의... 쾌락...",
				},
			]
		},
	],
	"버섯남자-이벤트-흥분":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"가볍게 절정했습니다.",
				},
				{
					cond:true, pos:1,
					text:"비정상적인 고양감과 쾌락이 느껴집니다.",
				},
				{
					cond:true, pos:1,
					text:"지속적으로 흡입된 포자의 효과로 추정됩니다.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"젠장... 내가 이런 썩어문드러진 녀석과<br>섹스를 하면서 느껴버렸다고? 말도 안 돼!",
				},
				{
					cond:true, pos:1,
					text:"하아... 하지만... 몸이...<br>왜 이렇게 뜨거워지는 거야...",
				},
				{
					cond:true, pos:1,
					text:"좀 더... 내 깊은 곳에...<br>포자정액을 뿌려주면... 좋겠어...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"아앗♡ 가버렸어요...",
				},
				{
					cond:true, pos:0,
					text:"*받아들여라...<br>너는 번식을 위한 도구다...*",
				},
				{
					cond:true, pos:1,
					text:"... ...",
				},
				{
					cond:true, pos:1,
					text:"저는... 번식을 위한... 도구...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"하앗♡<br>꽤 높은 점수를 주고 싶은 자지인 걸♡",
				},
				{
					cond:true, pos:1,
					text:"기분 좋아♡ 조금 저릿하고...<br>어지러운 기분이 들긴 하는데...♡",
				},
				{
					cond:true, pos:0,
					text:"... ...",
				},
				{
					cond:true, pos:1,
					text:"으응♡<br>보다보니... 잘생긴 것 같기도 하고...♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"보고합니다... 보고...<br>제 몸은 투기장의 소유입니다...",
				},
				{
					cond:true, pos:1,
					text:"아니, 군주님의 것입니다... 아니...!",
				},
				{
					cond:true, pos:1,
					text:"명령을 수행 중입니다... 투기장의...",
				},
				{
					cond:true, pos:1,
					text:"아니, 군주님의... 아니... 명령에 따릅니다...!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*번식해라. 번식해라.<br>번식해라. 번식해라.*",
				},
				{
					cond:true, pos:1,
					text:"내가 명령을 들을 거라고 생각했다면...<br>큰 착각이야...",
				},
				{
					cond:true, pos:1,
					text:"이건, 내가 하고 싶어서 하는 거야...♡<br>내가 원해서 하는... 번식이야♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*너는 충실한 종이다.<br>더 많은 포자를 받아들여라.*",
				},
				{
					cond:true, pos:1,
					text:"앙♡ 아앙♡<br>포자군주님 만세♡",
				},
				{
					cond:true, pos:1,
					text:"하앙♡<br>만세에♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"하아♡ 번식 섹스 너무 좋아♡",
				},
				{
					cond:true, pos:0,
					text:"*너는 이미 무리의 것이다.<br>더 깊이 스며들어라.*",
				},
				{
					cond:true, pos:1,
					text:"이렇게 좋은 거라면 할게♡<br>포자든 자지든 다 받아줄게♡",
				},
			]
		},
	],
	"버섯남자-이벤트-타락":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"포자를 더 받아들입니다...♡<br>제 몸은 무리의 것입니다...♡",
				},
				{
					cond:true, pos:1,
					text:"질내가 포자정액으로 가득찼습니다...♡",
				},
				{
					cond:true, pos:0,
					text:"*번식해라...<br>모판이 되어라...*",
				},
				{
					cond:true, pos:1,
					text:"명령에 따릅니다...♡<br>배란을 시작합니다...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*번식해라...<br>모판이 되어라...*",
				},
				{
					cond:true, pos:1,
					text:"어쩔 수 없네...♡<br>군주님의 명령이라면... 따라야지...♡",
				},
				{
					cond:true, pos:1,
					text:"나는... 번식을 위한... 도구니까...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*번식해라...<br>모판이 되어라...*",
				},
				{
					cond:true, pos:1,
					text:"네... 군주님...<br>제 몸이 번식을 위해 존재함을 깨달았어요...♡",
				},
				{
					cond:true, pos:1,
					text:"부디, 이 몸과 정신을...<br>번식을 위한 양분으로... 사용해주세요...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"하앙♡ 앙♡<br>더 세게♡ 박아줘엇♡",
				},
				{
					cond:true, pos:0,
					text:"*번식해라...<br>모판이 되어라...*",
				},
				{
					cond:true, pos:1,
					text:"응♡ 될게♡<br>자궁에 잔뜩 씨를 뿌려줘...♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond: true,
					pos: 1,
					text: "포자군주님 만세...♡<br>포자군주님 만세...♡"
				},
				{
					cond: true,
					pos: 1,
					text: "제 자궁을 포자군주님께...♡<br>제 자궁을 포자군주님께...♡"
				},
				{
					cond: true,
					pos: 1,
					text: "포자를 더 받아들입니다...♡<br>포자를 더 받아들입니다...♡"
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond: true,
					pos: 1,
					text: "저항할 수 없어...♡<br>저항해선 안돼...♡"
				},
				{
					cond: true,
					pos: 1,
					text: "내 정신은 보잘 것 없어...♡<br>내 육신은 쓸모 없어...♡"
				},
				{
					cond: true,
					pos: 1,
					text: "내 정신은 군주님의 것...♡<br>내 몸은 무리의 것...♡"
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"포자군주님께 충성을...♡<br>포자군주님께 복종을...♡",
				},
				{
					cond:true, pos:1,
					text:"제 몸과 정신을...♡<br>포자군주님께 바칠게요...♡",
				},
				{
					cond:true, pos:1,
					text:"군주님 만세...♡<br>무리여 영원하리...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"하아♡<br>군주님의 자지와 포자 최고야♡",
				},
				{
					cond:true, pos:1,
					text:"내 몸을 더 많이 써줘♡<br>군주님 사랑해♡",
				},
				{
					cond:true, pos:1,
					text:"포자로 가득 차고 싶어♡<br>버섯으로 뒤덮이고 싶어♡",
				},
			]
		},
	],

//###################################################################################################################################################################################

	"능숙하게벗기기":[
		{
			priority:0, cond:{v1:"모드", op:"==", v2:0},
			lineList:[
				{
					cond:true, pos:0,
					text:"도와줄까?<br>벗기는 건 내 특기거든.",
				},
			]
		},
		{
			priority:0, cond:{v1:"모드", op:"==", v2:1},
			lineList:[
				{
					cond:true, pos:0,
					text:"옷부터 벗자.<br>너는 알몸이 어울려.",
				},
			]
		},
	],

	"깊게박아넣기":[
		{
			priority:0, cond:{v1:"모드", op:"==", v2:0},
			lineList:[
				{
					cond:{v1:"플레이어.기록.이번.이벤트.자극함", op:">", v2:0}, pos:0,
					text:"하, 엄청 쪼이네.<br>나도 기대에 부응해 깊게 박아줄게.",
				},
				{
					cond:{v1:"플레이어.기록.이번.이벤트.자극함", op:"==", v2:0}, pos:0,
					text:"여기까지 닿은 자지 있어?<br>이렇게 끝부분 문질러준 자지 없지?",
				},
			]
		},
		{
			priority:0, cond:{v1:"모드", op:"==", v2:1},
			lineList:[
				{
					cond:true, pos:0,
					text:"뿌리까지 전부 들어가네.<br>보지가 완전 내 자지 모양이잖아.",
				},
			]
		},
	],
	"부드럽게몸을섞기":[
		{
			priority:0, cond:{v1:"모드", op:"==", v2:0},
			lineList:[
				{
					cond:"체위", pos:0,
					text:"내게 전부 맡기고,<br>너는 느끼기만 하면 되는거야.",
				},
				{
					cond:{v1:"체위", op:"==", v2:false}, pos:0,
					text:"조금만 상냥하게 해주면,<br>금방 넘어와 벌릴 거면서.",
				},
			]
		},
		{
			priority:0, cond:{v1:"모드", op:"==", v2:1},
			lineList:[
				{
					cond:true, pos:0,
					text:"이건 조금의 서비스~",
				},
			]
		},
	],
	"강제로거칠게":[
		{
			priority:0, cond:{v1:"모드", op:"==", v2:0},
			lineList:[
				{
					cond:{v1:"플레이어.행동.length", op:">=", v2:2}, pos:0,
					text:"비싼 척 해봤자,<br>가랑이를 벌리면 다 이렇게 돼.",
				},
				{
					cond:{v1:"플레이어.행동.length", op:"<", v2:2}, pos:0,
					text:"박히면 앙앙댈 년이,<br>겁나 비싸게 구네...",
				},
			]
		},
		{
			priority:0, cond:{v1:"모드", op:"==", v2:1},
			lineList:[
				{
					cond:true, pos:0,
					text:"이건 못 참겠다.<br>잠깐 오나홀처럼 쓸게.",
				},
			]
		},
	],
	"가득채워주기":[
		{
			priority:0, cond:{v1:"모드", op:"==", v2:0},
			lineList:[
				{
					cond:{v1:"챔피언.기록.이번.이벤트.절정", op:">", v2:0}, pos:0,
					text:"큭, 쪼인다...<br>안에 싸도 상관없지?",
				},
				{
					cond:{v1:"챔피언.기록.이번.이벤트.절정", op:"==", v2:0}, pos:0,
					text:"괜찮아~ 밖에다 쌀게.<br>(거짓말이지만.)",
				},
			]
		},
		{
			priority:0, cond:{v1:"모드", op:"==", v2:1},
			lineList:[
				{
					cond:true, pos:0,
					text:"당연히 질내사정이지?",
				},
			]
		},
	],
	"스스럼없는스킨십":[
		{
			priority:0, cond:{v1:"모드", op:"==", v2:0},
			lineList:[
				{
					cond:{v1:"플레이어.기록.전체.제거.length", op:">", v2:0}, pos:0,
					text:"이건 거의 다 넘어왔네.<br>쉽다 쉬워~.",
				},
				{
					cond:{v1:"플레이어.기록.전체.제거.length", op:"==", v2:0}, pos:0,
					text:"조금 주무른다고 닳는 것도 아니잖아.",
				},
			]
		},
		{
			priority:0, cond:{v1:"모드", op:"==", v2:1},
			lineList:[
				{
					cond:true, pos:0,
					text:"음란한 젖통이랑 엉덩이 가져선...<br>유혹하는거지?",
				},
			]
		},
	],
	"다리벌리기":[
		{
			priority:0, cond:{v1:"모드", op:"==", v2:0},
			lineList:[
				{
					cond:{v1:"플레이어.기록.이번.이벤트.자극함", op:"==", v2:0}, pos:0,
					text:"자, 네가 기다리던 자지라고.",
				},
				{
					cond:{v1:"플레이어.기록.이번.이벤트.자극함", op:"!=", v2:0}, pos:0,
					text:"좋은 말로 할 때, 힘 빼.",
				},
			]
		},
		{
			priority:0, cond:{v1:"모드", op:"==", v2:1},
			lineList:[
				{
					cond:true, pos:0,
					text:"자, 보지 오픈!",
				},
			]
		},
	],
	"쾌락을새겨주기":[
		{
			priority:1, cond:{v1:"모드", op:"==", v2:0},
			lineList:[
				{
					cond:true, pos:0,
					text:"여기가 약점이지? 딱 반응이 다르네.<br>좋아, 바로 끝내줄게.",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"아직도 버텨?<br>지독하다 지독해.",
				},
			]
		},
	],
	/*
	"섞여드는키스":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"나는 키스도 잘 하거든.",
				},
			]
		},
	],
	"핥고빨기":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"이런 덩어리를 달고 다니면서,<br>남자를 유혹하고 다니긴.",
				},
			]
		},
	],*/

	"금발양아치-이벤트-개전":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"서로 사랑을 나누며 알아가보자고.",
				},
				{
					cond:true, pos:1,
					text:"이것은 사랑을 나누는 행위가 아니라,<br>결투입니다.",
				},
				{
					cond:true, pos:0,
					text:"딱딱하긴.<br>어차피 곧 나한테 반할 거면서.",
				},
				{
					cond:true, pos:1,
					text:"그것은 명령입니까?<br>당신에게 반한 것처럼 행동할 수 있습니다.",
				},
				{
					cond:true, pos:0,
					text:"그럴 필요 없어.<br>난 진심이 좋아~",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"즐겁지 않은 표정이네.<br>이런 야한 몸 가졌으면, 섹스를 즐겨야지.",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"내 몸에 손 대지마.",
				},
				{
					cond:true, pos:0, effect:"shake",
					text:"아야야, 까칠하긴.<br>뭐가 그렇게 마음에 안 드는 거야?",
				},
				{
					cond:true, pos:1,
					text:"전부.",
				},
				{
					cond:true, pos:1,
					text:"네 놈의 무례한 언행부터,<br>나를 자기 소유물이라 생각하는 태도까지.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"아아, 어쩔거야~<br>네가 너무 음란해서 발기가 안 풀리잖아.",
				},
				{
					cond:true, pos:1,
					text:"네?<br>어, 어쩜 좋아.",
				},
				{
					cond:true, pos:1,
					text:"죄송해요...<br>제 몸을 사용해서 해소해주세요.",
				},
				{
					cond:true, pos:0,
					text:"하하. 너 혹시,<br>평소에 빡대가리라는 소리 많이 듣지 않아?",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"섹스에 자신이 좀 있나봐?",
				},
				{
					cond:true, pos:0,
					text:"내가 좀 절륜해서.<br>노예... 아니 섹파들한테 인기가 많거든.",
				},
				{
					cond:true, pos:1,
					text:"기대되네...♡<br>나를 만족시킬 수 있기를♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"오늘이야말로 널 내 것으로 만들건데,<br>너는 어떻게 생각해?",
				},
				{
					cond:true, pos:1,
					text:"최선을 다해 임하겠습니다.<br>명령을 내려주십시오.",
				},
				{
					cond:true, pos:0,
					text:"명령, 명령, 어지럽네 진짜.",
				},
				{
					cond:true, pos:0,
					text:"산드레아한테,<br>제발 최면 방식 좀 바꾸라고 해야겠어.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"(순간이지만, 이 남자의 얼굴을 본 순간<br>기쁘다고 생각해버렸어.)",
				},
				{
					cond:true, pos:1,
					text:"(아니, 어쩔 수 없잖아...<br>이녀석, 섹스 굉장히 잘하고...)",
				},
				{
					cond:true, pos:0,
					text:"뭔데 혼자 표정이 심각해?<br>섹스 안 할거야?",
				},
				{
					cond:true, pos:1,
					text:"하, 할거야.<br>너무 싫어서 고민 좀 했어.",
				},
				{
					cond:true, pos:0,
					text:"입이 귀에 걸렸구만,<br>아직도 솔직하지 못하긴.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"오랜만이야.<br>내가 시킨 건 다 했어?",
				},
				{
					cond:true, pos:1,
					text:"네! 매일매일 자위 하면서,<br>젖꼭지랑 애널 개발도 끝냈어요.",
				},
				{
					cond:true, pos:1,
					text:"전부, 여자로서의 기쁨을 알려주신 덕분이에요.",
				},
				{
					cond:true, pos:0,
					text:"푸하핫, 그걸 진짜 하네.",
				},
				{
					cond:true, pos:0,
					text:"좋아, 나도 그럼 힘내서<br>오늘이야말로 함락을 시켜볼까?",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"솔직하게 말해봐.<br>저번에 나랑 한 이후로 몇 명이랑 했어?",
				},
				{
					cond:true, pos:1,
					text:"어디보자...<br>결투에서 챔피언 상대로 6번 했고...",
				},
				{
					cond:true, pos:1,
					text:"접대로 27? 28?<br>한 번은 난교였어서 제대로 기억이 안 나네♡",
				},
				{
					cond:true, pos:0,
					text:"하이고, 그냥<br>내가 아는 얼굴이랑은 다 했다고 보면 되겠네.",
				},
				{
					cond:true, pos:0,
					text:"그래도 신경 안 써.<br>어차피 내 자지로 전부 덮어씌워 줄거라.",
				},
			]
		},
	],
	"금발양아치-이벤트-흥분":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"어때, 기분 좋지?",
				},
				{
					cond:true, pos:1,
					text:"그렇습니다.<br>가볍게 절정했습니다.",
				},
				{
					cond:true, pos:0,
					text:"로봇 같아서 재미없다고 생각했는데,<br>느낄 건 다 느끼잖아?",
				},
				{
					cond:true, pos:0,
					text:"오히려 재밌네.<br>좀 더 가지고 놀고 싶어졌어.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"푸하하, 그렇게 잘난 척 하더니.<br>지금 가버린 거 아니야?",
				},
				{
					cond:true, pos:1,
					text:"아, 아니거든!<br>네 허접한 섹스로 내가 느낄 리가 없잖아!",
				},
				{
					cond:true, pos:0,
					text:"그럼 부르르 떨면서 조인 건 뭔데?",
				},
				{
					cond:true, pos:1,
					text:"너, 너무 지루해서.<br>하품하느라... 그런 거야.",
				},
				{
					cond:true, pos:1,
					text:"(젠장, 짜증나게...<br>이놈, 왜 섹스만큼은 이렇게 잘하는 거야?)",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"앗... 제 몸이 왜 이럴까요?<br>자꾸 안에서... 간질간질한 기분이 들어요.",
				},
				{
					cond:true, pos:0,
					text:"좆을 받아들인 네 보지가 날 원하는 거지.",
				},
				{
					cond:true, pos:1,
					text:"그, 그런가요?<br>이런 기분은 처음이라서... 잘 모르겠어요.",
				},
				{
					cond:true, pos:0,
					text:"여자로서 느낄 수 있는 기쁨을 내가 알려줄게.<br>더 확실히.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"그럭저럭♡<br>잘 하긴 하네♡",
				},
				{
					cond:true, pos:1,
					text:"크기부터 합격점♡<br>기분 좋은 곳을 제대로 찔러주네♡",
				},
				{
					cond:true, pos:0,
					text:"당연하지.<br>여자를 다루는 법은 내가 제일 잘 알거든.",
				},
				{
					cond:true, pos:0,
					text:"그래서, 어때?<br>인정하고 패배를 받아들일래?",
				},
				{
					cond:true, pos:1,
					text:"아니♡ 아직 멀었어♡<br>조금 더 즐기고 싶거든♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"깨달았어. 네 상태론 정신적 압박은 어려우니,<br>몸에 새겨주면 된다고.",
				},
				{
					cond:true, pos:0,
					text:"방금 건 어땠어?<br>보고해줘.",
				},
				{
					cond:true, pos:1,
					text:"피스톤질 때,<br>보지가 딸려나가는 느낌이 좋아서 절정했습니다.",
				},
				{
					cond:true, pos:0,
					text:"피드백할 것은?",
				},
				{
					cond:true, pos:1,
					text:"쑤셔박을 때, 좀 더 안쪽 벽을 찌르면<br>더욱 가버릴 수 있을 것 같습니다.",
				},
				{
					cond:true, pos:0,
					text:"접수했어.<br>이제야 좀 네 사용법을 알겠네.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"골라봐. 더 깊게 박아줄까?<br>아니면 그만하고 빼줄까?",
				},
				{
					cond:true, pos:1,
					text:"내 입으로... 직접 말하라는 거냐?",
				},
				{
					cond:true, pos:0,
					text:"빼?",
				},
				{
					cond:true, pos:1,
					text:"... 박아.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"분명, 이 쪽을 찌르는 걸 좋아했지.",
				},
				{
					cond:true, pos:1,
					text:"맞아요오♡<br>기억해주고 계셨네요♡",
				},
				{
					cond:true, pos:0,
					text:"당연하지.<br>나는 내 여자에 대한 건 안 잊어버린다고.",
				},
				{
					cond:true, pos:1,
					text:"헤헤, 저는 당신의 여자인가요.<br>그럼, 제 이름도 기억하고 계셨나요?",
				},
				{
					cond:true, pos:0,
					text:"아니.<br>보지년 이름을 내가 왜 기억해?",
				},
				{
					cond:true, pos:1,
					text:"그, 그것도 그렇네요!<br>헤헤...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"어때, 역시 내 자지가 최고지?",
				},
				{
					cond:true, pos:1,
					text:"으응♡<br>다른 자지들로는 절대 이렇게 못 느껴♡",
				},
				{
					cond:true, pos:0,
					text:"다른 자지들은 어땠는데?",
				},
				{
					cond:true, pos:1,
					text:"몰라♡ 기억 안 나♡<br>이거에 박히는 순간♡ 전부 까먹었어♡",
				},
			]
		},
	],
	"금발양아치-이벤트-타락":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"가... 갔습니다♡",
				},
				{
					cond:true, pos:0,
					text:"너무 짧잖아.<br>어디로 어떻게 느꼈는지, 제대로 보고해야지?",
				},
				{
					cond:true, pos:1,
					text:"제... 보지가...♡<br>당신의 자지로... 느껴서... 가버렸습니다♡",
				},
				{
					cond:true, pos:0,
					text:"정말, 첫 모습은 상상도 못할 정도로 흐트러졌네.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"하하, 손대지 말라면서.<br>손은 안되고, 자지는 되는거냐?",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"하읏♡ 기분 조아...♡",
				},
				{
					cond:true, pos:0,
					text:"내가 너를 소유물처럼 여겨서 싫었다며?",
				},
				{
					cond:true, pos:0,
					text:"네 보지가 내 것이 됐는데,<br>어떻게 된거야?",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"이런 거 몰라써어...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"자, 어땠어 방금 건?",
				},
				{
					cond:true, pos:1,
					text:"괴... 굉장...해요...♡",
				},
				{
					cond:true, pos:0,
					text:"아직 말할 기력이 있는 걸 보니,<br>다음은 더 굉장한 걸 느끼게 해줘야겠어.",
				},
				{
					cond:true, pos:1,
					text:"네, 네에...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"하아♡ 멈춰줘♡<br>더 하면... 진짜로... 이상해질 것 같아♡",
				},
				{
					cond:true, pos:0,
					text:"오래 즐기고 싶다며?<br>난 이대로 몇 시간은 더 할 수 있는데.",
				},
				{
					cond:true, pos:1,
					text:"너무 깊어♡<br>너무 좋아서 미칠 것 같아♡",
				},
				{
					cond:true, pos:0,
					text:"경험 많은 듯, 여유로워 보이더니 말이야.<br>그냥 허접 보지의 허세였잖아.",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy2", keepPort:true,
					text:"하윽♡ 하아앙♡",
				},
				{
					cond:true, pos:0,
					text:"이제 말해봐.<br>네 몸은 누구의 것이지?",
				},
				{
					cond:true, pos:1,
					text:"당신...♡<br>전부 당신의... 것입니다...♡",
				},
				{
					cond:true, pos:1, portrait:"ecstasy2",
					text:"제 가슴도... 보지도...♡<br>모두... 당신의 것...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"하아... 하아...♡ 사랑해...♡",
				},
				{
					cond:true, pos:1,
					text:"네가 싫다고 생각했는데...<br>이젠... 네가 없으면 안돼...♡",
				},
				{
					cond:true, pos:0,
					text:"좋아, 솔직히 말해줬으니.<br>나도 보답으로 자지를 박아줄게.",
				},
				{
					cond:true, pos:1,
					text:"와아...♡ 기뻐...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"하아... 하아... 사랑해요♡<br>사귀어주세요♡",
				},
				{
					cond:true, pos:0,
					text:"사귀어?<br>너랑 내가 동등한 위치라고 생각해?",
				},
				{
					cond:true, pos:0,
					text:"넌 그냥 오나홀이야.<br>먹다가 질리면 버리는 용도의.",
				},
				{
					cond:true, pos:1,
					text:"상관없어요♡<br>당신 거라면 뭐든 상관없어요♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"솔직히 말할게.",
				},
				{
					cond:true, pos:0,
					text:"진작에 투기장을 떠날 예정이었는데,<br>네가 있어서 계속 남아 있었어.",
				},
				{
					cond:true, pos:0,
					text:"그냥 나랑 같이 나가지 않을래?",
				},
				{
					cond:true, pos:1,
					text:"하아♡ 안돼...♡ 나는 투기장 소속이야...♡<br>질 때까진... 못 나가...♡",
				},
				{
					cond:true, pos:0,
					text:"... ...",
				},
				{
					cond:true, pos:0,
					text:"알았어.<br>적어도 끝을 내는 건, 내가 됐으면 좋겠네.",
				},
			]
		},
	],

//###################################################################################################################################################################################
	"복장교정":[
		{
			priority:0, cond:{v1:"모드", op:"==", v2:0},
			lineList:[
				{
					cond:true, pos:0,
					text:"건방지군.<br>암컷 노예 주제에 옷을 입고 있다니.",
				},
				{
					cond:true, pos:0, effect:"shake",
					text:"*휘익, 찰싹*",
				},
			]
		},
		{
			priority:0, cond:{v1:"모드", op:"==", v2:1},
			lineList:[
				{
					cond:true, pos:0,
					text:"누가 그런 걸 걸쳐도 된다고 했지?",
				},
				{
					cond:true, pos:0, effect:"shake",
					text:"*휘익, 찰싹*",
				},
			]
		},
	],

	"쾌락조교":[
		{
			priority:0, cond:{v1:"모드", op:"==", v2:0},
			lineList:[
				{
					cond:true, pos:0,
					text:"자지밖에 생각하지 못하게 만들어주마.",
				},
			]
		},
		{
			priority:0, cond:{v1:"모드", op:"==", v2:1},
			lineList:[
				{
					cond:true, pos:0,
					text:"네 보지는 이미 네 것이 아니다.",
				},
			]
		},
	],
	"약물조교":[
		{
			priority:0, cond:{v1:"모드", op:"==", v2:0},
			lineList:[
				{
					cond:true, pos:0,
					text:"네놈을 위해 준비된 특별한 약물이다.",
				},
			]
		},
		{
			priority:0, cond:{v1:"모드", op:"==", v2:1},
			lineList:[
				{
					cond:true, pos:0,
					text:"약을 받고 싶다면,<br>제대로 된 태도를 보여라.",
				},
			]
		},
	],
	"고문조교":[
		{
			priority:0, cond:{v1:"모드", op:"==", v2:0},
			lineList:[
				{
					cond:true, pos:0,
					text:"이 고통과 공포를 새겨라.",
				},
			]
		},
		{
			priority:0, cond:{v1:"모드", op:"==", v2:1},
			lineList:[
				{
					cond:true, pos:0,
					text:"이젠 벌이 아니라 상이구나.",
				},
			]
		},
	],
	"징벌":[
		{
			priority:0, cond:{v1:"모드", op:"==", v2:0},
			lineList:[
				{
					cond:true, pos:0,
					text:"벌을 줘야겠군.",
				},
			]
		},
		{
			priority:0, cond:{v1:"모드", op:"==", v2:1},
			lineList:[
				{
					cond:true, pos:0,
					text:"이제 그만, 무너져라.",
				},
			]
		},
	],
	"성감대조교":[
		{
			priority:0, cond:{v1:"모드", op:"==", v2:0},
			lineList:[
				{
					cond:true, pos:0,
					text:"만지는 것만으로 가버리도록,<br>개발시켜주지.",
				},
			]
		},
		{
			priority:0, cond:{v1:"모드", op:"==", v2:1},
			lineList:[
				{
					cond:true, pos:0,
					text:"개발 성과를 확인해보겠다.",
				},
			]
		},
	],
	"채찍질":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*찰싹, 찰싹!*",
				},
			]
		},
	],

	"필사적인저항":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"저는 결코 굴복하지 않을 것입니다.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"너 같은 놈에게...<br>질 것 같냐...?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"저는 아직...<br>굴하지 않았어요...!",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"시시하네...<br>간지럽지도 않아...!",
				},
			]
		},
	],

	"조교사-이벤트-개전":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"너, 이름이 어떻게 되지?",
				},
				{
					cond:true, pos:1,
					text:"제 이름은 {name}입니다.",
				},
				{
					cond:true, pos:0,
					text:"아니, 네 이름은 지금부터 성처리 육변기다.",
				},
				{
					cond:true, pos:1, name:"성처리 육변기",
					text:"알겠습니다.<br>제 이름은 성처리 육변기입니다.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"상품 가치 평가 중이다.<br>가리지 말고 노출해라.",
				},
				{
					cond:true, pos:1,
					text:"시끄러, 나는 상품이 아니야!",
				},
				{
					cond:true, pos:0, effect:"shake",
					text:"*짜악*",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"아으...<br>뺘, 뺨을...",
				},
				{
					cond:true, pos:0,
					text:"똑바로 서라.",
				},
				{
					cond:true, pos:1,
					text:"으, 으으읏...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"엎드려라, 육노예.",
				},
				{
					cond:true, pos:1,
					text:"네, 네?<br>저요...?",
				},
				{
					cond:true, pos:0,
					text:"너 말고 여기 육노예가 누가 있다는 거지?",
				},
				{
					cond:true, pos:0,
					text:"정신 안 차리나?<br>채찍으로 맞고 싶어?",
				},
				{
					cond:true, pos:1,
					text:"아, 아뇨. 엎드릴게요...<br>때리진 말아주세요...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"상등품이군.<br>비싸게 팔릴 수 있겠어.",
				},
				{
					cond:true, pos:1,
					text:"칭찬이야?<br>고마워♡",
				},
				{
					cond:true, pos:0,
					text:"하지만, 정신 상태는 글러 먹었군.",
				},
				{
					cond:true, pos:0,
					text:"우수한 상품이 될 수 있도록,<br>내가 교정해주마.",
				},
				{
					cond:true, pos:1,
					text:"기분 좋고, 상냥하게 부탁해♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"한 번, 자기소개를 해봐라.",
				},
				{
					cond:true, pos:1,
					text:"저는 정액을 빼내기 위해 존재하는,<br>성처리 육변기입니다.",
				},
				{
					cond:true, pos:1,
					text:"보지는 물론, 구강섹스와 애널섹스까지.<br>자유롭게 사용이 가능합니다.",
				},
				{
					cond:true, pos:1,
					text:"부디, 육변기 구멍을 마음껏 범해주십시오.",
				},
				{
					cond:true, pos:0,
					text:"완벽하군.<br>다음은 실전을 보도록 하지.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"내가 노예가 될 것으로 보여?<br>안됐지만, 조교는 대실패야.",
				},
				{
					cond:true, pos:0,
					text:"... ...",
				},
				{
					cond:true, pos:1,
					text:"푸흣. 애초에 네 조교 실력이,<br>형편없어서 그런 거 아니겠어?",
				},
				{
					cond:true, pos:0,
					text:"... ...",
				},
				{
					cond:true, pos:1,
					text:"(뭐야...<br>왜... 왜, 벌을 주지 않는거야...?)",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"오늘 제 인생을 끝내주신다고 들었어요...<br>잘 부탁드려요...",
				},
				{
					cond:true, pos:0,
					text:"흠.",
				},
				{
					cond:true, pos:1,
					text:"히익...! 죄, 죄송해요!<br>육노예 주제에 허가 없이 입을 열어서...",
				},
				{
					cond:true, pos:1,
					text:"지금 바로 사죄의 도게자 할게요...<br>부디 용서를... 아니 벌을 주세요...",
				},
				{
					cond:true, pos:0,
					text:"(정신 교육은 문제 없이 잘 되었군.)",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"제출을 명했던 조사지의 내용이 엉망이더군.<br>장난하는 거냐?",
				},
				{
					cond:true, pos:1,
					text:"왜애♡ 시키는대로 전부 했는데♡",
				},
				{
					cond:true, pos:0,
					text:"선호하는 것, 희망 개선사항, 약점.<br>전부 '자지' 두 글자 적어놓은 게 말인가?",
				},
				{
					cond:true, pos:1,
					text:"그치만 나, 자지가 좋고♡<br>자지에 더 박히고 싶고♡",
				},
				{
					cond:true, pos:1,
					text:"자지 박히면 아무 것도 못하니까♡",
				},
			]
		},
	],
	"조교사-이벤트-조교성공":[ //행동불가
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"",
				},
			]
		},
	],
	"조교사-이벤트-흥분":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"육변기, 대답해라.<br>방금 절정의 원인은 뭐지?",
				},
				{
					cond:true, pos:1, name:"성처리 육변기",
					text:"넵. 보고합니다.",
				},
				{
					cond:true, pos:1, name:"성처리 육변기",
					text:"피스톤 운동 중,<br>G스팟에 대한 압박이 결정적이었습니다.",
				},
				{
					cond:true, pos:0,
					text:"좋아, 조교 중에는 약점을 전부 보고하도록.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0, effect:"shake",
					text:"*짜악!*",
				},
				{
					cond:true, pos:0,
					text:"오만한 태도를 버리고,<br>스스로가 단지 자지용 오나홀임을 자각해라.",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"으, 으읏...",
				},
				{
					cond:true, pos:1,
					text:"(맞을 때마다...<br>정신이 몽롱해져...)",
				},
				{
					cond:true, pos:1,
					text:"(나는... 오나홀...?)",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"누가 허가 없이 절정해도 된댔지?",
				},
				{
					cond:true, pos:1,
					text:"죄, 죄송해요...",
				},
				{
					cond:true, pos:0,
					text:"엎드려.",
				},
				{
					cond:true, pos:0, effect:"shake",
					text:"*찰싹 찰싹*",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"아읏♡ 아, 아픈데...<br>느껴버려...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"엉덩이를 내밀도록.",
				},
				{
					cond:true, pos:0, effect:"shake",
					text:"*짜악*",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"아핫♡ 바, 방금 그거 뭐야♡<br>순간 짜릿...했는데♡",
				},
				{
					cond:true, pos:0,
					text:"마조 변태의 자질이 있군.<br>네 본성을 일깨워주마.",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"보지로 절정했습니다.",
				},
				{
					cond:true, pos:1,
					text:"질 후벽을 귀두 끝이 긁어,<br>끌어당기듯 자극을 준 것이 결정적 원인입니다.",
				},
				{
					cond:true, pos:0,
					text:"조임부터 감도까지, 완벽하군.<br>개발은 끝났다.",
				},
				{
					cond:true, pos:0,
					text:"이제부턴 절정 원인의 보고를<br>'주인님의 훌륭한 자지 덕분' 같은 말로 대체할 것.",
				},
				{
					cond:true, pos:1,
					text:"알겠습니다.<br>명령을 갱신했습니다.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"이번 건 좋았군.<br>뺨 대도록.",
				},
				{
					cond:true, pos:1,
					text:"...!<br>여, 여기!",
				},
				{
					cond:true, pos:0, effect:"shake",
					text:"*짜악!*",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"(해, 행복해애...♡<br>그런데... 어째서...?)",
				},
				{
					cond:true, pos:0,
					text:"네 속셈도 모를 줄 알았냐?<br>오늘부터, 따귀는 잘했을 때 주는 상이다.",
				},
				{
					cond:true, pos:1,
					text:"*훌쩍*<br>나... 나 훌륭한 성노예가 될게♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"죄송해요... 자지 박히면 가버리는...<br>허접 보지 육노예라... 죄송해요...",
				},
				{
					cond:true, pos:0,
					text:"그럼, 하나 묻도록 하지.<br>네가 바라는 건 벌이냐, 용서냐?",
				},
				{
					cond:true, pos:1,
					text:"그, 그건...",
				},
				{
					cond:true, pos:1,
					text:"육노예가 감히, 바람을 가져선 안돼요...<br>자비도, 징벌도... 전부 주인님의 결정이에요...",
				},
				{
					cond:true, pos:0,
					text:"크하하, 정답이다!<br>어엿한 육노예가 되었군!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"꾸익♡ 꾸익♡<br>암퇘지 보지 가버렸어요♡",
				},
				{
					cond:true, pos:0,
					text:"그런 대사를 가르친 기억은 없는데 말이지.",
				},
				{
					cond:true, pos:1,
					text:"응♡ 내 오리지널이니까♡<br>이러면 다들 좋아하더라구♡",
				},
				{
					cond:true, pos:0,
					text:"어이가 없군.<br>천부적인 성노예의 재능이란 말인가.",
				},
			]
		},
	],
	"조교사-이벤트-타락":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"계속해서 보고해라.<br>이번 절정의 원인은 뭐지?",
				},
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy2", name:"성처리 육변기",
					text:"오호옥♡<br>자, 자궁... 경부...♡",
				},
				{
					cond:true, pos:0,
					text:"대답이 늦다!<br>내 손은 기다려주지 않아! 다음!",
				},
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy2", name:"성처리 육변기",
					text:"아그윽♡<br>크, 클리... 토리스...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"이제부터 갈 때마다,<br>'나는 오나홀입니다'라고 외쳐라.",
				},
				{
					cond:true, pos:1,
					text:"나, 나는... 오나홀입니다♡<br>나는... 오나홀...입니다♡",
				},
				{
					cond:true, pos:0,
					text:"목소리가 작다!",
				},
				{
					cond:true, pos:0, effect:"shake",
					text:"*짜악*",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"아하앙♡",
				},
				{
					cond:true, pos:1,
					text:"나는 오나홀입니다♡<br>나는 오나홀입니다♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1, portrait:"ecstasy2", keepPort:true,
					text:"아, 안대...♡<br>죄, 죄송해요...♡",
				},
				{
					cond:true, pos:1,
					text:"저는... 절정도 못 참는...<br>한심한 육노예예요...♡",
				},
				{
					cond:true, pos:1,
					text:"벌을... 벌을 주세요...♡",
				},
				{
					cond:true, pos:0,
					text:"좋아, 조교가 거의 완성됐어.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"맞으면서... 가버리는 거... 조아♡",
				},
				{
					cond:true, pos:1,
					text:"엉덩이 더 때려줘♡<br>팡 팡♡",
				},
				{
					cond:true, pos:0,
					text:"이게 너의 본 모습이다.",
				},
				{
					cond:true, pos:0,
					text:"관객들에게 네가 어떤 암컷인지,<br>똑똑히 보여주도록.",
				},
				{
					cond:true, pos:1,
					text:"나는♡ 변태 마조 암퇘지...♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"주인님의 훌륭한 자지 덕분에♡<br>육변기 보지, 견디지 못하고 절정했습니다♡",
				},
				{
					cond:true, pos:0,
					text:"완벽해.<br>이제 출하해도 되겠군.",
				},
				{
					cond:true, pos:0,
					text:"지금부터 굴복을 목적으로 하는,<br>패배 섹스를 수행해라.",
				},
				{
					cond:true, pos:1,
					text:"명령을 확인했습니다♡<br>패배가 목적인 허접 보지 섹스를 시행합니다♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"크크크. 오늘따라 유독 말을 잘 듣는군.",
				},
				{
					cond:true, pos:1,
					text:"그야♡ 나는 주인님을 위한 오나홀이니까♡",
				},
				{
					cond:true, pos:1,
					text:"자지 케이스용 오나홀 보지♡<br>따끈따끈하게 적셔 놨어♡ 사용해줘♡",
				},
				{
					cond:true, pos:0,
					text:"기특하구나.<br>지금 바로 상을 주지.",
				},
				{
					cond:true, pos:0, effect:"shake",
					text:"*짜악!!*",
				},
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy2",
					text:"으호옥♡<br>주, 주인님♡ 사랑해애♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"출하 직전이군.<br>네가 인간으로서 존재하는 마지막 순간이다.",
				},
				{
					cond:true, pos:0,
					text:"최후로 남기고 싶은 말은 없나?",
				},
				{
					cond:true, pos:1,
					text:"육노예 보지에...<br>주인님의 자지 쑤컹쑤컹 박아주세요...♡",
				},
				{
					cond:true, pos:0,
					text:"하하, 내가 말실수를 했군.<br>넌 이미 인간이 아니었는데 말이야.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"여러 문제는 있었지만,<br>성노예로서의 점수는 우수하다.",
				},
				{
					cond:true, pos:0,
					text:"축하한다.<br>출하를 준비해라.",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"아앙♡ 가버렸어♡",
				},
				{
					cond:true, pos:1,
					text:"관객들 다들 봐줘♡<br>내 보지가 절정으로 뻐끔거리는 모습을♡",
				},
				{
					cond:true, pos:0, effect:"shake",
					text:"끝까지 말은 더럽게 안 듣는군!",
				},
			]
		},
	],

//###################################################################################################################################################################################


	"펠라치오":[
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["normal", "excited", "blank"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2, //sound
					text:"*쫍, 쪽*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["normal", "excited", "blank"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2, //sound
					text:"*쭙, 쭙*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["normal", "excited", "blank"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2, //sound
					text:"*츄릅, 춥*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2, //sound
					text:"*쭈와압♡ 쭙♡ 쮸웁♡*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2, //sound
					text:"*츄르릅♡ 츄웁♡ 쭈웁♡*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2, //sound
					text:"*쮸웁♡ 쮸웁♡ 츄르릅♡*",
				},
			]
		},
	],

	"애무":[
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["normal", "excited", "blank"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2, //sound
					text:"*문질 문질*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["normal", "excited", "blank"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2, //sound
					text:"*스윽 쓱*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["normal", "excited", "blank"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2, //sound
					text:"*쓰윽 쓰윽*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2, //sound
					text:"*문질문질♡ 슥슥♡*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2, //sound
					text:"*쓰윽♡ 스윽 쓱♡*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2, //sound
					text:"*슥♡ 쓰윽쓰윽♡*",
				},
			]
		},
	],

	"키스":[
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["normal", "excited", "blank"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2, //sound
					text:"*츄우*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["normal", "excited", "blank"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2, //sound
					text:"*쪼옥*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["normal", "excited", "blank"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2, //sound
					text:"*츄읍*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"으응♡ *츄웁♡ 쭙♡*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"으응♡ *쪼옥♡ 쪽♡*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"으응♡ *낼름♡ 쮸읍♡*",
				},
			]
		},
	],

	"삽입":[
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["normal", "excited", "blank"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2, //sound
					text:"*쑤컹 쑤컹*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["normal", "excited", "blank"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2, //sound
					text:"*파앙 팡*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["normal", "excited", "blank"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2, //sound
					text:"*쑤욱, 팡 팡*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2, //sound
					text:"*푸욱♡ 쑤컹♡ 쑤커엉♡*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2, //sound
					text:"*파앙♡ 팡♡ 팡♡*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2, //sound
					text:"*쑤욱♡ 철퍼억♡ 철퍽♡*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2, //sound
					text:"*쑤컹♡ 쑤컹♡ 팡♡ 팡♡*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2, //sound
					text:"*찔꺽 찔꺽♡ 팡♡ 팡♡*",
				},
			]
		},
	],

	"유혹":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"여기... 박아주시겠습니까...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"이런 걸 왜 좋아하는거야...<br>변태...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"여기에 박아주셨으면 해요...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"여기가 비어있는데,<br>누가 박아주지 않으려나~",
				},
			]
		},
	],

	"체위변경":[
		{
			priority:1, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}],
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"더욱 효율적인 자세를 취하겠습니다♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"이렇게 하는게...<br>조금 더 낫네...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"이 자세로 하면 기분 좋을거예요♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"이 자세가 더 좋아♡",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"자세를 변경하겠습니다.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"자세는 내가 정하겠어...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"저는 이 자세가 좋아요.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"이 체위로 즐기자.",
				},
			]
		},
	],

	"초월":[
		{
			priority:1, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"진리를 습득했습니다♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"끝없이 흐르는 이 금단의 언어...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"아아, 제 뇌가 다 타버릴 것 같아요...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"이 힘을 더 느끼게 해줘♡",
				},
			]
		},
		{
			priority:1, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"금단의 지식을 실현하겠습니다♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"더 많은 것을 보여줘♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"무한한 진리가... 절 꿰뚫고 있어요♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"지배당하고 있어♡",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:1,
					text:"아히잇♡ 에헷♡ 헤읏♡",
				},
			]
		},
	],


	"기합":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"으그으읏♡ 흐아아앗♡",
				}
			]
		},
	],

	"정액섭취":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"제 입에, 정액을 뿌려주십시오.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"으, 얼른 싸줘...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"제 입에, 정액을 뿌려주세요.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"내 입에 정액을 뿌려줘!",
				},
			]
		},
	],

	"방뇨":[
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:2, //sound
					text:"*쪼르르륵... 졸졸...*",
				}
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:2, //sound
					text:"*부르릇... 쪼르르륵...*",
				}
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:2, //sound
					text:"*또르륵... 졸졸졸...*",
				}
			]
		},
	],

	"자위":[
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:2, //sound
					text:"*찔걱 찔걱♡*",
				}
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:2, //sound
					text:"*찔꺽 찔꺽♡*",
				}
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:2, //sound
					text:"*찌걱 찌걱♡*",
				}
			]
		},
	],


	"참수":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, effect:"diffusion",
					text:"제 안에 남김없이,<br>정액을 쏟아내십시오♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, effect:"diffusion",
					text:"내 자궁이 부들거려...♡<br>너의 정액을 바라고 있어♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, effect:"diffusion",
					text:"더는 못 참겠어요♡ 잔뜩 조일게요♡<br>뷰릇뷰릇 싸주세요♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, effect:"diffusion",
					text:"내 모든 욕망을 쏟아부은 조임...♡<br>버틸 수 없을거야♡",
				},
			]
		},
	],

	"발경":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"단전에 힘을 주고,<br>조이겠습니다♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"네 허접한 자지가...<br>나의 단련된 보지를 이길 수 있을 것 같아?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"수련의 성과를 보여드릴게요♡<br>지켜봐주세요 스승님!",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"걸려들었구나♡<br>너무 깊숙히 박아버린 것을 후회하게 될거야.",
				},
				{
					cond:true, pos:1, effect:"diffusion", keepOriginal:true,
					text:"하압♡",
				},
			]
		},
	],

	"전투포효":[
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:1, effect:"diffusion", keepOriginal:true,
					text:"하아♡ 하아아앙♡<br>아윽♡ 흐윽♡",
				},
			]
		},
	],

	"광전사혼":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"모든 성욕을...<br>해방시키겠습니다.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"내 안의 욕망을 마주해야 한다...<br>오오오... 오오오옷♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"으으... 더는 참을 수 없어요♡<br>기분 좋은거 잔뜩 할래요♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"내 안에 있던 모든 걸 해방할게♡<br>뒷일은... 나도 감당 못해♡",
				},
				{
					cond:true, pos:1, effect:"diffusion", portrait:"corrupted", keepPort:true, keepOriginal:true,
					text:"오호옥♡ 헥♡ 헤엑♡",
				},
			]
		},
	],
	"광전사혼-2":[
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:1,
					text:"♡",
				},
			]
		},
	],

	"화려한검무-1":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"제 몸을 감상해주십시오.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"이런 차림, 정말 부끄러워...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"제 음란한 모습을,<br>더욱 가까이서 봐주세요.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"어때, 야하지?<br>발기했어?",
				},
			]
		},
	],
	"화려한검무-2":[
		{
			priority:1, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, effect:"shake",
					text:"*출렁 출렁*<br>교미를 간청합니다♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, effect:"shake",
					text:"*출렁 출렁*<br>나를 어디까지 수치스럽게 만들 셈이야...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, effect:"shake",
					text:"*출렁 출렁*<br>헤헥♡ 참을 수 없어요♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, effect:"shake",
					text:"*출렁 출렁*<br>박아줘♡ 자지 박아줘♡",
				},
			]
		},
		{
			priority:1, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, effect:"shake",
					text:"*출렁 출렁*<br>제 몸을, 자지님께 바칩니다♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, effect:"shake",
					text:"*출렁 출렁*<br>이렇게 간청해♡ 으... 자지를 줘♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, effect:"shake",
					text:"*출렁 출렁*<br>아잉♡ 빨리 범해주세요♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, effect:"shake",
					text:"*출렁 출렁*<br>하앗♡ 잔뜩 젖어버렸어♡",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:1, effect:"shake", keepOriginal:true,
					text:"*출렁 출렁*",
				},
			]
		},
	],
	"화려한검무-3":[
		{
			priority:1, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"교미를 시작합니다♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"빨리... 빨리 끝내줘...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"기다리던 교미의 시간이에요♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"자지♡ 왔다♡<br>아아앙♡",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:1,
					text:"*출렁 출렁*<br>천박한, 암퇘지 댄스...♡",
				},
			]
		},
	],

	"커닐링구스":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"방금 그 부분이 기분 좋았다고 보고합니다.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"어, 어딜 핥는거야...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"제가 만족할 때까지 놓아주지 않을 거예요.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"좀 더 노력해서 핥아봐.",
				},
			]
		},
	],

	"정조준사격":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:1,
					text:"조준... 발사.",
				},
			]
		},
	],

	"그림자이동":[
		{
			priority:0, cond:["and", {v1:"라운드", op:"==", v2:1}],
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"결투에 적합한 복장으로 전환하겠습니다.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"어때... 먼저 벗어버리니 아무것도 못하겠지?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"어딜 보시는 걸까요?<br>그건 제 옷이랍니다.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"에잇, 거추장스러운 옷 따위는 벗어버릴래!",
				},
			]
		},
	],

	"영거리사격":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:1,
					text:"자지 고정...<br>영거리 대딸 개시.",
				},
			]
		},
	],

	"독가스분사":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:1,
					text:"피휴우우우...",
				},
			]
		},
	],

	"제조":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"들이키십시오. 제 즙입니다.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"마, 마시라고... 빨리...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"제가 만든 즙, 듬뿍 마셔주세요.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"이 구멍에서 나온 거야...♡ 더 원해?",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"이 몸에서 나온 모든 것을 받아주십시오.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"뭘 좋다고 이런 걸 마시는거야... 기분 나빠...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"제 몸에서 나오는 걸로 준비했어요.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"내 온몸으로 만든 거야... 전부 삼켜봐♡",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"드리겠습니다.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"이, 이런 걸 마시고 왜 흥분하는거야...<br>변태자식...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"제 발정의 맛이에요... 듬뿍 삼켜주세요.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"마셔줘. 내 발정즙이야♡",
				},
			]
		},
	],

	"계획살인":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"계획에 따라, 착정 작업을 시작합니다♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"얼른 전부 싸버려...♡<br>빨리 싸고 끝내자고♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"제 자궁에 가득 채워줘요...♡<br>밖으로 넘쳐 흐를 때까지♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"이 자지는 내 거야...♡<br>정액, 다 쥐어짜줄 테니까♡",
				},
			]
		},
	],

	"최장거리저격-1":[
		{
			priority:1, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"발사하겠습니다.<br>흐읍...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"안돼, 보지마...<br>흐읏♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"하앗, 갈게요!<br>으그읏...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"간닷♡ 간다앗♡<br>*부르르...*",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"*퐁! 뷰르릇...*",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:1,
					text:"하, 한 번 더♡",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"*퐁! 꿀렁꿀렁...*",
				},
			]
		},
	],
	"최장거리저격-2":[
		{
			priority:1, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"오옷♡<br>충전 감사합니다♡*",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"싫어... 또 하고 싶지 않아...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"으극♡ 안에 싸주셔서 감사해요...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"오옷♡ 부, 부탁해... 안에 싸줘♡",
				},
			]
		},
	],

	"그림자장미춤":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"모든 걸 감싸안는 그림자 속에서.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"그런 눈으로 보지마...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"부드럽게, 제 마음을 담아.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"부드럽고, 음란하게♡",
				},
			]
		},
	],

	"절명독-1":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"최후의 수단을 사용하겠습니다.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"이것까진 사용하고 싶지 않았는데 말이야...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"끝이 다가올 거예요.<br>한 방울이면 충분해요.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"넌 이걸 피할 수 없을 거야.",
				},
			]
		},
	],
	"절명독-2":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"남기지 말고, 전부 드십시오.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"(분명... 이렇게 만드는 거였지?)",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"제 보지에서 넘쳐흐르는 걸, 다 받아주세요♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"내 보지에서 넘쳐흐르는 이 즙...♡<br>다 삼켜줄 거지?",
				},
			]
		},
	],

	"시한폭탄트랩-1":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"도구를 사용하겠습니다.<br>*철컥*",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"이거나 껴라!<br>*철컥*",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"특제 오나홀이에요.<br>*철컥*",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"이걸로 기분 좋게 해줄게.<br>*철컥*",
				},
			]
		},
	],

	"시한폭탄트랩-2":[
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*째깍 째각 째깍*",
				},
			]
		},
	],

	"시한폭탄트랩-3":[
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*부르르르...<br>쑤컹 쑤컹 쑤컹*",
				},
			]
		},
	],

	"영창":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:["and", {v1:"cast:자지", op:"in", v2:"마술슬롯.영창.태그"}], pos:1,
					text:"*굳건히 선 자지여,<br>이 암컷에게 네 씨를 뿌려라♡*",
				},
				{
					cond:["and", {v1:"cast:보지", op:"in", v2:"마술슬롯.영창.태그"}], pos:1,
					text:"*흥건하게 젖은 보지여,<br>자지님을 맞이할 준비를 하라♡*",
				},
				{
					cond:["and", {v1:"cast:가슴", op:"in", v2:"마술슬롯.영창.태그"}], pos:1,
					text:"*부드러운 젖가슴의 감촉으로,<br>수컷을 쾌락으로 이끄리라♡*",
				},
				{
					cond:["and", {v1:"cast:엉덩이", op:"in", v2:"마술슬롯.영창.태그"}], pos:1,
					text:"*탐스러운 엉덩이여,<br>욕망이 파고들게 하라♡*",
				}
			]
		},
	],

	"마력탄-영창":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*마력 깃든 손길로,<br>자지를 쥐고 흔드리라.*",
				},
			]
		},
	],
	"마력탄-집중":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*내 손끝의 마력이<br>자지의 뿌리까지 퍼지게 하리라.*",
				},
				{
					cond:true, pos:1,
					text:"*단단히 쥐고, 비비고, 끝까지 짜내어,<br>쾌락의 절정을 폭발시키리라!*",
				},
			]
		},
	],

	"화염구-영창":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*내 보지의 열기로,<br>자지를 데우리라.*",
				},
			]
		},
	],
	"화염구-집중":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*단단히 발기한 자지가<br>내 보지 안에서 깊숙이 녹아들며,*",
				},
				{
					cond:true, pos:1,
					text:"*쾌락의 불꽃이 하늘로 치솟아 타오르리라!*",
				},
			]
		},
	],

	"냉기화살-영창":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*나의 가슴을 쥐어,<br>부드러운 감촉을 느껴라.*",
				},
			]
		},
	],
	"냉기화살-집중":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*그대의 손길이 내 가슴을 파고들어<br>부드러운 감각으로 물들어 간다.*",
				},
				{
					cond:true, pos:1,
					text:"*손 끝으로 느껴라.<br>한기, 심장박동, 그리고 단단해진 젖꼭지.*",
				},
			]
		},
	],

	"암석탄-영창":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*나의 엉덩이는 견고히,<br>자지를 품을 준비를 마쳤다.*",
				},
			]
		},
	],
	"암석탄-집중":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*둥글고 탄탄한 엉덩이가 그대의 자지를 삼키며,<br>그대의 힘이 내 골반을 타고 전해지리라.*",
				},
				{
					cond:true, pos:1,
					text:"*단단한 암석처럼 흔들림 없는 엉덩이로,<br>자지를 압도하며 쾌락의 진동을 만들어내리라!*",
				},
			]
		},
	],

	"용암분사-영창":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*달아오르는 질내의 온기로,<br>자지를 쾌락으로 녹이리라.*",
				},
			]
		},
	],
	"용암분사-집중":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*그대의 자지가 보지 안으로 파고들며,<br>끓어오르는 쾌락의 열기가 퍼져 나간다.*",
				},
				{
					cond:true, pos:1,
					text:"*그대가 내 안에 사정하며 쏟아내는 순간,<br>대지의 열기가 세상을 태우리라!*",
				},
			]
		},
	],

	"역장-영창":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*나의 가슴, 성기,<br>그리고 엉덩이의 힘으로.*",
				},
			]
		},
	],
	"역장-집중":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*벗은 젖가슴과 엉덩이가 방패가 되어,<br>적의 눈과 자지를 모두 사로잡으리라.*",
				},
				{
					cond:true, pos:1,
					text:"*나체의 아름다움이 쾌락의 역장이 되어,<br>어떤 욕망이든 집어삼키리라!*",
				},
			]
		},
	],

	"회오리불꽃-영창":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*나의 분주한 손가락으로,<br>절정에 이르는 모습을 보아라.*",
				},
			]
		},
	],
	"회오리불꽃-집중":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*흘러내리는 보지즙이 자지에 불을 붙이고,<br>내 손의 움직임이 불꽃처럼 퍼져나가리라.*",
				},
				{
					cond:true, pos:1,
					text:"*쾌락의 회오리가 그대를 집어삼킬 때까지<br>이 불꽃은 멈추지 않으리라!*",
				},
			]
		},
	],

	"얼음방벽-영창":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*내 품에 안겨서<br>핥아라, 그리고 빨아라.*",
				},
			]
		},
	],
	"얼음방벽-집중":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*유두를 감싸는 차가운 입김이 방벽이 되어,<br>적의 공격은 얼어붙으리라.*",
				},
				{
					cond:true, pos:1,
					text:"*쾌락의 서리가 가슴 안에 새겨진다.<br>차갑고 달콤한 방벽으로 얼려버리리라!*",
				},
			]
		},
	],

	"대지의힘-영창":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*내 엉덩이를 향해,<br>손바닥으로 타격해라.*",
				},
			]
		},
	],
	"대지의힘-집중":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*네 손바닥이 내 엉덩이에 내려칠 때마다,<br>쾌락의 파동이 대지를 울리리라.*",
				},
				{
					cond:true, pos:1,
					text:"*타격과 쾌락의 리듬이 하나가 되어,<br>대지의 힘이 내 몸을 통해 깨어나리라!*",
				},
			]
		},
	],

	"수정방패-영창":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*수정 딜도를 보지로 품어,<br>쾌락의 마력을 가득 주입하리라.*",
				},
			]
		},
	],
	"수정방패-집중":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*수정의 빛이 나의 내부를 가득 채우며,<br>자극이 방패가 되어 나를 지키리라.*",
				},
				{
					cond:true, pos:1,
					text:"*내 몸을 침투하는 수정의 움직임이,<br>모든 위협을 튕겨내는 파동을 만들어내리라!*",
				},
			]
		},
	],

	"대폭발-집중":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*그대의 힘이 내 몸 전체를 뒤흔들며,<br>자지를 깊숙이 찔러 박는다.*",
				},
				{
					cond:true, pos:1,
					text:"*나의 보지 안에서<br>쾌락의 불꽃의 폭발이 일어난다!*",
				},
			]
		},
	],
	"눈보라-집중":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*부드러운 유방의 감촉과,<br>내 혀끝에서 피어나는 차디찬 숨결이 너를 덮치리라.*",
				},
				{
					cond:true, pos:1,
					text:"*자지를 핥으며,<br>젖가슴으로 쾌락의 폭풍을 일으키리라.*",
				},
			]
		},
	],
	"지진-집중":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*내 뒷구멍을 열어 대지의 심장을 드러내리라.*",
				},
				{
					cond:true, pos:1,
					text:"*네 자지가 나를 깊숙이 관통하며,<br>쾌락의 진동으로 세상을 무너뜨리리라!*",
				},
			]
		},
	],

	"설원늑대정령-1":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"늑대정령",
					text:"헥헥, 주인!<br>놀자!",
				}
			]
		},
	],
	"설원늑대정령-2":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"늑대정령",
					text:"자지♡ 쑤컹쑤컹, 헥헥♡",
				}
			]
		},
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"늑대정령",
					text:"자지 냄새 조아♡ 왕왕♡",
				}
			]
		},
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"늑대정령",
					text:"박아죠♡ 교미해조♡",
				}
			]
		},
	],
	"설원늑대정령-3":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"늑대정령",
					text:"끼잉...",
				}
			]
		},
	],

	"오토마톤골렘-1":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"골렘",
					text:"기동 완료.<br>명령을 내려주십시오.",
				}
			]
		},
	],
	"오토마톤골렘-2":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"골렘",
					text:"지시 수행.<br>피스톤 운동 시작.",
				}
			]
		},
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"골렘",
					text:"조임 강도가 적합한지 확인합니다.",
				}
			]
		},
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"골렘",
					text:"오나홀 프로토콜 실행.",
				}
			]
		},
	],
	"오토마톤골렘-3":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"골렘",
					text:"자.자.작동을...<br>중단, 합니다...",
				}
			]
		},
	],

	"플라스크피닉스-1":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"피닉스",
					text:"주인, 좋아...<br>안아줘...♡",
				}
			]
		},
	],
	"플라스크피닉스-2":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"피닉스",
					text:"흥분 돼, 흥분 돼...♡",
				}
			]
		},
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"피닉스",
					text:"사랑해, 사랑해...♡",
				}
			]
		},
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"피닉스",
					text:"더 해줘, 더 해줘...♡",
				}
			]
		},
	],
	"플라스크피닉스-3":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"피닉스",
					text:"싫어... 헤어지기 싫어...",
				}
			]
		},
	],

	"마나슬라임-1":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"마나슬라임",
					text:"...❤️",
				}
			]
		},
	],
	"마나슬라임-2":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"마나슬라임",
					text:"~💕",
				}
			]
		},
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"마나슬라임",
					text:"...💕",
				}
			]
		},
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"마나슬라임",
					text:"❤️💕",
				}
			]
		},
	],
	"마나슬라임-3":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"마나슬라임",
					text:"...💔",
				}
			]
		},
	],
	"마나슬라임-4":[
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*찰팍 찰팍*",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*찔걱 찔걱*",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*말캉 말캉*",
				},
			]
		},
	],

	"유성우-집중":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*내 보지를 열어, 하늘에서 쏟아지는 별처럼<br>네 자지를 깊숙이 받아들이리라.*",
				},
				{
					cond:true, pos:1,
					text:"*쏟아지는 뜨거운 사정이 내 자궁 안에 쌓이며,<br>쾌락의 빛이 밤하늘을 물들이리라.*",
				},
			]
		},
	],

	"영구동토-집중":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*풍만한 유방이 눈 덮인 설원을 이루고,<br>차디찬 숨결이 자지를 감싸리라.*",
				},
				{
					cond:true, pos:1,
					text:"*내 가슴 사이를 자지가 비비며 오르내릴 때,<br>차가운 쾌락이 너를 휘감아 사정케 만들리라.*",
				},
			]
		},
	],

	"시간정지":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"시간을 지배하겠습니다.<br>몰려오는 쾌락에 대비하십시오.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"멈춰라!<br>지금부터 나의 시간이야!",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"시간이여, 멈추세요!<br>영원한 순간의 쾌락을 알려드릴게요!",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"그대로 멈춰랏♡<br>이제, 무슨 짓을 당해도 모를 걸♡",
				},
			]
		},
	],

	"미영-0":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"미영",
					text:"응, 자기... 나 불렀어?",
				}
			]
		},
	],
	"미영-1":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"미영",
					text:"이건 위험해 보여서 내가 치워줄게.<br>걱정마, 이제 안전해.",
				}
			]
		},
	],
	"미영-2":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"미영",
					text:"괜찮아 자기.<br>내게 맡겨, 아직 진 거 아니야.",
				}
			]
		},
	],
	"미영-3":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"미영",
					text:"마술이 있으면 좋지 않을까?<br>이번엔 내가 준비해둘게.",
				}
			]
		},
	],
	"미영-4":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"미영",
					text:"에헤헤.<br>달링은 언제 봐도 최고야.",
				}
			]
		},
	],
	"미영-5":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"미영",
					text:"괜찮아 자기.<br>지금은 이걸 써봐.",
				}
			]
		},
	],
	"미영-6":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"미영",
					text:"에헤헤, 화이팅~!<br>멋진 모습 보여줘!",
				}
			]
		},
	],
	"미영-7":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"미영",
					text:"내가 힘을 실어줄게.<br>두 사람의 공동작업이네.",
				}
			]
		},
	],
	"미영-8":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"미영",
					text:"응, 이건 내게 맡겨.<br>자기는 다른 일에 집중해.",
				}
			]
		},
	],
	"미영-9":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"미영",
					text:"미, 미안해... 내가 부족해서 해줄 수 있는게 없네...",
				},
			]
		},
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"미영",
					text:"안돼... 이런 내게 질린 거 아니지...?",
				},
			]
		},
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"미영",
					text:"어째서... 나는 달링이 곤란할 때 아무것도 해줄 수 없는거야!!",
				},
			]
		},
	],
	"미영-10":[
		{
			priority:3, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"미영",
					text:"왜, 나를 좀 더 봐주지 않는거야?<br>저 녀석 때문에 그래...?",
				}
			]
		},
		{
			priority:2, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"미영",
					text:"자기, 날 두고 어디도 못 가.<br>널 위협하는 것들은 내가 다 없애줄 거야.",
				}
			]
		},
		{
			priority:1, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"미영",
					text:"우리 사이를 방해하지 마, 천박한 자식!",
				}
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:2, name:"미영",
					text:"죽어! 죽어!!",
				}
			]
		},
	],
	"미영-11":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"미영",
					text:"거짓말이지?<br>안돼! 안돼애!!!",
				}
			]
		},
	],

	"정수결합":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"이건 의료 행위일 뿐입니다.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"왠지 불쾌한 느낌이 나는데...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"강해지는게 느껴져요.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"붙어서 하나가 되는거야.",
				},
			]
		},
	],

	"치료":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"치료를 시작합니다.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"이건 의료 행위일 뿐이야.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"치료를 시작할게요!",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"여기선, 의사가 필요하겠네...♡",
				},
			]
		},
	],

	"후속치료":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"발기 확인♡<br>신속한 사정 치료를 개시합니다♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"이건 의료 행위일 뿐♡<br>다른 의도는 결코 없어♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"발기 자지의, 치료를 시작할게요♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"건강한 자지네♡<br>검진 좀 할게...♡",
				},
			]
		},
	],

	"생명력폭주":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy2",
					text:"으브으읍♡ 으브읍..♡",
				},
			]
		},
	],

	"대규모정화":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"타락한 발기 자지 포착♡<br>지금 당장 정화 섹스를 시작하겠습니다♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"본색을 드러냈구나, 사악한 녀석♡<br>내 신성한 보지로 당장 정화해주겠어♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"이럴 수가, 너무 사악한 자지예요♡<br>지금 당장 빨아서 정화할게요♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"이런 사악한 자지를 품고 있었다니♡<br>당장 정화 펠라로 정액을 뽑아줄게♡",
				},
			]
		},
	],

	"만물의오라":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"하나가... 됩니다...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"하나가... 되는 거야...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"하나가... 되는 거예요...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"하나가... 되자...♡",
				},
			]
		},
	],

	"불로불사의약-1":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"이 약은 저를,<br>완벽한 오나홀로 만들어 줄 것입니다.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"이런 걸 마시면...<br>인간으로 돌아갈 수 없을텐데...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"제가 이걸 마시면,<br>더 잘 싸울 수 있게 되는 거죠?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"완벽한 오나홀로 변할 수 있다니...<br>최고잖아...♡",
				},
			]
		},
	],

	"불로불사의약-2":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, portrait:"ecstasy2",
					text:"복용 완료♡<br>효능 발현 중♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, portrait:"ecstasy2",
					text:"몸이... 몸이 달아올라앗...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, portrait:"ecstasy2",
					text:"헤엑, 머리가... 이상해요...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, portrait:"ecstasy2",
					text:"하아앙♡ 쾌락에 뇌가 녹아내려엇♡",
				},
			]
		},
	],

	"정신치료-1":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"인격의 조작을 시도합니다.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"인격 개변을 한 뒤에도...<br>나라고 할 수 있을까...?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"제 정신을 주무를 수 있다니,<br>정말 멋진 일이네요.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"정신 조작이라니 흥미롭네♡<br>이왕 하는 거 개변태 걸레로 만들어보자♡",
				},
			]
		},
	],
	"정신치료-2":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, effect:"diffusion", portrait:"ecstasy2",
					text:"조작 완료.<br>목표 인격: 개변태 걸레♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, effect:"diffusion", portrait:"ecstasy2",
					text:"으그그극♡ 아, 아냐♡<br>나는... 개변태 걸레가...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, effect:"diffusion", portrait:"ecstasy2",
					text:"으그그극♡ 나, 나는♡<br>개변태 걸레...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"아무 변화 없잖아?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"아하♡ 나는 원래 개변태 걸레였지♡",
				},
			]
		},
	],


	"플레이어-신음":[
		{
			priority:2, cond:["and", {v1:"플레이어.표정", op:"in", v2:["ecstasy2"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"으그읏♡ 흐아아앗...♡",
				}
			]
		},
		{
			priority:2, cond:["and", {v1:"플레이어.표정", op:"in", v2:["ecstasy2"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"오고옷♡ 그, 그마안...♡",
				}
			]
		},
		{
			priority:2, cond:["and", {v1:"플레이어.표정", op:"in", v2:["ecstasy2"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"그앗♡ 주, 주글 거 가타...♡",
				}
			]
		},
		{
			priority:2, cond:["and", {v1:"플레이어.표정", op:"in", v2:["ecstasy2"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"오옥♡ 응고오옷♡",
				}
			]
		},
		{
			priority:1, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"하아앙♡ 너무 깊어...♡",
				}
			]
		},
		{
			priority:1, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"하읏♡ 더 세게♡",
				}
			]
		},
		{
			priority:1, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"아하앙♡ 거기 죠아...♡",
				}
			]
		},
		{
			priority:1, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"으으응♡ 더 안쪽에♡",
				}
			]
		},
		{
			priority:1, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"읏, 거기는...♡",
				}
			]
		},
		{
			priority:1, cond:["and", {v1:"플레이어.표정", op:"in", v2:["blank"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"*움찔♡*",
				}
			]
		},
		{
			priority:1, cond:["and", {v1:"플레이어.표정", op:"in", v2:["blank"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"읏♡",
				}
			]
		},
		{
			priority:1, cond:["and", {v1:"플레이어.표정", op:"in", v2:["blank"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"앗♡",
				}
			]
		},
		{
			priority:1, cond:["and", {v1:"플레이어.표정", op:"in", v2:["blank"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"...♡",
				}
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"으응♡",
				}
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"앗♡",
				}
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"하아♡",
				}
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"아앙♡",
				}
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"하읏♡",
				}
			]
		},
	],

	"플레이어-절정준비":[

	],
	"플레이어-절정":[
		/*{
			priority:1, cond:["and", {v1:"플레이어.표정", op:"in", v2:["ecstasy2"]}], 
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, keepOriginal:true,
					text:"*바들바들...♡<br>부르르릇...♡*",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, keepOriginal:true,
					text:"말도 안돼엣... 고작 이딴... 허접한 녀석에게...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, keepOriginal:true,
					text:"그마안... 주글 것 가타요오...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, keepOriginal:true,
					text:"하... 한계야... 이제 그마안...♡",
				}
			]
		},*/
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["ecstasy2"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"으그흑... 오옷♡ 으호오옷...♡",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["ecstasy2"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"아흐읏... 아앙♡ 하아아앙...♡",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["ecstasy2"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"으고옷... 응곳♡ 으그아앗...♡",
				}
			]
		},

		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, keepOriginal:true,
					text:"하앙♡ 가버렸습니다♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, keepOriginal:true,
					text:"으긋, 가버렷♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, keepOriginal:true,
					text:"아앙♡ 가버렸어요♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, keepOriginal:true,
					text:"으읏♡ 가버렸어♡",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, keepOriginal:true,
					text:"아읏♡ 이거 기분 좋습니다♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, keepOriginal:true,
					text:"으읏♡ 기분 좋아♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, keepOriginal:true,
					text:"하앙♡ 기분 좋아요♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, keepOriginal:true,
					text:"으긋♡ 기분 좋아♡",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, keepOriginal:true,
					text:"으읏♡ 절정, 왔습니다♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, keepOriginal:true,
					text:"하앙♡ 절정 왔다♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, keepOriginal:true,
					text:"으긋♡ 절정 왔어요♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, keepOriginal:true,
					text:"아앙♡ 절정 왔어♡",
				}
			]
		},

		{
			priority:1, cond:["and", {v1:"플레이어.표정", op:"in", v2:["normal", "excited"]}], 
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, keepOriginal:true,
					text:"아읏♡<br>말도 안돼... 이 내가...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, keepOriginal:true,
					text:"으읏♡<br>가버렸어요...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, keepOriginal:true,
					text:"아흣♡<br>괜찮아... 한 번 쯤은...",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["normal", "excited"]}], repeatable:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, keepOriginal:true,
					text:"아앙♡<br>있을 수 없어...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, keepOriginal:true,
					text:"하앙♡<br>또 가버렸어요...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, keepOriginal:true,
					text:"아앙♡<br>위, 위험하네 이거...",
				}
			]
		},

		{
			priority:1, cond:["and", {v1:"플레이어.표정", op:"in", v2:["blank"]}], 
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, keepOriginal:true,
					text:"으읏♡<br>절정했습니다.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["blank"]}], repeatable:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, keepOriginal:true,
					text:"하앙♡<br>또 절정했습니다.",
				},
			]
		},
	],

	"플레이어-암퇘지":[
		{
			cond:true, pos:1,
			text:"부흐읏♡ 부힛♡",
		},
		{
			cond:true, pos:1,
			text:"꾸익♡ 꾸이익♡",
		},
		{
			cond:true, pos:1,
			text:"부힉♡ 꾸히익♡",
		},
		{
			cond:true, pos:1,
			text:"꿀♡ 꾸울♡ 꾸힉♡",
		},
		{
			cond:true, pos:1,
			text:"꾸익♡ 부히힛♡",
		},
	],

	"플레이어-무의식":[
		{
			cond:true, pos:1,
			text:"... ...",
		},
	],

	"플레이어-재갈":[
		{
			cond:true, pos:1,
			text:"으브읍♡ 으읍♡",
		},
		{
			cond:true, pos:1,
			text:"브흡♡ 으으읍♡",
		},
		{
			cond:true, pos:1,
			text:"읍♡ 으으읍♡",
		},
		{
			cond:true, pos:1,
			text:"읍♡ 크흡♡ 으븝♡",
		},
		{
			cond:true, pos:1,
			text:"으읍♡ 크흐읍♡",
		},
	],

	"플레이어-정신붕괴":[
		{
			cond:true, pos:1,
			text:"아힛♡ 아헤엣♡",
		},
		{
			cond:true, pos:1,
			text:"에헤♡ 흐흐흣♡",
		},
		{
			cond:true, pos:1,
			text:"흐에♡ 흐히힛♡",
		},
		{
			cond:true, pos:1,
			text:"아헤♡ 헤으읏♡",
		},
		{
			cond:true, pos:1,
			text:"흐히♡ 에히힛♡",
		},
	],

	"플레이어-군체의식":[
		{
			cond:true, pos:1,
			text:"아힛♡ 아헤엣♡",
		},
		{
			cond:true, pos:1,
			text:"에헤♡ 흐흐흣♡",
		},
		{
			cond:true, pos:1,
			text:"흐에♡ 흐히힛♡",
		},
		{
			cond:true, pos:1,
			text:"아헤♡ 헤으읏♡",
		},
		{
			cond:true, pos:1,
			text:"흐히♡ 에히힛♡",
		},
	],

	"플레이어-광폭화":[
		{
			cond:true, pos:1,
			text:"자지♡ 에헥♡ 헥♡",
		},
		{
			cond:true, pos:1,
			text:"꼬츄후♡ 박아죠♡ 교미해조♡",
		},
		{
			cond:true, pos:1,
			text:"헤윽♡ 정액♡ 헥♡ 정액 죠아♡",
		},
		{
			cond:true, pos:1,
			text:"아헤♡ 섹스으♡ 헤으읏♡",
		},
		{
			cond:true, pos:1,
			text:"헤엑♡ 보지♡ 기분조아♡",
		},
	    {
	        "cond": true,
	        "pos": 1,
	        "text": "으헉♡ 더 깊게♡ 꽂아죠♡"
	    },
	    {
	        "cond": true,
	        "pos": 1,
	        "text": "보지♡ 흐읏♡ 느껴져♡"
	    },
	    {
	        "cond": true,
	        "pos": 1,
	        "text": "헤엑♡ 으아앙♡ 섹스♡ 죠아♡"
	    },
	    {
	        "cond": true,
	        "pos": 1,
	        "text": "아으윽♡ 전부 줘♡ 정액♡"
	    },
	    {
	        "cond": true,
	        "pos": 1,
	        "text": "크읏♡ 헤헷♡ 쪼아♡ 섹스♡"
	    },
	    {
	        "cond": true,
	        "pos": 1,
	        "text": "하아♡ 자지♡ 헤엑♡"
	    },
	    {
	        "cond": true,
	        "pos": 1,
	        "text": "정액♡ 더♡ 하앗♡ 꽉 채워♡"
	    },
	    {
	        "cond": true,
	        "pos": 1,
	        "text": "헉헉♡ 교미♡ 헤엑♡ 좋다♡"
	    }
	],

	//

	"개입-최면":[
		{
			priority:2, cond:["and", {v1:"챔피언.이름", op:"==", v2:"금발양아치"}],
			lineList:[
				{
					cond:true, pos:2, name:"칼레스",
					text:"주인님,<br>챔피언 역할은 즐기고 계신가요?",
				},
				{
					cond:true, pos:0,
					text:"덕분에 말이야.<br>근데 무슨 일이냐.",
				},
				{
					cond:true, pos:2, name:"칼레스",
					text:"이번 상품은 고객분들의 특별 요청이 있어서 말이에요.<br>일하러 왔습니다.",
				},
				{
					cond:true, pos:0,
					text:"아아, 오케이.",
				},
				{
					cond:true, pos:2, name:"칼레스",
					text:"당신은 이쪽을 보세요.",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"엘도리아인"}, {v1:"커스텀.배경", op:"==", v2:"학자"}],
			lineList:[
				{
					cond:true, pos:2, name:"칼레스",
					text:"하하, 아카데미 최고의 천재께서 이런 곳을.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"누구... 십니까?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"흠, 나를 아나?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"어머, 저를 아시나요?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"내가 달갑지 않은 목소리네.",
				},
				{
					cond:true, pos:2, name:"칼레스",
					text:"... 그래요. 천재께서는,<br>사라진 과의 교원은 기억도 못하시나 보네요.",
				},
				{
					cond:true, pos:2, name:"칼레스",
					text:"적어도 지금은 입장이 역전됐지만요.",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"실바니"}, {v1:"커스텀.배경", op:"==", v2:"학자"}],
			lineList:[
				{
					cond:true, pos:2, name:"칼레스",
					text:"그거 아시나요.<br>당신께 초대장을 보낸 건 저였답니다.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"감사합니다.<br>정신 마술에는 일가견이 있으십니까?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"당신이었나?<br>사람 볼 줄 아네.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"초대 감사해요.<br>많은 이야기를 나눠보고 싶네요.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"정말?<br>결투 끝내고 잔뜩 이야기해보자~",
				},
				{
					cond:true, pos:2, name:"칼레스",
					text:"남의 나라 연구는 그쪽에서 금지하게 만들고,<br>이제 와서 뻔뻔하게 관심을 가지시나요?",
				},
				{
					cond:true, pos:2, name:"칼레스",
					text:"좋아요.<br>원하는 대로 보시길.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"커스텀.종족", op:"==", v2:"엘도리아인"}],
			lineList:[
				{
					cond:true, pos:2, name:"칼레스",
					text:"이건 상식이에요.<br>그렇지 않나요?",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"커스텀.종족", op:"==", v2:"실바니"}],
			lineList:[
				{
					cond:true, pos:2, name:"칼레스",
					text:"실바니에게 최면 걸기는,<br>정말 쉬운 일이지요.",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"커스텀.종족", op:"==", v2:"하프만"}],
			lineList:[
				{
					cond:true, pos:2, name:"칼레스",
					text:"민감해지세요.<br>좀 더 성노예에 적합하게.",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"커스텀.종족", op:"==", v2:"트라이브"}],
			lineList:[
				{
					cond:true, pos:2, name:"칼레스",
					text:"몸이 스스로를 배신하는 순간을 즐겨보세요.",
				}
			]
		},
	],
	"개입-저주":[
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"실바니"}, {v1:"커스텀.배경", op:"==", v2:"군인"}],
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"인추크!<br>수배 중인 범죄자 아닙니까!",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"인추크!<br>너같은 범죄자가 이곳에서 뭐하는거지?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"인추크!<br>이럴 수가... 끝나는 대로 체포하겠어요.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"인추크?<br>설마 여기서 널 숨겨주고 있던거야?",
				},
				{
					cond:true, pos:2, name:"추크",
					text:"아직도 수배 중이야?<br>경찰들 어지간히도 할 짓 없나봐~",
				},
				{
					cond:true, pos:2, name:"추크",
					text:"그래도 체포는 못할 걸?<br>영원히.",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"실바니"}, {v1:"커스텀.배경", op:"==", v2:"범죄자"}],
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"추크님?<br>실종되셨다고 들었습니다.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"추크?<br>어디갔나 했더니 여기 있었어?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"추크님!<br>안 보이시더니, 여기 계셨네요?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"추크?<br>오랜만이야~ 여기서 만나네~",
				},
				{
					cond:true, pos:2, name:"추크",
					text:"후후, 아무래도 우리 금술회는<br>이 장소에 끌릴 수 밖에 없나봐.",
				},
				{
					cond:true, pos:2, name:"추크",
					text:"그나저나,<br>내 특기는 기억하지?",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"커스텀.종족", op:"==", v2:"엘도리아인"}],
			lineList:[
				{
					cond:true, pos:2, name:"추크",
					text:"쾌락이 고통으로 바뀌기 전에 끝낼 수 있겠어?",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"커스텀.종족", op:"==", v2:"실바니"}],
			lineList:[
				{
					cond:true, pos:2, name:"추크",
					text:"춤춰라! 꼭두각시야!",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"커스텀.종족", op:"==", v2:"하프만"}],
			lineList:[
				{
					cond:true, pos:2, name:"추크",
					text:"네 정신이 부서지는 소릴 들려주거라!",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"커스텀.종족", op:"==", v2:"트라이브"}],
			lineList:[
				{
					cond:true, pos:2, name:"추크",
					text:"목줄을 풀 수 있을지 시험해보자꾸나!",
				}
			]
		},
	],
	"개입-약물":[
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"하프만"}, {v1:"커스텀.배경", op:"==", v2:"학자"}],
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"오옷, 그 약물은 무엇입니까?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"아니, 그 약물은?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"오, 그 약물은 제가 생각하는 그거예요?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"어, 그거 네가 만든거야?",
				},
				{
					cond:true, pos:2, name:"니스비",
					text:"내 특제 약물에 관심있어?<br>그럼, 마셔!",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"하프만"}, {v1:"커스텀.배경", op:"==", v2:"범죄자"}],
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"동지?<br>이곳에서 무얼 하고 계십니까.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"동지!<br>너도 이곳에 잡혀있는거야?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"이런 곳에서 동지를.<br>반가워요.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"안녕~<br>이런 곳에서 동지를 다 보네.",
				},
				{
					cond:true, pos:2, name:"니스비",
					text:"아하하!<br>난 너네 사상에 관심없어!",
				},
				{
					cond:true, pos:2, name:"니스비",
					text:"나는 약물좋아파야♡",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:2, name:"니스비",
					text:"이걸 마셔!<br>쭈욱 들이켜!",
				}
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:2, name:"니스비",
					text:"그래, 그래!<br>데이터가 쌓이고 있어!",
				}
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"후히히후헤!<br>역시 나는 천재야!",
				}
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:2, name:"니스비",
					text:"내 계산은 완벽해!<br>이거야, 바로 이거야!",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"라운드", op:">", v2:1}],
			lineList:[
				{
					cond:true, pos:2, name:"니스비",
					text:"안돼, 아직 부족해!<br>더 많은 반응을 보여줘!",
				}
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:2, name:"니스비",
					text:"반응이 나오고 있어!<br>새로운 발견이야!",
				}
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:2, name:"니스비",
					text:"너는 훌륭한 실험체야!",
				}
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:2, name:"니스비",
					text:"이번 실험체는 어디까지 버틸까!",
				}
			]
		},
	],
	"개입-고문":[
		{
			priority:2, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"조교사"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"무슨 일이십니까,<br>반장님?",
				},
				{
					cond:true, pos:2, name:"모모리카",
					text:"일이다...",
				},
				{
					cond:true, pos:2, name:"모모리카",
					text:"... ...",
				},
				{
					cond:true, pos:2, name:"모모리카",
					text:"실수하지 마라...<br>잘 하자...",
				},
				{
					cond:true, pos:0,
					text:"넵, 맡겨주십시오.",
				},
				{
					cond:true, pos:0,
					text:"(젠장...<br>암컷 주제에...)",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"트라이브"}, {v1:"커스텀.배경", op:"==", v2:"범죄자"}],
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"어라?<br>당신도 추방자십니까?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"오오,<br>너도 부족에서 쫓겨난거냐?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"혹시 당신도 저처럼 추방자인가요?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"이야 반가워~<br>같은 추방자끼리 잘 해볼래?",
				},
				{
					cond:true, pos:2, name:"모모리카",
					text:"... ...",
				},
				{
					cond:true, pos:2, name:"모모리카",
					text:"사담은 금지다...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"커스텀.종족", op:"==", v2:"엘도리아인"}],
			lineList:[
				{
					cond:true, pos:2, name:"모모리카",
					text:"너는 암퇘지다...<br>정신 깊이 새겨라.",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"커스텀.종족", op:"==", v2:"실바니"}],
			lineList:[
				{
					cond:true, pos:2, name:"모모리카",
					text:"네 가면을 전부 벗겨주마...",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"커스텀.종족", op:"==", v2:"하프만"}],
			lineList:[
				{
					cond:true, pos:2, name:"모모리카",
					text:"다시는 두 발로 설 수 없게 해주마...",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"커스텀.종족", op:"==", v2:"트라이브"}],
			lineList:[
				{
					cond:true, pos:2, name:"모모리카",
					text:"쾌락과 고통의 경계를...<br>없애주지...",
				}
			]
		},
	],
}

