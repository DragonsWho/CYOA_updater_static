const cardTexts = {
	"trigger":{
		"처음으로":{
			"KOR":"<span style=\"color: gray;\">[1회 발동]</span> ",
			"ENG":"<span style=\"color: gray;\">[Activates once]</span> "
		},
		"처음n번":{
			"KOR":"<span style=\"color: gray;\">[{duration}회 발동]</span> ",
			"ENG":"<span style=\"color: gray;\">[Activates {duration} times]</span> "
		},
		"다음으로":{
			"KOR":"<span style=\"color: gray;\">[1회 발동]</span> ",
			"ENG":"<span style=\"color: gray;\">[Activates once]</span> "
		},
		"다음n번":{
			"KOR":"<span style=\"color: gray;\">[{duration}회 발동]</span> ",
			"ENG":"<span style=\"color: gray;\">[Activates {duration} times]</span> "
		},
		"이라운드":{
			"KOR":"이번 라운드 동안 ",
			"ENG":"For this round, "
		},
		"다음라운드":{
			"KOR":"다음 라운드까지 ",
			"ENG":"Until next round, "
		},
		"n라운드":{
			"KOR":"{amount}라운드 동안 ",
			"ENG":"For {amount} rounds, "
		},
		"n라운드후":{
			"KOR":"{amount}라운드 뒤에 ",
			"ENG":"After {amount} rounds, "
		},
		"결투시작시":{
			"KOR":"<span style=\"color: gray;\">[결투 시작]</span> ",
			"ENG":"<span style=\"color: gray;\">[Start of Duel]</span> "
		},
		"라운드시작시":{
			"KOR":"<span style=\"color: gray;\">[라운드 시작]</span> ",
			"ENG":"<span style=\"color: gray;\">[Start of Round]</span> "
		},
		"라운드종료시":{
			"KOR":"<span style=\"color: gray;\">[라운드 종료]</span> ",
			"ENG":"<span style=\"color: gray;\">[End of Round]</span> "
		},
		"획득시":{
			"KOR":"<span style=\"color: gray;\">[획득]</span> ",
			"ENG":"<span style=\"color: gray;\">[On Gain]</span> "
		},
		"체위획득시":{
			"KOR":"이 체위를 얻을 때 ",
			"ENG":"When you gain this Position, "
		},
		"체위상실시":{
			"KOR":"이 체위를 잃을 때 ",
			"ENG":"When you lose this Position, "
		},
		"체위획득상실시":{
			"KOR":"이 체위를 얻을 때와 잃을 때 ",
			"ENG":"When you gain or lose this Position, "
		},
		"변형될시":{
			"KOR":"<span style=\"color: gray;\">[변형됨]</span> ",
			"ENG":"<span style=\"color: gray;\">[Transformed]</span> "
		},
		"결합될시":{
			"KOR":"<span style=\"color: gray;\">[결합됨]</span> ",
			"ENG":"<span style=\"color: gray;\">[Combined]</span> "
		},
		"절정시":{
			"KOR":"절정 시 ",
			"ENG":"On Orgasm, "
		},
		"누군가절정시":{
			"KOR":"자신 또는 상대가 절정 시 ",
			"ENG":"When you or the opponent has an Orgasm, "
		},
		"버려질시":{
			"KOR":"<span style=\"color: gray;\">[버려짐]</span> ",
			"ENG":"<span style=\"color: gray;\">[Discarded]</span> "
		},
		"버릴시":{
			"KOR":"카드를 버릴 때 ",
			"ENG":"When you discard a card, "
		},
		"만료시":{
			"KOR":"<span style=\"color: gray;\">[만료됨]</span> ",
			"ENG":"<span style=\"color: gray;\">[Expired]</span> "
		},
		"자극시":{
			"KOR":"<b>[자극]</b>할 때 ",
			"ENG":"When inflicting <b>[Stimulation]</b>, "
		},
		"자극받을시":{
			"KOR":"<b>[자극]</b> 받을 때 ",
			"ENG":"When receiving <b>[Stimulation]</b>, "
		},
		"상대자극받을시":{
			"KOR":"상대가 <b>[자극]</b> 받을 때 ",
			"ENG":"When the opponent receives <b>[Stimulation]</b>, "
		},
		"누군가자극받을시":{
			"KOR":"자신 또는 상대가 <b>[자극]</b> 받을 때 ",
			"ENG":"When you or the opponent receives <b>[Stimulation]</b>, "
		},
		"회피시":{
			"KOR":"회피할 때 ",
			"ENG":"When evading, "
		},
		"사용시":{
			"KOR":"카드를 사용할 때 ",
			"ENG":"When you play a card, "
		},
		"공격사용시":{
			"KOR":"공격 카드를 사용할 때 ",
			"ENG":"When you play an Attack card, "
		},
		"보조사용시":{
			"KOR":"보조 카드를 사용할 때 ",
			"ENG":"When you play a Support card, "
		},
		"체위사용시":{
			"KOR":"체위 카드를 사용할 때 ",
			"ENG":"When you play a Position card, "
		},
		"패널티사용시":{
			"KOR":"패널티 카드를 사용할 때 ",
			"ENG":"When you play a Penalty card, "
		},
		"사격사용시":{
			"KOR":"사격 카드를 사용할 때 ",
			"ENG":"When you play a Shot card, "
		},
		"상대사용시":{
			"KOR":"상대가 카드를 사용할 때 ",
			"ENG":"When the opponent plays a card, "
		},
		"상대공격사용시":{
			"KOR":"상대가 공격 카드를 사용할 때 ",
			"ENG":"When the opponent plays an Attack card, "
		},
		"상대보조사용시":{
			"KOR":"상대가 보조 카드를 사용할 때 ",
			"ENG":"When the opponent plays a Support card, "
		},
		"상대체위사용시":{
			"KOR":"상대가 체위 카드를 사용할 때 ",
			"ENG":"When the opponent plays a Position card, "
		},
		"상대패널티사용시":{
			"KOR":"상대가 패널티 카드를 사용할 때 ",
			"ENG":"When the opponent plays a Penalty card, "
		},
		"도전자사용시":{
			"KOR":"도전자가 카드를 사용할 때 ",
			"ENG":"When the Challenger plays a card, "
		},
		"도전자공격사용시":{
			"KOR":"도전자가 공격 카드를 사용할 때 ",
			"ENG":"When the Challenger plays an Attack card, "
		},
		"도전자보조사용시":{
			"KOR":"도전자가 보조 카드를 사용할 때 ",
			"ENG":"When the Challenger plays a Support card, "
		},
		"도전자체위사용시":{
			"KOR":"도전자가 체위 카드를 사용할 때 ",
			"ENG":"When the Challenger plays a Position card, "
		},
		"도전자패널티사용시":{
			"KOR":"도전자가 패널티 카드를 사용할 때 ",
			"ENG":"When the Challenger plays a Penalty card, "
		},
		"챔피언사용시":{
			"KOR":"챔피언이 카드를 사용할 때 ",
			"ENG":"When the Champion plays a card, "
		},
		"챔피언공격사용시":{
			"KOR":"챔피언이 공격 카드를 사용할 때 ",
			"ENG":"When the Champion plays an Attack card, "
		},
		"챔피언보조사용시":{
			"KOR":"챔피언이 보조 카드를 사용할 때 ",
			"ENG":"When the Champion plays a Support card, "
		},
		"챔피언체위사용시":{
			"KOR":"챔피언이 체위 카드를 사용할 때 ",
			"ENG":"When the Champion plays a Position card, "
		},
		"챔피언패널티사용시":{
			"KOR":"챔피언이 패널티 카드를 사용할 때 ",
			"ENG":"When the Champion plays a Penalty card, "
		},
		"누군가사용시":{
			"KOR":"자신 또는 상대가 카드를 사용할 때 ",
			"ENG":"When you or the opponent plays a card, "
		},
		"누군가공격사용시":{
			"KOR":"자신 또는 상대가 공격 카드를 사용할 때 ",
			"ENG":"When you or the opponent plays an Attack card, "
		},
		"누군가보조사용시":{
			"KOR":"자신 또는 상대가 보조 카드를 사용할 때 ",
			"ENG":"When you or the opponent plays a Support card, "
		},
		"누군가체위사용시":{
			"KOR":"자신 또는 상대가 체위 카드를 사용할 때 ",
			"ENG":"When you or the opponent plays a Position card, "
		},
		"누군가패널티사용시":{
			"KOR":"자신 또는 상대가 패널티 카드를 사용할 때 ",
			"ENG":"When you or the opponent plays a Penalty card, "
		},
		"생성사용시":{
			"KOR":"생성된 카드를 사용할 때 ",
			"ENG":"When playing a generated card, "
		},
		"카드획득시":{
			"KOR":"카드를 얻을 때 ",
			"ENG":"When you gain a card, "
		},
		"패널티획득시":{
			"KOR":"패널티 카드를 얻을 때 ",
			"ENG":"When you gain a Penalty card, "
		},
		"카드변형시":{
			"KOR":"카드가 변형될 때 ",
			"ENG":"When a card is Transformed, "
		},
		"마술만료시":{
			"KOR":"마술이 만료될 때 ",
			"ENG":"When a Magic expires, "
		},
		"결합시":{
			"KOR":"카드를 결합할 때 ",
			"ENG":"When combining cards, "
		},
		"초과치유시":{
			"KOR":"초과로 <b>흥분</b>을 회복할 때 ",
			"ENG":"When you overheal <b>Excitement</b>, "
		},
	},
	"target":{
		"수량":{
			"KOR":"{target}의 수",
			"ENG":"the number of {target}"
		},
		"반복배수숫자":{
			"KOR":"의 {repeat}배",
			"ENG":" times {repeat}"
		},
		"반복배수값":{
			"KOR":"와 {repeat}의 곱",
			"ENG":" multiplied by {repeat}"
		},
		"덱":{
			"KOR":"{owner}의 덱",
			"ENG":"{owner}'s deck"
		},
		"덱조건":{
			"KOR":"{deck}에 {cards}",
			"ENG":"{cards} in {deck}"
		},
		"덱목적":{
			"KOR":"{deck}의 {cards}",
			"ENG":"{cards} in {deck}"
		},
		"특수덱":{
			"KOR":"{cards} {amount}종류",
			"ENG":"{amount} types of {cards}"
		},
		"스탯":{
			"KOR":"{owner}의 {stat}",
			"ENG":"{owner}'s {stat}"
		},
		"카드정보":{
			"KOR":"{card}의 {category}",
			"ENG":"{card}'s {category}"
		},
		"효과발동자신":{
			"KOR":"이번 라운드에 자신의 카드로 인해 아무 효과도 발동되지 않았다면 ",
			"ENG":"If none of your card effects activated this round, "
		},
		"효과발동":{
			"KOR":"이번 라운드에 {actor}의 카드로 인해 아무 효과도 발동되지 않았다면 ",
			"ENG":"If none of {actor}'s card effects activated this round, "
		},
		"사용카드자신":{
			"KOR":"이번 라운드에 낸 {cards}",
			"ENG":"{cards} played this round"
		},
		"사용카드":{
			"KOR":"이번 라운드에 {actor}가 낸 {cards}",
			"ENG":"{cards} played by {actor} this round"
		},
		"시작카드":{
			"KOR":"결투가 시작될 때 {deck}에 있던 {cards}",
			"ENG":"{cards} in {deck} at the start of the duel"
		},
		"상태":{
			"KOR":"{owner}[이/가] 가진 {state}",
			"ENG":"the {state} {owner} has"
		},
		"상태자신":{
			"KOR":"갖고 있는 {state}",
			"ENG":"the {state} you have"
		},
		"상태목적":{
			"KOR":"{owner}[이/가] {state}[을/를]",
			"ENG":"{owner}'s {state}"
		},
		"상태자신목적":{
			"KOR":"{state}[을/를]",
			"ENG":"{state}"
		},

		"결투동안":{
			"KOR":"결투 동안",
			"ENG":"during the duel",
		},
		"이번라운드":{
			"KOR":"이번 라운드에",
			"ENG":"this round",
		},
		"이전라운드":{
			"KOR":"이전 라운드에",
			"ENG":"last round",
		},
		"최근라운드":{
			"KOR":"최근 라운드에",
			"ENG":"in recent rounds",
		},

		"기록사용":{
			"KOR":"{time} {actor}[이/가] 사용한 {cards}",
			"ENG":"{cards} {actor} played {time}",
		},
		"기록사용자신":{
			"KOR":"{time} 사용한 {cards}",
			"ENG":"{cards} you played {time}",
		},
		"기록버림":{
			"KOR":"{time} {actor}[이/가] 버렸던 {cards}",
			"ENG":"{cards} {actor} discarded {time}",
		},
		"기록버림자신":{
			"KOR":"{time} 버렸던 {cards}",
			"ENG":"{cards} you discarded {time}",
		},
		"기록변형":{
			"KOR":"{time} 변형한 카드",
			"ENG":"cards Transformed {time}",
		},
		"기록결합":{
			"KOR":"{time} 결합한 카드",
			"ENG":"cards Combined {time}",
		},
		"기록절정":{
			"KOR":"{time} {actor}[이/가] <b>절정</b>한 횟수",
			"ENG":"the number of times {actor} had an <b>Orgasm</b> {time}",
		},
		"기록절정자신":{
			"KOR":"{time} <b>절정</b>한 횟수",
			"ENG":"the number of times you had an <b>Orgasm</b> {time}",
		},
		"기록자극":{
			"KOR":"{time} {actor}[이/가] <b>[자극]</b>한 횟수",
			"ENG":"the number of times {actor} inflicted <b>[Stimulation]</b> {time}",
		},
		"기록자극자신":{
			"KOR":"{time} <b>[자극]</b>한 횟수",
			"ENG":"the number of times you inflicted <b>[Stimulation]</b> {time}",
		},
		"기록자극받음":{
			"KOR":"{time} {actor}[이/가] <b>[자극]</b>받은 횟수",
			"ENG":"the number of times {actor} received <b>[Stimulation]</b> {time}",
		},
		"기록자극받음자신":{
			"KOR":"{time} <b>[자극]</b>받은 횟수",
			"ENG":"the number of times you received <b>[Stimulation]</b> {time}",
		},
		"기록흥분증가":{
			"KOR":"{time} 증가한 {actor}의 <b>흥분</b>",
			"ENG":"<b>Excitement</b> {actor} gained {time}",
		},
		"기록흥분증가자신":{
			"KOR":"{time} 증가한 <b>흥분</b>",
			"ENG":"<b>Excitement</b> you gained {time}",
		},
		"기록흥분감소":{
			"KOR":"{time} 회복된 {actor}의 <b>흥분</b>",
			"ENG":"<b>Excitement</b> {actor} recovered {time}",
		},
		"기록흥분감소자신":{
			"KOR":"{time} 회복된 <b>흥분</b>",
			"ENG":"<b>Excitement</b> you recovered {time}",
		},
		"기록음란증가":{
			"KOR":"{time} 증가한 <b>음란</b>",
			"ENG":"<b>Lewdness</b> gained {time}",
		},
		"기록음란감소":{
			"KOR":"{time} 감소한 <b>음란</b>",
			"ENG":"<b>Lewdness</b> lost {time}",
		},
		"기록발정증가":{
			"KOR":"{time} 증가한 <b>발정</b>",
			"ENG":"<b>Heat</b> gained {time}",
		},
		"기록발정감소":{
			"KOR":"{time} 감소한 <b>발정</b>",
			"ENG":"<b>Heat</b> lost {time}",
		},
		"기록욕망획득":{
			"KOR":"{time} 얻은 <b>욕망</b>",
			"ENG":"<b>Lust</b> gained {time}",
		},
		"기록젖음획득":{
			"KOR":"{time} 얻은 <b>젖음</b>",
			"ENG":"<b>Wetness</b> gained {time}",
		},
		"기록감각차단획득":{
			"KOR":"{time} 얻은 <b>감각차단</b>",
			"ENG":"<b>Numbness</b> gained {time}",
		},
		"기록타락획득":{
			"KOR":"{time} 얻은 <b>타락</b>",
			"ENG":"<b>Corruption</b> gained {time}",
		},
		"기록획득":{
			"KOR":"{time} {actor}[이/가] 얻은 {cards}",
			"ENG":"{cards} {actor} gained {time}",
		},
		"기록획득자신":{
			"KOR":"{time} 얻은 {cards}",
			"ENG":"{cards} you gained {time}",
		},
		"기록소모한욕망":{
			"KOR":"{time} 소모한 <b>욕망</b>",
			"ENG":"<b>Lust</b> spent {time}",
		},
		"기록회피":{
			"KOR":"{time} {actor}[이/가] 회피한 횟수",
			"ENG":"the number of times {actor} evaded {time}",
		},
		"기록회피자신":{
			"KOR":"{time} 회피한 횟수",
			"ENG":"the number of times you evaded {time}",
		},
		"기록만료마술":{
			"KOR":"{time} 만료된 {cards}",
			"ENG":"{cards} expired {time}",
		},

		"횟수숫자":{
			"KOR":"{amount}번",
			"ENG":"{amount} times",
		},
		"횟수값":{
			"KOR":"{amount}만큼",
			"ENG":"by {amount}",
		},
		"횟수카드":{
			"KOR":"{amount}장",
			"ENG":"{amount}",
		},
		"횟수상태":{
			"KOR":"{amount}장",
			"ENG":"{amount}",
		},
		"횟수발동":{
			"KOR":"{amount}번 발동한다.",
			"ENG":"Activates {amount} times.",
		},
		"카드들":{
			"KOR":"{cards} {amount}장",
			"ENG":"{amount} {cards}",
		},
		"카드종류들":{
			"KOR":"{cards} {amount}종류",
			"ENG":"{amount} types of {cards}",
		},
		"카드전부":{
			"KOR":"모든 {cards}",
			"ENG":"All {cards}",
		},
		"카드종류전부":{
			"KOR":"모든 종류의 {cards}",
			"ENG":"All types of {cards}",
		},
		"카드종류":{
			"KOR":"서로 다른 {cards}",
			"ENG":"different {cards}",
		},
		"복사본":{
			"KOR":"{card}의 복사본",
			"ENG":"a copy of {card}",
		},
		"모든트랩":{
			"KOR":"덱의 모든 트랩 카드들",
			"ENG":"All Trap cards in your deck",
		},
		"지속시간":{
			"KOR":"{target}의 지속시간",
			"ENG":"the duration of {target}",
		},
		"소모한욕망":{
			"KOR":"소모한 <b>욕망</b>",
			"ENG":"<b>Lust</b> spent",
		},

		"서로다른제조":{
			"KOR":"서로 다른 제조 카드",
			"ENG":"different Crafted cards"
		},

		"마술슬롯":{
			"KOR":"마술 슬롯의 {cards}",
			"ENG":"{cards} in Magic Slots"
		},
	},
	"condition":{
		"낼수없음":{
			"KOR":"이 카드는 낼 수 없다.",
			"ENG":"Cannot be played.",
		},
		"낼수있음":{
			"KOR":"{cond} 낼 수 있다.",
			"ENG":"Can be played {cond}.",
		},
		"존재":{
			"KOR":"{object}가 있다면 ",
			"ENG":"If you have {object}, ",
		},
		"비존재":{
			"KOR":"{object}가 없다면 ",
			"ENG":"If you do not have {object}, ",
		},
		"라운드시작시":{
			"KOR":"<span style=\"color: gray;\">[라운드 시작]</span> ",
			"ENG":"<span style=\"color: gray;\">[Start of Round]</span> ",
		},
		"라운드종료시":{
			"KOR":"<span style=\"color: gray;\">[라운드 종료]</span> ",
			"ENG":"<span style=\"color: gray;\">[End of Round]</span> ",
		},
		"라운드일치시작시":{
			"KOR":"<span style=\"color: gray;\">[{amount}라운드 시작]</span> ",
			"ENG":"<span style=\"color: gray;\">[Start of Round {amount}]</span> ",
		},
		"라운드일치종료시":{
			"KOR":"<span style=\"color: gray;\">[{amount}라운드 종료]</span> ",
			"ENG":"<span style=\"color: gray;\">[End of Round {amount}]</span> ",
		},
		"라운드일치특성":{
			"KOR":"{amount}라운드에 ",
			"ENG":"On round {amount}, ",
		},
		"라운드일치숫자":{
			"KOR":"{amount}라운드라면 ",
			"ENG":"If it is round {amount}, ",
		},
		"라운드일치값":{
			"KOR":"현재 라운드가 {amount}와 같다면 ",
			"ENG":"If the current round is {amount}, ",
		},
		"라운드초과특성":{
			"KOR":"{amount}라운드 이후 ",
			"ENG":"After round {amount}, ",
		},
		"라운드초과숫자":{
			"KOR":"{amount}라운드가 지났다면 ",
			"ENG":"If more than {amount} rounds have passed, ",
		},
		"라운드초과값":{
			"KOR":"현재 라운드가 {amount}보다 크다면 ",
			"ENG":"If the current round is greater than {amount}, ",
		},
		"라운드이상특성":{
			"KOR":"{amount}라운드부터 ",
			"ENG":"From round {amount}, ",
		},
		"라운드이상숫자":{
			"KOR":"{amount}라운드 이상 진행했다면 ",
			"ENG":"If {amount} or more rounds have passed, ",
		},
		"라운드이상값":{
			"KOR":"현재 라운드가 {amount} 이상이라면 ",
			"ENG":"If the current round is {amount} or greater, ",
		},
		"라운드미만특성":{
			"KOR":"{amount}라운드 전까지 ",
			"ENG":"Before round {amount}, ",
		},
		"라운드미만숫자":{
			"KOR":"{amount}라운드 이전이라면 ",
			"ENG":"If it is before round {amount}, ",
		},
		"라운드미만값":{
			"KOR":"현재 라운드가 {amount} 미만이라면",
			"ENG":"If the current round is less than {amount}, ",
		},
		"라운드이하특성":{
			"KOR":"{amount}라운드까지 ",
			"ENG":"Until round {amount}, ",
		},
		"라운드이하숫자":{
			"KOR":"{amount}라운드가 지나지 않았다면 ",
			"ENG":"If {amount} rounds have not yet passed, ",
		},
		"라운드이하값":{
			"KOR":"현재 라운드가 {amount} 이하라면 ",
			"ENG":"If the current round is {amount} or less, ",
		},
		"라운드불일치특성":{
			"KOR":"{amount}라운드 외에 ",
			"ENG":"Except on round {amount}, ",
		},
		"라운드불일치숫자":{
			"KOR":"{amount}라운드가 아니라면 ",
			"ENG":"If it is not round {amount}, ",
		},
		"라운드불일치값":{
			"KOR":"현재 라운드가 {amount}[과/와] 다르다면 ",
			"ENG":"If the current round is not {amount}, ",
		},
		"라운드포함시작시":{
			"KOR":"<span style=\"color: gray;\">[{amount}라운드 시작]</span> ",
			"ENG":"<span style=\"color: gray;\">[Start of Round {amount}]</span> ",
		},
		"라운드포함종료시":{
			"KOR":"<span style=\"color: gray;\">[{amount}라운드 종료]</span> ",
			"ENG":"<span style=\"color: gray;\">[End of Round {amount}]</span> ",
		},
		"라운드포함특성":{
			"KOR":"{amount}라운드에 ",
			"ENG":"On round {amount}, ",
		},
		"라운드포함":{
			"KOR":"{amount}라운드라면 ",
			"ENG":"If it is round {amount}, ",
		},

		"덱카드없음":{
			"KOR":"{target}[이/가] 없다면 ",
			"ENG":"If there is no {target}, ",
		},
		"덱카드있음":{
			"KOR":"{target}[이/가] 있다면 ",
			"ENG":"If there is {target}, ",
		},
		"덱카드일치숫자":{
			"KOR":"{target}[이/가] 정확히 {amount}장 있다면 ",
			"ENG":"If there are exactly {amount} {target}, ",
		},
		"덱카드일치값":{
			"KOR":"{target}[이/가] 정확히 {amount}만큼 있다면 ",
			"ENG":"If there is exactly {amount} {target}, ",
		},
		"덱카드초과숫자":{
			"KOR":"{target}[이/가] {amount}장보다 많다면 ",
			"ENG":"If there are more than {amount} {target}, ",
		},
		"덱카드초과값":{
			"KOR":"{target}[이/가] {amount}보다 많다면 ",
			"ENG":"If there is more than {amount} {target}, ",
		},
		"덱카드미만숫자":{
			"KOR":"{target}[이/가] {amount}장보다 적다면 ",
			"ENG":"If there are fewer than {amount} {target}, ",
		},
		"덱카드미만값":{
			"KOR":"{target}[이/가] {amount}보다 적다면 ",
			"ENG":"If there is less than {amount} {target}, ",
		},
		"덱카드이상숫자":{
			"KOR":"{target}[이/가] {amount}장 이상 있다면 ",
			"ENG":"If there are {amount} or more {target}, ",
		},
		"덱카드이상값":{
			"KOR":"{target}[이/가] {amount} 이상만큼 있다면 ",
			"ENG":"If there is {amount} or more {target}, ",
		},
		"덱카드이하숫자":{
			"KOR":"{target}[이/가] {amount}장 이하라면 ",
			"ENG":"If there are {amount} or fewer {target}, ",
		},
		"덱카드이하값":{
			"KOR":"{target}[이/가] {amount} 이하만큼 있다면 ",
			"ENG":"If there is {amount} or less {target}, ",
		},
		"덱카드불일치숫자":{
			"KOR":"{target}[이/가] 정확히 {amount}장 있지 않다면 ",
			"ENG":"If there are not exactly {amount} {target}, ",
		},
		"덱카드불일치값":{
			"KOR":"{target}[이/가] 정확히 {amount}만큼 있지 않다면 ",
			"ENG":"If there is not exactly {amount} {target}, ",
		},

		"상태없음":{
			"KOR":"{target} 가지고 있지 않다면 ",
			"ENG":"If you do not have {target}, ",
		},
		"상태있음":{
			"KOR":"{target} 가지고 있다면 ",
			"ENG":"If you have {target}, ",
		},
		"상태일치숫자":{
			"KOR":"{target} 정확히 {amount}장 가지고 있다면 ",
			"ENG":"If you have exactly {amount} {target}, ",
		},
		"상태일치값":{
			"KOR":"{target} 정확히 {amount}만큼 가지고 있다면 ",
			"ENG":"If you have exactly {amount} {target}, ",
		},
		"상태초과숫자":{
			"KOR":"{target} {amount}장보다 많이 가지고 있다면 ",
			"ENG":"If you have more than {amount} {target}, ",
		},
		"상태초과값":{
			"KOR":"{target} {amount}보다 많이 가지고 있다면 ",
			"ENG":"If you have more than {amount} {target}, ",
		},
		"상태미만숫자":{
			"KOR":"{target} {amount}장보다 적게 가지고 있다면 ",
			"ENG":"If you have fewer than {amount} {target}, ",
		},
		"상태미만값":{
			"KOR":"{target} {amount}보다 적게 가지고 있다면 ",
			"ENG":"If you have less than {amount} {target}, ",
		},
		"상태이상숫자":{
			"KOR":"{target} {amount}장 이상 가지고 있다면 ",
			"ENG":"If you have {amount} or more {target}, ",
		},
		"상태이상값":{
			"KOR":"{target} {amount} 이상만큼 가지고 있다면 ",
			"ENG":"If you have {amount} or more {target}, ",
		},
		"상태이하숫자":{
			"KOR":"{target} {amount}장 이하 가지고 있다면 ",
			"ENG":"If you have {amount} or fewer {target}, ",
		},
		"상태이하값":{
			"KOR":"{target} {amount} 이하만큼 가지고 있다면 ",
			"ENG":"If you have {amount} or less {target}, ",
		},
		"상태불일치숫자":{
			"KOR":"{target} 정확히 {amount}장 가지고 있지 않다면 ",
			"ENG":"If you do not have exactly {amount} {target}, ",
		},
		"상태불일치값":{
			"KOR":"{target} 정확히 {amount}만큼 가지고 있지 않다면 ",
			"ENG":"If you do not have exactly {amount} {target}, ",
		},

		"값일치":{
			"KOR":"{target}[이/가] {amount}[이라/라]면 ",
			"ENG":"If {target} is {amount}, ",
		},
		"값초과":{
			"KOR":"{target}[이/가] {amount}보다 크다면 ",
			"ENG":"If {target} is greater than {amount}, ",
		},
		"값미만":{
			"KOR":"{target}[이/가] {amount}보다 작다면 ",
			"ENG":"If {target} is less than {amount}, ",
		},
		"값이상":{
			"KOR":"{target}[이/가] {amount} 이상이라면 ",
			"ENG":"If {target} is {amount} or greater, ",
		},
		"값이하":{
			"KOR":"{target}[이/가] {amount} 이하라면 ",
			"ENG":"If {target} is {amount} or less, ",
		},
		"값불일치":{
			"KOR":"{target}[이/가] {amount}[이/가] 아니라면 ",
			"ENG":"If {target} is not {amount}, ",
		},

		"낸카드없음":{
			"KOR":"{target}[이/가] 없다면 ",
			"ENG":"If there is no {target}, ",
		},
		"낸카드있음":{
			"KOR":"{target}[이/가] 있다면 ",
			"ENG":"If there is {target}, ",
		},
		"낸카드일치숫자":{
			"KOR":"{target}[이/가] 정확히 {amount}장이라면 ",
			"ENG":"If {target} is exactly {amount}, ",
		},
		"낸카드일치값":{
			"KOR":"{target}[이/가] 정확히 {amount}만큼이라면 ",
			"ENG":"If {target} is exactly {amount}, ",
		},
		"낸카드초과숫자":{
			"KOR":"{target}[이/가] {amount}장보다 많다면 ",
			"ENG":"If {target} is more than {amount}, ",
		},
		"낸카드초과값":{
			"KOR":"{target}[이/가] {amount}보다 많다면 ",
			"ENG":"If {target} is more than {amount}, ",
		},
		"낸카드미만숫자":{
			"KOR":"{target}[이/가] {amount}장보다 적다면 ",
			"ENG":"If {target} is less than {amount}, ",
		},
		"낸카드미만값":{
			"KOR":"{target}[이/가] {amount}보다 적다면 ",
			"ENG":"If {target} is less than {amount}, ",
		},
		"낸카드이상숫자":{
			"KOR":"{target}[이/가] {amount}장 이상이라면 ",
			"ENG":"If {target} is {amount} or more, ",
		},
		"낸카드이상값":{
			"KOR":"{target}[이/가] {amount} 이상이라면 ",
			"ENG":"If {target} is {amount} or more, ",
		},
		"낸카드이하숫자":{
			"KOR":"{target}[이/가] {amount}장 이하라면 ",
			"ENG":"If {target} is {amount} or less, ",
		},
		"낸카드이하값":{
			"KOR":"{target}[이/가] {amount} 이하라면 ",
			"ENG":"If {target} is {amount} or less, ",
		},
		"낸카드불일치숫자":{
			"KOR":"{target}[이/가] 정확히 {amount}장이 아니라면 ",
			"ENG":"If {target} is not exactly {amount}, ",
		},
		"낸카드불일치값":{
			"KOR":"{target}[이/가] 정확히 {amount}만큼이 아니라면 ",
			"ENG":"If {target} is not exactly {amount}, ",
		},

		"이벤트자극":{
			"KOR":"{time} {actor}[이/가] <b>[자극]</b>했다면 ",
			"ENG":"If {actor} inflicted <b>[Stimulation]</b> {time}, ",
		},
		"이벤트자극자신":{
			"KOR":"{time} <b>[자극]</b>했다면 ",
			"ENG":"If you inflicted <b>[Stimulation]</b> {time}, ",
		},
		"이벤트자극부정":{
			"KOR":"{time} {actor}[이/가] <b>[자극]</b>하지 않았다면 ",
			"ENG":"If {actor} did not inflict <b>[Stimulation]</b> {time}, ",
		},
		"이벤트자극자신부정":{
			"KOR":"{time} <b>[자극]</b>하지 않았다면 ",
			"ENG":"If you did not inflict <b>[Stimulation]</b> {time}, ",
		},
		"이벤트자극일치":{
			"KOR":"{time} {actor}[이/가] 정확히 {amount} <b>[자극]</b>했다면 ",
			"ENG":"If {actor} inflicted <b>[Stimulation]</b> exactly {amount} times {time}, ",
		},
		"이벤트자극자신일치":{
			"KOR":"{time} 정확히 {amount} <b>[자극]</b>했다면 ",
			"ENG":"If you inflicted <b>[Stimulation]</b> exactly {amount} times {time}, ",
		},
		"이벤트자극초과":{
			"KOR":"{time} {actor}[이/가] {amount} 보다 많이 <b>[자극]</b>했다면 ",
			"ENG":"If {actor} inflicted <b>[Stimulation]</b> more than {amount} times {time}, ",
		},
		"이벤트자극자신초과":{
			"KOR":"{time} {amount} 보다 많이 <b>[자극]</b>했다면 ",
			"ENG":"If you inflicted <b>[Stimulation]</b> more than {amount} times {time}, ",
		},
		"이벤트자극미만":{
			"KOR":"{time} {actor}[이/가] {amount} 보다 적게 <b>[자극]</b>했다면 ",
			"ENG":"If {actor} inflicted <b>[Stimulation]</b> fewer than {amount} times {time}, ",
		},
		"이벤트자극자신미만":{
			"KOR":"{time} {amount} 보다 적게 <b>[자극]</b>했다면 ",
			"ENG":"If you inflicted <b>[Stimulation]</b> fewer than {amount} times {time}, ",
		},
		"이벤트자극이상":{
			"KOR":"{time} {actor}[이/가] {amount} 이상 <b>[자극]</b>했다면 ",
			"ENG":"If {actor} inflicted <b>[Stimulation]</b> {amount} or more times {time}, ",
		},
		"이벤트자극자신이상":{
			"KOR":"{time} {amount} 이상 <b>[자극]</b>했다면 ",
			"ENG":"If you inflicted <b>[Stimulation]</b> {amount} or more times {time}, ",
		},
		"이벤트자극이하":{
			"KOR":"{time} {actor}[이/가] {amount} 이하 <b>[자극]</b>했다면 ",
			"ENG":"If {actor} inflicted <b>[Stimulation]</b> {amount} or fewer times {time}, ",
		},
		"이벤트자극자신이하":{
			"KOR":"{time} {amount} 이하 <b>[자극]</b>했다면 ",
			"ENG":"If you inflicted <b>[Stimulation]</b> {amount} or fewer times {time}, ",
		},
		"이벤트자극불일치":{
			"KOR":"{time} {actor}[이/가] {amount} <b>[자극]</b>하지 않았다면 ",
			"ENG":"If {actor} did not inflict <b>[Stimulation]</b> exactly {amount} times {time}, ",
		},
		"이벤트자극자신불일치":{
			"KOR":"{time} {amount} <b>[자극]</b>하지 않았다면 ",
			"ENG":"If you did not inflict <b>[Stimulation]</b> exactly {amount} times {time}, ",
		},

		"이벤트자극받음":{
			"KOR":"{time} {actor}[이/가] <b>[자극]</b>받았다면 ",
			"ENG":"If {actor} received <b>[Stimulation]</b> {time}, ",
		},
		"이벤트자극받음자신":{
			"KOR":"{time} <b>[자극]</b>받았다면 ",
			"ENG":"If you received <b>[Stimulation]</b> {time}, ",
		},
		"이벤트자극받음부정":{
			"KOR":"{time} {actor}[이/가] <b>[자극]</b>받지 않았다면 ",
			"ENG":"If {actor} did not receive <b>[Stimulation]</b> {time}, ",
		},
		"이벤트자극받음자신부정":{
			"KOR":"{time} <b>[자극]</b>받지 않았다면 ",
			"ENG":"If you did not receive <b>[Stimulation]</b> {time}, ",
		},
		"이벤트자극받음일치":{
			"KOR":"{time} {actor}[이/가] 정확히 {amount} <b>[자극]</b>받았다면 ",
			"ENG":"If {actor} received <b>[Stimulation]</b> exactly {amount} times {time}, ",
		},
		"이벤트자극받음자신일치":{
			"KOR":"{time} 정확히 {amount} <b>[자극]</b>받았다면 ",
			"ENG":"If you received <b>[Stimulation]</b> exactly {amount} times {time}, ",
		},
		"이벤트자극받음초과":{
			"KOR":"{time} {actor}[이/가] {amount} 보다 많이 <b>[자극]</b>받았다면 ",
			"ENG":"If {actor} received <b>[Stimulation]</b> more than {amount} times {time}, ",
		},
		"이벤트자극받음자신초과":{
			"KOR":"{time} {amount} 보다 많이 <b>[자극]</b>받았다면 ",
			"ENG":"If you received <b>[Stimulation]</b> more than {amount} times {time}, ",
		},
		"이벤트자극받음미만":{
			"KOR":"{time} {actor}[이/가] {amount} 보다 적게 <b>[자극]</b>받았다면 ",
			"ENG":"If {actor} received <b>[Stimulation]</b> fewer than {amount} times {time}, ",
		},
		"이벤트자극받음자신미만":{
			"KOR":"{time} {amount} 보다 적게 <b>[자극]</b>받았다면 ",
			"ENG":"If you received <b>[Stimulation]</b> fewer than {amount} times {time}, ",
		},
		"이벤트자극받음이상":{
			"KOR":"{time} {actor}[이/가] {amount} 이상 <b>[자극]</b>받았다면 ",
			"ENG":"If {actor} received <b>[Stimulation]</b> {amount} or more times {time}, ",
		},
		"이벤트자극받음자신이상":{
			"KOR":"{time} {amount} 이상 <b>[자극]</b>받았다면 ",
			"ENG":"If you received <b>[Stimulation]</b> {amount} or more times {time}, ",
		},
		"이벤트자극받음이하":{
			"KOR":"{time} {actor}[이/가] {amount} 이하 <b>[자극]</b>받았다면 ",
			"ENG":"If {actor} received <b>[Stimulation]</b> {amount} or fewer times {time}, ",
		},
		"이벤트자극받음자신이하":{
			"KOR":"{time} {amount} 이하 <b>[자극]</b>받았다면 ",
			"ENG":"If you received <b>[Stimulation]</b> {amount} or fewer times {time}, ",
		},
		"이벤트자극받음불일치":{
			"KOR":"{time} {actor}[이/가] {amount} <b>[자극]</b>받지 않았다면 ",
			"ENG":"If {actor} did not receive <b>[Stimulation]</b> exactly {amount} times {time}, ",
		},
		"이벤트자극받음자신불일치":{
			"KOR":"{time} {amount} <b>[자극]</b>받지 않았다면 ",
			"ENG":"If you did not receive <b>[Stimulation]</b> exactly {amount} times {time}, ",
		},

		"이벤트절정":{
			"KOR":"{time} {actor}[이/가] <b>절정</b>했다면 ",
			"ENG":"If {actor} had an <b>Orgasm</b> {time}, ",
		},
		"이벤트절정자신":{
			"KOR":"{time} <b>절정</b>했다면 ",
			"ENG":"If you had an <b>Orgasm</b> {time}, ",
		},
		"이벤트절정부정":{
			"KOR":"{time} {actor}[이/가] <b>절정</b>하지 않았다면 ",
			"ENG":"If {actor} did not have an <b>Orgasm</b> {time}, ",
		},
		"이벤트절정자신부정":{
			"KOR":"{time} <b>절정</b>하지 않았다면 ",
			"ENG":"If you did not have an <b>Orgasm</b> {time}, ",
		},
		"이벤트절정일치":{
			"KOR":"{time} {actor}[이/가] 정확히 {amount} <b>절정</b>했다면 ",
			"ENG":"If {actor} had an <b>Orgasm</b> exactly {amount} times {time}, ",
		},
		"이벤트절정자신일치":{
			"KOR":"{time} 정확히 {amount} <b>절정</b>했다면 ",
			"ENG":"If you had an <b>Orgasm</b> exactly {amount} times {time}, ",
		},
		"이벤트절정초과":{
			"KOR":"{time} {actor}[이/가] {amount} 보다 많이 <b>절정</b>했다면 ",
			"ENG":"If {actor} had an <b>Orgasm</b> more than {amount} times {time}, ",
		},
		"이벤트절정자신초과":{
			"KOR":"{time} {amount} 보다 많이 <b>절정</b>했다면 ",
			"ENG":"If you had an <b>Orgasm</b> more than {amount} times {time}, ",
		},
		"이벤트절정미만":{
			"KOR":"{time} {actor}[이/가] {amount} 보다 적게 <b>절정</b>했다면 ",
			"ENG":"If {actor} had an <b>Orgasm</b> fewer than {amount} times {time}, ",
		},
		"이벤트절정자신미만":{
			"KOR":"{time} {amount} 보다 적게 <b>절정</b>했다면 ",
			"ENG":"If you had an <b>Orgasm</b> fewer than {amount} times {time}, ",
		},
		"이벤트절정이상":{
			"KOR":"{time} {actor}[이/가] {amount} 이상 <b>절정</b>했다면 ",
			"ENG":"If {actor} had an <b>Orgasm</b> {amount} or more times {time}, ",
		},
		"이벤트절정자신이상":{
			"KOR":"{time} {amount} 이상 <b>절정</b>했다면 ",
			"ENG":"If you had an <b>Orgasm</b> {amount} or more times {time}, ",
		},
		"이벤트절정이하":{
			"KOR":"{time} {actor}[이/가] {amount} 이하 <b>절정</b>했다면 ",
			"ENG":"If {actor} had an <b>Orgasm</b> {amount} or fewer times {time}, ",
		},
		"이벤트절정자신이하":{
			"KOR":"{time} {amount} 이하 <b>절정</b>했다면 ",
			"ENG":"If you had an <b>Orgasm</b> {amount} or fewer times {time}, ",
		},
		"이벤트절정불일치":{
			"KOR":"{time} {actor}[이/가] {amount} <b>절정</b>하지 않았다면 ",
			"ENG":"If {actor} did not have an <b>Orgasm</b> exactly {amount} times {time}, ",
		},
		"이벤트절정자신불일치":{
			"KOR":"{time} {amount} <b>절정</b>하지 않았다면 ",
			"ENG":"If you did not have an <b>Orgasm</b> exactly {amount} times {time}, ",
		},

		"이벤트흥분증가":{
			"KOR":"{target}[이/가] 증가했다면 ",
			"ENG":"If {target} was gained {time}, ",
		},
		"이벤트흥분증가부정":{
			"KOR":"{target}[이/가] 증가하지 않았다면 ",
			"ENG":"If {target} was not gained {time}, ",
		},
		"이벤트흥분증가일치":{
			"KOR":"{target}[이/가] 정확히 {amount} 증가했다면 ",
			"ENG":"If exactly {amount} {target} was gained {time}, ",
		},
		"이벤트흥분증가초과":{
			"KOR":"{target}[이/가] {amount}보다 많이 증가했다면 ",
			"ENG":"If more than {amount} {target} was gained {time}, ",
		},
		"이벤트흥분증가미만":{
			"KOR":"{target}[이/가] {amount}보다 적게 증가했다면 ",
			"ENG":"If less than {amount} {target} was gained {time}, ",
		},
		"이벤트흥분증가이상":{
			"KOR":"{target}[이/가] {amount} 이상 증가했다면 ",
			"ENG":"If {amount} or more {target} was gained {time}, ",
		},
		"이벤트흥분증가이하":{
			"KOR":"{target}[이/가] {amount} 이하 증가했다면 ",
			"ENG":"If {amount} or less {target} was gained {time}, ",
		},
		"이벤트흥분증가불일치":{
			"KOR":"{target}[이/가] 정확히 {amount} 증가하지 않았다면 ",
			"ENG":"If not exactly {amount} {target} was gained {time}, ",
		},

		"이벤트흥분회복":{
			"KOR":"{target}[이/가] 회복됐다면 ",
			"ENG":"If {target} was recovered {time}, ",
		},
		"이벤트흥분회복부정":{
			"KOR":"{target}[이/가] 회복되지 않았다면 ",
			"ENG":"If {target} was not recovered {time}, ",
		},
		"이벤트흥분회복일치":{
			"KOR":"{target}[이/가] 정확히 {amount} 회복됐다면 ",
			"ENG":"If exactly {amount} {target} was recovered {time}, ",
		},
		"이벤트흥분회복초과":{
			"KOR":"{target}[이/가] {amount}보다 많이 회복됐다면 ",
			"ENG":"If more than {amount} {target} was recovered {time}, ",
		},
		"이벤트흥분회복미만":{
			"KOR":"{target}[이/가] {amount}보다 적게 회복됐다면 ",
			"ENG":"If less than {amount} {target} was recovered {time}, ",
		},
		"이벤트흥분회복이상":{
			"KOR":"{target}[이/가] {amount} 이상 회복됐다면 ",
			"ENG":"If {amount} or more {target} was recovered {time}, ",
		},
		"이벤트흥분회복이하":{
			"KOR":"{target}[이/가] {amount} 이하 회복됐다면 ",
			"ENG":"If {amount} or less {target} was recovered {time}, ",
		},
		"이벤트흥분회복불일치":{
			"KOR":"{target}[이/가] 정확히 {amount} 회복되지 않았다면 ",
			"ENG":"If not exactly {amount} {target} was recovered {time}, ",
		},

		"이벤트횟수":{
			"KOR":"{target}[이/가] 있다면 ",
			"ENG":"If you have {target}, ",
		},
		"이벤트횟수부정":{
			"KOR":"{target}[이/가] 없다면 ",
			"ENG":"If you do not have {target}, ",
		},
		"이벤트횟수일치":{
			"KOR":"{target}[이/가] 정확히 {amount}[이라/라]면 ",
			"ENG":"If you have exactly {amount} {target}, ",
		},
		"이벤트횟수초과":{
			"KOR":"{target}[이/가] {amount}보다 많다면 ",
			"ENG":"If you have more than {amount} {target}, ",
		},
		"이벤트횟수미만":{
			"KOR":"{target}[이/가] {amount}보다 적다면 ",
			"ENG":"If you have less than {amount} {target}, ",
		},
		"이벤트횟수이상":{
			"KOR":"{target}[이/가] {amount} 이상이라면 ",
			"ENG":"If you have {amount} or more {target}, ",
		},
		"이벤트횟수이하":{
			"KOR":"{target}[이/가] {amount} 이하라면 ",
			"ENG":"If you have {amount} or less {target}, ",
		},
		"이벤트횟수불일치":{
			"KOR":"{target}[이/가] {amount}이 아니라면 ",
			"ENG":"If you do not have exactly {amount} {target}, ",
		},

		"이벤트회피":{
			"KOR":"{time} {actor}[이/가] 회피했다면 ",
			"ENG":"If {actor} evaded {time}, ",
		},
		"이벤트회피자신":{
			"KOR":"{time} 회피했다면 ",
			"ENG":"If you evaded {time}, ",
		},
		"이벤트회피부정":{
			"KOR":"{time} {actor}[이/가] 회피하지 않았다면 ",
			"ENG":"If {actor} did not evade {time}, ",
		},
		"이벤트회피자신부정":{
			"KOR":"{time} 회피하지 않았다면 ",
			"ENG":"If you did not evade {time}, ",
		},
		"이벤트회피일치":{
			"KOR":"{time} {actor}[이/가] 정확히 {amount} 회피했다면 ",
			"ENG":"If {actor} evaded exactly {amount} times {time}, ",
		},
		"이벤트회피자신일치":{
			"KOR":"{time} 정확히 {amount} 회피했다면 ",
			"ENG":"If you evaded exactly {amount} times {time}, ",
		},
		"이벤트회피초과":{
			"KOR":"{time} {actor}[이/가] {amount} 보다 많이 회피했다면 ",
			"ENG":"If {actor} evaded more than {amount} times {time}, ",
		},
		"이벤트회피자신초과":{
			"KOR":"{time} {amount} 보다 많이 회피했다면 ",
			"ENG":"If you evaded more than {amount} times {time}, ",
		},
		"이벤트회피미만":{
			"KOR":"{time} {actor}[이/가] {amount} 보다 적게 회피했다면 ",
			"ENG":"If {actor} evaded fewer than {amount} times {time}, ",
		},
		"이벤트회피자신미만":{
			"KOR":"{time} {amount} 보다 적게 회피했다면 ",
			"ENG":"If you evaded fewer than {amount} times {time}, ",
		},
		"이벤트회피이상":{
			"KOR":"{time} {actor}[이/가] {amount} 이상 회피했다면 ",
			"ENG":"If {actor} evaded {amount} or more times {time}, ",
		},
		"이벤트회피자신이상":{
			"KOR":"{time} {amount} 이상 회피했다면 ",
			"ENG":"If you evaded {amount} or more times {time}, ",
		},
		"이벤트회피이하":{
			"KOR":"{time} {actor}[이/가] {amount} 이하 회피했다면 ",
			"ENG":"If {actor} evaded {amount} or fewer times {time}, ",
		},
		"이벤트회피자신이하":{
			"KOR":"{time} {amount} 이하 회피했다면 ",
			"ENG":"If you evaded {amount} or fewer times {time}, ",
		},
		"이벤트회피불일치":{
			"KOR":"{time} {actor}[이/가] {amount} 회피하지 않았다면 ",
			"ENG":"If {actor} did not evade exactly {amount} times {time}, ",
		},
		"이벤트회피자신불일치":{
			"KOR":"{time} {amount} 회피하지 않았다면 ",
			"ENG":"If you did not evade exactly {amount} times {time}, ",
		},

		"원본일치":{
			"KOR":"원본이 {card}[이라/라]면 ",
			"ENG":"If the original card is {card}, ",
		},
		"원본불일치":{
			"KOR":"원본이 {card}[이/가] 아니라면 ",
			"ENG":"If the original card is not {card}, ",
		},

		"강화존재":{
			"KOR":"강화 됐다면 ",
			"ENG":"If upgraded, ",
		},
		"강화부정":{
			"KOR":"강화되지 않았다면 ",
			"ENG":"If not upgraded, ",
		},
		"강화일치":{
			"KOR":"정확히 {amount}번 강화됐다면 ",
			"ENG":"If upgraded exactly {amount} times, ",
		},
		"강화초과":{
			"KOR":"{amount}번보다 많이 강화됐다면 ",
			"ENG":"If upgraded more than {amount} times, ",
		},
		"강화미만":{
			"KOR":"{amount}번보다 적게 강화됐다면 ",
			"ENG":"If upgraded fewer than {amount} times, ",
		},
		"강화이상":{
			"KOR":"{amount}번 이상 강화됐다면 ",
			"ENG":"If upgraded {amount} or more times, ",
		},
		"강화이하":{
			"KOR":"{amount}번 이하 강화됐다면 ",
			"ENG":"If upgraded {amount} or fewer times, ",
		},
		"강화불일치":{
			"KOR":"정확히 {amount}번 강화되지 않았다면 ",
			"ENG":"If not upgraded exactly {amount} times, ",
		},
	},

	"effect":{
		"자극":{
			"KOR":"{repeat1} {target}[을/를] {repeat2} <b>[자극]</b>한다.",
			"ENG":"Inflict <b>[Stimulation]</b> on {repeat1} {target} {repeat2} times.",
		},
		"절정":{
			"KOR":"{repeat1} {target}[을/를] {repeat2} <b>절정</b>시킨다.",
			"ENG":"Cause {repeat1} {target} to <b>Orgasm</b> {repeat2} times.",
		},
		"상태부여이름":{
			"KOR":"{target}에게 {state}[을/를] {repeat} 부여한다.",
			"ENG":"Apply {repeat} <b>{state}</b> to {target}.",
		},
		"헤더":{
			"KOR":"<b>{value}:</b> ",
			"ENG":"<b>{value}:</b> ",
		},
		"헤더값":{
			"KOR":"<b>{value}({amount}):</b> ",
			"ENG":"<b>{value}({amount}):</b> ",
		},
		"클라이맥스":{
			"KOR":"<span style=\"color: gray;\">클라이맥스</span>",
			"ENG":"<span style=\"color: gray;\">Climax</span>",
		},
		"자동시전":{
			"KOR":"<span style=\"color: gray;\">자동 시전 ({amount})</span>",
			"ENG":"<span style=\"color: gray;\">Auto Cast ({amount})</span>",
		},
		"영구시전":{
			"KOR":"<span style=\"color: gray;\">자동 시전 (영구)</span>",
			"ENG":"<span style=\"color: gray;\">Auto Cast (Infinite)</span>",
		},
		"시전":{
			"KOR":"<span style=\"color: gray;\">({amount}번 사용 가능)</span>",
			"ENG":"<span style=\"color: gray;\">({amount} uses)</span>",
		},
		"무한시전":{
			"KOR":"<span style=\"color: gray;\">(영구적으로 사용 가능)</span>",
			"ENG":"<span style=\"color: gray;\">(Infinite uses)</span>",
		},
		"반복":{
			"KOR":"{repeat} 반복한다.",
			"ENG":"Repeat {repeat} times.",
		},

		"증가숫자":{
			"KOR":"{repeat} {value}&nbsp;<b>+{amount}</b>.",
			"ENG":"{repeat} {value}&nbsp;<b>+{amount}</b>.",
		},
		"감소숫자":{
			"KOR":"{repeat} {value}&nbsp;<b>{amount}</b>.",
			"ENG":"{repeat} {value}&nbsp;<b>{amount}</b>.",
		},
		"증가값":{
			"KOR":"{amount}만큼 {value}[을/를] 증가시킨다.",
			"ENG":"Increase {value} by {amount}.",
		},
		"감소값":{
			"KOR":"{amount}만큼 {value}[을/를] 감소시킨다.",
			"ENG":"Decrease {value} by {amount}.",
		},
		"배수숫자":{
			"KOR":"{value}[을/를] {amount}배로 만든다.",
			"ENG":"Multiply {value} by {amount}.",
		},
		"지정숫자":{
			"KOR":"{value}[을/를] {amount}[으로/로] 만든다.",
			"ENG":"Set {value} to {amount}.",
		},
		"지정값":{
			"KOR":"{value}[을/를] {amount}[과/와] 같게 만든다.",
			"ENG":"Make {value} equal to {amount}.",
		},

		"체위삭제":{
			"KOR":"<b>체위</b>를 없앤다.",
			"ENG":"Remove the <b>Position</b>.",
		},

		"체위부여":{
			"KOR":"<span style='color: gray;''><i>(<b>체위</b>를 다음으로 교체한다.)</i></span>",
			"ENG":"<span style='color: gray;''><i>(Changes to the following <b>Position</b>.)</i></span>",
		},

		"덱카드획득":{
			"KOR":"{card}[을/를] {repeat} 얻는다.",
			"ENG":"Gain {repeat} {card}.",
		},
		"덱카드선택획득":{
			"KOR":"{card}[을/를] 선택해 그 카드의 복사본을 {repeat} 얻는다.",
			"ENG":"Choose a {card} and gain {repeat} copies of it.",
		},
		"덱카드추가":{
			"KOR":"{target}에게 {card}[을/를] {repeat} 준다.",
			"ENG":"Give {target} {repeat} {card}.",
		},


		"패배":{
			"KOR":"결투에서 패배한다.",
			"ENG":"Lose the duel.",
		},
		"승리":{
			"KOR":"결투에서 승리한다.",
			"ENG":"Win the duel.",
		},

		"추가카드":{
			"KOR":"{target}의 <b>추가 카드 +{amount}</b>.",
			"ENG":"{target}'s <b>Additional Cards +{amount}</b>.",
		},
		"추가카드자신":{
			"KOR":"<b>추가 카드 +{amount}</b>.",
			"ENG":"<b>Additional Cards +{amount}</b>.",
		},

		"버리기":{
			"KOR":"{card}[을/를] 버린다.",
			"ENG":"Discard {card}.",
		},
		"선택버리기":{
			"KOR":"{card}[을/를] 선택해 버린다.",
			"ENG":"Choose a {card} to discard.",
		},
		"제거하기":{
			"KOR":"{state}[을/를] 제거한다.",
			"ENG":"Remove {state}.",
		},
		"사용":{
			"KOR":"{card}의 효과를 {repeat} 발동한다.",
			"ENG":"Activate the effect of {card} {repeat} times.",
		},
		"선택사용":{
			"KOR":"{select}를 선택해 {card}의 효과를 {repeat} 발동한다.",
			"ENG":"Choose {select} to activate its effect {repeat} times.",
		},
		"재귀효과추가":{
			"KOR":"\"{effect}\" 효과를 {repeat} 얻는다.",
			"ENG":"Gain the effect \"{effect}\" {repeat} times.",
		},
		"선택효과추가":{
			"KOR":"{card}[을/를] 선택해 \"{effect}\" 효과를 {repeat} 추가한다.",
			"ENG":"Choose a {card} and add the effect \"{effect}\" to it {repeat} times.",
		},
		"효과추가":{
			"KOR":"{card}에 \"{effect}\" 효과를 {repeat} 추가한다.",
			"ENG":"Add the effect \"{effect}\" to {card} {repeat} times.",
		},
		"특별한효과추가":{
			"KOR":"{card}에 {effect} 효과를 {repeat} 추가한다.",
			"ENG":"Add the {effect} effect to {card} {repeat} times.",
		},

		"독부여무작위":{
			"KOR":"{target}에게 무작위 독을 {repeat} 부여한다.<br>이미 가지고 있다면 강화한다.",
			"ENG":"Apply a random Poison to {target} {repeat} times.<br>If they already have it, upgrade it instead.",
		},
		"독부여지정":{
			"KOR":"{target}에게 {poison}[을/를] {repeat} 부여한다.<br><span style=\"color: gray;\"><i>(이미 가지고 있다면 강화한다.)</i></span>",
			"ENG":"Apply {repeat} {poison} to {target}.<br><span style=\"color: gray;\"><i>(If they already have it, upgrade it instead.)</i></span>",
		},

		"독추가":{
			"KOR":"{value}[을/를] {repeat} 독주머니에 추가한다.",
			"ENG":"Add {value} to the Poison Pouch {repeat} times.",
		},

		"카운트감소숫자":{
			"KOR":"{repeat} <b>카운트&nbsp;-{amount}</b>.",
			"ENG":"{repeat} <b>Countdown&nbsp;-{amount}</b>.",
		},
		"카운트감소값":{
			"KOR":"카운트 값을 {repeat} {amount} 감소시킨다.",
			"ENG":"Decrease Countdown by {amount}, {repeat} times.",
		},
		"카운트지정감소숫자":{
			"KOR":"{repeat} {target}의 <b>카운트&nbsp;-{amount}</b>.",
			"ENG":"{repeat} {target}'s <b>Countdown&nbsp;-{amount}</b>.",
		},
		"카운트지정감소값":{
			"KOR":"{target}의 카운트 값을 {repeat} {amount} 감소시킨다.",
			"ENG":"Decrease {target}'s Countdown by {amount}, {repeat} times.",
		},

		"반복발동":{
			"KOR":"다음으로 사용하는 {target}의 카드의 효과가 {amount}번 더 발동한다.",
			"ENG":"The effect of the next card {target} plays activates {amount} additional times.",
		},
		"반복발동자신":{
			"KOR":"다음으로 사용하는 카드의 효과가 {amount}번 더 발동한다.",
			"ENG":"The effect of the next card you play activates {amount} additional times.",
		},
		"복구":{
			"KOR":"{target}[을/를] 돌려준다.",
			"ENG":"Return {target}.",
		},
		"변형":{
			"KOR":"{target}[을/를] {object}[으로/로] <b>변형</b>한다.",
			"ENG":"<b>Transform</b> {target} into {object}.",
		},
		"선택변형":{
			"KOR":"{card}[을/를] 선택해 {object}[으로/로] <b>변형</b>한다.",
			"ENG":"Choose a {card} to <b>Transform</b> into {object}.",
		},
		"재귀변형":{
			"KOR":"{object}[으로/로] <b>변형</b>된다.",
			"ENG":"<b>Transform</b> into {object}.",
		},
		"면역":{
			"KOR":"{actor}의 <b>흥분</b>이 증가하지 않는다.",
			"ENG":"{actor}'s <b>Excitement</b> cannot be increased.",
		},
		"면역자신":{
			"KOR":"<b>흥분</b>이 증가하지 않는다.",
			"ENG":"<b>Excitement</b> cannot be increased.",
		},

		"카드사용불가":{
			"KOR":"{actor}[은/는] 카드를 낼 수 없다.",
			"ENG":"{actor} cannot play cards.",
		},
		"카드사용불가자신":{
			"KOR":"카드를 낼 수 없다.",
			"ENG":"Cannot play cards.",
		},
		"공격사용불가":{
			"KOR":"{actor}[은/는] 공격 카드를 낼 수 없다.",
			"ENG":"{actor} cannot play Attack cards.",
		},
		"공격사용불가자신":{
			"KOR":"공격 카드를 낼 수 없다.",
			"ENG":"Cannot play Attack cards.",
		},
		"보조사용불가":{
			"KOR":"{actor}[은/는] 보조 카드를 낼 수 없다.",
			"ENG":"{actor} cannot play Support cards.",
		},
		"보조사용불가자신":{
			"KOR":"보조 카드를 낼 수 없다.",
			"ENG":"Cannot play Support cards.",
		},
		"체위사용불가":{
			"KOR":"{actor}[은/는] 체위 카드를 낼 수 없다.",
			"ENG":"{actor} cannot play Position cards.",
		},
		"체위사용불가자신":{
			"KOR":"체위 카드를 낼 수 없다.",
			"ENG":"Cannot play Position cards.",
		},
		"탈의사용불가":{
			"KOR":"{actor}[은/는] 탈의 카드를 낼 수 없다.",
			"ENG":"{actor} cannot play Stripping cards.",
		},
		"탈의사용불가자신":{
			"KOR":"탈의 카드를 낼 수 없다.",
			"ENG":"Cannot play Stripping cards.",
		},
		"패널티사용불가":{
			"KOR":"{actor}[은/는] 패널티 카드를 낼 수 없다.",
			"ENG":"{actor} cannot play Penalty cards.",
		},
		"패널티사용불가자신":{
			"KOR":"패널티 카드를 낼 수 없다.",
			"ENG":"Cannot play Penalty cards.",
		},
		"공격강제사용":{
			"KOR":"{actor}[은/는] 공격 카드 이외에는 낼 수 없다.",
			"ENG":"{actor} can only play Attack cards.",
		},
		"공격강제사용자신":{
			"KOR":"공격 카드 이외에는 낼 수 없다.",
			"ENG":"Can only play Attack cards.",
		},
		"보조강제사용":{
			"KOR":"{actor}[은/는] 보조 카드 이외에는 낼 수 없다.",
			"ENG":"{actor} can only play Support cards.",
		},
		"보조강제사용자신":{
			"KOR":"보조 카드 이외에는 낼 수 없다.",
			"ENG":"Can only play Support cards.",
		},
		"체위강제사용":{
			"KOR":"{actor}[은/는] 체위 카드 이외에는 낼 수 없다.",
			"ENG":"{actor} can only play Position cards.",
		},
		"체위강제사용자신":{
			"KOR":"체위 카드 이외에는 낼 수 없다.",
			"ENG":"Can only play Position cards.",
		},
		"탈의강제사용":{
			"KOR":"{actor}[은/는] 탈의 카드 이외에는 낼 수 없다.",
			"ENG":"{actor} can only play Stripping cards.",
		},
		"탈의강제사용자신":{
			"KOR":"탈의 카드 이외에는 낼 수 없다.",
			"ENG":"Can only play Stripping cards.",
		},
		"패널티강제사용":{
			"KOR":"{actor}[은/는] 패널티 카드 이외에는 낼 수 없다.",
			"ENG":"{actor} can only play Penalty cards.",
		},
		"패널티강제사용자신":{
			"KOR":"패널티 카드 이외에는 낼 수 없다.",
			"ENG":"Can only play Penalty cards.",
		},
		"결합물강제사용":{
			"KOR":"{actor}[은/는] 결합물 카드 이외에는 낼 수 없다.",
			"ENG":"{actor} can only play Combined cards.",
		},
		"결합물강제사용자신":{
			"KOR":"결합물 카드 이외에는 낼 수 없다.",
			"ENG":"Can only play Combined cards.",
		},
		"결속강제사용":{
			"KOR":"{actor}[은/는] 결속된 카드 이외에는 낼 수 없다.",
			"ENG":"{actor} can only play Bound cards.",
		},
		"결속강제사용자신":{
			"KOR":"결속된 카드 이외에는 낼 수 없다.",
			"ENG":"Can only play Bound cards.",
		},

		"최대라운드":{
			"KOR":"<b>최대 라운드 {amount}</b>",
			"ENG":"<b>Max Rounds: {amount}</b>",
		},

		"최저음란":{
			"KOR":"<b>음란</b>의 최저값이 {amount}[이/가] 된다.",
			"ENG":"The minimum value of <b>Lewdness</b> becomes {amount}.",
		},
		"최대음란":{
			"KOR":"<b>음란</b>의 최대값이 {amount}[이/가] 된다.",
			"ENG":"The maximum value of <b>Lewdness</b> becomes {amount}.",
		},
		"최저발정":{
			"KOR":"<b>발정</b>의 최저값이 {amount}[이/가] 된다.",
			"ENG":"The minimum value of <b>Heat</b> becomes {amount}.",
		},
		"최대발정":{
			"KOR":"<b>발정</b>의 최대값이 {amount}[이/가] 된다.",
			"ENG":"The maximum value of <b>Heat</b> becomes {amount}.",
		},

		"추가증가":{
			"KOR":"{stat}[이/가] 증가할 때 추가로 +{amount} 증가한다.",
			"ENG":"When {stat} increases, it increases by an additional +{amount}.",
		},
		"추가감소":{
			"KOR":"{stat}[이/가] 감소할 때 추가로 -{amount} 감소한다.",
			"ENG":"When {stat} decreases, it decreases by an additional -{amount}.",
		},

		"강탈":{
			"KOR":"{cards}[을/를] 뺏어온다. <span style=\"color: gray;\"><i>(효과의 <b>음란</b>과 <b>발정</b>이 바뀐채로.)</i></span>",
			"ENG":"Steal {cards}. <span style=\"color: gray;\"><i>(The card's <b>Lewdness</b> and <b>Heat</b> effects are swapped.)</i></span>",
		},
		"챔피언비활성화":{
			"KOR":"챔피언의 카드가 효과를 잃는다.",
			"ENG":"The Champion's cards lose their effects.",
		},
		"챔피언공격비활성화":{
			"KOR":"챔피언의 공격 카드가 효과를 잃는다.",
			"ENG":"The Champion's Attack cards lose their effects.",
		},
		"탈의비활성화":{
			"KOR":"탈의 카드가 효과를 잃는다.",
			"ENG":"Stripping cards lose their effects.",
		},
		"패널티비활성화":{
			"KOR":"패널티 카드가 효과를 잃는다.",
			"ENG":"Penalty cards lose their effects.",
		},
		"독비활성화":{
			"KOR":"독이 효과를 잃는다.",
			"ENG":"Poisons lose their effects.",
		},
		"마술비활성화":{
			"KOR":"마술 카드가 효과를 잃는다.",
			"ENG":"Magic cards lose their effects.",
		},

		"시작욕망":{
			"KOR":"<b>욕망</b>을 {amount} 얻고 시작한다.",
			"ENG":"Start with {amount} <b>Lust</b>.",
		},
		"욕망금지":{
			"KOR":"<b>욕망</b>을 더 이상 얻지 못한다.",
			"ENG":"Cannot gain <b>Lust</b>.",
		},
		"욕망제한":{
			"KOR":"<b>욕망</b>이 최대 {amount}까지만 쌓인다.",
			"ENG":"<b>Lust</b> cannot exceed {amount}.",
		},
		"젖음금지":{
			"KOR":"<b>젖음</b>을 얻지 못한다.",
			"ENG":"Cannot gain <b>Wetness</b>.",
		},
		"젖음제한":{
			"KOR":"<b>욕망</b>이 최대 {amount}까지만 쌓인다.",
			"ENG":"<b>Lust</b> cannot exceed {amount}.",
		},
		"젖음금지":{
			"KOR":"<b>젖음</b>을 얻지 못한다.",
			"ENG":"Cannot gain <b>Wetness</b>.",
		},
		"회피금지":{
			"KOR":"회피할 수 없다.",
			"ENG":"Cannot evade.",
		},
		"시작감각차단":{
			"KOR":"<b>감각차단</b>을 {amount} 얻고 시작한다.",
			"ENG":"Start with {amount} <b>Numbness</b>.",
		},
		"감각차단금지":{
			"KOR":"<b>감각차단</b>을 더 이상 얻지 못한다.",
			"ENG":"Cannot gain <b>Numbness</b>.",
		},
		"감각차단제한":{
			"KOR":"<b>감각차단</b>이 최대 {amount}까지만 쌓인다.",
			"ENG":"<b>Numbness</b> cannot exceed {amount}.",
		},
		"시작타락":{
			"KOR":"<b>타락</b>을 {amount} 얻고 시작한다.",
			"ENG":"Start with {amount} <b>Corruption</b>.",
		},
		"타락금지":{
			"KOR":"<b>타락</b>을 더 이상 얻지 못한다.",
			"ENG":"Cannot gain <b>Corruption</b>.",
		},
		"타락제한":{
			"KOR":"<b>타락</b>이 최대 {amount}까지만 쌓인다.",
			"ENG":"<b>Corruption</b> cannot exceed {amount}.",
		},

		"덱포함필수":{
			"KOR":"덱에 {card}[을/를] {amount}장 넣어야 한다.",
			"ENG":"Your deck must contain {amount} {card}.",
		},
		"덱포함금지":{
			"KOR":"덱에 {card}[을/를] 넣을 수 없다.",
			"ENG":"Cannot add {card} to your deck.",
		},
		"덱포함수량":{
			"KOR":"덱에 {card}[을/를] {amount}장보다 많이 넣을 수 없다.",
			"ENG":"Cannot have more than {amount} {card} in your deck.",
		},

		"최대사용":{
			"KOR":"한 라운드에 낼 수 있는 카드의 최대 제한이 {amount}장이 된다.",
			"ENG":"The maximum number of cards you can play per round becomes {amount}.",
		},

		"절정금지":{
			"KOR":"{actor}[은/는] <b>절정</b>하지 않는다.",
			"ENG":"{actor} cannot have an <b>Orgasm</b>.",
		},
		"절정금지자신":{
			"KOR":"<b>절정</b>하지 않는다.",
			"ENG":"Cannot have an <b>Orgasm</b>.",
		},
		"억압":{
			"KOR":"{actor}[은/는] <b>흥분</b>으로는 <b>절정</b>하지 않는다.",
			"ENG":"{actor} cannot have an <b>Orgasm</b> from <b>Excitement</b>.",
		},
		"억압자신":{
			"KOR":"<b>흥분</b>으로는 <b>절정</b>하지 않는다.",
			"ENG":"Cannot have an <b>Orgasm</b> from <b>Excitement</b>.",
		},
		"무감":{
			"KOR":"{actor}[은/는] <b>흥분</b> 외의 수단으로 <b>절정</b>하지 않는다.",
			"ENG":"{actor} can only have an <b>Orgasm</b> from <b>Excitement</b>.",
		},
		"무감자신":{
			"KOR":"<b>흥분</b> 외의 수단으로 <b>절정</b>하지 않는다.",
			"ENG":"Can only have an <b>Orgasm</b> from <b>Excitement</b>.",
		},
		"정기흡수":{
			"KOR":"{actor}[이/가] <b>정기 흡수</b>를 얻는다",
			"ENG":"{actor} gains <b>Essence Drain</b>.",
		},
		"정기흡수자신":{
			"KOR":"<b>정기 흡수</b>를 얻는다.",
			"ENG":"Gain <b>Essence Drain</b>.",
		},

		"스택":{
			"KOR":"{card}[을/를] {amount}번 강화한다.",
			"ENG":"Upgrade {card} {amount} times.",
		},
		"스택초기화":{
			"KOR":"{card}의 강화를 초기화한다.",
			"ENG":"Reset {card}'s upgrades.",
		},

		"마술교체":{
			"KOR":"{slot} 슬롯을 {card}[으로/로] 교체한다.",
			"ENG":"Replace the {slot} slot with {card}.",
		},

		"결합":{
			"KOR":"{target}[을/를] 하나로 <b>결합</b>한다.",
			"ENG":"<b>Combine</b> {target} into one card.",
		},
		"선택결합":{
			"KOR":"{card}[을/를] 선택해 하나로 <b>결합</b>한다.",
			"ENG":"Choose {card} to <b>Combine</b> into one card.",
		},
		
		"결속":{
			"KOR":"{target}에 {card}[을/를] 결속한다.",
			"ENG":"Bind {card} to {target}.",
		},
		"선택결속":{
			"KOR":"{target}[을/를] 선택해 {card}[을/를] 결속한다.",
			"ENG":"Choose a {target} to bind {card} to.",
		},
		"결속됨":{
			"KOR":"<span style=\"color: gray;\">(<b>[{card}]</b>[과/와] 결속됨.)</span>",
			"ENG":"<span style=\"color: gray;\">(Bound with <b>[{card}]</b>.)</span>",
		},

		"치료금지":{
			"KOR":"{actor}의 <b>흥분</b>이 회복되지 않는다.",
			"ENG":"{actor}'s <b>Excitement</b> cannot be recovered.",
		},
		"치료금지자신":{
			"KOR":"<b>흥분</b>이 회복되지 않는다.",
			"ENG":"<b>Excitement</b> cannot be recovered.",
		},
	},

	"special":{
		"specialA01":{
			"KOR":"<b>발정</b>이 일시적으로 감소할 때 동일한 만큼 <b>음란</b>이 일시적으로 증가한다.",
			"ENG":"When <b>Heat</b> is temporarily decreased, <b>Lewdness</b> is temporarily increased by the same amount.",
		},
		"specialA02":{
			"KOR":"독주머니의 제조 카드를 개조한다.<br>한 번에 두 번 부여되지만, 2라운드 동안만 지속된다.",
			"ENG":"Modify Crafted cards in the Poison Pouch.<br>They apply twice at once, but only last for 2 rounds.",
		},
		"specialA04":{
			"KOR":"제조 카드와 <b>[조르기]</b>를 사용할 수 없다.",
			"ENG":"Cannot play Crafted cards or <b>[Pester]</b>.",
		},
		"specialA05":{
			"KOR":"무작위 초월 카드를 얻을 준비를 {repeat} 한다. ({trace}/3)",
			"ENG":"Prepare to gain a random Transcendence card {repeat} times. ({trace}/3)",
		},
		"specialA06":{
			"KOR":"체위의 효과가 두 배가 된다.",
			"ENG":"Position effects are doubled.",
		},
		"specialA07":{
			"KOR":"점차 <b>[의식불명]</b>에 빠진다. ({stack}/{maxStack})",
			"ENG":"Gradually fall <b>[Unconscious]</b>. ({stack}/{maxStack})",
		},
		"specialA08":{
			"KOR":"무언가 도움을 준다.<br><br>3종류의 도움을 준 뒤, 집착이 시작된다. <span style=\"color: gray;\">({count}번 남음)</span>",
			"ENG":"Something offers help.<br><br>After providing 3 types of help, an obsession begins. <span style=\"color: gray;\">({count} left)</span>",
		},
		"specialA09":{
			"KOR":"모든 마력탄을 {repeat} 강화한다.",
			"ENG":"Upgrade all Magic Bullets {repeat} times.",
		},
		"specialA10":{
			"KOR":"자신의 <b>흥분</b>을 회복하는 효과들이 대신 상대의 <b>흥분</b>을 증가시킨다.",
			"ENG":"Effects that recover your <b>Excitement</b> increase the opponent's <b>Excitement</b> instead.",
		},
		"specialA11":{
			"KOR":"무작위 정수 카드를 얻을 때 시작 덱에 있던 것을 얻는다.",
			"ENG":"When gaining a random Essence card, you gain one that was in your starting deck.",
		},
		"specialA12":{
			"KOR":"매 라운드 <b>타락</b>이 증가하는 대신 감소한다.",
			"ENG":"Each round, <b>Corruption</b> decreases instead of increasing.",
		},
		"specialA13":{
			"KOR":"1라운드에 공격 카드를 사용할 수 있다.",
			"ENG":"Can play Attack cards on round 1.",
		},
		"specialA14":{
			"KOR":"욕망을 두 배로 얻는다.",
			"ENG":"Gain double Lust.",
		},
		"specialA15":{
			"KOR":"덱의 치유사 체위들을 개선시킨다.",
			"ENG":"Improves the Healer Positions in your deck.",
		},
		"specialA16":{
			"KOR":"무작위 마도진 대신 지금 필요한 마도진을 얻는다.",
			"ENG":"Gain a needed Magic Circle instead of a random one.",
		},
		"specialA17":{
			"KOR":"카드를 변형하는 것으로 <b>감각차단</b>을 얻지 못한다.",
			"ENG":"Cannot gain <b>Numbness</b> from Transforming cards.",
		},
		"specialA18":{
			"KOR":"서막, 중막, 종막의 조건을 무작위로 결정한다.",
			"ENG":"The conditions for Prelude, Interlude, and Finale are randomized.",
		},
		"specialA19":{
			"KOR":"모든 <b>[심장 격동]</b>을 2번 강화한다.",
			"ENG":"Upgrade all <b>[Heart Throbs]</b> twice.",
		},
		"specialA20":{
			"KOR":"중립 공격 카드의 효과가 {value}번 더 발동한다.",
			"ENG":"Neutral Attack card effects activate {value} additional times.",
		},

		"specialV05":{
			"KOR":"소재로 사용된 정수 카드의 수",
			"ENG":"Number of Essence cards used as material",
		},
		"specialV06":{
			"KOR":"결투 동안 상대가 버리거나 변형하거나 결합한 카드의 수",
			"ENG":"Number of cards the opponent discarded, Transformed, or Combined during the duel",
		},
		"specialV07":{
			"KOR":"이번 라운드에 버렸던 카드 4장마다 한 번",
			"ENG":"Once for every 4 cards discarded this round",
		},
		"specialV08":{
			"KOR":"<b>[촉진 포자]</b>를 제외한 다른 포자들의 효과가 {amount} 증가한다.",
			"ENG":"The effects of other Spores, excluding <b>[Catalyst Spore]</b>, are increased by {amount}.",
		},
		"specialV08영구":{
			"KOR":"포자들의 효과가 영구적으로 {amount} 증가한다.",
			"ENG":"The effects of Spores are permanently increased by {amount}.",
		},
		"specialV09":{
			"KOR":"<b>[절명독]</b>을 제외한 모든 독의 중첩",
			"ENG":"Stacks of all Poisons except <b>[Lethal Poison]</b>",
		},
	}
}
