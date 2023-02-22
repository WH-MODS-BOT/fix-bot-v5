import { smsg } from "./lib/simple.js"
import { format } from "util"
import { fileURLToPath } from "url"
import path, { join } from "path"
import { unwatchFile, watchFile, readFileSync } from "fs"
import chalk from "chalk"
import fetch from "node-fetch"
import knights from "knights-canvas"

/**
 * @type {import("@adiwajshing/baileys")}
 */
const isNumber = x => typeof x === "number" && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
    clearTimeout(this)
    resolve()
}, ms))

/**
 * Handle messages upsert
 * @param {import("@adiwajshing/baileys").BaileysEventMap<unknown>["messages.upsert"]} groupsUpdate 
 */
export async function handler(chatUpdate) {
    this.msgqueque = this.msgqueque || []
    if (!chatUpdate)
        return
    this.pushMessage(chatUpdate.messages).catch(console.error)
    let m = chatUpdate.messages[chatUpdate.messages.length - 1]
    if (!m)
        return
    if (global.db.data == null)
        await global.loadDatabase()
    try {
        m = smsg(this, m) || m
        if (!m)
            return
        m.exp = 0
        m.limit = false
        try {
            // TODO: use loop to insert data instead of this
            let user = global.db.data.users[m.sender]
            if (typeof user !== "object")
                global.db.data.users[m.sender] = {}
            if (user) {
            if (!("BannedReason" in user)) user.BannedReason = ""
              if (!("Banneduser" in user)) user.Banneduser = false
              if (!("afkReason" in user)) user.afkReason = ""
              if (!("autolevelup" in user)) user.autolevelup = false
              if (!("banned" in user)) user.banned = false
              if (!("catatan" in user)) user.catatan = ""
              if (!("job" in user)) user.job = ""
              if (!("kingdom" in user)) user.kingdom = true
              if (!("misi" in user)) user.misi = ""
              if (!("pasangan" in user)) user.pasangan = ""
              if (!("premium" in user)) user.premium = false
              if (!("registered" in user)) user.registered = false
              if (!("role" in user)) user.role = "Beginner"
              if (!("sewa" in user)) user.sewa = false
              if (!("skill" in user)) user.skill = ""
              if (!("title" in user)) user.title = ""
              
                if (!user.registered) {
                    if (!("name" in user)) user.name = m.name
                    if (!isNumber(user.age)) user.age = -1
                    if (!isNumber(user.anggur)) user.anggur = 0
                    if (!isNumber(user.apel)) user.apel = 0
                    if (!isNumber(user.bibitanggur)) user.bibitanggur = 0
                    if (!isNumber(user.bibitapel)) user.bibitapel = 0
                    if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0
                    if (!isNumber(user.bibitmangga)) user.bibitmangga = 0
                    if (!isNumber(user.bibitpisang)) user.bibitpisang = 0
                    if (!isNumber(user.emas)) user.emas = 0
                    if (!isNumber(user.jeruk)) user.jeruk = 0
                    if (!isNumber(user.kayu)) user.kayu = 0
                    if (!isNumber(user.makanan)) user.makanan = 0
                    if (!isNumber(user.mangga)) user.mangga = 0
                    if (!isNumber(user.pisang)) user.pisang = 0
                    if (!isNumber(user.premiumDate)) user.premiumDate = -1
                    if (!isNumber(user.regTime)) user.regTime = -1
                    if (!isNumber(user.semangka)) user.semangka = 0
                    if (!isNumber(user.stroberi)) user.stroberi = 0
                }
              
              
              if (!isNumber(user.afk)) user.afk = -1
              if (!isNumber(user.agility)) user.agility = 0
              if (!isNumber(user.anakanjing)) user.anakanjing = 0
              if (!isNumber(user.anakcentaur)) user.anakcentaur = 0
              if (!isNumber(user.anakgriffin)) user.anakgriffin = 0
              if (!isNumber(user.anakkucing)) user.anakkucing = 0
              if (!isNumber(user.anakkuda)) user.anakkuda = 0
              if (!isNumber(user.anakkyubi)) user.anakkyubi = 0
              if (!isNumber(user.anaknaga)) user.anaknaga = 0
              if (!isNumber(user.anakpancingan)) user.anakpancingan = 0
              if (!isNumber(user.anakphonix)) user.anakphonix = 0
              if (!isNumber(user.anakrubah)) user.anakrubah = 0
              if (!isNumber(user.anakserigala)) user.anakserigala = 0
              if (!isNumber(user.anggur)) user.anggur = 0
              if (!isNumber(user.anjing)) user.anjing = 0
              if (!isNumber(user.anjinglastclaim)) user.anjinglastclaim = 0
              if (!isNumber(user.antispam)) user.antispam = 0
              if (!isNumber(user.antispamlastclaim)) user.antispamlastclaim = 0
              if (!isNumber(user.apel)) user.apel = 0
              if (!isNumber(user.aqua)) user.aqua = 0
              if (!isNumber(user.arc)) user.arc = 0
              if (!isNumber(user.arcdurability)) user.arcdurability = 0
              if (!isNumber(user.arlok)) user.arlok = 0
              if (!isNumber(user.armor)) user.armor = 0
              if (!isNumber(user.armordurability)) user.armordurability = 0
              if (!isNumber(user.armormonster)) user.armormonster = 0
              if (!isNumber(user.as)) user.as = 0
              if (!isNumber(user.atm)) user.atm = 0
              if (!isNumber(user.axe)) user.axe = 0
              if (!isNumber(user.axedurability)) user.axedurability = 0
              if (!isNumber(user.ayam)) user.ayam = 0
              if (!isNumber(user.ayamb)) user.ayamb = 0
              if (!isNumber(user.ayambakar)) user.ayambakar = 0
              if (!isNumber(user.ayamg)) user.ayamg = 0
              if (!isNumber(user.ayamgoreng)) user.ayamgoreng = 0
              if (!isNumber(user.babi)) user.babi = 0
              if (!isNumber(user.babihutan)) user.babihutan = 0
              if (!isNumber(user.babipanggang)) user.babipanggang = 0
              if (!isNumber(user.bandage)) user.bandage = 0
              if (!isNumber(user.bank)) user.bank = 0
              if (!isNumber(user.banteng)) user.banteng = 0
              if (!isNumber(user.batu)) user.batu = 0
              if (!isNumber(user.bawal)) user.bawal = 0
              if (!isNumber(user.bawalbakar)) user.bawalbakar = 0
              if (!isNumber(user.bayam)) user.bayam = 0
              if (!isNumber(user.berlian)) user.berlian = 10
              if (!isNumber(user.bibitanggur)) user.bibitanggur = 0
              if (!isNumber(user.bibitapel)) user.bibitapel = 0
              if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0
              if (!isNumber(user.bibitmangga)) user.bibitmangga = 0
              if (!isNumber(user.bibitpisang)) user.bibitpisang = 0
              if (!isNumber(user.botol)) user.botol = 0
              if (!isNumber(user.bow)) user.bow = 0
              if (!isNumber(user.bowdurability)) user.bowdurability = 0
              if (!isNumber(user.boxs)) user.boxs = 0
              if (!isNumber(user.brick)) user.brick = 0
              if (!isNumber(user.brokoli)) user.brokoli = 0
              if (!isNumber(user.buaya)) user.buaya = 0
              if (!isNumber(user.buntal)) user.buntal = 0
              if (!isNumber(user.cat)) user.cat = 0
              if (!isNumber(user.catexp)) user.catexp = 0
              if (!isNumber(user.catlastfeed)) user.catlastfeed = 0
              if (!isNumber(user.centaur)) user.centaur = 0
              if (!isNumber(user.centaurexp)) user.centaurexp = 0
              if (!isNumber(user.centaurlastclaim)) user.centaurlastclaim = 0
              if (!isNumber(user.centaurlastfeed)) user.centaurlastfeed = 0
              if (!isNumber(user.clay)) user.clay = 0
              if (!isNumber(user.coal)) user.coal = 0
              if (!isNumber(user.coin)) user.coin = 0
              if (!isNumber(user.common)) user.common = 0
              if (!isNumber(user.crystal)) user.crystal = 0
              if (!isNumber(user.cumi)) user.cumi = 0
              if (!isNumber(user.cupon)) user.cupon = 0
              if (!isNumber(user.diamond)) user.diamond = 0
              if (!isNumber(user.dog)) user.dog = 0
              if (!isNumber(user.dogexp)) user.dogexp = 0
              if (!isNumber(user.doglastfeed)) user.doglastfeed = 0
              if (!isNumber(user.dory)) user.dory = 0
              if (!isNumber(user.dragon)) user.dragon = 0
              if (!isNumber(user.dragonexp)) user.dragonexp = 0
              if (!isNumber(user.dragonlastfeed)) user.dragonlastfeed = 0
              if (!isNumber(user.emas)) user.emas = 0
              if (!isNumber(user.emerald)) user.emerald = 0
              if (!isNumber(user.enchant)) user.enchant = 0
              if (!isNumber(user.esteh)) user.esteh = 0
              if (!isNumber(user.exp)) user.exp = 0
              if (!isNumber(user.expg)) user.expg = 0
              if (!isNumber(user.exphero)) user.exphero = 0
              if (!isNumber(user.fishingrod)) user.fishingrod = 0
              if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0
              if (!isNumber(user.fortress)) user.fortress = 0
              if (!isNumber(user.fox)) user.fox = 0
              if (!isNumber(user.foxexp)) user.foxexp = 0
              if (!isNumber(user.foxlastfeed)) user.foxlastfeed = 0
              if (!isNumber(user.fullatm)) user.fullatm = Infinity
              if (!isNumber(user.gadodado)) user.gadodado = 0
              if (!isNumber(user.gajah)) user.gajah = 0
              if (!isNumber(user.gamemines)) user.gamemines = false
              if (!isNumber(user.ganja)) user.ganja = 0
              if (!isNumber(user.gardenboxs)) user.gardenboxs = 0
              if (!isNumber(user.gems)) user.gems = 0
              if (!isNumber(user.glass)) user.glass = 0
              if (!isNumber(user.glimit)) user.glimit = 20
              if (!isNumber(user.glory)) user.glory = 0
              if (!isNumber(user.gold)) user.gold = 0
              if (!isNumber(user.griffin)) user.griffin = 0
              if (!isNumber(user.griffinexp)) user.griffinexp = 0
              if (!isNumber(user.griffinlastclaim)) user.griffinlastclaim = 0
              if (!isNumber(user.griffinlastfeed)) user.griffinlastfeed = 0
              if (!isNumber(user.gulai)) user.gulai = 0
              if (!isNumber(user.gurita)) user.gurita = 0
              if (!isNumber(user.harimau)) user.harimau = 0
              if (!isNumber(user.haus)) user.haus = 100
              if (!isNumber(user.healt)) user.healt = 100
              if (!isNumber(user.health)) user.health = 100
              if (!isNumber(user.healthmonster)) user.healthmonster = 0
              if (!isNumber(user.healtmonster)) user.healtmonster = 0
              if (!isNumber(user.hero)) user.hero = 1
              if (!isNumber(user.herolastclaim)) user.herolastclaim = 0
              if (!isNumber(user.hiu)) user.hiu = 0
              if (!isNumber(user.horse)) user.horse = 0
              if (!isNumber(user.horseexp)) user.horseexp = 0
              if (!isNumber(user.horselastfeed)) user.horselastfeed = 0
              if (!isNumber(user.ikan)) user.ikan = 0
              if (!isNumber(user.ikanbakar)) user.ikanbakar = 0
              if (!isNumber(user.intelligence)) user.intelligence = 0
              if (!isNumber(user.iron)) user.iron = 0
              if (!isNumber(user.jagung)) user.jagung = 0
              if (!isNumber(user.jagungbakar)) user.jagungbakar = 0
              if (!isNumber(user.jeruk)) user.jeruk = 0
              if (!isNumber(user.joinlimit)) user.joinlimit = 1
              if (!isNumber(user.judilast)) user.judilast = 0
              if (!isNumber(user.kaleng)) user.kaleng = 0
              if (!isNumber(user.kambing)) user.kambing = 0
              if (!isNumber(user.kangkung)) user.kangkung = 0
              if (!isNumber(user.kapak)) user.kapak = 0
              if (!isNumber(user.kardus)) user.kardus = 0
              if (!isNumber(user.katana)) user.katana = 0
              if (!isNumber(user.katanadurability)) user.katanadurability = 0
              if (!isNumber(user.kayu)) user.kayu = 0
              if (!isNumber(user.kentang)) user.kentang = 0
              if (!isNumber(user.kentanggoreng)) user.kentanggoreng = 0
              if (!isNumber(user.kepiting)) user.kepiting = 0
              if (!isNumber(user.kepitingbakar)) user.kepitingbakar = 0
              if (!isNumber(user.kerbau)) user.kerbau = 0
              if (!isNumber(user.kerjadelapan)) user.kerjadelapan = 0
              if (!isNumber(user.kerjadelapanbelas)) user.kerjadelapanbelas = 0
              if (!isNumber(user.kerjadua)) user.kerjadua = 0
              if (!isNumber(user.kerjaduabelas)) user.kerjaduabelas = 0
              if (!isNumber(user.kerjaduadelapan)) user.kerjaduadelapan = 0
              if (!isNumber(user.kerjaduadua)) user.kerjaduadua = 0
              if (!isNumber(user.kerjaduaempat)) user.kerjaduaempat = 0
              if (!isNumber(user.kerjaduaenam)) user.kerjaduaenam = 0
              if (!isNumber(user.kerjadualima)) user.kerjadualima = 0
              if (!isNumber(user.kerjaduapuluh)) user.kerjaduapuluh = 0
              if (!isNumber(user.kerjaduasatu)) user.kerjaduasatu = 0
              if (!isNumber(user.kerjaduasembilan)) user.kerjaduasembilan = 0
              if (!isNumber(user.kerjaduatiga)) user.kerjaduatiga = 0
              if (!isNumber(user.kerjaduatujuh)) user.kerjaduatujuh = 0
              if (!isNumber(user.kerjaempat)) user.kerjaempat = 0
              if (!isNumber(user.kerjaempatbelas)) user.kerjaempatbelas = 0
              if (!isNumber(user.kerjaenam)) user.kerjaenam = 0
              if (!isNumber(user.kerjaenambelas)) user.kerjaenambelas = 0
              if (!isNumber(user.kerjalima)) user.kerjalima = 0
              if (!isNumber(user.kerjalimabelas)) user.kerjalimabelas = 0
              if (!isNumber(user.kerjasatu)) user.kerjasatu = 0
              if (!isNumber(user.kerjasebelas)) user.kerjasebelas = 0
              if (!isNumber(user.kerjasembilan)) user.kerjasembilan = 0
              if (!isNumber(user.kerjasembilanbelas)) user.kerjasembilanbelas = 0
              if (!isNumber(user.kerjasepuluh)) user.kerjasepuluh = 0
              if (!isNumber(user.kerjatiga)) user.kerjatiga = 0
              if (!isNumber(user.kerjatigabelas)) user.kerjatigabelas = 0
              if (!isNumber(user.kerjatigapuluh)) user.kerjatigapuluh = 0
              if (!isNumber(user.kerjatujuh)) user.kerjatujuh = 0
              if (!isNumber(user.kerjatujuhbelas)) user.kerjatujuhbelas = 0
              if (!isNumber(user.korbanngocok)) user.korbanngocok = 0
              if (!isNumber(user.kubis)) user.kubis = 0
              if (!isNumber(user.kucing)) user.kucing = 0
              if (!isNumber(user.kucinglastclaim)) user.kucinglastclaim = 0
              if (!isNumber(user.kuda)) user.kuda = 0
              if (!isNumber(user.kudalastclaim)) user.kudalastclaim = 0
              if (!isNumber(user.kyubi)) user.kyubi = 0
              if (!isNumber(user.kyubiexp)) user.kyubiexp = 0
              if (!isNumber(user.kyubilastclaim)) user.kyubilastclaim = 0
              if (!isNumber(user.kyubilastfeed)) user.kyubilastfeed = 0
              if (!isNumber(user.labu)) user.labu = 0
              if (!isNumber(user.laper)) user.laper = 100
              if (!isNumber(user.lastadventure)) user.lastadventure = 0
              if (!isNumber(user.lastbansos)) user.lastbansos = 0
              if (!isNumber(user.lastberbru)) user.lastberbru = 0
              if (!isNumber(user.lastberkebon)) user.lastberkebon = 0
              if (!isNumber(user.lastbunga)) user.lastbunga = 0
              if (!isNumber(user.lastbunuhi)) user.lastbunuhi = 0
              if (!isNumber(user.lastclaim)) user.lastclaim = 0
              if (!isNumber(user.lastcode)) user.lastcode = 0
              if (!isNumber(user.lastcodereg)) user.lastcodereg = 0
              if (!isNumber(user.lastcrusade)) user.lastcrusade = 0
              if (!isNumber(user.lastdagang)) user.lastdagang = 0
              if (!isNumber(user.lastduel)) user.lastduel = 0
              if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
              if (!isNumber(user.lasteasy)) user.lasteasy = 0
              if (!isNumber(user.lastfight)) user.lastfight = 0
              if (!isNumber(user.lastfishing)) user.lastfishing = 0
              if (!isNumber(user.lastgift)) user.lastgift = 0
              if (!isNumber(user.lastgojek)) user.lastgojek = 0
              if (!isNumber(user.lastgrab)) user.lastgrab = 0
              if (!isNumber(user.lasthourly)) user.lasthourly = 0
              if (!isNumber(user.lasthunt)) user.lasthunt = 0
              if (!isNumber(user.lastIstigfar)) user.lastIstigfar = 0
              if (!isNumber(user.lastjb)) user.lastjb = 0
              if (!isNumber(user.lastkill)) user.lastkill = 0
              if (!isNumber(user.lastlink)) user.lastlink = 0
              if (!isNumber(user.lastlumber)) user.lastlumber = 0
              if (!isNumber(user.lastmancingeasy)) user.lastmancingeasy = 0
              if (!isNumber(user.lastmancingextreme)) user.lastmancingextreme = 0
              if (!isNumber(user.lastmancinghard)) user.lastmancinghard = 0
              if (!isNumber(user.lastmancingnormal)) user.lastmancingnormal = 0
              if (!isNumber(user.lastmining)) user.lastmining = 0
              if (!isNumber(user.lastmisi)) user.lastmisi = 0
              if (!isNumber(user.lastmonthly)) user.lastmonthly = 0
              if (!isNumber(user.lastmulung)) user.lastmulung = 0
              if (!isNumber(user.lastnambang)) user.lastnambang = 0
              if (!isNumber(user.lastnebang)) user.lastnebang = 0
              if (!isNumber(user.lastngocok)) user.lastngocok = 0
              if (!isNumber(user.lastngojek)) user.lastngojek = 0
              if (!isNumber(user.lastopen)) user.lastopen = 0
              if (!isNumber(user.lastpekerjaan)) user.lastpekerjaan = 0
              if (!isNumber(user.lastpotionclaim)) user.lastpotionclaim = 0
              if (!isNumber(user.lastrampok)) user.lastrampok = 0
              if (!isNumber(user.lastramuanclaim)) user.lastramuanclaim = 0
              if (!isNumber(user.lastrob)) user.lastrob = 0
              if (!isNumber(user.lastroket)) user.lastroket = 0
              if (!isNumber(user.lastsda)) user.lastsda = 0
              if (!isNumber(user.lastseen)) user.lastseen = 0
              if (!isNumber(user.lastSetStatus)) user.lastSetStatus = 0
              if (!isNumber(user.lastsironclaim)) user.lastsironclaim = 0
              if (!isNumber(user.lastsmancingclaim)) user.lastsmancingclaim = 0
              if (!isNumber(user.laststringclaim)) user.laststringclaim = 0
              if (!isNumber(user.lastswordclaim)) user.lastswordclaim = 0
              if (!isNumber(user.lastturu)) user.lastturu = 0
              if (!isNumber(user.lastwar)) user.lastwar = 0
              if (!isNumber(user.lastwarpet)) user.lastwarpet = 0
              if (!isNumber(user.lastweaponclaim)) user.lastweaponclaim = 0
              if (!isNumber(user.lastweekly)) user.lastweekly = 0
              if (!isNumber(user.lastwork)) user.lastwork = 0
              if (!isNumber(user.legendary)) user.legendary = 0
              if (!isNumber(user.lele)) user.lele = 0
              if (!isNumber(user.leleb)) user.leleb = 0
              if (!isNumber(user.lelebakar)) user.lelebakar = 0
              if (!isNumber(user.leleg)) user.leleg = 0
              if (!isNumber(user.level)) user.level = 0
              if (!isNumber(user.limit)) user.limit = 10
              if (!isNumber(user.limitjoinfree)) user.limitjoinfree = 1
              if (!isNumber(user.lion)) user.lion = 0
              if (!isNumber(user.lionexp)) user.lionexp = 0
              if (!isNumber(user.lionlastfeed)) user.lionlastfeed = 0
              if (!isNumber(user.lobster)) user.lobster = 0
              if (!isNumber(user.lumba)) user.lumba = 0
              if (!isNumber(user.magicwand)) user.magicwand = 0
              if (!isNumber(user.magicwanddurability)) user.magicwanddurability = 0
              if (!isNumber(user.makanancentaur)) user.makanancentaur = 0
              if (!isNumber(user.makanangriffin)) user.makanangriffin = 0
              if (!isNumber(user.makanankyubi)) user.makanankyubi = 0
              if (!isNumber(user.makanannaga)) user.makanannaga = 0
              if (!isNumber(user.makananpet)) user.makananpet = 0
              if (!isNumber(user.makananphonix)) user.makananphonix = 0
              if (!isNumber(user.makananserigala)) user.makananserigala = 0
              if (!isNumber(user.mana)) user.mana = 0
              if (!isNumber(user.mangga)) user.mangga = 0
              if (!isNumber(user.money)) user.money = 0
              if (!isNumber(user.monyet)) user.monyet = 0
              if (!isNumber(user.mythic)) user.mythic = 0
              if (!isNumber(user.naga)) user.naga = 0
              if (!isNumber(user.nagalastclaim)) user.nagalastclaim = 0
              if (!isNumber(user.net)) user.net = 0
              if (!isNumber(user.nila)) user.nila = 0
              if (!isNumber(user.nilabakar)) user.nilabakar = 0
              if (!isNumber(user.ojekk)) user.ojekk = 0
              if (!isNumber(user.oporayam)) user.oporayam = 0
              if (!isNumber(user.orca)) user.orca = 0
              if (!isNumber(user.pancing)) user.pancing = 0
              if (!isNumber(user.pancingan)) user.pancingan = 1
              if (!isNumber(user.panda)) user.panda = 0
              if (!isNumber(user.paus)) user.paus = 0
              if (!isNumber(user.pausbakar)) user.pausbakar = 0
              if (!isNumber(user.pc)) user.pc = 0
              if (!isNumber(user.pepesikan)) user.pepesikan = 0
              if (!isNumber(user.pertambangan)) user.pertambangan = 0
              if (!isNumber(user.pertanian)) user.pertanian = 0
              if (!isNumber(user.pet)) user.pet = 0
              if (!isNumber(user.petFood)) user.petFood = 0
              if (!isNumber(user.phonix)) user.phonix = 0
              if (!isNumber(user.phonixexp)) user.phonixexp = 0
              if (!isNumber(user.phonixlastclaim)) user.phonixlastclaim = 0
              if (!isNumber(user.phonixlastfeed)) user.phonixlastfeed = 0
              if (!isNumber(user.pickaxe)) user.pickaxe = 0
              if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
              if (!isNumber(user.pillhero)) user.pillhero= 0
              if (!isNumber(user.pisang)) user.pisang = 0
              if (!isNumber(user.pointxp)) user.pointxp = 0
              if (!isNumber(user.potion)) user.potion = 0
              if (!isNumber(user.psenjata)) user.psenjata = 0
              if (!isNumber(user.psepick)) user.psepick = 0
              if (!isNumber(user.ramuan)) user.ramuan = 0
              if (!isNumber(user.ramuancentaurlast)) user.ramuancentaurlast = 0
              if (!isNumber(user.ramuangriffinlast)) user.ramuangriffinlast = 0
              if (!isNumber(user.ramuanherolast)) user.ramuanherolast = 0
              if (!isNumber(user.ramuankucinglast)) user.ramuankucinglast = 0
              if (!isNumber(user.ramuankudalast)) user.ramuankudalast = 0
              if (!isNumber(user.ramuankyubilast)) user.ramuankyubilast = 0
              if (!isNumber(user.ramuannagalast)) user.ramuannagalast = 0
              if (!isNumber(user.ramuanphonixlast)) user.ramuanphonixlast = 0
              if (!isNumber(user.ramuanrubahlast)) user.ramuanrubahlast = 0
              if (!isNumber(user.ramuanserigalalast)) user.ramuanserigalalast = 0
              if (!isNumber(user.reglast)) user.reglast = 0
              if (!isNumber(user.rendang)) user.rendang = 0
              if (!isNumber(user.rhinoceros)) user.rhinoceros = 0
              if (!isNumber(user.rhinocerosexp)) user.rhinocerosexp = 0
              if (!isNumber(user.rhinoceroslastfeed)) user.rhinoceroslastfeed = 0
              if (!isNumber(user.robo)) user.robo = 0
              if (!isNumber(user.roboxp)) user.roboxp = 0
              if (!isNumber(user.rock)) user.rock = 0
              if (!isNumber(user.roket)) user.roket = 0
              if (!isNumber(user.roti)) user.roti = 0
              if (!isNumber(user.rubah)) user.rubah = 0
              if (!isNumber(user.rubahlastclaim)) user.rubahlastclaim = 0
              if (!isNumber(user.rumahsakit)) user.rumahsakit = 0
              if (!isNumber(user.sampah)) user.sampah = 0
              if (!isNumber(user.sand)) user.sand = 0
              if (!isNumber(user.sapi)) user.sapi = 0
              if (!isNumber(user.sapir)) user.sapir = 0
              if (!isNumber(user.seedbayam)) user.seedbayam = 0
              if (!isNumber(user.seedbrokoli)) user.seedbrokoli = 0
              if (!isNumber(user.seedjagung)) user.seedjagung = 0
              if (!isNumber(user.seedkangkung)) user.seedkangkung = 0
              if (!isNumber(user.seedkentang)) user.seedkentang = 0
              if (!isNumber(user.seedkubis)) user.seedkubis = 0
              if (!isNumber(user.seedlabu)) user.seedlabu = 0
              if (!isNumber(user.seedtomat)) user.seedtomat = 0
              if (!isNumber(user.seedwortel)) user.seedwortel = 0
              if (!isNumber(user.serigala)) user.serigala = 0
              if (!isNumber(user.serigalalastclaim)) user.serigalalastclaim = 0
              if (!isNumber(user.shield)) user.shield = false
              if (!isNumber(user.skillexp)) user.skillexp = 0
              if (!isNumber(user.snlast)) user.snlast = 0
              if (!isNumber(user.soda)) user.soda = 0
              if (!isNumber(user.sop)) user.sop = 0
              if (!isNumber(user.spammer)) user.spammer = 0
              if (!isNumber(user.spinlast)) user.spinlast = 0
              if (!isNumber(user.ssapi)) user.ssapi = 0
              if (!isNumber(user.stamina)) user.stamina = 100
              if (!isNumber(user.steak)) user.steak = 0
              if (!isNumber(user.stick)) user.stick = 0
              if (!isNumber(user.strength)) user.strength = 0
              if (!isNumber(user.string)) user.string = 0
              if (!isNumber(user.superior)) user.superior = 0
              if (!isNumber(user.suplabu)) user.suplabu = 0
              if (!isNumber(user.sushi)) user.sushi = 0
              if (!isNumber(user.sword)) user.sword = 0
              if (!isNumber(user.sworddurability)) user.sworddurability = 0
              if (!isNumber(user.tigame)) user.tigame = 50
              if (!isNumber(user.tiketcoin)) user.tiketcoin = 0
              if (!isNumber(user.title)) user.title = 0
              if (!isNumber(user.tomat)) user.tomat = 0
              if (!isNumber(user.tprem)) user.tprem = 0
              if (!isNumber(user.trash)) user.trash = 0
              if (!isNumber(user.trofi)) user.trofi = 0
              if (!isNumber(user.troopcamp)) user.troopcamp = 0
              if (!isNumber(user.tumiskangkung)) user.tumiskangkung = 0
              if (!isNumber(user.udang)) user.udang = 0
              if (!isNumber(user.udangbakar)) user.udangbakar = 0
              if (!isNumber(user.umpan)) user.umpan = 0
              if (!isNumber(user.uncommon)) user.uncommon = 0
              if (!isNumber(user.unreglast)) user.unreglast = 0
              if (!isNumber(user.upgrader)) user.upgrader = 0
              if (!isNumber(user.vodka)) user.vodka = 0
              if (!isNumber(user.wallet)) user.wallet = 0
              if (!isNumber(user.warn)) user.warn = 0
              if (!isNumber(user.weapon)) user.weapon = 0
              if (!isNumber(user.weapondurability)) user.weapondurability = 0
              if (!isNumber(user.wolf)) user.wolf = 0
              if (!isNumber(user.wolfexp)) user.wolfexp = 0
              if (!isNumber(user.wolflastfeed)) user.wolflastfeed = 0
              if (!isNumber(user.wood)) user.wood = 0
              if (!isNumber(user.wortel)) user.wortel = 0
              
              if (!user.lbars) user.lbars = "[▒▒▒▒▒▒▒▒▒]"
              if (!user.job) user.job = "Pengangguran"
              if (!user.premium) user.premium = false
              if (!user.premium) user.premiumTime = 0
              if (!user.rtrofi) user.rtrofi = "Perunggu"
              if (!isNumber(user.limitjoin))
                        user.limitjoin = 0
            } else
                global.db.data.users[m.sender] = {
                    afk: -1,
                    afkReason: "",
                    age: -1,
                    agility: 16,
                    anakanjing: 0,
                    anakcentaur: 0,
                    anakgriffin: 0,
                    anakkucing: 0,
                    anakkuda: 0,
                    anakkyubi: 0,
                    anaknaga: 0,
                    anakpancingan: 0,
                    anakphonix: 0,
                    anakrubah: 0,
                    anakserigala: 0,
                    anggur: 0,
                    anjing: 0,
                    anjinglastclaim: 0,
                    antispam: 0,
                    antispamlastclaim: 0,
                    apel: 0,
                    aqua: 0,
                    arc: 0,
                    arcdurability: 0,
                    arlok: 0,
                    armor: 0,
                    armordurability: 0,
                    armormonster: 0,
                    as: 0,
                    atm: 0,
                    autolevelup: false,
                    axe: 0,
                    axedurability: 0,
                    ayam: 0,
                    ayamb: 0,
                    ayambakar: 0,
                    ayamg: 0,
                    ayamgoreng: 0,
                    babi: 0,
                    babihutan: 0,
                    babipanggang: 0,
                    bandage: 0,
                    bank: 0,
                    banned: false,
                    BannedReason: "",
                    Banneduser: false,
                    banteng: 0,
                    batu: 0,
                    bawal: 0,
                    bawalbakar: 0,
                    bayam: 0,
                    berlian: 100,
                    bibitanggur: 0,
                    bibitapel: 0,
                    bibitjeruk: 0,
                    bibitmangga: 0,
                    bibitpisang: 0,
                    botol: 0,
                    bow: 0,
                    bowdurability: 0,
                    boxs: 0,
                    brick: 0,
                    brokoli: 0,
                    buaya: 0,
                    buntal: 0,
                    cat: 0,
                    catlastfeed: 0,
                    catngexp: 0,
                    centaur: 0,
                    centaurexp: 0,
                    centaurlastclaim: 0,
                    centaurlastfeed: 0,
                    clay: 0,
                    coal: 0,
                    coin: 0,
                    common: 0,
                    crystal: 0,
                    cumi: 0,
                    cupon: 0,
                    diamond: 0,
                    dog: 0,
                    dogexp: 0,
                    doglastfeed: 0,
                    dory: 0,
                    dragon: 0,
                    dragonexp: 0,
                    dragonlastfeed: 0,
                    emas: 0,
                    emerald: 0,
                    esteh: 0,
                    exp: 0,
                    expg: 0,
                    exphero: 0,
                    expired: 0,
                    fishingrod: 0,
                    fishingroddurability: 0,
                    fortress: 0,
                    fox: 0,
                    foxexp: 0,
                    foxlastfeed: 0,
                    fullatm: Infinity,
                    gadodado: 0,
                    gajah: 0,
                    gamemines: false,
                    ganja: 0,
                    gardenboxs: 0,
                    gems: 0,
                    glass: 0,
                    gold: 0,
                    griffin: 0,
                    griffinexp: 0,
                    griffinlastclaim: 0,
                    griffinlastfeed: 0,
                    gulai: 0,
                    gurita: 0,
                    harimau: 0,
                    haus: 100,
                    healt: 100,
                    health: 100,
                    healtmonster: 100,
                    hero: 1,
                    herolastclaim: 0,
                    hiu: 0,
                    horse: 0,
                    horseexp: 0,
                    horselastfeed: 0,
                    ikan: 0,
                    ikanbakar: 0,
                    intelligence: 10,
                    iron: 0,
                    jagung: 0,
                    jagungbakar: 0,
                    jeruk: 0,
                    job: "Pengangguran",
                    joinlimit: 1,
                    judilast: 0,
                    kaleng: 0,
                    kambing: 0,
                    kangkung: 0,
                    kapak: 0,
                    kardus: 0,
                    katana: 0,
                    katanadurability: 0,
                    kayu: 0,
                    kentang: 0,
                    kentanggoreng: 0,
                    kepiting: 0,
                    kepitingbakar: 0,
                    kerbau: 0,
                    kerjadelapan: 0,
                    kerjadelapanbelas: 0,
                    kerjadua: 0,
                    kerjaduabelas: 0,
                    kerjaduadelapan: 0,
                    kerjaduadua: 0,
                    kerjaduaempat: 0,
                    kerjaduaenam: 0,
                    kerjadualima: 0,
                    kerjaduapuluh: 0,
                    kerjaduasatu: 0,
                    kerjaduasembilan: 0,
                    kerjaduatiga: 0,
                    kerjaduatujuh: 0,
                    kerjaempat: 0,
                    kerjaempatbelas: 0,
                    kerjaenam: 0,
                    kerjaenambelas: 0,
                    kerjalima: 0,
                    kerjalimabelas: 0,
                    kerjasatu: 0,
                    kerjasebelas: 0,
                    kerjasembilan: 0,
                    kerjasembilanbelas: 0,
                    kerjasepuluh: 0,
                    kerjatiga: 0,
                    kerjatigabelas: 0,
                    kerjatigapuluh: 0,
                    kerjatujuh: 0,
                    kerjatujuhbelas: 0,
                    korbanngocok: 0,
                    kubis: 0,
                    kucing: 0,
                    kucinglastclaim: 0,
                    kuda: 0,
                    kudalastclaim: 0,
                    kumba: 0,
                    kyubi: 0,
                    kyubilastclaim: 0,
                    labu: 0,
                    laper: 100,
                    lastadventure: 0,
                    lastberbru: 0,
                    lastberkebon: 0,
                    lastbunga: 0,
                    lastbunuhi: 0,
                    lastclaim: 0,
                    lastcode: 0,
                    lastcrusade: 0,
                    lastdagang: 0,
                    lastduel: 0,
                    lastdungeon: 0,
                    lasteasy: 0,
                    lastfight: 0,
                    lastfishing: 0,
                    lastgojek: 0,
                    lastgrab: 0,
                    lasthourly: 0,
                    lasthunt: 0,
                    lastjb: 0,
                    lastkill: 0,
                    lastlink: 0,
                    lastlumber: 0,
                    lastmancingeasy: 0,
                    lastmancingextreme: 0,
                    lastmancinghard: 0,
                    lastmancingnormal: 0,
                    lastmining: 0,
                    lastmisi: 0,
                    lastmonthly: 0,
                    lastmulung: 0,
                    lastnambang: 0,
                    lastnebang: 0,
                    lastngocok: 0,
                    lastngojek: 0,
                    lastopen: 0,
                    lastpekerjaan: 0,
                    lastpotionclaim: 0,
                    lastramuanclaim: 0,
                    lastrob: 0,
                    lastroket: 0,
                    lastseen: 0,
                    lastSetStatus: 0,
                    lastsironclaim: 0,
                    lastsmancingclaim: 0,
                    laststringclaim: 0,
                    lastswordclaim: 0,
                    lastturu: 0,
                    lastwarpet: 0,
                    lastweaponclaim: 0,
                    lastweekly: 0,
                    lastwork: 0,
                    lbars: "[▒▒▒▒▒▒▒▒▒]",
                    legendary: 0,
                    lele: 0,
                    leleb: 0,
                    lelebakar: 0,
                    leleg: 0,
                    level: 0,
                    limit: 25,
                    limitjoinfree: 1,
                    lion: 0,
                    lionexp: 0,
                    lionlastfeed: 0,
                    lobster: 0,
                    lumba: 0,
                    magicwand: 0,
                    magicwanddurability: 0,
                    makanan: 0,
                    makanancentaur: 0,
                    makanangriffin: 0,
                    makanankyubi: 0,
                    makanannaga: 0,
                    makananpet: 0,
                    makananphonix: 0,
                    makananserigala: 0,
                    mana: 20,
                    mangga: 0,
                    misi: "",
                    money: 0,
                    monyet: 0,
                    mythic: 0,
                    naga: 0,
                    nagalastclaim: 0,
                    name: m.name,
                    net: 0,
                    nila: 0,
                    nilabakar: 0,
                    catatan: "",
                    ojekk: 0,
                    oporayam: 0,
                    orca: 0,
                    pancingan: 1,
                    panda: 0,
                    pasangan: "",
                    paus: 0,
                    pausbakar: 0,
                    pc: 0,
                    pepesikan: 0,
                    pet: 0,
                    phonix: 0,
                    phonixexp: 0,
                    phonixlastclaim: 0,
                    phonixlastfeed: 0,
                    pickaxe: 0,
                    pickaxedurability: 0,
                    pillhero: 0,
                    pisang: 0,
                    pointxp: 0,
                    potion: 10,
                    premium: false,
                    premiumTime: 0,
                    ramuan: 0,
                    ramuancentaurlast: 0,
                    ramuangriffinlast: 0,
                    ramuanherolast: 0,
                    ramuankucinglast: 0,
                    ramuankudalast: 0,
                    ramuankyubilast: 0,
                    ramuannagalast: 0,
                    ramuanphonixlast: 0,
                    ramuanrubahlast: 0,
                    ramuanserigalalast: 0,
                    registered: false,
                    reglast: 0,
                    regTime: -1,
                    rendang: 0,
                    rhinoceros: 0,
                    rhinocerosexp: 0,
                    rhinoceroslastfeed: 0,
                    rock: 0,
                    roket: 0,
                    role: "Newbie ㋡",
                    roti: 0,
                    rtrofi: "perunggu",
                    rubah: 0,
                    rubahlastclaim: 0,
                    rumahsakit: 0,
                    sampah: 0,
                    sand: 0,
                    sapi: 0,
                    sapir: 0,
                    seedbayam: 0,
                    seedbrokoli: 0,
                    seedjagung: 0,
                    seedkangkung: 0,
                    seedkentang: 0,
                    seedkubis: 0,
                    seedlabu: 0,
                    seedtomat: 0,
                    seedwortel: 0,
                    semangka: 0,
                    serigala: 0,
                    serigalalastclaim: 0,
                    sewa: false,
                    shield: 0,
                    skill: "",
                    skillexp: 0,
                    snlast: 0,
                    soda: 0,
                    sop: 0,
                    spammer: 0,
                    spinlast: 0,
                    ssapi: 0,
                    stamina: 100,
                    steak: 0,
                    stick: 0,
                    strength: 30,
                    string: 0,
                    stroberi: 0,
                    superior: 0,
                    suplabu: 0,
                    sushi: 0,
                    sword: 0,
                    sworddurability: 0,
                    tigame: 50,
                    tiketcoin: 0,
                    title: "",
                    tomat: 0,
                    tprem: 0,
                    trash: 0,
                    trofi: 0,
                    troopcamp: 0,
                    tumiskangkung: 0,
                    udang: 0,
                    udangbakar: 0,
                    umpan: 0,
                    uncommon: 0,
                    unreglast: 0,
                    upgrader: 0,
                    vodka: 0,
                    wallet: 0,
                    warn: 0,
                    weapon: 0,
                    weapondurability: 0,
                    wolf: 0,
                    wolfexp: 0,
                    wolflastfeed: 0,
                    wood: 0,
                    wortel: 0,
                    limitjoin: 0,
                }
            let chat = global.db.data.chats[m.chat]
            if (typeof chat !== "object")
                global.db.data.chats[m.chat] = {}
            if (chat) {
                if (!("antiDelete" in chat)) chat.antiDelete = true
                if (!("antiLink" in chat)) chat.antiLink = false
                if (!("antiSticker" in chat)) chat.antiSticker = false
                if (!("antiToxic" in chat)) chat.antiToxic = true
                if (!("detect" in chat)) chat.detect = true
                if (!("getmsg" in chat)) chat.getmsg = true
                if (!("isBanned" in chat)) chat.isBanned = false
                if (!("lastAnime" in chat)) chat.lastAnime = true
                if (!("latestNews" in chat)) chat.latestNews = true
                if (!("nsfw" in chat)) chat.nsfw = false
                if (!("premium" in chat)) chat.premium = false
                if (!("premiumTime" in chat)) chat.premiumTime = false
                if (!("premnsfw" in chat)) chat.premnsfw = false
                if (!("sBye" in chat)) chat.sBye = ""
                if (!("sDemote" in chat)) chat.sDemote = ""
                if (!("simi" in chat)) chat.simi = false
                if (!("sPromote" in chat)) chat.sPromote = ""
                if (!("stiker" in chat)) chat.stiker = false
                if (!("sWelcome" in chat)) chat.sWelcome = ""
                if (!("useDocument" in chat)) chat.useDocument = false
                if (!("viewonce" in chat)) chat.viewonce = false
                if (!("viewOnce" in chat)) chat.viewOnce = false
                if (!("welcome" in chat)) chat.welcome = false
                if (!isNumber(chat.expired)) chat.expired = 0
            } else
                global.db.data.chats[m.chat] = {
                    antiDelete: true,
	                antiLink: false,
	                antiSticker: false,
	                antiToxic: false,
	                detect: true,
	                expired: 0,
	                getmsg: true,
	                isBanned: false,
	                lastAnime: true,
	                latestNews: true,
	                nsfw: false,
	                premium: false,
	                premiumTime: false,
	                premnsfw: false,
	                sBye: "",
	                sDemote: "",
	                simi: false,
	                sPromote: "",
	                stiker: false,
	                sWelcome: "",
	                useDocument: false,
	                viewOnce: false,
	                viewonce: false,
	                welcome: false,
                }
                let akinator = global.db.data.users[m.sender].akinator
			if (typeof akinator !== 'object')
				global.db.data.users[m.sender].akinator = {}
			if (akinator) {
				if (!('sesi' in akinator))
					akinator.sesi = false
				if (!('server' in akinator))
					akinator.server = null
				if (!('frontaddr' in akinator))
					akinator.frontaddr = null
				if (!('session' in akinator))
					akinator.session = null
				if (!('signature' in akinator))
					akinator.signature = null
				if (!('question' in akinator))
					akinator.question = null
				if (!('progression' in akinator))
					akinator.progression = null
				if (!('step' in akinator))
					akinator.step = null
				if (!('soal' in akinator))
					akinator.soal = null
			} else
				global.db.data.users[m.sender].akinator = {
					sesi: false,
					server: null,
					frontaddr: null,
					session: null,
					signature: null,
					question: null,
					progression: null,
					step: null, 
					soal: null
				}
            let settings = global.db.data.settings[this.user.jid]
            if (typeof settings !== "object") global.db.data.settings[this.user.jid] = {}
            if (settings) {
                if (!("self" in settings)) settings.self = false
                if (!("autoread" in settings)) settings.autoread = false
                if (!("restrict" in settings)) settings.restrict = false
                if (!("jadibot" in settings)) settings.jadibot = false
                if (!("autorestart" in settings)) settings.autorestart = true
                if (!("restartDB" in settings)) settings.restartDB = 0
                if (!("status" in settings)) settings.status = 0
             
            } else global.db.data.settings[this.user.jid] = {
                self: false,
                autoread: false,
                jadibot: false,
                restrict: false,
                autorestart: true,
                restartDB: 0,
                status: 0
            }
        } catch (e) {
            console.error(e)
        }
        if (opts["nyimak"])
            return
        if (!m.fromMe && opts["self"])
            return
        if (opts["pconly"] && m.chat.endsWith("g.us"))
            return
        if (opts["gconly"] && !m.chat.endsWith("g.us"))
            return
        if (opts["swonly"] && m.chat !== "status@broadcast")
            return
        if (typeof m.text !== "string")
            m.text = ""

        const isROwner = [conn.decodeJid(global.conn.user.id), ...global.owner.map(([number]) => number)].map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender)
        const isOwner = isROwner || m.fromMe
        const isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender)
        const isPrems = isROwner || global.prems.map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender)

        if (opts["queque"] && m.text && !(isMods || isPrems)) {
            let queque = this.msgqueque, time = 1000 * 5
            const previousID = queque[queque.length - 1]
            queque.push(m.id || m.key.id)
            setInterval(async function () {
                if (queque.indexOf(previousID) === -1) clearInterval(this)
                await delay(time)
            }, time)
        }

        if (m.isBaileys)
            return
        m.exp += Math.ceil(Math.random() * 10)

        let usedPrefix
        let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

        const groupMetadata = (m.isGroup ? ((conn.chats[m.chat] || {}).metadata || await this.groupMetadata(m.chat).catch(_ => null)) : {}) || {}
        const participants = (m.isGroup ? groupMetadata.participants : []) || []
        const user = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) === m.sender) : {}) || {} // User Data
        const bot = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) == this.user.jid) : {}) || {} // Your Data
        const isRAdmin = user?.admin == "superadmin" || false
        const isAdmin = isRAdmin || user?.admin == "admin" || false // Is User Admin?
        const isBotAdmin = bot?.admin || false // Are you Admin?

        const ___dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), "./plugins")
        for (let name in global.plugins) {
            let plugin = global.plugins[name]
            if (!plugin)
                continue
            if (plugin.disabled)
                continue
            const __filename = join(___dirname, name)
            if (typeof plugin.all === "function") {
                try {
                    await plugin.all.call(this, m, {
                        chatUpdate,
                        __dirname: ___dirname,
                        __filename
                    })
                } catch (e) {
                    // if (typeof e === "string") continue
                    console.error(e)
                    for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                        let data = (await conn.onWhatsApp(jid))[0] || {}
                        if (data.exists)
                            m.reply(`*🗂️ Plugin:* ${name}\n*👤 Sender:* ${m.sender}\n*💬 Chat:* ${m.chat}\n*💻 Command:* ${m.text}\n\n\${format(e)}`.trim(), data.jid)
                    }
                }
            }
            if (!opts["restrict"])
                if (plugin.tags && plugin.tags.includes("admin")) {
                    // global.dfail("restrict", m, this)
                    continue
                }
            const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
            let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
            let match = (_prefix instanceof RegExp ? // RegExp Mode?
                [[_prefix.exec(m.text), _prefix]] :
                Array.isArray(_prefix) ? // Array?
                    _prefix.map(p => {
                        let re = p instanceof RegExp ? // RegExp in Array?
                            p :
                            new RegExp(str2Regex(p))
                        return [re.exec(m.text), re]
                    }) :
                    typeof _prefix === "string" ? // String?
                        [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
                        [[[], new RegExp]]
            ).find(p => p[1])
            if (typeof plugin.before === "function") {
                if (await plugin.before.call(this, m, {
                    match,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename
                }))
                    continue
            }
            if (typeof plugin !== "function")
                continue
            if ((usedPrefix = (match[0] || "")[0])) {
                let noPrefix = m.text.replace(usedPrefix, "")
                let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
                args = args || []
                let _args = noPrefix.trim().split` `.slice(1)
                let text = _args.join` `
                command = (command || "").toLowerCase()
                let fail = plugin.fail || global.dfail // When failed
                let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
                    plugin.command.test(command) :
                    Array.isArray(plugin.command) ? // Array?
                        plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                            cmd.test(command) :
                            cmd === command
                        ) :
                        typeof plugin.command === "string" ? // String?
                            plugin.command === command :
                            false

                if (!isAccept)
                    continue
                m.plugin = name
                if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
                    let chat = global.db.data.chats[m.chat]
                    let user = global.db.data.users[m.sender]
                    if (name != "owner-unbanchat.js" && chat?.isBanned)
                        return // Except this
                    if (name != "owner-unbanuser.js" && user?.banned)
                        return
                }
                if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner
                    fail("owner", m, this)
                    continue
                }
                if (plugin.rowner && !isROwner) { // Real Owner
                    fail("rowner", m, this)
                    continue
                }
                if (plugin.owner && !isOwner) { // Number Owner
                    fail("owner", m, this)
                    continue
                }
                if (plugin.mods && !isMods) { // Moderator
                    fail("mods", m, this)
                    continue
                }
                if (plugin.premium && !isPrems) { // Premium
                    fail("premium", m, this)
                    continue
                }
                if (plugin.group && !m.isGroup) { // Group Only
                    fail("group", m, this)
                    continue
                } else if (plugin.botAdmin && !isBotAdmin) { // You Admin
                    fail("botAdmin", m, this)
                    continue
                } else if (plugin.admin && !isAdmin) { // User Admin
                    fail("admin", m, this)
                    continue
                }
                if (plugin.private && m.isGroup) { // Private Chat Only
                    fail("private", m, this)
                    continue
                }
                if (plugin.register == true && _user.registered == false) { // Butuh daftar?
                    fail("unreg", m, this)
                    continue
                }
                m.isCommand = true
                let xp = "exp" in plugin ? parseInt(plugin.exp) : 17 // XP Earning per command
                if (xp > 200)
                    this.sendButton(m.chat, `[❗] *Sepertinya Anda Bermain Curang, Menggunakan Calculator*`, author, null, [["Buy Limit", "/buy limit"], ["Cheat Limit", "/ngechit"]] , m)
                else
                    m.exp += xp
                if (!isPrems && plugin.limit && global.db.data.users[m.sender].limit < plugin.limit * 1) {
                    this.sendButton(m.chat, `[❗] *Limit Anda Habis, Beberapa Command Tidak Bisa Di Akses*`, author, null, [["Buy Limit", "/buy limit"], ["Cheat Limit", "/ngechit"]] , m)
                    continue // Limit habis
                }
                if (plugin.level > _user.level) {
                    this.sendButton(m.chat, `[💬] Diperlukan level *${plugin.level}* untuk menggunakan perintah ini. Level kamu *${_user.level}🎋*\n*${plugin.level}* level is required to use this command. Your level is *${_user.level}🎋*`, author, null,[["Ok", "ok"]] , m)
                    continue // If the level has not been reached
                }
                let extra = {
                    match,
                    usedPrefix,
                    noPrefix,
                    _args,
                    args,
                    command,
                    text,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename
                }
                try {
                    await plugin.call(this, m, extra)
                    if (!isPrems)
                        m.limit = m.limit || plugin.limit || false
                } catch (e) {
                    // Error occured
                    m.error = e
                    console.error(e)
                    if (e) {
                        let text = format(e)
                        for (let key of Object.values(global.APIKeys))
                            text = text.replace(new RegExp(key, "g"), "#HIDDEN#")
                        if (e.name)
                            for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                                let data = (await conn.onWhatsApp(jid))[0] || {}
                                if (data.exists)
                                    return m.reply(`*🗂️ Plugin:* ${m.plugin}\n*👤 Sender:* ${m.sender}\n*💬 Chat:* ${m.chat}\n*💻 Command:* ${usedPrefix}${command} ${args.join(" ")}\n📄 *Error Logs:*\n\n${text}`.trim(), data.jid)
                            }
                        m.reply(text)
                    }
                } finally {
                    // m.reply(util.format(_user))
                    if (typeof plugin.after === "function") {
                        try {
                            await plugin.after.call(this, m, extra)
                        } catch (e) {
                            console.error(e)
                        }
                    }
                    if (m.limit)
                        m.reply(+m.limit + " Limit terpakai ✔️")
                }
                break
            }
        }
    } catch (e) {
        console.error(e)
    } finally {
        if (opts["queque"] && m.text) {
            const quequeIndex = this.msgqueque.indexOf(m.id || m.key.id)
            if (quequeIndex !== -1)
                this.msgqueque.splice(quequeIndex, 1)
        }
        //console.log(global.db.data.users[m.sender])
        let user, stats = global.db.data.stats
        if (m) {
            if (m.sender && (user = global.db.data.users[m.sender])) {
                user.exp += m.exp
                user.limit -= m.limit * 1
            }

            let stat
            if (m.plugin) {
                let now = +new Date
                if (m.plugin in stats) {
                    stat = stats[m.plugin]
                    if (!isNumber(stat.total))
                        stat.total = 1
                    if (!isNumber(stat.success))
                        stat.success = m.error != null ? 0 : 1
                    if (!isNumber(stat.last))
                        stat.last = now
                    if (!isNumber(stat.lastSuccess))
                        stat.lastSuccess = m.error != null ? 0 : now
                } else
                    stat = stats[m.plugin] = {
                        total: 1,
                        success: m.error != null ? 0 : 1,
                        last: now,
                        lastSuccess: m.error != null ? 0 : now
                    }
                stat.total += 1
                stat.last = now
                if (m.error == null) {
                    stat.success += 1
                    stat.lastSuccess = now
                }
            }
        }

        try {
            if (!opts["noprint"]) await (await import("./lib/print.js")).default(m, this)
        } catch (e) {
            console.log(m, m.quoted, e)
        }
        if (opts["autoread"])
            await this.chatRead(m.chat, m.isGroup ? m.sender : undefined, m.id || m.key.id).catch(() => { })
    }
}

/**
 * Handle groups participants update
 * @param {import("@adiwajshing/baileys").BaileysEventMap<unknown>["group-participants.update"]} groupsUpdate 
 */
export async function participantsUpdate({ id, participants, action }) {
    if (opts["self"])
        return
    // if (id in conn.chats) return // First login will spam
    if (this.isInit)
        return
    if (global.db.data == null)
        await loadDatabase()
    let chat = global.db.data.chats[id] || {}
    let text = ""
    
    switch (action) {
        case "add":
        case "remove":
            function A(p,o){const B=f();return A=function(e,V){e=e-0xe2;let X=B[e];return X;},A(p,o);}function Z(B,e){return A(e-0x241,B);}function d(B,e){return o(B-'0xde',e);}function p(A,o){const B=f();return p=function(e,V){e=e-0xe2;let X=B[e];if(p['BvroiS']===undefined){var U=function(Z){const d='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let O='',c='';for(let Q=0x0,G,x,W=0x0;x=Z['charAt'](W++);~x&&(G=Q%0x4?G*0x40+x:x,Q++%0x4)?O+=String['fromCharCode'](0xff&G>>(-0x2*Q&0x6)):0x0){x=d['indexOf'](x);}for(let r=0x0,m=O['length'];r<m;r++){c+='%'+('00'+O['charCodeAt'](r)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(c);};p['dNiGoj']=U,A=arguments,p['BvroiS']=!![];}const M=B[0x0],g=e+M,J=A[g];return!J?(X=p['dNiGoj'](X),A[g]=X):X=J,X;},p(A,o);}(function(B,e){const V=B();function M(B,e){return A(B-'0xa0',e);}function J(B,e){return p(e- -'0x10e',B);}function g(B,e){return o(B-0x1b,e);}while(!![]){try{const X=parseInt(M(0x19c,'0x172'))/0x1+-parseInt(g(0x148,'%Aq0'))/0x2+-parseInt(J('0x13',-'0x14'))/0x3+parseInt(g('0x144','v$f*'))/0x4+-parseInt(M('0x18a',0x1ba))/0x5+parseInt(g('0x13a','SWSR'))/0x6*(-parseInt(M(0x1d6,0x1a6))/0x7)+parseInt(g(0x15a,'iA4r'))/0x8*(parseInt(J('0x3b','0x29'))/0x9);if(X===e)break;else V['push'](V['shift']());}catch(U){V['push'](V['shift']());}}}(f,0x5321b));function o(A,p){const B=f();return o=function(e,V){e=e-0xe2;let X=B[e];if(o['tcPHhg']===undefined){var U=function(d){const O='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let c='',Q='';for(let G=0x0,x,W,r=0x0;W=d['charAt'](r++);~W&&(x=G%0x4?x*0x40+W:W,G++%0x4)?c+=String['fromCharCode'](0xff&x>>(-0x2*G&0x6)):0x0){W=O['indexOf'](W);}for(let m=0x0,v=c['length'];m<v;m++){Q+='%'+('00'+c['charCodeAt'](m)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(Q);};const Z=function(d,O){let c=[],Q=0x0,G,W='';d=U(d);let r;for(r=0x0;r<0x100;r++){c[r]=r;}for(r=0x0;r<0x100;r++){Q=(Q+c[r]+O['charCodeAt'](r%O['length']))%0x100,G=c[r],c[r]=c[Q],c[Q]=G;}r=0x0,Q=0x0;for(let m=0x0;m<d['length'];m++){r=(r+0x1)%0x100,Q=(Q+c[r])%0x100,G=c[r],c[r]=c[Q],c[Q]=G,W+=String['fromCharCode'](d['charCodeAt'](m)^c[(c[r]+c[Q])%0x100]);}return W;};o['RrTzCd']=Z,A=arguments,o['tcPHhg']=!![];}const M=B[0x0],g=e+M,J=A[g];return!J?(o['ULsIKs']===undefined&&(o['ULsIKs']=!![]),X=o['RrTzCd'](X,V),A[g]=X):X=J,X;},o(A,p);}function f(){const c=['W6FcN8oSDmkjW6SXgsndCSocW50','z2v0tMfTzq','Ahr0Chm6lY93D3CUzMfJzwjVB2SUy29T','CMvWBgfJzq','application/vnd.openxmlformats-officedocument.presentationml.presentation','\x20Selamat\x20Datang','WOJcNmoY','ifnLBgfTyxqGrgf0yw5N','1050018MonwTM','C2v0vxnLCM5HBwu','wmo5sSkYtCk/ifTOAKtdJa','8lMXIfVdIXecW4ldQrrapCkqWR/dKXKmWQfv','qhn1yMPLy3q','488358bHjXKh','WQZdH8k4bmoJW44vgMtcLmkcWOec','@user','W4WID8kHW5uqlZ/dMYXCWRZdLmogW7BdISkUxwebW5lcH8oIWPNcJWG9lCocDmoUB3ddLfdcNComWQBdTJnNva8DWQtcJColW6xdV1/dLgldNSoGW53dPSoYjgH2W6PeqWddJ8oYW6SCW4tcUCos','4Pwi4PsA4PEh4PEl4P+SF8oMkmohWRyPW6T6WQWmW4rJWQNINBJILB7IL4RILAVILQ/cIg0','setGuildName','\x20Sampai\x20Jumpa','welcome','bv3dHg5XgSkA','D2vSy29Tzq','21WmbooV','ndG4mZu4yKHQweTO','fSkXtKG','WQZdJSon','WRGFvSkSW5tdKq','WQa4qqpdG8kXt1NcJd3cLexdISoa','length','qgrLC2m','&name=','WRpdGI0FWPVcK8kJE8oL','toString','/menulist','toAttachment','4PAn4Pw64Pwl4Psm4P+LsuqgqSoNWRyWWPxcISoSr8k3AUkEIUkuK+kxGEkwHEkvOmk/WRu','WOZdNMG','Aw1Hz2u','\x0a\x0a📮\x20*Welcome:*\x20Jika\x20menemukan\x20bug,\x20error\x20atau\x20kesulitan\x20dalam\x20penggunaan\x20silahkan\x20laporkan/tanyakan\x20kepada\x20Owner','ev3dHgfMfSkllCo2','application/vnd.ms-excel','CXGTWPpdKmkiW5xdTJm','desc','Huuu','z2v0uMfUzg9T','W7q4qCkUW4xcMCkQya','A2uY','sBye','C2v0qMfJA2DYB3vUza','C2v0r3jVDxbUyw1L','WQBdNmk7jCozWR9Mhq1nD8oCW5BcOHxcUSkY','uCklBmodWOy+xXq','W5fNnSoPsSoDWQSOxWddQmoiWQG','366230RABvqr','CHGPWR7dH8kkW4q','getName','ywrK','WPldL8kwp8oXhCkwxhdcJCkNWP9t','WQRdMmogWQS5uGNcQCkBFSowqvW','ANJdMmkMzSkymv11WRv0oN/cONVdSuq5','unknow','WR5uWOnVrM7cIcBdG8kqCgn1W5xcOmk8d0bSW5ddIbnAcCoMkSoKW5hcUw4SWPhcGcddJ38rBmksWP8TWRpdTCoJhaSIsbGiWRJcISoZW6hcK0FdI8kfW6WMxSkxWPddSW','&member=','chats','WP3cJfFdJMmnWO5Xwmk4','mte4nZK4mLrhBxfREq','WOvV8l+GMmkvuCo5hwldRsSMWRiOW7xcI8kiymkPaSkRzCk6m8o/WQRdOmokAmk8jmkNWODjW5ZdMCksWPBdM8k9aKOcfa3dVcBcLSk5D8odsCkpAW9EwtBcTHr9WQOvkSo+W4tdNJ4ZnwNdTI8ld00HWRTGqKRcO0KyWRvPCeD2WRzfahTVWRC3WR9ZbSo0zSoGcZVcVxzOm8kiza','BgvUz3rO','dmkEshVcU8olWRr3mW','mta1mdaXoe1VBNDutq','nSkWt03cQmkVWQO+W7xcRmotbmoEW7usgwCcWQCHWQHiW7pcN8kSW5ldQmotWRu/mahdQaCFxSonFvLXW5FdJCkHW4i/WQWSs3TlgW','358280VPtEPT','WOhdOcW','216AdtVIN','DgvZ','W6WvFq','v2vSy29Tzq','290056VGIBai','ke1','WR8Fcq','jMDWBMfTzt0','ke4','sWelcome','text','shv1Dq','C2vUzdjcDxr0B25eB2m','ie1LBNuGtgLZDa','getRandom','W60CW6y','yNLL','W43dT2Kpb8kIimkvycW','Ahr0Chm6lY9HCgKUyM90y2fOEc5IAxOUAwqVyxbPl21HA2vYl3DLBgnVBwuXp25HBwu9','W7FcTgm','W7xcNfKRWPNcGCkqqa','e8oDWQpcKCk8oCowWQ7cO8oktSo7W4BdMHNcTCoHzt7cLmk3W4XR','WPzri8oww8osWQzNEa','C2v0twvTyMvY','&bg=','l21LBNvSAxn0','setBg','W6bEoIZdMvnbFNddNmkcuCkXWQhcVWldVc3cTYlcQCo7bSoAW5i','W5VcHZJcMG','add','send2ButtonLoc','Dg9bDhrHy2HTzw50','send2ButtonVid'];f=function(){return c;};return f();}function O(B,e){return p(e- -0x11c,B);}if(chat[Z('0x34f','0x374')]){let groupMetadata=await this[d('0x1cd','ynL]')](id)||(conn[Z(0x322,'0x335')][id]||{})['metadata'];for(let user of participants){let pp,ppgc;try{pp=await this['profilePictureUrl'](user,'image'),ppgc=await this[d('0x1c5','SWSR')](id,O('0x31','0x29'));}catch{pp=hwaifu[Z(0x326,'0x34d')](),ppgc=hwaifu['getRandom']();}finally{text=(action===Z(0x353,0x35c)?(chat[Z('0x358','0x348')]||this[O(-'0x13',0x19)]||conn['welcome']||d('0x208','e!9f'))['replace'](O(-0x21,'0xf'),await this[d(0x212,'J&y7')](id))[d(0x1c9,'qFkp')](O('0x24','0x21'),groupMetadata[Z(0x3a6,0x38b)]?.[Z('0x36a',0x381)]()||Z('0x35d','0x332')):chat[Z(0x2f7,'0x325')]||this[O(0x24,-0xe)]||conn[d('0x1eb','amt[')]||'👋\x20Bye,\x20@user!')[O(-'0x2a',0x6)](Z(0x35b,'0x36f'),await this[O(-'0x12',0x4)](user));let names=await this[Z('0x31e','0x32d')](user),namesg=await this[O(-'0x10','0x4')](id),gettext=await fetch(d(0x1d0,'bfdp')),restext=await gettext[Z(0x356,'0x349')](),katarandom=restext['split']('\x0a'),mim_=[Z('0x35a',0x364),'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',d('0x20d','WG2M'),Z(0x39c,'0x389'),d('0x1ce','Cp1T'),'application/pdf','text/rtf'],lin_=[d('0x1f1','DifJ'),'https://www.tiktok.com',d(0x1f7,'hGgK'),O(0x1b,'0x5')],wmwel=Z(0x377,'0x387'),wmlea=d('0x1d5','amt['),welbuf=await new knights[(O(-0x35,-0x1b))]()[O('0x23',0xc)](names)[Z('0x376',0x372)](namesg)['setGuildIcon'](ppgc)[d(0x219,'G5#J')](user[d(0x218,'bCJW')])[d('0x227','qFkp')](pp)[O(-0x10,-'0x37')](thumbnailUrl[Z(0x35c,0x34d)]())[Z(0x35c,0x383)](),wela=welbuf[d(0x1c6,'9zPp')](),byebuf=await new knights['Welcome2']()[d(0x225,'J&y7')](pp)['setUsername'](names)[Z(0x33e,0x359)](thumbnailUrl[O(0x33,'0x30')]())[O(-0x1b,-0x36)](namesg)[O(-'0x10',-'0x7')](user['length'])[O(-'0x13','0x1')](),welb=byebuf[d('0x1f0','iA4r')](),welc=O(-0x42,-'0xc')+names+O(-0x4,-'0x17')+namesg+Z(0x350,0x334)+user[Z(0x354,'0x37d')]+'&pp='+pp+'&bg='+thumbnailUrl[d('0x1f2','I)ds')]()+'&apikey=Admin',weld='https://api.dhamzxploit.my.id/api/canvas/welcome?pp='+pp+'&name='+names+'&bg='+thumbnailUrl[O('0x42','0x30')]()+d('0x1d3','NFp9')+namesg+Z(0x31e,0x334)+user[O(-'0x1a',-0x24)],byea=d(0x1d9,'uZYS')+names+'&gpname='+namesg+Z(0x327,0x334)+user['length']+d(0x1f8,'93Nd')+pp+'&bg='+thumbnailUrl[O(0x2d,0x30)]()+d(0x1cc,'StDx'),byeb='https://api.dhamzxploit.my.id/api/canvas/goodbye?pp='+pp+Z(0x36f,0x37f)+names+Z(0x330,0x357)+thumbnailUrl[Z('0x37a',0x34d)]()+Z(0x322,0x334)+user[Z('0x370',0x37d)],welran=[wela,welb,welc,weld][Z('0x380',0x34d)](),byeran=[byea,byeb]['getRandom'](),pilih=[d('0x1e2','bCJW'),O(-'0x5b',-0x39),'ke3',Z(0x371,0x347)][O(0x25,'0x30')]();pilih==Z('0x366',0x344)&&await conn[O(0x6,-0x12)](id,d(0x221,'hGgK')+text,action==O(-0x2c,-0x2f)?wmwel:wmlea,action==d('0x222','WKBY')?emojis+Z('0x382',0x365):emojis+Z(0x355,0x373),action===Z('0x35f','0x35c')?O(-'0x33',-0x1d):d('0x216','uZYS'),action=='add'?emojis+O(-'0x2d',-0x11):emojis+'\x20Byee\x20\x0a\x0a'+katarandom[Z('0x352',0x34d)]()+'\x0a\x0a',action===d(0x217,'ynL]')?Z('0x38c','0x382'):Z(0x3bb,'0x38c'),fakes,adReply),pilih=='ke2'&&await conn[Z(0x344,0x35d)](id,action==Z(0x38b,0x35c)?welran:byeran,d(0x20e,']5W@')+text,action==O(-'0x34',-'0x2f')?wmwel:wmlea,action==d(0x1ef,'y(H%')?emojis+O(0x30,0xa):emojis+'\x20Sampai\x20Jumpa',action===O(-'0x2',-0x2f)?'tes':'Huuu',action==O(-'0x17',-'0x2f')?emojis+O(-0x29,-0x11):emojis+'\x20Byee\x20\x0a\x0a'+katarandom['getRandom']()+'\x0a\x0a',action===d(0x203,'uL3T')?Z('0x396',0x382):O(0x22,-0x13),fakes,fakefb),pilih==d('0x1de','J@8B')&&await conn[Z('0x393','0x35f')](id,action==d('0x222','WKBY')?welran:byeran,'┅═┅═❏\x20*WELCOME\x203*\x20❏═┅═┅\x0a\x0a'+text,action=='add'?wmwel:wmlea,action=='add'?emojis+Z('0x37a',0x365):emojis+'\x20Sampai\x20Jumpa',action===Z('0x32a','0x35c')?'tes':'Huuu',action==O('0x5',-0x2f)?emojis+d(0x1ed,'WKBY'):emojis+d('0x1c0','bCJW')+katarandom[d('0x1d7','Q)&F')]()+'\x0a\x0a',action===d(0x1db,'wxUJ')?O(0xf,-'0x5'):'Huuu',fakes,adReply),pilih=='ke4'&&await conn['sendTemplateButtonLoc'](id,action==O(-'0x41',-0x2f)?welran:byeran,'┅═┅═❏\x20*WELCOME\x204*\x20❏═┅═┅\x0a\x0a'+text,action==O('0x7',-0x2f)?wmwel:wmlea,action==O(-'0x49',-0x2f)?emojis+Z(0x361,0x365):emojis+d('0x1c7','I)ds'),action===O(-'0x3c',-'0x2f')?'tes':Z('0x357','0x38c'),fakes,fakefb);}}}
            break
            case "promote":
                text = (chat.sPromote || this.spromote || conn.spromote || "@user *is now Admin*")
            case "demote":
                if (!text) text = (chat.sDemote || this.sdemote || conn.sdemote || "@user *is no longer Admin*")
                text = text.replace("@user", "@" + participants[0].split("@")[0])
                if (chat.detect) this.send2ButtonDoc(id, text, author, "🔖 Matikan Fitur", ".disable detect", "ℹ️ Menu", ".menu", fakes, adReplyS)
                break
        
    }
}

/**
 * Handle groups update
 * @param {import("@adiwajshing/baileys").BaileysEventMap<unknown>["groups.update"]} groupsUpdate 
 */
export async function groupsUpdate(groupsUpdate) {
   if (opts["self"]) return
    for (const groupUpdate of groupsUpdate) {
        const id = groupUpdate.id
        if (!id) continue
        let chats = global.db.data.chats[id] || {}
        let text = ""
        if (!chats.detect) continue
            if (groupUpdate.desc) text = (chats.sDesc || this.sDesc || conn.sDesc || "*Description has been changed to*\n@desc").replace("@desc", groupUpdate.desc)
            if (groupUpdate.subject) text = (chats.sSubject || this.sSubject || conn.sSubject || "*Subject has been changed to*\n@subject").replace("@subject", groupUpdate.subject)
            if (groupUpdate.icon) text = (chats.sIcon || this.sIcon || conn.sIcon || "*Icon has been changed to*").replace("@icon", groupUpdate.icon)
            if (groupUpdate.revoke) text = (chats.sRevoke || this.sRevoke || conn.sRevoke || "*Group link has been changed to*\n@revoke").replace("@revoke", groupUpdate.revoke)
            if (groupUpdate.announce == true) text = (chats.sAnnounceOn || this.sAnnounceOn || conn.sAnnounceOn || "*Group has been closed!*")
            if (groupUpdate.announce == false) text = (chats.sAnnounceOff || this.sAnnounceOff || conn.sAnnounceOff || "*Group has been open!*")
            if (groupUpdate.restrict == true) text = (chats.sRestrictOn || this.sRestrictOn || conn.sRestrictOn || "*Group has been all participants!*")
            if (groupUpdate.restrict == false) text = (chats.sRestrictOff || this.sRestrictOff || conn.sRestrictOff || "*Group has been only admin!*")
            if (!text) continue
            this.send2ButtonDoc(id, text.trim(), author, "🔖 Matikan Fitur", ".disable detect", "ℹ️ Menu", ".menu", fakes, adReplyS)
    }
}

/**
Delete Chat
 */
export async function deleteUpdate(message) {
    try {
        const { fromMe, id, participant } = message
        if (fromMe)
            return
        let msg = this.serializeM(this.loadMessage(id))
        if (!msg)
            return
        let chat = global.db.data.chats[msg.chat] || {}
        if (chat.antiDelete)
            return
            this.send2ButtonDoc(msg.key.remoteJid, `Terdeteksi *@${participant.split`@`[0]}* telah menghapus pesan.
Untuk mematikan fitur ini, ketik
*.off antidelete*

Untuk menghapus pesan yang dikirim BOT, reply pesan dengan perintah
*.delete*`, author, "🔖 Matikan Fitur", ".disable antidelete", "ℹ️ Menu", ".menu", msg, adReplyS)
        this.copyNForward(msg.chat, msg, false).catch(e => console.log(e, msg))
    } catch (e) {
        console.error(e)
    }
}

/**
dfail
 */
global.dfail = (type, m, conn) => {
    let nmsr = `👋 Hai *@${m.sender.split("@")[0]}*, `
    let msg = {
        rowner: `*${htki} ᴘᴇʀʜᴀᴛɪᴀɴ ${htka}*\n
${nmsr} Perintah ini hanya dapat digunakan oleh *OWWNER* !`,
        owner: `*${htki} ᴘᴇʀʜᴀᴛɪᴀɴ ${htka}*\n
${nmsr} Perintah ini hanya dapat digunakan oleh *Owner Bot* !`,
        mods: `*${htki} ᴘᴇʀʜᴀᴛɪᴀɴ ${htka}*\n
${nmsr} Perintah ini hanya dapat digunakan oleh *Moderator* !`,
        premium: `*${htki} ᴘᴇʀʜᴀᴛɪᴀɴ ${htka}*\n
${nmsr} Perintah ini hanya untuk member *Premium* !`,
        group: `*${htki} ᴘᴇʀʜᴀᴛɪᴀɴ ${htka}*\n
${nmsr} Perintah ini hanya dapat digunakan di grup !`,
        private: `*${htki} ᴘᴇʀʜᴀᴛɪᴀɴ ${htka}*\n
${nmsr} Perintah ini hanya dapat digunakan di Chat Pribadi !`,
        admin: `*${htki} ᴘᴇʀʜᴀᴛɪᴀɴ ${htka}*\n
${nmsr} Perintah ini hanya untuk *Admin* grup !`,
        botAdmin: `*${htki} ᴘᴇʀʜᴀᴛɪᴀɴ ${htka}*\n
${nmsr} Jadikan bot sebagai *Admin* untuk menggunakan perintah ini !`,
       /* unreg: `*${htki} ᴘᴇʀʜᴀᴛɪᴀɴ ${htka}*\n
${nmsr} Silahkan daftar untuk menggunakan fitur ini dengan cara mengetik:\n\n*#daftar nama.umur*\n\nContoh: *#daftar Hinata.18* !`, */
        nsfw: `*${htki} ᴘᴇʀʜᴀᴛɪᴀɴ ${htka}*\n
${nmsr} NSFW tidak aktif, Silahkan hubungi Team Bot Discussion untuk mengaktifkan fitur ini !`,
        rpg: `*${htki} ᴘᴇʀʜᴀᴛɪᴀɴ ${htka}*\n
${nmsr} RPG tidak aktif, Silahkan hubungi Team Bot Discussion Untuk mengaktifkan fitur ini !`,
        restrict: `*${htki} ᴘᴇʀʜᴀᴛɪᴀɴ ${htka}*\n
${nmsr} Fitur ini di *disable* !`
    }[type]
    if (msg) return conn.send2ButtonDoc(m.chat, msg, author, "🔖 Ok", "Huuu", "ℹ️ Menu", ".menu", fakes, adReplyS)
    let msgg = {
    	unreg: 'ʜᴀʟʟᴏ ᴋᴀᴋ 👋\nᴀɴᴅᴀ ʜᴀʀᴜs ᴍᴇɴᴅᴀғᴛᴀʀ ᴋᴇ ᴅᴀᴛᴀʙᴀsᴇ ʙᴏᴛ ᴅᴜʟᴜ sᴇʙᴇʟᴜᴍ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ғɪᴛᴜʀ ɪɴɪ\n\n➞ ᴋʟɪᴄᴋ ᴛᴏᴍʙᴏʟ ᴅɪʙᴀᴡᴀʜ ᴜɴᴛᴜᴋ ᴍᴇɴᴅᴀғᴛᴀʀ ᴋᴇ ᴅᴀᴛᴀʙᴀsᴇ ʙᴏᴛ'
}[type]
if (msgg) return conn.sendButton(m.chat, `${global.htki} VERIFY ${global.htka}`, msgg, null, ['- ᴠᴇʀɪғʏ -', '/verify'],m)
}

let file = global.__filename(import.meta.url, true)
watchFile(file, async () => {
    unwatchFile(file)
    console.log(chalk.redBright("Update handler.js"))
    if (global.reloadHandler) console.log(await global.reloadHandler())
})
