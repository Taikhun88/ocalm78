<?php

namespace App\Command;

use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'app:resetBdd',
    description: 'Drop the database then recreate a new one and fill it with fixtures',
)]
class ResetBddCommand extends Command
{
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $command = $this->getApplication()->find('doctrine:database:d');

        $arrayInputDdd = new ArrayInput(['--force' => true]);
        $returnCodeDdd = $command->run($arrayInputDdd, $output);
        if ($returnCodeDdd == 0) {
            $io->success('L\'étape doctrine database drop a bien supprimé la base de données');            
        } else {
            $io->warning('L\'étape doctrine database drop n\'a pas pu supprimer la base de données car elle n\'existe probablement pas au moment de l\'exécution'); 
        }

        $command = $this->getApplication()->find('doctrine:database:c');
        $arrayInputDdc = new ArrayInput([]);
        $returnCodeDdc = $command->run($arrayInputDdc, $output);
        if ($returnCodeDdc == 0) {
            $io->success('L\'étape doctrine database create a bien créé la base de données');            
        }      

        $command = $this->getApplication()->find('d:s:u');
        $arrayInputDsu = new ArrayInput(['--force' => true]);
        $returnCodeDsu = $command->run($arrayInputDsu, $output);
        if ($returnCodeDsu == 0) {
            $io->success('L\'étape doctrine schema update a bien créé les tables');            
        }       
        
        $command = $this->getApplication()->find('d:f:l');
        $arrayInputDfl = new ArrayInput([]);
        $returnCodeDfl = $command->run($arrayInputDfl, $output);
        if ($returnCodeDfl == 0) {
            $io->success('L\'étape doctrine fixtures load a bien créé les données de vos tables existantes');            
        }       

        return Command::SUCCESS;
    }
}
