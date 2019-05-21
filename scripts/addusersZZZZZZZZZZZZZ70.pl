#!/usr/bin/perl

use lib "/home/lext/kernel/lib";

use DBGate;
my $dbh=new DBGate;

use CGI qw(param); 
use CGI qw(:standard); 
use POSIX;
use CGI::Carp qw(fatalsToBrowser);
use Digest::MD5 qw(md5_hex);
use Encode;
use CGI::Carp qw(fatalsToBrowser);

sub codegen{ 
$megastroka="";
for ($digit = 0; $digit <=30; $digit++)
{
$rnd=int(rand(25) + 65);
$srnd=chr($rnd);
$megastroka="$megastroka$srnd";
};
$nnumer = md5_hex($megastroka);
return $nnumer;
}

($sth,@data, @list);


($Second,$Minute,$Hour,$Month_Day,$Month,$Year,$Week_Day,$IsDST) = (localtime)[0,1,2,3,4,5,6,8]; 
$timestamp = mktime($Second,$Minute,$Hour,$Month_Day,$Month,$Year,$Week_Day,0,-1);


sub trim {
    my($string)=@_;
    for ($string) {
        s/^\s+//;
        s/\s+$//;
        }
    return $string;
    }


@users=();


print "Content-Type: text/html; charset=utf-8\n\n";


$found = 0;

$filename="event70.list";
open DATA, $filename or $notload=1;
while (<DATA>){
chomp;
($zname1, $zemail) = split(/ :::: /);

$zemail=trim(lc($zemail));

# проверяем, есть ли такое мыло
# если нет - заводим


# забираем параметры аккаунта
$nasel=0;
$sth=$dbh->prepare("select * from accountslextorium where useremail=".$dbh->quote( $zemail ));
$sth->execute();
while(@data=$sth->fetchrow_array()){
$accid=@data[0]; # ид
$username = encode('utf8',@data[1]); # username
$email=@data[2]; # мыло
$psw=@data[3]; # парол
$nasel=1;
}
$sth->finish();

# генерим дурацкий пароль
$rnd1=int(rand(99));
$rnd2=int(rand(99));
$rnd3=int(rand(99));
$rnd4=int(rand(99));

$passa = $rnd1.$rnd2.$rnd3.$rnd4;

$supercode = codegen();

if(!$nasel){
$sth=$dbh->prepare("INSERT INTO accountslextorium (username, useremail, userpassword, usercity, userposition, usercompany, username1, username2, loginmd5, userphone) VALUES ('$zname1 $zname2 $zname3', ".$dbh->quote( $zemail ).", ".$dbh->quote( $passa ).", ".$dbh->quote( $zcity ).", '', '', '', '', ".$dbh->quote( $supercode ).", ".$dbh->quote( $userphone ).")");
$sth->execute();
};


# забираем параметры аккаунта
$nasel=0;
$sth=$dbh->prepare("select * from accountslextorium where useremail=".$dbh->quote( $zemail ));
$sth->execute();
while(@data=$sth->fetchrow_array()){
$accid=@data[0]; # ид
$username = encode('utf8',@data[1]); # username
$email=@data[2]; # мыло
$psw=@data[3]; # парол
$codecode=@data[10];
$nasel=1;
}
$sth->finish();


if($nasel){	
# проверяем на наличие в подписках

	$foundfound=0;
	$filename="subscribers70.list";
	open DATA1, $filename or $notload=1;
	while (<DATA1>){
	chomp;
	($zeventid, $zaccid) = split(/ :::: /);

			if($zaccid eq $accid){
				$foundfound = 1;
			};

	};	


	if(!$foundfound){
		$filename="subscribers70.list";
		open(DZO,">>$filename");
		print DZO "70 :::: $accid\n";
		close(DZO);
	};


	$foundfound=0;
	$filename="subscriberspaid70.list";
	open DATA1, $filename or $notload=1;
	while (<DATA1>){
	chomp;
	($zeventid, $zaccid) = split(/ :::: /);

			if($zaccid eq $accid){
				$foundfound = 1;
			};

	};	


	if(!$foundfound){
		$filename="subscriberspaid70.list";
		open(DZO,">>$filename");
		print DZO "70 :::: $accid\n";
		close(DZO);
	};
	
	$foundfound=0;
	$filename="event70load.list";
	open DATA1, $filename or $notload=1;
	while (<DATA1>){
	chomp;
	($zeventid, $zaccid) = split(/ :::: /);

			if($zaccid eq $accid){
				$foundfound = 1;
			};

	};	


	if(!$foundfound){
		$filename="event70load.list";
		open(DZO,">>$filename");
		print DZO "$email :::: $username :::: $accid :::: $codecode\n";
		close(DZO);
	};
	
};

};

	
	
	