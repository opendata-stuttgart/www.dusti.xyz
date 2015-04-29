---
layout: post
title:  "Bericht vom OK-Lab-Treffen"
date:   2015-04-28 22:00:00
categories: treffen
---
Am 28.&nbsp;April fand das achte Treffen des OK Labs Stuttgart in der Stadtbibliothek statt.  Der Raum war gut gefüllt und es bestand reges Interesse am Fortschritt des Feinstaubprojekts.  Leider existiert derzeit nur ein einzelner Prototyp, weshalb fast alle Arbeit an Andreas hängen bleibt.

Andreas hatte seinen Prototyp eines Feinstaubmessgeräts mitgebracht und berichtete von seinen Erfahrungen.  Derzeit hängt der Feinstaubsensor über einen [Arduino Leonardo](http://www.arduino.cc/en/Main/ArduinoBoardLeonardo) an einem [Raspberry Pi](https://www.raspberrypi.org/), welcher die gemessenen Werte wiederum an einen Server schickt.

Aufgrund der damit verbundenen hohen Kosten und des Stromverbrauchs eignet sich dieser Aufbau jedoch nur für den Prototyp.  In der Version, die später in hoher Stückzahl über die Stadt verteilt wird, soll ein westentlich billigeres, kleineres und stromsparendes Ein-Chip-System namens ESP8266 die Aufgaben von Arduino und Raspberry Pi übernehmen.


#### API

Der Server kann über eine [API](https://api.dusti.xyz/) angesprochen werden.  Derzeit speichert er die Daten lediglich, eine Auswertung erfolgt noch nicht.


#### Beschaffung der Bauteile

Das größte Problem des Projekts ist derzeit die fehlende Möglichkeit Sensoren in großen Stückzahlen bestellen zu können.  Da diese in Asien bestellt werden müssen, bestehen die üblichen Einfuhrbeschränkungen.  Auch der fehlende CE-Zertifizierung und die Elektroschrottverordnung muss Beachtung geschenkt werden.  Es sollen verschiedene Vereine und Firmen angesprochen werden, die helfen könnten, die Probleme zu lösen.


#### Wissenschaftliche Grundlagen

Auch bei der wissenschaftlichen Basisarbeit hat sich etwas getan.  Tomatitito hat sich wissenschaftliche Arbeiten angesehen und berichtet, dass die vorgesehenen Sensoren für unsere Zwecke durchaus [konkurrenzfähig sind](https://github.com/opendata-stuttgart/meta/issues/12).


### Weitere Projekte

Neben dem Feinstaubprojekt besteht Interesse an weiteren Projekten zu arbeiten.  Es wurden einige Ideen angesprochen, aber noch nichts genaueres festgelegt.


### Ausblick

Da die Treffen in der Stadtbibliothek nur einmal monatlich stattfinden und es keine Möglichkeit gibt, an der Hardware zu arbeiten, soll es weitere Treffen geben.  Im Gespräch war ein zusätzlicher monatlicher Termin, der sich speziell um die Hardware drehen soll.  Dazu wird mit dem shack e.&nbsp;V. geklärt, ob man sich im Shackspace treffen kann.
