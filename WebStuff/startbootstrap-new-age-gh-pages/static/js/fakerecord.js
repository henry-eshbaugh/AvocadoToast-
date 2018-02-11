function sleepClassifier() { 
//Classify sleep acc records into Light, Deep and Rem
}

var record = {
	//stored data
	date		: new Date(2018, 2, 8),
	recordData	: [	{x: 1, y: 5.38108801203645},
					{x: 2, y: 5.13617061162582},
					{x: 3, y: 5.09662662304338},
					{x: 4, y: 5.30516164157148},
					{x: 5, y: 5.8238836498647},
					{x: 6, y: 5.627252866033},
					{x: 7, y: 5.2059327641563},
					{x: 8, y: 5.98018545803758},
					{x: 9, y: 5.43777428013329},
					{x: 10, y: 5.83519577423989},
					{x: 11, y: 5.53918044796104},
					{x: 12, y: 5.02512693318836},
					{x: 13, y: 5.00682427912703},
					{x: 14, y: 5.78608623851813},
					{x: 15, y: 5.44739285591646},
					{x: 16, y: 5.28873744940874},
					{x: 17, y: 5.86318026492444},
					{x: 18, y: 5.65622849511506},
					{x: 19, y: 5.28469363290898},
					{x: 20, y: 5.64456622473529},
					{x: 21, y: 5.26358117857227},
					{x: 22, y: 5.17477866428148},
					{x: 23, y: 5.3686195006217},
					{x: 24, y: 5.53754222319115},
					{x: 25, y: 5.92640715709855},
					{x: 26, y: 5.7491207294491},
					{x: 27, y: 5.14773548661836},
					{x: 28, y: 5.00288774509561},
					{x: 29, y: 5.12701389361768},
					{x: 30, y: 5.91692135212512},
					{x: 31, y: 5.6721217072533},
					{x: 32, y: 5.11378980745106},
					{x: 33, y: 5.9602274928175},
					{x: 34, y: 5.11938312096745},
					{x: 35, y: 5.49241569545314},
					{x: 36, y: 5.3613134019522},
					{x: 37, y: 5.47000049054799},
					{x: 38, y: 5.05877976882097},
					{x: 39, y: 5.33001170117312},
					{x: 40, y: 5.2645204776578},
					{x: 41, y: 5.24591766636495},
					{x: 42, y: 5.94767635939634},
					{x: 43, y: 5.03244199450574},
					{x: 44, y: 5.90615063411591},
					{x: 45, y: 5.36849770414045},
					{x: 46, y: 5.66254037311282},
					{x: 47, y: 5.95362463049478},
					{x: 48, y: 5.09412845705577},
					{x: 49, y: 5.68531562192882},
					{x: 50, y: 5.41244048216534},
					{x: 51, y: 5.11178872270826},
					{x: 52, y: 5.49183506307831},
					{x: 53, y: 5.46155238377885},
					{x: 54, y: 5.87705814105983},
					{x: 55, y: 5.66023917747719},
					{x: 56, y: 5.2779648384125},
					{x: 57, y: 5.65716821603671},
					{x: 58, y: 5.64541495016219},
					{x: 59, y: 5.89722374482656},
					{x: 60, y: 5.88233656192566},
					{x: 61, y: 5.33517242573687},
					{x: 62, y: 5.42700192845076},
					{x: 63, y: 5.80376498865829},
					{x: 64, y: 5.92309420460022},
					{x: 65, y: 5.86672384014602},
					{x: 66, y: 5.49965027253961},
					{x: 67, y: 5.5844830448487},
					{x: 68, y: 5.92475700145656},
					{x: 69, y: 5.16611689760202},
					{x: 70, y: 5.37436013809304},
					{x: 71, y: 5.25940803111637},
					{x: 72, y: 5.83048091668021},
					{x: 73, y: 5.07017668673315},
					{x: 74, y: 5.28103027716092},
					{x: 75, y: 5.5550448376004},
					{x: 76, y: 5.6189668805427},
					{x: 77, y: 5.40978708723706},
					{x: 78, y: 5.25842844529664},
					{x: 79, y: 5.41674615988017},
					{x: 80, y: 5.38205553895575},
					{x: 81, y: 5.09633413299413},
					{x: 82, y: 5.1312842193937},
					{x: 83, y: 5.60989827041755},
					{x: 84, y: 5.65619373187935},
					{x: 85, y: 5.8409953125444},
					{x: 86, y: 5.49981787809958},
					{x: 87, y: 5.30719808151669},
					{x: 88, y: 5.16976392194186},
					{x: 89, y: 5.04876539303798},
					{x: 90, y: 5.2258171310015},
					{x: 91, y: 5.36697108491628},
					{x: 92, y: 5.56784638492371},
					{x: 93, y: 5.56971540694444},
					{x: 94, y: 5.77877647772355},
					{x: 95, y: 5.59024154906776},
					{x: 96, y: 5.11066346349451},
					{x: 97, y: 5.64067794341404},
					{x: 98, y: 5.07201932624771},
					{x: 99, y: 5.36584579678718},
					{x: 100, y: 5.28730306493318},
					{x: 101, y: 5.74143810085378},
					{x: 102, y: 5.06698743075016},
					{x: 103, y: 5.75716595545508},
					{x: 104, y: 5.2407130335412},
					{x: 105, y: 5.2309098360183},
					{x: 106, y: 5.0119883821995},
					{x: 107, y: 5.13247462582246},
					{x: 108, y: 5.20938654847904},
					{x: 109, y: 5.21418271638405},
					{x: 110, y: 5.90579437028214},
					{x: 111, y: 5.27777250140083},
					{x: 112, y: 5.0971019894268},
					{x: 113, y: 5.78282152667052},
					{x: 114, y: 5.66752094460457},
					{x: 115, y: 5.61267254852844},
					{x: 116, y: 5.34379242128971},
					{x: 117, y: 4.23355897040266},
					{x: 118, y: 4.30802942665462},
					{x: 119, y: 4.3573007050358},
					{x: 120, y: 4.21669793236701},
					{x: 121, y: 4.67728000428305},
					{x: 122, y: 4.73601471374083},
					{x: 123, y: 4.01001857050816},
					{x: 124, y: 4.35591431419377},
					{x: 125, y: 4.23995458300156},
					{x: 126, y: 4.92760873136322},
					{x: 127, y: 4.76298681622355},
					{x: 128, y: 4.3793871026834},
					{x: 129, y: 4.68595627566382},
					{x: 130, y: 4.69887267321938},
					{x: 131, y: 4.59039823504082},
					{x: 132, y: 4.96205553547291},
					{x: 133, y: 4.78134565317205},
					{x: 134, y: 4.5384274790619},
					{x: 135, y: 4.09413825101669},
					{x: 136, y: 4.88600868511099},
					{x: 137, y: 4.25749513344027},
					{x: 138, y: 4.4635068658762},
					{x: 139, y: 4.33079827009126},
					{x: 140, y: 4.7567733876866},
					{x: 141, y: 4.80284933532799},
					{x: 142, y: 4.80311769089361},
					{x: 143, y: 4.87663686032871},
					{x: 144, y: 4.08747406754404},
					{x: 145, y: 4.6679136249037},
					{x: 146, y: 4.50242197252935},
					{x: 147, y: 4.33556204066609},
					{x: 148, y: 4.58856146942587},
					{x: 149, y: 4.35193258697291},
					{x: 150, y: 4.20671765344879},
					{x: 151, y: 4.2621545462964},
					{x: 152, y: 4.09864930290572},
					{x: 153, y: 4.15006318952044},
					{x: 154, y: 4.3210193441349},
					{x: 155, y: 4.59438945516145},
					{x: 156, y: 4.15373806231502},
					{x: 157, y: 4.06262559913831},
					{x: 158, y: 4.00778223005727},
					{x: 159, y: 4.77426012794525},
					{x: 160, y: 4.68204501914583},
					{x: 161, y: 4.12050315499274},
					{x: 162, y: 4.71925339929635},
					{x: 163, y: 4.16185410374931},
					{x: 164, y: 4.12016014995297},
					{x: 165, y: 4.68115210610364},
					{x: 166, y: 4.14482665599499},
					{x: 167, y: 4.05782775217778},
					{x: 168, y: 4.13494200286996},
					{x: 169, y: 4.01478043850428},
					{x: 170, y: 4.18911715128009},
					{x: 171, y: 4.07086211828791},
					{x: 172, y: 4.03785975060047},
					{x: 173, y: 4.30787020813069},
					{x: 174, y: 4.51573554602372},
					{x: 175, y: 4.3935107401546},
					{x: 176, y: 4.99519551410562},
					{x: 177, y: 4.43959997944439},
					{x: 178, y: 4.15143964703216},
					{x: 179, y: 4.77805052949902},
					{x: 180, y: 4.74117346362726},
					{x: 181, y: 4.08764372229529},
					{x: 182, y: 4.47042570848165},
					{x: 183, y: 4.29282961008352},
					{x: 184, y: 4.40685058202553},
					{x: 185, y: 4.4302372475435},
					{x: 186, y: 4.87126214021996},
					{x: 187, y: 4.70725013721773},
					{x: 188, y: 4.01429733127466},
					{x: 189, y: 4.0245837084463},
					{x: 190, y: 4.2369942471702},
					{x: 191, y: 4.59826543626878},
					{x: 192, y: 4.92619815329061},
					{x: 193, y: 4.33441348882288},
					{x: 194, y: 4.44303293916292},
					{x: 195, y: 4.09913805671949},
					{x: 196, y: 4.71515120526787},
					{x: 197, y: 4.72163840661013},
					{x: 198, y: 4.78247095275141},
					{x: 199, y: 4.94204510093663},
					{x: 200, y: 4.04756847656067},
					{x: 201, y: 4.80035038794763},
					{x: 202, y: 4.46678840537405},
					{x: 203, y: 4.27913984967778},
					{x: 204, y: 4.04472108211283},
					{x: 205, y: 4.78755096856702},
					{x: 206, y: 4.89912386142396},
					{x: 207, y: 4.77568389967744},
					{x: 208, y: 4.83745023558209},
					{x: 209, y: 4.34442070588033},
					{x: 210, y: 4.19119260379568},
					{x: 211, y: 4.37843892386006},
					{x: 212, y: 4.25633384155016},
					{x: 213, y: 4.02146323980926},
					{x: 214, y: 4.2932787847805},
					{x: 215, y: 4.24042277751437},
					{x: 216, y: 4.20258900891059},
					{x: 217, y: 4.34822078059284},
					{x: 218, y: 4.53714959665676},
					{x: 219, y: 4.12431427262226},
					{x: 220, y: 4.1927383096706},
					{x: 221, y: 4.48861953945523},
					{x: 222, y: 4.40701040410264},
					{x: 223, y: 4.73491884374371},
					{x: 224, y: 4.29990491896719},
					{x: 225, y: 4.80713614145108},
					{x: 226, y: 4.91366451716835},
					{x: 227, y: 4.76510804129972},
					{x: 228, y: 4.33421169612654},
					{x: 229, y: 4.7193379347803},
					{x: 230, y: 4.03359316457448},
					{x: 231, y: 4.61562389692907},
					{x: 232, y: 4.11218486575756},
					{x: 233, y: 4.05060215817836},
					{x: 234, y: 4.05521024924798},
					{x: 235, y: 4.02621959676922},
					{x: 236, y: 4.95543558180011},
					{x: 237, y: 4.52521380349799},
					{x: 238, y: 4.75625401515383},
					{x: 239, y: 4.58981831814717},
					{x: 240, y: 4.73890563395986},
					{x: 241, y: 4.3194169993639},
					{x: 242, y: 4.84812983370873},
					{x: 243, y: 4.49364682142867},
					{x: 244, y: 4.11483527820884},
					{x: 245, y: 3.66682916003959},
					{x: 246, y: 3.38178308391401},
					{x: 247, y: 3.7188089643449},
					{x: 248, y: 3.41862789430322},
					{x: 249, y: 3.05593270940093},
					{x: 250, y: 3.58499966058209},
					{x: 251, y: 3.29882772319867},
					{x: 252, y: 3.40956257879111},
					{x: 253, y: 3.58608970627487},
					{x: 254, y: 3.31562156497831},
					{x: 255, y: 3.14735844750441},
					{x: 256, y: 3.99152927537782},
					{x: 257, y: 3.10749324381719},
					{x: 258, y: 3.33425683416866},
					{x: 259, y: 3.037958960264},
					{x: 260, y: 3.92240659799931},
					{x: 261, y: 3.37314176713293},
					{x: 262, y: 3.98916072083022},
					{x: 263, y: 3.54345603109359},
					{x: 264, y: 3.56331651680031},
					{x: 265, y: 3.18789861860945},
					{x: 266, y: 3.21549562874861},
					{x: 267, y: 3.48530689536426},
					{x: 268, y: 3.21950073730536},
					{x: 269, y: 3.93687254836228},
					{x: 270, y: 3.27762463623548},
					{x: 271, y: 3.95310353858198},
					{x: 272, y: 3.81493251079315},
					{x: 273, y: 3.34959880462149},
					{x: 274, y: 3.0216060447638},
					{x: 275, y: 3.34101304309247},
					{x: 276, y: 3.3843978119243},
					{x: 277, y: 3.09328962542344},
					{x: 278, y: 3.96925277670991},
					{x: 279, y: 3.19004495717318},
					{x: 280, y: 3.16462046393356},
					{x: 281, y: 3.50703144302524},
					{x: 282, y: 3.50823827321587},
					{x: 283, y: 3.05147815125525},
					{x: 284, y: 3.36701170083706},
					{x: 285, y: 3.58479723662596},
					{x: 286, y: 3.99475059183416},
					{x: 287, y: 3.43513177285803},
					{x: 288, y: 3.69599778848338},
					{x: 289, y: 3.01647549551397},
					{x: 290, y: 3.15254009550312},
					{x: 291, y: 3.89953885227836},
					{x: 292, y: 3.04637630138233},
					{x: 293, y: 3.02932698958964},
					{x: 294, y: 3.57444449129593},
					{x: 295, y: 3.34040416565847},
					{x: 296, y: 3.21930076724555},
					{x: 297, y: 3.90399105437501},
					{x: 298, y: 3.6830878415228},
					{x: 299, y: 3.37164814743304},
					{x: 300, y: 3.40111783649282},
					{x: 301, y: 3.20497026954663},
					{x: 302, y: 3.23769919379998},
					{x: 303, y: 3.88436064594748},
					{x: 304, y: 3.92124305568434},
					{x: 305, y: 3.78164886226908},
					{x: 306, y: 3.24191578801165},
					{x: 307, y: 3.58359630226931},
					{x: 308, y: 3.20185569047366},
					{x: 309, y: 3.12706776837359},
					{x: 310, y: 3.68766932132812},
					{x: 311, y: 3.91073901117516},
					{x: 312, y: 3.75094006986836},
					{x: 313, y: 3.82290890433612},
					{x: 314, y: 3.22512085244805},
					{x: 315, y: 3.3867463044492},
					{x: 316, y: 3.41868845204526},
					{x: 317, y: 3.93578566229563},
					{x: 318, y: 3.1055548492571},
					{x: 319, y: 3.53128927210713},
					{x: 320, y: 3.62119165729566},
					{x: 321, y: 3.28034175327497},
					{x: 322, y: 3.1977626346043},
					{x: 323, y: 3.40838691074704},
					{x: 324, y: 3.36260457278209},
					{x: 325, y: 3.16190139290393},
					{x: 326, y: 3.89352548313846},
					{x: 327, y: 3.44047636665892},
					{x: 328, y: 3.67031001952009},
					{x: 329, y: 3.21042673931826},
					{x: 330, y: 3.47114623027646},
					{x: 331, y: 3.04991384154935},
					{x: 332, y: 3.49593151770525},
					{x: 333, y: 3.26972119441696},
					{x: 334, y: 3.68417430776278},
					{x: 335, y: 3.74799561929101},
					{x: 336, y: 3.39164136888737},
					{x: 337, y: 3.55882704570525},
					{x: 338, y: 3.73224561414051},
					{x: 339, y: 3.61162174465711},
					{x: 340, y: 3.58122966443659},
					{x: 341, y: 3.07060392725185},
					{x: 342, y: 3.37424631146036},
					{x: 343, y: 3.03358962231968},
					{x: 344, y: 3.40614308966849},
					{x: 345, y: 3.65795811226944},
					{x: 346, y: 3.57524054482498},
					{x: 347, y: 3.9759562381137},
					{x: 348, y: 3.44163933816885},
					{x: 349, y: 3.77783697355902},
					{x: 350, y: 3.56945842585922},
					{x: 351, y: 3.02109978487886},
					{x: 352, y: 3.51227355259542},
					{x: 353, y: 3.40755214523805},
					{x: 354, y: 3.21983707369646},
					{x: 355, y: 3.23046066804754},
					{x: 356, y: 3.43854978346245},
					{x: 357, y: 3.91989383086446},
					{x: 358, y: 3.31903756749757},
					{x: 359, y: 3.28433453692604},
					{x: 360, y: 3.36377900786419},
					{x: 361, y: 3.49931754309815},
					{x: 362, y: 3.81352428093569},
					{x: 363, y: 3.23481824852235},
					{x: 364, y: 3.02226393605601},
					{x: 365, y: 3.30112141372273},
					{x: 366, y: 3.29806223614509},
					{x: 367, y: 3.82592797647296},
					{x: 368, y: 3.1363954393977},
					{x: 369, y: 3.81458040564826},
					{x: 370, y: 3.86108835492828},
					{x: 371, y: 3.55294182569126},
					{x: 372, y: 3.01852986777795},
					{x: 373, y: 3.50782148054994},
					{x: 374, y: 3.71364513318508},
					{x: 375, y: 3.69774797393671},
					{x: 376, y: 3.89345559594186},
					{x: 377, y: 3.70118497053669},
					{x: 378, y: 3.93729038054917},
					{x: 379, y: 3.01089277355939},
					{x: 380, y: 3.8197404037766},
					{x: 381, y: 3.03426765415666},
					{x: 382, y: 3.51616032097527},
					{x: 383, y: 3.65333032036934},
					{x: 384, y: 3.75412726252601},
					{x: 385, y: 3.27999697494331},
					{x: 386, y: 3.60305106004405},
					{x: 387, y: 3.88878073245321},
					{x: 388, y: 3.64323410694003},
					{x: 389, y: 3.78606335350547},
					{x: 390, y: 3.49114124207171},
					{x: 391, y: 3.40346040558934},
					{x: 392, y: 3.87744009778383},
					{x: 393, y: 3.70818292686665},
					{x: 394, y: 3.8264916060323},
					{x: 395, y: 3.0106704162584},
					{x: 396, y: 3.09555714228937},
					{x: 397, y: 3.54328425274957},
					{x: 398, y: 3.85621744737027},
					{x: 399, y: 3.26435593390916},
					{x: 400, y: 3.77554726014159},
					{x: 401, y: 3.63792074917179},
					{x: 402, y: 3.72505975506397},
					{x: 403, y: 4.76798700454813},
					{x: 404, y: 4.20684683846289},
					{x: 405, y: 4.04330415754023},
					{x: 406, y: 4.15356355688783},
					{x: 407, y: 4.71831356412059},
					{x: 408, y: 4.12864350589108},
					{x: 409, y: 4.22078892365227},
					{x: 410, y: 4.45355944148932},
					{x: 411, y: 4.46526085197169},
					{x: 412, y: 4.08978625811464},
					{x: 413, y: 4.50672964506198},
					{x: 414, y: 4.07650909835257},
					{x: 415, y: 4.16652469587243},
					{x: 416, y: 4.74771003912743},
					{x: 417, y: 4.33456726031832},
					{x: 418, y: 4.30505402116511},
					{x: 419, y: 4.81887855276197},
					{x: 420, y: 4.9820489453742},
					{x: 421, y: 4.96897000839548},
					{x: 422, y: 4.57662233526902},
					{x: 423, y: 4.23348299110282},
					{x: 424, y: 4.29209845183887},
					{x: 425, y: 4.67376433187999},
					{x: 426, y: 4.57373870177418},
					{x: 427, y: 4.19970224912972},
					{x: 428, y: 4.95819839711472},
					{x: 429, y: 4.33615489039208},
					{x: 430, y: 4.14966410530335},
					{x: 431, y: 4.32838321806092},
					{x: 432, y: 4.11309667656763},
					{x: 433, y: 4.77191447603085},
					{x: 434, y: 4.79256251935411},
					{x: 435, y: 4.58706878106801},
					{x: 436, y: 4.07919162092596},
					{x: 437, y: 4.1929019894237},
					{x: 438, y: 4.77540513519808},
					{x: 439, y: 4.35339143728706},
					{x: 440, y: 4.83894778483477},
					{x: 441, y: 4.13388725747564},
					{x: 442, y: 4.69814794058503},
					{x: 443, y: 4.19034462803076},
					{x: 444, y: 4.39680689510116},
					{x: 445, y: 4.33894732428959},
					{x: 446, y: 4.92269275683973},
					{x: 447, y: 4.83840260875618},
					{x: 448, y: 4.6295240528511},
					{x: 449, y: 4.86549064981276},
					{x: 450, y: 4.21628959168108},
					{x: 451, y: 4.06489908490564},
					{x: 452, y: 4.67800053444826},
					{x: 453, y: 4.53512019023623},
					{x: 454, y: 4.51734923363287},
					{x: 455, y: 4.25571866845761},
					{x: 456, y: 4.85282758773681},
					{x: 457, y: 4.82320106107493},
					{x: 458, y: 4.01657221020893},
					{x: 459, y: 4.47471000361298},
					{x: 460, y: 4.94411856976778},
					{x: 461, y: 4.45862054273968},
					{x: 462, y: 4.84997229991191},
					{x: 463, y: 4.53555239145237},
					{x: 464, y: 4.43410128115937},
					{x: 465, y: 4.02443370512996},
					{x: 466, y: 4.50435978076273},
					{x: 467, y: 4.87648395531354},
					{x: 468, y: 4.90824881828487},
					{x: 469, y: 4.28520348433266},
					{x: 470, y: 4.13270366197626},
					{x: 471, y: 4.00013254354545},
					{x: 472, y: 4.31796071050501},
					{x: 473, y: 4.53010799998075},
					{x: 474, y: 4.82917612070496},
					{x: 475, y: 4.67358353230621},
					{x: 476, y: 4.91301449864507},
					{x: 477, y: 4.75614192644193},
					{x: 478, y: 4.16851242728755},
					{x: 479, y: 4.96401593770651},
					{x: 480, y: 4.34826595075292},
					{x: 481, y: 4.59848756193256},
					{x: 482, y: 4.73139170545284},
					{x: 483, y: 4.87081636325441},
					{x: 484, y: 4.33339943713535},
					{x: 485, y: 4.46304271259626},
					{x: 486, y: 4.16688671173257},
					{x: 487, y: 4.46638929669314},
					{x: 488, y: 4.45637045525522},
					{x: 489, y: 4.12782229928393},
					{x: 490, y: 4.63993037039218},
					{x: 491, y: 4.89648822723853},
					{x: 492, y: 4.42742795784651},
					{x: 493, y: 4.17584603336588},
					{x: 494, y: 4.29489834699153},
					{x: 495, y: 4.05873831288692},
					{x: 496, y: 4.06017288103842},
					{x: 497, y: 4.02665989235401},
					{x: 498, y: 4.55046740532071},
					{x: 499, y: 4.56305071432937},
					{x: 500, y: 4.30459561376109},
					{x: 501, y: 4.7545107847023},
					{x: 502, y: 4.67110318758016},
					{x: 503, y: 4.93983825433771},
					{x: 504, y: 4.48515469118142},
					{x: 505, y: 4.5180878409734},
					{x: 506, y: 4.78920321343528},
					{x: 507, y: 4.57116824389283},
					{x: 508, y: 4.7664948444323},
					{x: 509, y: 4.92016610016362},
					{x: 510, y: 4.21030633328711},
					{x: 511, y: 4.60811418134969},
					{x: 512, y: 4.46572520443514},
					{x: 513, y: 4.61669989433679},
					{x: 514, y: 4.20309212375426},
					{x: 515, y: 4.67760052404773},
					{x: 516, y: 4.017315558322},
					{x: 517, y: 4.22660751149616},
					{x: 518, y: 4.91446603775924},
					{x: 519, y: 4.76843403261417},
					{x: 520, y: 4.53331264270668},
					{x: 521, y: 4.06838021641925},
					{x: 522, y: 4.19958423217359},
					{x: 523, y: 4.01201763062339},
					{x: 524, y: 4.96657191256693},
					{x: 525, y: 4.83220069029563},
					{x: 526, y: 4.44530906024877},
					{x: 527, y: 4.99049546571295},
					{x: 528, y: 4.7942843836536},
					{x: 529, y: 4.48861116806819},
					{x: 530, y: 4.13058925420954},
					{x: 531, y: 4.21224251926837},
					{x: 532, y: 4.83111015472385},
					{x: 533, y: 4.32378736967358},
					{x: 534, y: 4.73876771380859},
					{x: 535, y: 4.15987275885464},
					{x: 536, y: 4.73147071548382},
					{x: 537, y: 4.05369411719045},
					{x: 538, y: 4.71438952708379},
					{x: 539, y: 4.12173564229908},
					{x: 540, y: 4.98404473799},
					{x: 541, y: 4.5930981962662},
					{x: 542, y: 4.26954320536482},
					{x: 543, y: 4.43200359092497},
					{x: 544, y: 4.93051234234294},
					{x: 545, y: 4.5078853085403},
					{x: 546, y: 4.06409800528081},
					{x: 547, y: 4.65911131280685},
					{x: 548, y: 4.44917201784481},
					{x: 549, y: 4.1471684975957},
					{x: 550, y: 4.77522808990669},
					{x: 551, y: 4.53126175684383},
					{x: 552, y: 4.08789419648632},
					{x: 553, y: 4.90046069595133},
					{x: 554, y: 4.86815118402594},
					{x: 555, y: 4.05629986127694},
					{x: 556, y: 4.64005625337616},
					{x: 557, y: 4.88926462979446},
					{x: 558, y: 4.34772319269584},
					{x: 559, y: 4.66671950604649},
					{x: 560, y: 4.45446074289169},
					{x: 561, y: 4.44687893792871},
					{x: 562, y: 4.01703102317207},
					{x: 563, y: 4.86141765619609},
					{x: 564, y: 4.93782211871554},
					{x: 565, y: 4.47877408697904},
					{x: 566, y: 4.56983149379317},
					{x: 567, y: 4.99279558245018},
					{x: 568, y: 4.40413462595005},
					{x: 569, y: 4.21984131875258},
					{x: 570, y: 4.86649658560502},
					{x: 571, y: 4.68902306907731},
					{x: 572, y: 4.17146938329614},
					{x: 573, y: 4.00902372872093},
					{x: 574, y: 4.16907712753832},
					{x: 575, y: 4.20638777095151},
					{x: 576, y: 4.90162218880619},
					{x: 577, y: 4.7091398974166},
					{x: 578, y: 4.13193004972771},
					{x: 579, y: 4.42520468934243},
					{x: 580, y: 4.66144671425026},
					{x: 581, y: 4.3223830809834},
					{x: 582, y: 4.59743679006775},
					{x: 583, y: 4.21064715331755},
					{x: 584, y: 4.18961822717798},
					{x: 585, y: 4.20831555544515},
					{x: 586, y: 4.71334538191495},
					{x: 587, y: 4.25269641089702},
					{x: 588, y: 4.2700150096882},
					{x: 589, y: 4.48175735928358},
					{x: 590, y: 4.2206737295816},
					{x: 591, y: 4.35466418914811},
					{x: 592, y: 4.63773401727861},
					{x: 593, y: 4.74975430766147},
					{x: 594, y: 4.49242140156161},
					{x: 595, y: 4.61738876395475},
					{x: 596, y: 4.31945311126194},
					{x: 597, y: 4.30249908799443},
					{x: 598, y: 4.14178949628146},
					{x: 599, y: 4.84434238149524},
					{x: 600, y: 4.28815431929972},
					{x: 601, y: 4.90883232965807},
					{x: 602, y: 4.11320917587582},
					{x: 603, y: 4.61386059505054},
					{x: 604, y: 4.28390410895503},
					{x: 605, y: 4.50813200732592},
					{x: 606, y: 4.53887511425603},
					{x: 607, y: 4.05215050931558},
					{x: 608, y: 4.43708248111689},
					{x: 609, y: 4.2187296399505},
					{x: 610, y: 4.91833899065768},
					{x: 611, y: 5.11592525990435},
					{x: 612, y: 5.3596227922418},
					{x: 613, y: 5.30605572071048},
					{x: 614, y: 5.302248075914},
					{x: 615, y: 5.56144548741988},
					{x: 616, y: 5.79609897438646},
					{x: 617, y: 5.46994870512924},
					{x: 618, y: 5.79117052588079},
					{x: 619, y: 5.41876895470608},
					{x: 620, y: 5.7395297503303},
					{x: 621, y: 5.35752315456492},
					{x: 622, y: 5.94982208318067},
					{x: 623, y: 5.75014657100233},
					{x: 624, y: 5.01957749783982},
					{x: 625, y: 5.75516714025996},
					{x: 626, y: 5.91180113156265},
					{x: 627, y: 5.34775387193327},
					{x: 628, y: 5.07128521112947},
					{x: 629, y: 5.85508861924034},
					{x: 630, y: 5.09435334810551},
					{x: 631, y: 5.54956787618682},
					{x: 632, y: 5.91552512657003},
					{x: 633, y: 5.52201157880556},
					{x: 634, y: 5.0519654842518},
					{x: 635, y: 5.44090895988118},
					{x: 636, y: 5.69118922927119},
					{x: 637, y: 5.26137753921271},
					{x: 638, y: 5.89590753944017},
					{x: 639, y: 5.45971242874935},
					{x: 640, y: 5.23201904182264},
					{x: 641, y: 5.19594288957914},
					{x: 642, y: 5.84969384492056},
					{x: 643, y: 5.74160856064279},
					{x: 644, y: 5.66221536044754},
					{x: 645, y: 5.10708839955975},
					{x: 646, y: 5.83617292070913},
					{x: 647, y: 5.45491538532375},
					{x: 648, y: 5.65062994812803},
					{x: 649, y: 5.90442258542945},
					{x: 650, y: 5.11070562507973},
					{x: 651, y: 5.60382950874981},
					{x: 652, y: 5.01638246629532},
					{x: 653, y: 5.09121040151254},
					{x: 654, y: 5.90567165261788},
					{x: 655, y: 5.54761897858002},
					{x: 656, y: 5.64420631136136},
					{x: 657, y: 5.23587690065009},
					{x: 658, y: 5.62057363583644},
					{x: 659, y: 5.0789822725201},
					{x: 660, y: 5.6457511005314},
					{x: 661, y: 5.17629980578486},
					{x: 662, y: 5.61892477812331},
					{x: 663, y: 5.97032415836163},
					{x: 664, y: 5.66919346816911},
					{x: 665, y: 5.33181132685571},
					{x: 666, y: 5.4578870158501},
					{x: 667, y: 5.02494934598205},
					{x: 668, y: 5.5231046368655},
					{x: 669, y: 5.98919195860546},
					{x: 670, y: 5.72336369690542},
					{x: 671, y: 5.39694473129082},
					{x: 672, y: 5.59072981587298},
					{x: 673, y: 5.57317989151059},
					{x: 674, y: 5.50767429168184},
					{x: 675, y: 5.14554638562501},
					{x: 676, y: 5.29094873077204},
					{x: 677, y: 5.50114407162064},
					{x: 678, y: 5.14186985083339},
					{x: 679, y: 5.40638340145381},
					{x: 680, y: 5.59310318495525},
					{x: 681, y: 5.8093799447875},
					{x: 682, y: 5.47059895972702},
					{x: 683, y: 5.67412167900906},
					{x: 684, y: 5.75717955737941},
					{x: 685, y: 5.1820997905822},
					{x: 686, y: 5.61963917692465},
					{x: 687, y: 5.76992707822774},
					{x: 688, y: 5.42108626294437},
					{x: 689, y: 5.43898876538004},
					{x: 690, y: 5.48878020153305},
					{x: 691, y: 5.21683296098577},
					{x: 692, y: 5.83291238410541},
					{x: 693, y: 5.50154387632697},
					{x: 694, y: 5.10273167625102},
					{x: 695, y: 5.36435991004549},
					{x: 696, y: 5.82080202430351},
					{x: 697, y: 5.12284352529451},
					{x: 698, y: 5.649358746529},
					{x: 699, y: 5.73662471503799},
					{x: 700, y: 5.71066494006715},
					{x: 701, y: 5.10533493468161},
					{x: 702, y: 5.95860446778519},
					{x: 703, y: 5.42369288008525},
					{x: 704, y: 5.56011344400301},
					{x: 705, y: 5.09878277111103},
					{x: 706, y: 5.48311765821853},
					{x: 707, y: 5.15362476354392},
					{x: 708, y: 5.3084698332643},
					{x: 709, y: 5.13091636631516},
					{x: 710, y: 5.34351860092923},
					{x: 711, y: 5.66306037619074},
					{x: 712, y: 5.51620266339785},
					{x: 713, y: 5.79666688692389},
					{x: 714, y: 5.57659556777528},
					{x: 715, y: 5.0668739600415},
					{x: 716, y: 5.24848242245848},
					{x: 717, y: 5.90867943615701},
					{x: 718, y: 5.88950847377688},
					{x: 719, y: 5.98980615845199},
					{x: 720, y: 5.32365545464791},
					{x: 721, y: 5.98742046508366},
					{x: 722, y: 5.61386476529236},
					{x: 723, y: 5.65208152571533},
					{x: 724, y: 5.60134609425483},
					{x: 725, y: 5.79779432778976},
					{x: 726, y: 5.61044656643983},
					{x: 727, y: 5.37723868070885},
					{x: 728, y: 5.17464660849043},
					{x: 729, y: 5.05991420465763},
					{x: 730, y: 5.15235264468071},
					{x: 731, y: 5.38341858802883},
					{x: 732, y: 5.01308386701433},
					{x: 733, y: 5.96537353107862},
					{x: 734, y: 5.3181868845147},
					{x: 735, y: 5.95560365343412},
					{x: 736, y: 5.0289597177907},
					{x: 737, y: 5.39717880673315},
					{x: 738, y: 5.27781001682882},
					{x: 739, y: 5.36185309737936},
					{x: 740, y: 5.78045330521396},
					{x: 741, y: 5.44566401664959},
					{x: 742, y: 5.05731225806663},
					{x: 743, y: 5.04799434031386},
					{x: 744, y: 5.53081487558814},
					{x: 745, y: 5.76676806092067},
					{x: 746, y: 5.61462919432413},
					{x: 747, y: 5.93243288261142},
					{x: 748, y: 5.7815767479117},
					{x: 749, y: 5.75490274090712},
					{x: 750, y: 5.3262171565721},
					{x: 751, y: 5.5219812596941},
					{x: 752, y: 5.64557930466603},
					{x: 753, y: 5.51123845476132},
					{x: 754, y: 5.66210009328207},
					{x: 755, y: 5.2313098213942},
					{x: 756, y: 5.98256929267005},
					{x: 757, y: 5.0859194848713},
					{x: 758, y: 5.412678414691},
					{x: 759, y: 5.9852842296764},
					{x: 760, y: 5.48525880982289},
					{x: 761, y: 5.61187217679862},
					{x: 762, y: 5.0112204544433},
					{x: 763, y: 5.76855151776844},
					{x: 764, y: 4.21734674837076},
					{x: 765, y: 4.39732139739544},
					{x: 766, y: 4.26256387318922},
					{x: 767, y: 4.07863861970132},
					{x: 768, y: 4.22011974364604},
					{x: 769, y: 4.48498501226526},
					{x: 770, y: 4.51529623624904},
					{x: 771, y: 4.83900916732022},
					{x: 772, y: 4.41315206681588},
					{x: 773, y: 4.40217557244544},
					{x: 774, y: 4.95268692521614},
					{x: 775, y: 4.33509817584095},
					{x: 776, y: 4.13375020213696},
					{x: 777, y: 4.69543644308238},
					{x: 778, y: 4.92277342131713},
					{x: 779, y: 4.48752463900708},
					{x: 780, y: 4.50569244868392},
					{x: 781, y: 4.00462576058235},
					{x: 782, y: 4.18846874838351},
					{x: 783, y: 4.7796394438336},
					{x: 784, y: 4.61082594968749},
					{x: 785, y: 4.79245686049763},
					{x: 786, y: 4.83790044909544},
					{x: 787, y: 4.6873583994037},
					{x: 788, y: 4.0814341000568},
					{x: 789, y: 4.80614056901372},
					{x: 790, y: 4.13477699525547},
					{x: 791, y: 4.56991434901436},
					{x: 792, y: 4.57469150627438},
					{x: 793, y: 4.0161027507919},
					{x: 794, y: 4.93482831577646},
					{x: 795, y: 4.61478002659632},
					{x: 796, y: 4.66857489026494},
					{x: 797, y: 4.42177280894813},
					{x: 798, y: 4.70276717360899},
					{x: 799, y: 4.4706966358742},
					{x: 800, y: 4.40889293305031},
					{x: 801, y: 4.98863601867148},
					{x: 802, y: 4.48525073992673},
					{x: 803, y: 4.11726273921796},
					{x: 804, y: 4.8580859162861},
					{x: 805, y: 4.34197579239565},
					{x: 806, y: 4.31637913417006},
					{x: 807, y: 4.37752714625259},
					{x: 808, y: 4.86988166333907},
					{x: 809, y: 4.53143326812201},
					{x: 810, y: 4.02515550915503},
					{x: 811, y: 4.24835524754798},
					{x: 812, y: 4.72368048413589},
					{x: 813, y: 4.4323811782488},
					{x: 814, y: 4.26145058279684},
					{x: 815, y: 4.18940906220533},
					{x: 816, y: 4.21447801423666},
					{x: 817, y: 4.49489458178092},
					{x: 818, y: 4.03300083210705},
					{x: 819, y: 4.37262426080102},
					{x: 820, y: 4.356676672691},
					{x: 821, y: 4.27470653868115},
					{x: 822, y: 4.26439892304234},
					{x: 823, y: 4.74451537880104},
					{x: 824, y: 4.13168375079179},
					{x: 825, y: 4.80308400320993},
					{x: 826, y: 4.30440305993011},
					{x: 827, y: 4.34284620835997},
					{x: 828, y: 4.65934118425983},
					{x: 829, y: 4.03896448761316},
					{x: 830, y: 4.77214283878312},
					{x: 831, y: 4.69008457925638},
					{x: 832, y: 4.92724544549402},
					{x: 833, y: 4.06201858470527},
					{x: 834, y: 4.68746661974203},
					{x: 835, y: 4.72569488644977},
					{x: 836, y: 4.84652940328566},
					{x: 837, y: 4.55380007401587},
					{x: 838, y: 4.84239674478633},
					{x: 839, y: 4.04891888778872},
					{x: 840, y: 4.75880444417894},
					{x: 841, y: 4.67599987411561},
					{x: 842, y: 4.87442909431029},
					{x: 843, y: 4.33094323570259},
					{x: 844, y: 4.51849966946025},
					{x: 845, y: 4.45394520568737},
					{x: 846, y: 4.17950306717727},
					{x: 847, y: 4.84739945723103},
					{x: 848, y: 4.04642597461779},
					{x: 849, y: 4.52359607192123},
					{x: 850, y: 4.23270362929707},
					{x: 851, y: 4.9032739040452},
					{x: 852, y: 4.54125696534778},
					{x: 853, y: 4.09868497353505},
					{x: 854, y: 4.85708363135417},
					{x: 855, y: 4.04273796917755},
					{x: 856, y: 4.14204174835122},
					{x: 857, y: 4.21749764979384},
					{x: 858, y: 4.77746207448295},
					{x: 859, y: 4.35760595148889},
					{x: 860, y: 4.02532377811126},
					{x: 861, y: 4.83377960921136},
					{x: 862, y: 4.36319781334083},
					{x: 863, y: 4.7885618031139},
					{x: 864, y: 4.87965966340754},
					{x: 865, y: 4.67650784079487},
					{x: 866, y: 4.54524406219841},
					{x: 867, y: 4.89888885348425},
					{x: 868, y: 4.0994934710882},
					{x: 869, y: 4.0909392916771},
					{x: 870, y: 4.03423933244788},
					{x: 871, y: 4.32417422819134},
					{x: 872, y: 4.16606575863519},
					{x: 873, y: 4.99807859494196},
					{x: 874, y: 4.41548520128256},
					{x: 875, y: 4.75433338439618},
					{x: 876, y: 4.69331349740241},
					{x: 877, y: 4.77064401100809},
					{x: 878, y: 4.91226008351707},
					{x: 879, y: 4.3106797681027},
					{x: 880, y: 4.20471706884012},
					{x: 881, y: 4.07287881795227},
					{x: 882, y: 4.58720068617322},
					{x: 883, y: 4.54248662108279},
					{x: 884, y: 4.64408581842336},
					{x: 885, y: 4.59800525955969},
					{x: 886, y: 4.45001973188197},
					{x: 887, y: 4.16255018048076},
					{x: 888, y: 4.76492073395771},
					{x: 889, y: 4.98330033248783},
					{x: 890, y: 4.14314644463352},
					{x: 891, y: 4.82770337539601},
					{x: 892, y: 4.88113280123647},
					{x: 893, y: 4.07045027756104},
					{x: 894, y: 4.47786534617808},
					{x: 895, y: 4.73875479431564},
					{x: 896, y: 4.73373690888977},
					{x: 897, y: 4.81624527727315},
					{x: 898, y: 4.53348006085581},
					{x: 899, y: 4.56083339645154},
					{x: 900, y: 4.34652609098969},
					{x: 901, y: 4.55075564740773},
					{x: 902, y: 4.02110270907908},
					{x: 903, y: 4.73677121294709},
					{x: 904, y: 4.83397173875473},
					{x: 905, y: 4.83631965947261},
					{x: 906, y: 4.03312036793652},
					{x: 907, y: 4.91217234375451},
					{x: 908, y: 4.0949251782849},
					{x: 909, y: 4.85090800856685},
					{x: 910, y: 4.52219981949393},
					{x: 911, y: 4.01636645570993},
					{x: 912, y: 4.12917715660222},
					{x: 913, y: 4.59317470516921},
					{x: 914, y: 4.72178736928058},
					{x: 915, y: 4.03702522163527},
					{x: 916, y: 4.17616934038968},
					{x: 917, y: 4.23243663707002},
					{x: 918, y: 4.71501279323028},
					{x: 919, y: 4.77058605524329},
					{x: 920, y: 4.5893794821348},
					{x: 921, y: 4.87293878729415},
					{x: 922, y: 4.45399139346613},
					{x: 923, y: 4.98392904597075},
					{x: 924, y: 4.25996141676158},
					{x: 925, y: 4.69066914238033},
					{x: 926, y: 4.59674380205049},
					{x: 927, y: 4.27932889919839},
					{x: 928, y: 4.27920991272379},
					{x: 929, y: 4.68376771093158},
					{x: 930, y: 4.81128107347924},
					{x: 931, y: 4.07624122060205},
					{x: 932, y: 4.36937269393744},
					{x: 933, y: 4.80623708537959},
					{x: 934, y: 4.95833098938495},
					{x: 935, y: 4.9937348422377},
					{x: 936, y: 4.42557226767273},
					{x: 937, y: 4.43315299132593},
					{x: 938, y: 4.33844556704759},
					{x: 939, y: 4.4546678410517},
					{x: 940, y: 4.7699752732301},
					{x: 941, y: 4.75570028086784},
					{x: 942, y: 4.99239393321471},
					{x: 943, y: 4.20307340645553},
					{x: 944, y: 4.37541697150051},
					{x: 945, y: 4.70867017642951},
					{x: 946, y: 4.16349794698924},
					{x: 947, y: 4.32396205281298},
					{x: 948, y: 4.80901224926978},
					{x: 949, y: 4.21895689770368},
					{x: 950, y: 3.46199820413596},
					{x: 951, y: 3.35233016672176},
					{x: 952, y: 3.0735395609287},
					{x: 953, y: 3.50519306843136},
					{x: 954, y: 3.27419996862193},
					{x: 955, y: 3.56763543802514},
					{x: 956, y: 3.02751111186044},
					{x: 957, y: 3.61371725842013},
					{x: 958, y: 3.42361196332376},
					{x: 959, y: 3.64529571931349},
					{x: 960, y: 3.30611806663025}

					],
	//function methods
	classifData	: function() { //return recordData classified into Light, Deep and REM 
				var newList = [];
				for (i = 0; i < this.recordData.length; i++){
						if (this.recordData[i].y < 4){
							newList.push({x: this.recordData[i].x, y: 3});
						} 
						else if (this.recordData[i].y >= 3 && this.recordData[i].y < 5){
							newList.push({x: this.recordData[i].x, y: 4});
						} 
						else if (this.recordData[i].y >=5){
							newList.push({x: this.recordData[i].x, y: 5});
						} 
				}
				return newList;
		
	},
	totLight	: function() { //return total light sleep
	},
	totDeep		: function() { //return total deep sleep
	},
	totSleep	: function() { //return sum of light, deep, REM sleep
	}
	
}

jQuery(document).ready(function($){	
$.getJSON("127.0.0.1:5000/json", function(data) { 
	console.log(data);
});
});
