# FOSSBilling Setup Guide voor Dokploy

## Stap 1: Deploy in Dokploy

1. Ga naar Dokploy dashboard
2. Klik op **"Create Project"** of selecteer bestaand project
3. Kies **"Docker Compose"**
4. Upload of plak de `docker-compose.yml` inhoud
5. Voeg environment variables toe:
   ```
   DB_ROOT_PASSWORD=jouw_sterke_root_wachtwoord
   DB_NAME=fossbilling
   DB_USER=fossbilling
   DB_PASSWORD=jouw_sterke_wachtwoord
   ```
6. Deploy

## Stap 2: Domain configureren

1. Maak een subdomain aan: `billing.gwcwebdesign.com`
2. In Dokploy, ga naar **Domains**
3. Voeg toe: `billing.gwcwebdesign.com`
4. Enable SSL (Let's Encrypt)

## Stap 3: FOSSBilling Installatie

1. Ga naar `https://billing.gwcwebdesign.com`
2. Volg de installatie wizard:
   - **Database Host:** `db` (de container naam)
   - **Database Name:** `fossbilling`
   - **Database User:** `fossbilling`
   - **Database Password:** (je gekozen wachtwoord)
3. Maak admin account aan
4. Voltooi installatie

## Stap 4: Openprovider Integreren

### Openprovider Account
1. Registreer op [Openprovider](https://www.openprovider.com)
2. Vraag reseller toegang aan
3. Haal je API credentials op

### In FOSSBilling
1. Ga naar **Configuration** → **Domain Registration**
2. Klik **New Domain Registrar**
3. Selecteer **Openprovider** (of installeer module)
4. Vul in:
   - Username: je Openprovider username
   - Password: je Openprovider password
   - Test Mode: Aan (voor testen), Uit (voor productie)
5. Sla op en test connectie

## Stap 5: Producten Aanmaken

### Domeinen
1. **Products** → **Domain TLDs**
2. Voeg TLDs toe (.nl, .com, .eu, etc.)
3. Stel prijzen in (aanbevolen):
   - .nl: €9,99/jaar
   - .com: €12,99/jaar
   - .eu: €8,99/jaar

### Hosting Pakketten
1. **Products** → **New Product**
2. Type: Hosting
3. Maak pakketten:
   - Starter: €4,99/maand
   - Business: €9,99/maand
   - Premium: €19,99/maand

## Stap 6: Betalingen (Mollie)

1. Maak Mollie account: [mollie.com](https://www.mollie.com)
2. Haal API key op
3. In FOSSBilling: **Configuration** → **Payment Gateways**
4. Activeer Mollie
5. Vul API key in

## Stap 7: Branding

1. **Configuration** → **Settings**
2. Upload logo
3. Pas kleuren aan naar GWC huisstijl
4. Stel bedrijfsgegevens in:
   - Geors Webshop Company
   - KVK: 94768234
   - BTW: NL005107436B91

## Handige Links

- [FOSSBilling Docs](https://fossbilling.org/docs)
- [Openprovider API](https://support.openprovider.eu/hc/en-us/categories/201883617-API)
- [Mollie Dashboard](https://www.mollie.com/dashboard)

## Support

Bij problemen:
- FOSSBilling Discord: https://discord.gg/fossbilling
- GitHub Issues: https://github.com/FOSSBilling/FOSSBilling
