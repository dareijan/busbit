
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZonedDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;

/**
 * BusbitAjat päivämäärien generoija
 *
 * @author Dareijan
 * @version 1.1
 * 
 * Versiohistoria:
 * 1.0 perusversio
 */
public class BusbitAjat {


    /*
     * BusbitAjat luo valmiita päivämääriä busbit ohjelmalle

     * @author Dareijan
     */
    public static void main(String[] args) {

        /*
         * Ajo: Java versio: echo %JAVA_HOME%
         *
         * Java8 javac komennolla

		 * cd C:\workspaces\Oma_Libbits_VisualStudioCode\busbit\busbitajat\src\
         *
         * C:\Programs\Java\jdk1.8.0_301\bin\javac C:\workspaces\Oma_Libbits_VisualStudioCode\busbit\busbitajat\src\BusbitAjat.java
		 * 
		 * C:\Programs\Java\jdk1.8.0_301\bin\java BusbitAjat
         *
         */

        System.out.println("Busbit Times 1.0 by Tarja Tuovinen 2024");
        System.out.println();
        System.out.println("Tervetuloa.");
        System.out.println();		
        System.out.println("Luodaan taulukko päivämääriä tiedostot...");
        System.out.println();

        try {
            File tiedosto = null;
            tiedosto = new File("0730_paivat.js");
            if (tiedosto.createNewFile()) {
                System.out.println("...loin " + tiedosto.getName());
            } else {
                System.out.println("...en luonut, oli olemassa.");
            }
            tiedosto = new File("0825_paivat.js");
            if (tiedosto.createNewFile()) {
                System.out.println("...loin " + tiedosto.getName());
            } else {
                System.out.println("...en luonut, oli olemassa.");
            }
            tiedosto = new File("1320_paivat.js");
            if (tiedosto.createNewFile()) {
                System.out.println("...loin " + tiedosto.getName());
            } else {
                System.out.println("...en luonut, oli olemassa.");
            }
            tiedosto = new File("1420_paivat.js");
            if (tiedosto.createNewFile()) {
                System.out.println("...loin " + tiedosto.getName());
            } else {
                System.out.println("...en luonut, oli olemassa.");
            }                        

            String numerojono0730 = null;
            String rivi0730 = "const paivat = [[";
            String numerojono0825 = null;
            String rivi0825 = "const paivat = [[";
            String numerojono1320 = null;
            String rivi1320 = "const paivat = [[";
            String numerojono1420 = null;
            String rivi1420 = "const paivat = [[";                                   

            LocalDate start = LocalDate.parse("2024-11-24"),
                    end   = LocalDate.parse("2026-01-01");

            LocalDate next = start.minusDays(1);

            ZonedDateTime aikavyohyke = null;

            boolean ensimmainen = true;
            String alkupilkku = "";
            while ((next = next.plusDays(1)).isBefore(end.plusDays(1))) {
                // System.out.println("päivä : " + next);
                if(next.getDayOfWeek().getValue() < 6) {  /* vain arkipäivät*/
                    if (!ensimmainen) {
                        alkupilkku = "],[";
                    } else {
                        alkupilkku = "";
                        ensimmainen = false;
                    }

                    rivi0730 = rivi0730 + alkupilkku + "'" + next.format(DateTimeFormatter.ofPattern("yyyy-MM-dd")) + "'";
                    rivi0825 = rivi0825 + alkupilkku + "'" + next.format(DateTimeFormatter.ofPattern("yyyy-MM-dd")) + "'";
                    rivi1320 = rivi1320 + alkupilkku + "'" + next.format(DateTimeFormatter.ofPattern("yyyy-MM-dd")) + "'";
                    rivi1420 = rivi1420 + alkupilkku +"'" + next.format(DateTimeFormatter.ofPattern("yyyy-MM-dd")) + "'";

                    LocalDateTime silloin0730 = next.atTime(7, 30);
                    LocalDateTime silloin0825 = next.atTime(8, 25);
                    LocalDateTime silloin1320 = next.atTime(13, 20);
                    LocalDateTime silloin1420 = next.atTime(14, 20);


                    aikavyohyke = silloin0730.atZone(ZoneId.of("Europe/Helsinki"));
                    numerojono0730 = numerojonoOikeksi(String.valueOf(aikavyohyke.toInstant().toEpochMilli()));
                    rivi0730 = rivi0730 + ", '" + numerojono0730 + "'";

                    aikavyohyke = silloin0825.atZone(ZoneId.of("Europe/Helsinki"));
                    numerojono0825 = numerojonoOikeksi(String.valueOf(aikavyohyke.toInstant().toEpochMilli()));
                    rivi0825 = rivi0825 + ", '" +numerojono0825 + "'";

                    aikavyohyke = silloin1320.atZone(ZoneId.of("Europe/Helsinki"));
                    numerojono1320 = numerojonoOikeksi(String.valueOf(aikavyohyke.toInstant().toEpochMilli()));
                    rivi1320 = rivi1320 + ", '" +numerojono1320 + "'";

                    aikavyohyke = silloin1420.atZone(ZoneId.of("Europe/Helsinki"));
                    numerojono1420 = numerojonoOikeksi(String.valueOf(aikavyohyke.toInstant().toEpochMilli()));
                    rivi1420 = rivi1420 + ", '" +numerojono1420 + "'";

                    System.out.println(rivi1420);

                } /* if */
            }
            rivi0730 = rivi0730 + "]]";
            rivi0825 = rivi0825 + "]]";
            rivi1320 = rivi1320 + "]]";
            rivi1420 = rivi1420 + "]]";

           kirjoitaTiedosto("0730_paivat.js", rivi0730);
           kirjoitaTiedosto("0825_paivat.js", rivi0825);
           kirjoitaTiedosto("1320_paivat.js", rivi1320);
           kirjoitaTiedosto("1420_paivat.js", rivi1420);


        } catch (IOException e) {
            System.out.println("Huikauhistus. " + e.getMessage());
        }
    }

    private static String numerojonoOikeksi(String numerojono) {
        return numerojono.substring(0, numerojono.length()-3);
    }

    private static boolean kirjoitaTiedosto(String tiedosto, String teksti) {
        try {
            BufferedReader reader = new BufferedReader(new FileReader(tiedosto));
            System.out.println();
            FileWriter writer = new FileWriter(tiedosto);
            writer.write(teksti);
            writer.write(System.getProperty( "line.separator" ));
            writer.close();
            return true;
        } catch (Exception ioe) {
            System.out.println("Hupsista." + ioe.getMessage());
            return false;
        }
    }

}
